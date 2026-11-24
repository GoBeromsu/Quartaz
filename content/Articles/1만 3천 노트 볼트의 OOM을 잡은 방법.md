---
aliases: []
date_created: 2026-11-25
date_modified: 2026-11-25
permalink: open-connections-oom-13k-notes
tags:
  - obsidian
  - obsidian-plugin
  - electron
  - sqlite
  - memory
  - troubleshooting
title: "1만 3천 노트 볼트의 OOM을 잡은 방법"
---

[[Obsidian 플러그인 - Open Connections|Open Connections]]는 노트를 embedding으로 바꿔 의미가 가까운 노트를 찾아 주는 Obsidian 플러그인입니다. 4096차원 모델(Upstage Solar)로 1만 3천 노트를 색인하면 `RangeError: Array buffer allocation failed`가 났습니다. 2026년 3월 23일과 24일, 이틀에 걸쳐 메모리 구조를 세 단계로 고치고 저장소를 sql.js에서 Node 내장 `node:sqlite`로 옮겨 이 문제를 없앴습니다.

## 원인: 저장할 때마다 DB 전체를 메모리에 복사했다

당시 embedding은 sql.js(WASM SQLite)에 저장했습니다. sql.js로 저장하려면 `db.export()`로 DB 전체를 `Uint8Array` 하나로 직렬화해야 합니다. 저장 한 번에 WASM 안의 DB, export 결과, 거기서 다시 만든 `Buffer.from` 사본이 동시에 메모리에 올라가 peak가 3배가 됐습니다. 4096차원 모델에 1만 3천 노트면 이 peak가 약 624MB를 넘었고, ArrayBuffer 할당이 실패했습니다([dae1c61](https://github.com/GoBeromsu/obsidian-open-connections/commit/dae1c61c9c)).

저장 외에도 메모리를 낭비하는 곳이 두 군데 더 있었습니다.

- 모든 벡터가 저장 후에도 메모리에 남아 있었습니다.
- 벡터를 `number[]`로 들고 있어 원소 하나에 8바이트를 썼습니다.

## 1단계: 메모리 구조를 세 단계로 고쳤다

[PR #35](https://github.com/GoBeromsu/obsidian-open-connections/pull/35)에서 세 가지를 바꿨습니다.

**UI의 O(n) 스캔 제거.** UI는 embedding된 항목 수를 세려고 `.all.filter(b => b.vec).length`로 전체를 훑었습니다. PR에 기록한 측정치로 분당 88MB의 GC 부담이었습니다. 이를 이벤트가 올 때만 다시 세는 `recomputeEmbeddedCount()`로 바꿨습니다. 증감 카운터도 검토했지만, 카운터를 거치지 않고 상태를 바꾸는 경로가 5개 이상 있어 어긋날 수밖에 없었기 때문에 버렸습니다.

**저장한 벡터는 메모리에서 내린다.** SQLite에 저장이 끝난 entity는 벡터를 비우고, 필요할 때 다시 읽습니다.

```ts
evictVec(): void {
  const model_key = this.embed_model_key;
  if (this.data.embeddings[model_key]) {
    this.data.embeddings[model_key].vec = [];
  }
}
```

```ts
// Evict vectors for entities persisted in this save
const toEvict = pendingEviction.splice(0);
for (const entity of toEvict) {
  entity.evictVec?.();
}
```

후속 커밋 [f92620d](https://github.com/GoBeromsu/obsidian-open-connections/commit/f92620d220)에서는 `nearest()`가 벡터를 쓰기 전에 `ensure_entity_vector()`를 호출하게 해, 내려 둔 벡터를 읽다 죽는 경로를 막았습니다.

**`number[]` 대신 `Float32Array`.** 원소당 8바이트를 4바이트로 줄였습니다.

```diff
-function vecToBlob(vec: number[]): Uint8Array {
-  const f32 = new Float32Array(vec);
+function vecToBlob(vec: number[] | Float32Array): Uint8Array {
+  const f32 = vec instanceof Float32Array ? vec : new Float32Array(vec);
   return new Uint8Array(f32.buffer);
```

테스트 208개가 통과했고, 제 볼트에서 블록 113,075개 중 86,878개를 색인하며 QA를 진행했습니다.

## 2단계: sql.js를 버렸다

먼저 sql.js 안에서 줄일 수 있는 것을 줄였습니다. `Buffer.from` 사본을 없애고, 변경이 없으면 autosave를 건너뛰는 dirty flag를 넣었습니다. 하지만 이 hotfix만으로는 peak가 여전히 2배, 약 416MB였고, 알려진 한계는 약 500MB였습니다. sql.js에는 증분 export API가 없어서 나눠 내보낼 수도 없었습니다. Float16 양자화도 기존 DB 포맷과 호환이 깨져서 버렸습니다.

결론은 `db.export()` 자체를 없애는 것이었습니다. 같은 인터페이스 뒤에 파일 기반 better-sqlite3 adapter를 넣고 WAL 모드를 켰습니다. 스키마가 같아 migration은 필요 없었습니다([dae1c61](https://github.com/GoBeromsu/obsidian-open-connections/commit/dae1c61c9c), [PR #46](https://github.com/GoBeromsu/obsidian-open-connections/pull/46)). PR \#46은 70줄을 더하고 2,015줄을 지웠습니다.

## 3단계: native module까지 없앴다

better-sqlite3는 native module입니다. Electron에 맞춰 다시 빌드하는 파이프라인이 필요하고, 약 20MB의 바이너리가 따라오며, ABI mismatch 에러가 생깁니다. 같은 날 [998247b](https://github.com/GoBeromsu/obsidian-open-connections/commit/998247b203)에서 이를 Node 내장 `node:sqlite`의 `DatabaseSync`로 바꿨습니다. Obsidian Electron 39.8.3(Node 22.22.1)에서 API가 동작하는 것을 확인했고, 이 커밋으로 이슈 3건([#44](https://github.com/GoBeromsu/obsidian-open-connections/issues/44), [#45](https://github.com/GoBeromsu/obsidian-open-connections/issues/45), [#47](https://github.com/GoBeromsu/obsidian-open-connections/issues/47))을 닫았습니다. sql.js로 되돌리는 선택지는 4096차원 벡터 1,000개에서 OOM이 재발해 버렸습니다.

## 그 뒤: 사용자 제보로 찾은 두 문제

OOM 이후에도 사용자 제보가 이어졌습니다. 두 건을 원인부터 고쳤습니다.

- **로컬 embedding 중 Obsidian freeze** ([#89](https://github.com/GoBeromsu/obsidian-open-connections/issues/89)). sandbox iframe에 `allow-same-origin`이 없어 `window.caches`가 실패했고, 재시도가 연쇄되며 Obsidian이 멈췄습니다. 사용자에게는 엉뚱한 quota 에러가 보였습니다. 파고들어 보니 single-flight가 아닌 모델 로드에 `embed_batch`가 동시에 들어오면서 iframe이 다시 생성됐고, 그때마다 69MB 모델 로드가 쌓였습니다. [PR #109](https://github.com/GoBeromsu/obsidian-open-connections/pull/109)에서 로컬 embedding을 Web Worker로 옮기고, 모델 로드를 single-flight로, batch를 직렬로 바꿨습니다. WASM thread는 4개로 제한하고, crash 시 exponential backoff를 넣었습니다. 노트 365개(블록 약 3,700개)에서 main thread 최대 지연 5ms, heap은 약 30MB로 평탄했습니다.
- **색인이 50개에서 멈춤** ([#93](https://github.com/GoBeromsu/obsidian-open-connections/issues/93)). 노트 1,779개 볼트에서 색인이 약 50개에서 멈췄습니다. 시작 시 백그라운드 import가 `STARTUP_BACKGROUND_IMPORT_LIMIT`(50)에서 끝나고 있었습니다. 제보자가 보낸 콘솔 출력이 원인을 가리켰습니다. [PR #112](https://github.com/GoBeromsu/obsidian-open-connections/pull/112)에서 chunk 단위로 끝까지 반복하고, 시도한 key를 추적하게 바꿨습니다.

## 이것이 증명하는 것

OOM을 "메모리를 아끼자"로 풀지 않았습니다. 할당이 어디서 몇 배로 일어나는지 계산했고, 그 계산이 hotfix로는 2배 peak가 남는다고 말해 주었기 때문에 저장 엔진을 바꿨습니다. 버린 대안과 그 이유는 커밋 메시지에 남겨 두었습니다. 현재 Open Connections는 Obsidian 커뮤니티 플러그인 통계 기준 누적 다운로드 5,031회입니다(2026-11-25 기준).
