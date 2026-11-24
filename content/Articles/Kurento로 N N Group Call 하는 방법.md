---
aliases: []
date_created: 2022-07-27
date_modified: 2022-07-27
permalink: kurento-group-call
tags:
  - kurento
  - webrtc
title: "Kurento로 N:N Group Call 하는 방법"
---

- Client는 Kurento Utils
- Server는 Kurento Client

# Group Call wtih Kurento- Java

Node.js로 어플리케이션을 개발하는 중인데 Webrtc를 사용하는 것이 처음이다보니, Docs에 있는 예제를 읽고 먼저 이해하는 것이 먼저란 생각이 들어서 해당 글을 쓰게 되었다. 개념도 부족하고 이해도 부족하기에 일단 블로그 포스팅하고 점점 채워 나가야겠다

## 선행 개념

- 방이란?
  - 각 방은 다른 방과 격리된 자체 파이프라인을 생성한다
  - 특정 방에 접속한 클라이언트는 같은 방에 있는 클라이언트와만 미디어 교환이 가능하다

- 클라이언트
  - 각 클라이언트는 자체 미디어를 보내고 차례로 다른 모든 참가자로부터 미디어를 받는다.
  - 이는 각 방의 총 n*n 개의 WebRTC End Point가 있음을 의미한다.
  - n은 클라이언트의 수이다.

- 새 클라이언트가 방에 들어오면 새 webrtc가 생성되고 서버에서 미디어를 수신하도록 협상한다
  - 방에 원래 있던 사용자들에게는 새 사용자가 연결되었음을 알린다
  - 모든 참가자는 서버에 새 참가자의 미디어를 수신하도록 요청한다
  - 새로 들어온 사람은 차례로 연결된 모든 참가자의 목록을 가져온다
    - 이를 위해 서버에 방에 있는 모든 현재 클라이언트로부터 미디어를 수신하도록 요청한다.
- 클라이언트가 방을 나가는 상황
  - 클라이언트가 방을 나갈 때 서버에게 이 사실을 알린다.
  - 방을 나가는 클라이언트 측에서 서버에 남는 클라이언트과 관련된 모든 미디어 요소를 취소하도록 요청한다.

- 통신을 위해서는 2 개의 Web Socket이 필요하다
  1. 클라이언트와 응용 프로그램 서버 사이의 Web Socket이 생성된다
     - 사용자 지정 신호 프로토콜을 구현하기 위해 만들어진다.
  2. Kurento Client와 Kurento Media Server 간의 통신을 위한 Web Socket이 생성된다.
     - 통신은 Kurento 프로토콜을 사용하여 이루어진다.

## Application Server Logic

서버 로직의 핵심은 GroupCallApp 클래스이다. KurentoClient는 해당 클래스에서 Spring Bean으로 인스턴스화 된다.
해당  Bean은 애플리케이션에 미디어 기능을 추가하는데 사용되는 Kurento 미디어 파이프라인을 만드는데 사용된다.

Kurento 클라이언트가 인스턴스화 되면 Kurento 미디어 서버와 통신하고 멀티 미디어 기능을 제어할 준비가 된 것이다.

- Web Socket의 용도
  - 요청 및 응답을 통해 클라이언트와 애플리케이션 서버 간의 통신에 사용된다
  - 해당 클래스에서는 Websocket 요청을 처리하기 위해 WebSocketConfigurer를 WebSocketHnadler에 등록한다
    - WebSocket의 요청을 처리하기 위해 Group Call 경로가 필요하다
- Call Handler 클래스의 용도
  - TextWebSocket Handler로 WebSocket 요청을 처리하기 위해 구현된다.
  - 해당 클래스의 핵심은 handleTextMesage이다.
    - 요청에 대한 작업을 구현하고 Web Socket을 통해 응답을 반환한다.
    - 즉 이전 시퀀스 다이어그램에서 설명한 시그널링 프로토콜의 서버 부분을 구현하다
  - Text로 들어오는 메시지들을 확인해서 switch 절에서 명령을 정리한다.

## Client Logic

- 서버에 생성된 WebSocket 서비스를 호출하기 위해 Javascript가 사용되었다
- Kurento-util.js는 Kurento Javascript 라이브러리를 사용하여 WebRTC와 서버 간의 상호 작용을 단순화한다.
  - 브라우저의 차이를 위해 사용되는 adapter.js에 의존한다
- 클라이언트 측에서는 json 신호 프로토콜을 이용해 메세지를 생성한다.
  - Kurento-utils.js가 이 때에 사용된다.

# Reference

- [Kurento Group Call - Java](https://doc-kurento.readthedocs.io/en/6.16.0/tutorials/java/tutorial-groupcall.html)

---

*2022-07-27에 [GitHub Pages](https://goberomsu.github.io/2022/07/27/kurentoGroupCall/)에 쓴 글을 옮겼습니다.*
