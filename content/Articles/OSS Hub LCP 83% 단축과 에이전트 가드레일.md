---
aliases: []
date_created: 2026-11-25
date_modified: 2026-11-25
permalink: oss-hub-lcp-and-agent-guardrails
tags:
  - nextjs
  - performance
  - lighthouse
  - ci-cd
  - ai-agent
title: "OSS Hub LCP 83% 단축과 에이전트 가드레일"
---

[OSS Hub](https://jnu-oss-hub.com)의 랭킹 페이지 LCP를 14.2초에서 2.4초로, 83% 줄였습니다. 프로그램 목록은 19.1초에서 5.3초로 72%, 표지 이미지는 564KB에서 17KB로 97% 줄었습니다. 같은 날 push 전 훅과 CI가 API 계약과 쿼리 수를 같은 entry point로 검사하게 만들었습니다. 저는 이 프로젝트의 PM이자 개발자이고, 이 프로젝트에서는 AI agent가 코드를 쓰고 owner 계정으로 push합니다. 이 글은 agent에게 "빠르게 만들어"가 아니라 숫자로 된 기준을 준 방법에 관한 기록입니다.

## 문제: agent는 기준이 없으면 기존 코드를 복제한다

agent는 기존 코드를 모방합니다. 안티패턴 하나가 코드베이스에 들어오면 새 코드에도 그대로 퍼지고, 텍스트 지시만으로는 이를 막기 어려웠습니다. 성능도 마찬가지입니다. "느리다"는 지시는 개선 기준이 되지 못합니다. 그래서 두 가지를 측정 가능한 기준으로 바꿨습니다.

- **화면**: Lighthouse 모바일, 3회 측정의 중앙값
- **API**: 같은 경로를 데이터 1배와 10배에서 호출해 쿼리 수를 비교

## 화면: Next.js 기본기로 LCP를 줄였다

측정 조건은 로컬 production build, Lighthouse 모바일 3회 중앙값, 요청마다 25ms 지연입니다. [PR #1917](https://github.com/JNU-SWCU/oss-hub/pull/1917)에서 한 일은 화려하지 않습니다.

- 표지는 `next/image`로 카드 크기에 맞춘 WebP를 내려보내고, 첫 카드만 priority로 불러옵니다.
- 표지 응답에 1년 immutable cache를 붙였습니다. 재업로드하면 표지 ID가 바뀌므로 안전합니다.
- `/ranking`과 `/`의 첫 화면 문구를 server component에서 렌더링합니다.
- 2MB짜리 Pretendard 단일 파일을 unicode-range 조각(최대 44KB)으로 바꾸고, 쓰지 않던 Comic Neue를 제거했습니다. 폰트 전송량은 0.26~0.38MB가 됐습니다.
- `@next/next/no-img-element`를 error로 올려 `<img>`가 다시 들어오지 못하게 했습니다.

| 경로 | LCP 전 | LCP 후 |
| --- | --- | --- |
| `/ranking` | 14.2s | 2.4s (−83%) |
| `/programs` | 19.1s | 5.3s (−72%) |
| `/` | 2.2s | 2.3s |

남은 일도 PR에 적어 두었습니다. `/programs`는 아직 목표치 2.5초를 넘고, `/ranking`의 CLS는 0.13입니다.

## API: 데이터가 10배가 돼도 쿼리 수는 그대로여야 한다

N+1은 데이터가 적을 때 보이지 않습니다. [Issue #1909](https://github.com/JNU-SWCU/oss-hub/issues/1909)에서 격리된 통합 DB에 합성 데이터를 1배와 10배로 넣고, AppModule에 실제 HTTP 요청을 보내 경로별 쿼리 수를 셌습니다. 21개 요청 모두 1배와 10배의 쿼리 수가 같았고, 3번 반복해도 결과가 같았습니다.

게이트가 진짜 잡는지도 확인했습니다. 항목마다 쿼리를 하나씩 일부러 끼워 넣자 프로그램 목록의 쿼리 수가 9에서 63으로 늘었고, 게이트가 이를 잡아냈습니다.

[PR #1919](https://github.com/JNU-SWCU/oss-hub/pull/1919)에서는 모든 조회에 상한을 두었습니다. limit+1개를 읽어 초과하면 에러를 냅니다. 루프 안 `await` 54곳을 전부 제거했고, 랭킹과 인사이트 집계는 SQL로 옮겼습니다.

## 가드레일: push 전과 CI가 같은 명령을 돈다

[PR #1913](https://github.com/JNU-SWCU/oss-hub/pull/1913) 이전의 pre-push 훅은 `pnpm format:check` 한 줄이었습니다. 지금은 이렇습니다.

```bash
#!/usr/bin/env bash
pnpm format:check </dev/null || exit $?
node verify/index.mjs scoped --pre-push "$@" || exit $?
```

`scoped`는 바뀐 파일 범위를 보고 필요한 검사만 고릅니다.

- **항상**: gitleaks
- **backend 변경**: OpenAPI를 덤프해 신뢰할 수 있는 기준 커밋과 oasdiff로 비교합니다. WARN 이상이면 막습니다. 의도한 breaking change는 `API-Break-Approved` trailer와 CODEOWNERS 승인이 있어야 통과합니다.
- **repository·service·prisma 변경**: Prisma query lint(`take` 없는 `findMany`는 `LINT.NO_LIMIT`)와 21개 경로의 1배/10배 쿼리 수 게이트
- `no-await-in-loop` lint

CI의 `verify` job도 같은 entry point를 호출하므로 로컬과 CI가 같은 규칙을 봅니다. 문제를 로컬에서 먼저 잡으니 CI 비용도 줄었습니다.

Lighthouse는 흔들리는 측정이라 push를 막는 조건에서 뺐습니다. 대신 `pnpm verify:full`을 수동으로 돌리면 production을 대상으로 LCP 2.5초, CLS 0.1, performance 90을 검사하고, 미달하면 실패합니다. LCP 기준값에는 [web.dev](https://web.dev/articles/lcp#what-is-a-good-lcp-score) 출처를 붙여 두었습니다.

## 예외 목록을 지키는 대신 없앴다

agent가 owner 계정으로 push하기 때문에 main에는 필수 리뷰가 없습니다. agent가 allowlist에 항목을 슬쩍 추가하면 규칙이 무력화됩니다. [PR #1914](https://github.com/JNU-SWCU/oss-hub/pull/1914)는 allowlist가 늘거나 임계값이 느슨해지면 `allowlist-growth`로 실패시키고, `Allowlist-Approved: #n` trailer가 있을 때만 통과시켰습니다.

이후 [PR #1919](https://github.com/JNU-SWCU/oss-hub/pull/1919)가 위반 54곳을 모두 고치면서 allowlist와 trailer 검사를 통째로 지웠습니다. 예외를 관리하는 장치보다 예외가 없는 상태가 더 단단합니다.

같은 방식은 이전부터 쌓여 왔습니다. [PR #193](https://github.com/JNU-SWCU/oss-hub/pull/193)은 DTO 요청·응답 이름 규칙을 commit 전에 강제했고, [PR #1636](https://github.com/JNU-SWCU/oss-hub/pull/1636)은 응답 DTO를 `static from()` 형태로 통일하고 규칙 lint 5개를 추가했습니다. 이때 dto-json snapshot 188개가 리팩터링 전후로 동일했습니다. [PR #1975](https://github.com/JNU-SWCU/oss-hub/pull/1975)는 참조되지 않는 페이지와 중복 화면 같은 page route 위반을 CI와 pre-push에서 막습니다.

## 이것이 증명하는 것

agent에게 필요한 건 더 긴 지시문이 아니라 실패하는 검사입니다. 기준을 숫자로 정의하고, 그 숫자를 push 전에 강제하면 agent가 만든 코드도 같은 기준을 통과합니다. 아직 남은 일도 있습니다. 성능 예산은 아직 모든 PR에서 자동으로 돌지 않습니다([Issue #1901](https://github.com/JNU-SWCU/oss-hub/issues/1901)).
