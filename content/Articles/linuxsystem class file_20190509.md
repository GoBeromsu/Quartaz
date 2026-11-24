---
aliases: []
date_created: 2019-05-13
date_modified: 2019-05-13
permalink: til-linux-system-2019-05-09
tags:
  - linux
title: "linuxsystem class file_20190509"
---
Box =  size

per-user and per-group Quotas

quota는 파일 시스템의 리소스를 제약하는 시스템이다. 애초에 뜻이 할당량이다. 계정의 타입은 user와 group이 있고, 파일 시스템의 타입은 inode와 box가 있다. inode는 메타데이터이고 box는 사이즈이다.

command
* quotacheck

-cug 이런 느낌으로 쓸 수 있다.

auota.group 또는 auguota.user를 지우면 quota를 실행하지 못한다.

* setquota

soft block hard block soft inode hard inode

-t option은 유효기간을 나타내는 것이다.

* quotaon quotaoff repquota
* quota - 각각의 유저들이 자기 것을 한 번씩 체크하는 거다.

mount -o loop,usrquota,groupquota disk.img disk

quota check -cug disk = 메타에디터를 생성하는 거다. db로 이자시가

넘버 1 파일은 루트? quota 관련 내용이다.

다음 pdf

process는 무엇인가

프로세스는 running 프로그램이다.

creating new processes는 스킵했다. os 시간에 배우면 된다.

PID and fork

프로그램 a를 가지고 있다고 하면, 그 안의 어느 포인트를 fork라고 부른다.

fork()를 이용해 return 값을 받는데, 리턴 값이 0이면 그 프로그램은 child이고 아니면 parent이다.

프로세스 테이블에 프로세스들이 정리되어 있다.

애가 잘못하면 아버지를 부르는 거다.

프로세스의 정보를 얻기 위해서는 pid랑 ppid를 체크해보면 된다. eUID, eGID는 오너십을 관리한다. SETUID SETGID

PROCESS COMPONENT는 OS 때 배우면 된다.

PID 그리고 PPIDU

Signaling Process 전 3페이지는 스킵했다.
.

## logic circuit

fip flalt

* sequential circuits

순차적으로 변화하는 인풋들에 따라 피드백이 따라온다.

*
신호를 넣어 놓고 스위치를 끄면 신호가 루프 안을 계속 돈다.

jk latch는 시험에 나온다.

피드백이 없다고 할 때 어떻게 나올지 알아야 한다. 루프를 돌 거니까.

gated slh

회로가 도는 과정을 기억하고 쓰면 된다.

level sensitive는 클럭의 레벨에 따라 값이 바뀐다. 데이터의 레벨에 따라 값이 변한다.

edge triggered는 클럭의 값이 떨어지는 순간 값이 변한다.

엣지 값이 떨어지는 순간을 막기 위해 물리적인 특징을 넣게 된다. 19p

setup time과 hold time을 알아야 한다.

사실 디지털 신호처럼 보이지만 아날로그 신호이긴 하다.

---

*2019-05-13에 GitHub TIL 저장소에 쓴 글을 옮겼습니다.*
