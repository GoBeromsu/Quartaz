---
aliases: []
date_created: 2026-11-25
date_modified: 2026-11-25
permalink: xm32-mcp-osc-emulator
tags:
  - x32
  - osc
  - mcp
  - sound-engineering
  - testing
title: "비공식 OSC 문서를 테스트로 바꿔 만든 X32 MCP 서버"
---

Behringer X32/M32 디지털 믹서를 AI assistant가 조작하게 하는 MCP 서버 [x-m32-mcp-server](https://www.npmjs.com/package/x-m32-mcp-server)를 만들었습니다. 입력 32채널, 버스 16개, FX 랙 8개, main과 monitor 출력을 도구 25개로 다룹니다. npm 누적 다운로드는 1,834회입니다(2026-11-25, npm downloads API 기준). 믹서 없이 에뮬레이터로 검증했고, 2026년 3월 실제 X32에 연결해 테스트를 마쳤습니다.

## 문제: 근거가 비공식 문서뿐이다

음향은 대학 밴드에서 시작한 제 취미입니다. X32는 UDP 10023 포트에서 OSC 메시지로 제어합니다. 제가 근거로 삼은 것은 OSC 프로토콜을 리버스 엔지니어링해 정리한 비공식 문서들이었습니다. 문서가 틀렸거나 제가 잘못 읽었다면 도구는 "성공"을 반환하면서 믹서에는 아무 일도 일어나지 않습니다. 라이브 현장에서는 이런 조용한 실패가 가장 다루기 어렵습니다.

그래서 원칙을 하나 세웠습니다. 문서에서 가져온 주소는 가설로 취급하고, 에뮬레이터에 쓰고 다시 읽어 확인한 것만 믿습니다.

## 설계: 주소 매핑을 한 곳에 모았다

OSC 패킷 인코딩은 직접 구현하지 않고 [`osc`](https://www.npmjs.com/package/osc) 패키지의 `UDPPort`에 맡겼습니다. 제가 집중한 부분은 문서의 주소 체계를 코드로 옮기는 일입니다. 채널 번호는 두 자리로 채워 `/ch/01/...` 형태가 되고, 범위 검사는 주소를 만드는 곳에서 합니다.

```ts
async setChannelParameter(channel: number, param: string, value: unknown): Promise<void> {
    if (channel < 1 || channel > 32) {
        throw new Error('Channel must be between 1 and 32');
    }
    const ch = channel.toString().padStart(2, '0');
    await this.setParameter(`/ch/${ch}/${param}`, value);
}
```

버스는 `/bus/01/...`, FX는 `/fx/1/par/01`, 콘솔 정보는 `/info`와 `/status`입니다. 요청은 보낸 주소를 key로 대기열에 넣고, 같은 주소로 들어온 응답을 그 요청의 결과로 처리합니다. 5초 안에 응답이 없으면 timeout 에러를 냅니다. 그 밖의 파라미터는 `get_parameter`와 `set_parameter`로 주소를 직접 지정해 읽고 씁니다.

fader 값은 0.0~1.0 선형 값입니다. 사람은 dB로 말하므로, dB를 fader 값으로 바꾸는 변환기를 구간별 근사 곡선으로 만들었습니다. unity인 0 dB는 0.75입니다. 코드 주석에도 X32 fader 동작에 기반한 근사라고 적어 두었습니다.

## 버그: 성공을 반환하지만 아무것도 보내지 않던 solo

이 원칙이 왜 필요한지 보여 주는 버그가 있었습니다. 3.2.1까지 `channel_solo`는 OSC 메시지를 보내지 않고 `Channel 1 soloed` 같은 성공 문자열만 반환했습니다. 코드에는 이런 주석이 남아 있었습니다.

```ts
// Note: X32 solo is controlled via /-stat/solosw/XX, not channel parameter
// For now, we'll use mix send as a workaround
```

solo는 채널 파라미터가 아니라 `/-stat/solosw/XX` 경로에 있습니다. 답을 알면서도 구현이 빠진 채 배포됐고, 사용자는 성공 메시지를 받았습니다. [9377269](https://github.com/GoBeromsu/XM32-MCP/commit/9377269ee3)에서 `setChannelSolo()`와 `getChannelSolo()`를 추가해 `/-stat/solosw/${ch}`에 실제로 쓰고 읽게 했고, 3.3.0으로 배포했습니다. 같은 커밋에서 MCP tool 계약 테스트(`mcp-contract.test.ts`)를 추가했습니다.

## 검증: 에뮬레이터에 쓰고, 원시 주소로 다시 읽는다

[b2d900a](https://github.com/GoBeromsu/XM32-MCP/commit/b2d900a842)에서 E2E 스크립트 `scripts/x32-e2e.ts`를 추가했습니다. 흐름은 이렇습니다.

1. X32 에뮬레이터를 `127.0.0.1:10023`에 띄우고, `/info` 응답이 올 때까지 기다립니다.
2. MCP client를 stdio로 서버에 붙이고, 등록된 도구 이름이 예상한 25개와 정확히 같은지 `deepStrictEqual`로 확인합니다.
3. 고수준 도구로 값을 쓴 뒤, `get_parameter`로 원시 OSC 주소를 읽어 값이 실제로 바뀌었는지 확인합니다.

```ts
const setNameText = await callToolText(client, 'channel_set_name', { channel: 1, name: 'Lead Vox' });
assert.match(setNameText, /Set channel 1 name to "Lead Vox"/);
const channelNameText = await callToolText(client, 'get_parameter', { address: '/ch/01/config/name' });
assert.match(channelNameText, /\/ch\/01\/config\/name = "Lead Vox"/);
```

3번이 핵심입니다. 도구가 돌려주는 성공 메시지가 아니라 믹서 상태를 확인합니다. 채널 이름, 버스 fader(`/bus/01/mix/fader = 0.5`), FX 파라미터(`/fx/1/par/01 = 0.5`)를 이렇게 왕복으로 검증하고, dB 단위 볼륨, mute, preamp gain, EQ band 도구는 호출해 응답을 확인합니다.

이 검증을 통과한 뒤 2026년 3월 실제 X32에 연결해 테스트를 마쳤습니다.

## 이것이 증명하는 것

비공식 문서에 기대는 프로토콜이라도 확신을 가지고 배포할 수 있습니다. 조건은 하나입니다. 문서를 그대로 믿지 말고, 문서에서 나온 주소를 상태를 다시 읽는 테스트로 바꾸는 것입니다. solo 버그는 성공 메시지만 확인하는 테스트로는 절대 잡히지 않습니다. 소스는 [GitHub](https://github.com/GoBeromsu/XM32-MCP)에 있습니다.
