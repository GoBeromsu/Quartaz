---
aliases: []
date_created: 2022-07-22
date_modified: 2022-07-22
permalink: what-is-webrtc
tags:
  - webrtc
title: "Web RTC란?"
---

# Web RTC란?

Web RTC는 드라이버나 플러그인 설치 없이 웹 브라우저 간 P2P 연결을 통해 데이터 교환을 가능하게 하는 기술입니다.
Web RTC의 핵심을 꼽으라면 저는 시그널링을 이야기할 것입니다
브라우저 간 시그널링을 통해 별도의 중간자를 거치지 않고 P2P 연결이 가능해지기 때문입니다.
즉 중개 서버가 없기 때문에 빠른 속도도 보장되고, HTTPS가 강제되기 때문에 중간자 공격으로부터 보호도 됩니다.

그렇다면 브라우저는 여러 개인듯 브라우저 호환성은 괜찮은가? 의문이 생깁니다
Web RTC는 구글이 주도한 오픈소스 프로젝트 기반 웹 표준이라 크롬과 호환성이 높습니다.
파이어폭스나 오페라 등도 WEebRTC 표준을 따르고 있죠. 하지마 애플 특유의 폐쇄성으로 WebKit 기반 브라우저라 WebRTC 지원은 하지만 호환성은 떨어집니다. 즉 다양한 플랫폼에 대한 표준화가 완전히 구현되지 않은 것입니다.

그래도 괜찮습니다. 이런 크로스 브라우징 이슈를 해결하기 위해서 adapter.js 라이브러리가 존재합니다.

## Peer to Peer 연결 절차

1. 각 브라우저가 P2P 커뮤니케이션에 동의
2. 서로의 주소를 가져옴
3. 보안 사항 및 방화벽 우회
   일반적인 컴퓨터에는 공인 IP가 할당되어 있지 않습니다. 그 이유는 방호벽이나 NAT, 또는 DHCP 때문입니다
   그래서 단순히 공인 IP를 알아낸다해서 특정한 사용자를 가리 킬 수 없습니다
   해당 네트워크 내에서의 사설 IP 주소까지 알아내야하죠
   라우터 등을 통과해서 연결할 방법을 찾는 과정을 NAT 트래버셜이라고 합니다.

    이는 STUN 서버에 의해 이루어집니다. STUN은 단말이 자신의 공인 IP 주소와 포트를 확인하는 과정에 대한 프로콜입니다. 즉 WebRTC 연결을 시작하기 전 STUN 서버를 향해 요청을 보내면 STUN 서버는 NAT 뒷 단의 피어들을 서로 연결할 수 있도록 공인 IP와 포트를 찾아줍니다.

    최후의 수단으로는 TURN 방식도 잇습니다.
4. 멀티미디어 데이터를 실시간 교환

- 시그널링이란

## ICE와 Canddidate

- 여태껏 이야기한 STUN, TURN 서버를 이용해 획득했던 IP 주소와 프로토콜, 포트의 조합으로 구성된 연결이 가능한 네트워크 주소들을 후보라 부릅니다
  - 후보들을 수집합면 일반적으로 3개의 주소를 얻게 된다
    - 자신의 사설 IP와 포트 넘버
    - 자신의 공인 IP와 포트 넘버 (STUN, TURN 서버로부터 획등 가능)
    - TURN 서버의 IP와 포트 넘버(TURN 서버로부터 획득 가능)

위의 과정은 모두 ICE(Interactive Connectivity Estabilishment)라는 프레임워크 위에서 이루어집니다.
두 개의 단말이 P2P 연결을 가능하게 하도록 최적의 경로를 찾아주는 프레임워크이다.

## SDP(Session Description Protocol)

- WebRTC에서  스트리밍 미디어의 해상도나 형식, 코덱 등의 멀티미디어 컨텐츠의 초기 인수를 설명하기 위해 채택한 프로토콜
- 제안 응답 모델을 가지고 있다
  - 어떤 피어가 미디어 스트림을 교환할 것을 제안하면, 상대방으로부터 응답이 오기를 기다린다.
  - 응답을 받으면 각자의 피어가 수집합 ICE 후보 중에서 최적의 경로를 결정하고 협상하는 프로세스 발생
  - 수집한 ICE 후보들로 패킷을 보내 가장 지연 시간이 적고 안정적인 경로를 찾는 것이다.
  - 최적의 ICE 후보가 선택되면 기본적으로 필요한 모든 메타 데이터와 IP 주소 및 포트, 미디어 정보가 피어 간 합의 가 완료된다.
  - 즉 P2P 연결이 완전히 설정되고 활성화 된 것이다. 

## Trickle ICE

- 일반적으로 각 피어는 ICE 후보들을 수집해서 그 목록을 완성한 후 한꺼번에 교환하게 된다.
- 하지만 이러한 방식은 SDP의 제안 응답 모델과 맛물리면서 단점으로 작용한다

후보들을 모으는데도 시간이 오래 걸리고 그 과정에서 네트워크 환경에 따라 지연이 걸릴 수 있다.
또한 한 쪽 피어의 ICE 후보 수집 작업이 완료되어야만 다른 피어가 ICE 후보를 모을 수 있어 비효율적이다.
이러한 비효율적인 후보 교환 작업을 병령 프로세스로 수행할 수 있게 만든 것이 바로 Trickle ICE이다.

## 시그널링 

RTCPeerConnection 통신에서 사용할 통신 규격을 교환하기 위해 두 장치의 제어 정보를 교환하는 과정을 의미합니다. WebRTC 연결 전까지의 과정입니다

즉 시그널링은 WebRTC 자체에서 지원하는 기능이 아닙다.

시그널링은 쉽게 말해서 약속을 잡는 것입니다. 시그널링 서버에서는 SDP와 ICE 프로토콜을 사용해 약속을 잡습니다.

## STUN 서버

STUN 서버도 약속을 잡는 것입니다.  STUN 서버는 어디서 만날래와 같은 약속을 잡는 서버입니다. 
즉 IP를 알아주는 서버인 것이죠

## Reference

- [SFU 방식 구현 && 서버 구현 과정](https://velog.io/@yerimii11/Project-%EB%82%98%EB%A7%8C%EC%9D%98-%EB%AC%B4%EA%B8%B0-%ED%9A%8C%EA%B3%A0-03.0703.12-D-71-5%EC%A3%BC%EC%B0%A8)
- [WebRTC 정보 모음집](http://john-home.iptime.org:8085/xe/index.php?mid=board_sKSz42&document_srl=1551)
- [Web RTC 개요부터 관련 개념까지](https://wormwlrm.github.io/2021/01/24/Introducing-WebRTC.html)
- [WebRTC API](https://developer.mozilla.org/ko/docs/Web/API/WebRTC_API)
- [RTCMultiConneciton](https://github.com/muaz-khan/RTCMultiConnection)
  - Sample Code 및 Demo가 많음
- [Kurento-mcu-server](https://github.com/mariogasparoni/kurento-mcu-webrtc)

---

*2022-07-22에 [GitHub Pages](https://goberomsu.github.io/2022/07/22/webRTC/)에 쓴 글을 옮겼습니다.*
