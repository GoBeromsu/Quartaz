---
aliases: []
date_created: 2019-07-15
date_modified: 2019-07-15
permalink: til-linux-system-2019-05-14
tags:
  - linux
title: "linuxsystem_20190514"
---
* kill

command to terminate a running process

sending signals to daemons

program은 그냥 바이너리인데, 우리가 이걸 실행시키면 프로세스가 된다. 데몬 시스템은 오래 살아 있는 시스템이다.

modify process execution priorities

ps -l로 priority value를 볼 수 있다.

command nice

nice는 자신의 우선권(priority)을 다른 사람에게 양도한다. 양보해 준다고 해야 하나?

job

사용자는 자신의 프로세스에 느린 우선순위를 둘 수 있지만, 그 역은 못 한다. 관리자는 프로세스의 우선순위를 자신의 마음대로 설정할 수 있다.

* 백그라운드에서 프로세스를 돌릴 수 있다. 그런데 이런 백그라운드 프로세스가 늘어나면 백그라운드에 트리가 만들어진다.

---

*2019-07-15에 GitHub TIL 저장소에 쓴 글을 옮겼습니다.*
