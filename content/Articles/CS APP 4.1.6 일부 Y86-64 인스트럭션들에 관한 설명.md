---
aliases: []
date_created: 2021-06-02
date_modified: 2022-01-11
permalink: csapp-4-1-6
tags:
  - computer-architecture
title: "CS:APP 4.1.6 일부 Y86-64 인스트럭션들에 관한 설명"
---
* 프로그램 설계시 모호성을 최소화
	* 일관성을 유지하라
* Ex. X86-64에서 push %rsp인 인스트럭션은 스택 포인터의 메모리 값을 출력해야할지, 스택포인터가 가리키는 위치를 출력해야할지 모호성이 발생한다
	* 증가된 스택 포인터로 할지 메모리에서 읽은 값으로 설정해야할지 고민

---

*2021-06-02에 [GitHub TIL](https://github.com/GoBeromsu/Wiggle-TIL/blob/master/ComputerScience/4.1.6%EC%9D%BC%EB%B6%80Y86-64%EC%9D%B8%EC%8A%A4%ED%8A%B8%EB%9F%AD%EC%85%98%EB%93%A4%EC%97%90%EA%B4%80%ED%95%9C%EC%84%A4%EB%AA%85.md)에 쓴 글을 옮겼습니다.*
