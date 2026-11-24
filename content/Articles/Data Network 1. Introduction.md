---
aliases: []
date_created: 2022-04-13
date_modified: 2022-04-13
permalink: til-data-network-introduction
tags:
  - network
title: "Data Network 1. Introduction"
---
## what is internet/protocol

- 인터넷의 구성 요소
  - host
    - 컴퓨팅 디바이스들, 종단 시스템
  - Packet switches
    - router, switches
  - Communication links
    - 각 노드를 연결하는 것들 ; 전선, 위성, 라디오 등등
    - 전송 비율(bandwidth) : 얼마나 보낼 수 있냐?
      - 주파수가 커질수록 데이터를 많이 보냄
      - 데이터와 1 : 1 비율로 전송 되지 않음
  - Networks
    - 라우터, device들이 모인 집합체
  - Internet
    - 네트워크들의 집합 : network of network : ISP(인터넷 사업자 간의 상호 연결이다
  - 프로토콜 : 데이터를 주고 받는 절차
    - 제어 전송, 메세지 수신
  - Internet standards
    - RFC (국가 표준)
    - IETF (민간 표준) : 많이 쓰는 놈이 표준이다
- 인터넷 서비스 관점
  - 서비스 제공 인프라
  - 분산된 프로그램들의 인터페이스 역할
- 프로토콜
  - 네트워크에서 엔티티 간의 메세지 전송과 수신의 형식과 순서를 정의한다
  - 메세지 전송, 수신에 대해 취할 조치 정의

## Network edge

- host는 클라이언트와 서버가 있다
- wired, wireless로 물리 장치에서 네트워크에 접근할 수 있다.
  - 송전탑, ISP, 공유기
- Network core
  - 상호 연결된 라우터
  - network of network, 인터넷을 말한다.
- 어떻게 각각의 종단 시스템을 라우터에 연결할 수 있는가?
  - 라우터를 거쳐야 인터넷에 접근 가능
  - residential access nets(가정이나 주택 등) - wired
  - institutional access networks(학교나 회사) - wired
  - mobile access networks (Wifi,4G,5G) - wireless

### Access networks

- cable-based access
  - DSL과 다르게 TV 데이터가 보내진다.
  - 높은 주파수와 낮은 주파수를 섞어 보내니까, 수신 측에서는 분리가 가능하다
    - 텔레지번, 인터넷 전화등 다양한 신호를 섞어 보낼 수 있다.
- Hybrid fiber coax (HFC)
  - DSL과 다르게 전용 회선이 아니라 공유 회선을 사용함
  - Asymmetric하다
    - 두 스트림의 속도가 다르다.
  - 공유 회선에서 다른 주파수로 데이터를 전송함
    - 도청이 가능하다
- Digital Subscriber  Line(DSL)
  - DSL 모뎀은 컴퓨터의 디지털 신호를 아날로그 신호로 변환
  - 전화 선을 그대로 이용하는데 대신에 주파수를 다르게 해서 보냄으로서 기존의 것을 그대로 사용할 수 있게 한거지
  - Splitter는 DSL 모뎀을 거쳐 온 컴퓨터 데이터와 전화의 음성을 서로 다른 주파수로 DSLAM으로 보낸다
  - 역으로 DSLAM으로부터 받은 데이터를 음성과 분리한다.
  - Downstream의 전송률이 높도록 설계 되어 있음
    - 업로드보단 다운로드를 많이해서 그럼
    - 둘의 스트림 속도가 달라서 asymmetric(비동기)라고도 한다.
- 요즘은 DSL 모뎀은 이미 박혀 있고 라우터, 공유기 방화벽 거쳐서 연결되어 있음

### Wireless access networks

- 액세스 포인트에 따ㅓ라 wireless 네트워크를 두 가지로 분류한다
  - Wlan(wireless area networks)
    - 좁은 거리(100ft) 내외에서 사용
    - 개인, 기관 등에서 사용한다.
  - Wid-area celluar access entworks
    - 10km 내외에서 가능
    - mobile, cellular netork 등에서 사용

### Etc

- Enterprise networks
  - 회사나 대학교 등등
  - wired와 wireless가 여러 개 연결 되어 있음
- Data center networks
  - 여러 서버와 인터넷에 동시 연결되어 있음
  - 높은 대역폭대로 연결되어 있다.

### Host : sends packets of data

- 호스트들은 패킷(데이터)를 주고 받는다
- 패킷의 길이를 L, 전송 비율을 R이라 한다면 전송 지연 시간을 알 수 있다.
![image](https://user-images.githubusercontent.com/37897508/162451953-0e976998-2cc8-42c0-b5b3-aede190e50cb.png)

## Links : physical media : 물리적 연결

- 통신에서 정보를 저장하거나 전송하는데 사용되는 물리적 물질
- bit
  - 송/수신기 사이에서의 전파 단위 정도라 생각하도록
- physical link
  - 송/순신기 사이의 유선 연결
- guided media(유선)
  - 구리, 섬유, coax 등 방해를 받는 신호
- unguided media (무선)
  - 비교적 자유롭게 전파되는 신호
- Twisted pair
  - 구리선 2 개 꼬아 놓은 것
- Coaxial cable(동축 케이블)
  - 구리를 꼬아서 만든거임
  - 다양한 주파수 채널을 한 케이블로 보냄
  - 꼬는 이유가 전압 차이를 이용해서 외부 노이즈를 줄이려 하는거임
- Fiber optic cable
  - 이상적인 광섬유
  - 신호 감쇄나 오류가 적음
    - repeater들이 떨어져 있어 전자기성 간섭에 영향 안받음
  - 속도가 매우 빠름
- Wireless radio
  - 전자기 스펙트럼으로 신호 전달
  - 반이중 전송 방식을 사용한다
  - 환경적 요인에게 영향을 받는다
    - 반사, 장애물에 가림
    - 인터페이스 노이즈
    - 종류
      - 와이파이, 블루투스, 위성 등등이 있음

## Network core

- Network core
  - 상호 연결된 라우터들의 덩어리
  - 핵심 기능 : packet switching
    - 호스트가 애플리케이션 계층 메세지를 패킷으로 분할 후 라우터를 통해 목적지에 전달
- Network core의 핵심 기능
  - Fowarding(Switching)
  - Routing

## Packet-switching

- 패킷을 다음 링크로 전송하기 위한 전략!

- store and forward
  - 패킷을 다음 링크로 전송하기 전에 라우터에 저장한뒤 전달하는 방식
  - 무조건 다음 링크에 전송 되기 전에 라우터에 도착해야한다
    - 전송 딜레이 계산법 기억하라!
- queing
  - 패킷이 들어오는 속도가 나가는 속도보다 빨라버림
  - 패킷이 계속 링크에 전송 될 때까지 기다림
  - 라우터의 메모리 버퍼를 넘어가면 그냥 초기화

## Circuit switching

- circuit switching
  - 목적지와 도착지가 예약 되어 있다.
  - 전용 회선을 이용한다.(guaranteed)
    - 즉 내가 사용하고 있으면 다른 사람은 사용하지 못한다
  - 전화에서 주로 사용된다
- circuit-switching 구현 방법은 2 가지이다
  - FDM : 주파수 단위로 쪼갠다
    - 주파수에 미리 사용자를 지정해두는 것이다.
  - TDM : 시간 단위로 쪼갠다
    - 시분할은 매 주기마다 사용자들이 돌아가며 데이터를 보낸다.
    - 아날로그 방식에서는 구현이 불가능하다

## Packet switching VS Circuit switching

- 전화처럼 데이터가 계속해서 이어지는 상황이라면 Circuit!
  - 하지만 대화를 하지 않는 등의 상황에서는 자원이 낭비 된다고 볼 수 있음
  - 두 클라이언트가 하나의 링크를 독점하고 있기 때문에 다른 클라이언트들도 통신하려면 계속 링크를 만들어야한다.
  - 데이터의 loss와 delay가 없는건 장점이다
- 패킷 스위칭은 필요에 따라 링크를 할당한다.
  - 효율적으로 링크들을 사용할 수 있다.
  - 데이터를 쪼개었다가 합칠 경우 오버헤드가 발생한다.
  - 데이터의 혼잡 제어가 필요하다
  - bursty한 데이터에 좋다

---

*2022-04-13에 [GitHub SW-Mentoring](https://github.com/GoBeromsu/SW-Mentoring/blob/main/berom/dataNetwork/1.Introduction.md)에 쓴 글을 옮겼습니다.*
