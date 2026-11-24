---
aliases: []
date_created: 2022-07-26
date_modified: 2022-07-26
permalink: docker-study
tags:
  - docker
title: "Docker 공부"
---

## Docker란 무엇인가?

- Docker는 Linux Container에 여러 기능을 추가함으로써 Application을 좀 더 쉽게 사용할 수 있게 만들어진 오픈소스 가상화 플랫폼
- Docker는 격리된 공간에 필요한 라이브러리, 실행파일만 담아놓고 사용하기 때문에 부담이 줄어든다.
- Docker는 컨테이너 생성 및 관리가 매우 쉽다
  -  일종의 모듈식(경량화) 가상 머신이다

### 컨테이너 (Container)

Docker에서의 컨테이너의 개념은 다양한 프로그램, 다양한 운영체제 및 실행 환경등을 컨테이너로 추상화하여 동일한 인터페이스를 제공하여, 배포 및 관리를 단순화 시키는 것을 말한다.

#### 가상 머신과 차이점

가상 머신은 Hypervisor를 이용해 하나의 Host에서 여러 개의 OS를 생성해 사용하는 방식이다. 가상 머신의 Guest OS들은 서로 간에 완전히 독립된 공간을 할당 받는다.

하지만, 이런한 작업 방식은 Hypervisor를 반드시 거쳐야 하기 때문에 성능 저하가 발생합니다. 또한 각 Virtual Machine은 Guest OS를 위한 Library,Kernal 등을 모두 포함해야하므로 배포시 image의 크기가 커진다.

### 도커를 사용하는 이유

- 독립된 개발 환경 보장
  Container는 격리된 공간이므로 그 자체에 특별한 권한을 주지 않는 한 내부에서 무엇을 하든 Host OS에는 여향을 끼치지 않습니다
- 개발/운영 환경의 통합
  Container 내부 작업을 배포하기 위해서는 해당 Container를 docker image라는 하나의 패키지로 만들어 운영 서버에 전달하면 된다.

  서비스 개발 환경을 다른 서버에서도 똑같이 복제할 수 있어 의존성 걱정이 없다
- 배포 신속성 및 H/W 효율
  Guast OS와 달리 Kernal을 포함하고 있지 않기 때문에 image 크기가 비교적 작다. 따라서 Application의 배포 속도가 매우 빨라지며, H/W 용량을 작게 차지한다.
- 여러 Application의 독립성과 확장성이 높아진다
  여러 Module을 독립된 형태로 구성하므로 언어에 종속되지 않고 변화에 빠르게 대응할 수 있다. 독립된 형태들을 구현하는데는 주로 Docker Container가 많이 사용된다.

### 단점

1. Docker는 플랫폼 의존적이다.
   Docker는 윈도우에서는 linux 가상 머신 위에서 돌아간다. 즉 linux에서만 실행가능하다
2. Docker는 bare-metal 방식보다 느리다.
   Docker가 기존의 가상화 방식보다 overhead가 적긴 하지만 여전히  bare-metal 방식에 속도에 비하면 느리다
   bare-metal은 클라우드가 아닌 실제 하드웨어 서버를 말한다
3. Docker 위에서 GUI 앱을 돌리기가 불편하다
   command Line에서 동작하는 앱을 호스팅하기 위해 디자인되어서 gui 실행은 가능하나 불편하다

### Referance

- [Docker의 역할과 장점](https://velog.io/@iuliet716/Docker%EC%9D%98-%EC%97%AD%ED%95%A0%EA%B3%BC-%EC%9E%A5%EC%A0%90)
- [Docker의 개념](https://chanos.tistory.com/entry/Docker-%EB%8F%84%EC%BB%A4Docker%EB%9E%80-%EB%8F%84%EC%BB%A4%EC%9D%98-%EA%B0%9C%EB%85%90)
- [Docker의 개요 및 장점 그리고 도커를 쓰는 이유](https://hanhyx.tistory.com/27)

---

*2022-07-26에 [GitHub Pages](https://goberomsu.github.io/2022/07/26/docker/)에 쓴 글을 옮겼습니다.*
