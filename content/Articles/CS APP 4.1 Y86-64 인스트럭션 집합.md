---
aliases: []
date_created: 2021-05-21
date_modified: 2022-01-11
permalink: csapp-4-1
tags:
  - computer-architecture
title: "CS:APP 4.1 Y86-64 인스트럭션 집합"
---
## 4.1.1 프로그래머 가시성 상태
* 왜 배우냐
	* 프로그래머 가시 상태의 의미를 파악하기 위해서다
		* 프로그래머 가시 상태에 접근 가능하다 = ISA로부터 자유롭다

* Programmer-visible state
	* 인스트럭션 집합의 각 인스트럭션이 프로세서 상태의 일부를 읽거나 변경할 수 있는 상태
	* Programmer란 어셈블리 코드를 만드는 주체다
* Y86-64 인스트럭션 집합 만들기
	* BF, CC ,PC ,Stat ,DMEM
		* CC : ZF SF OF
	* PC : 현재 실행되는 인스트럭션 주소 보관
	* stat : 전체적 상태

---

*2021-05-21에 [GitHub TIL](https://github.com/GoBeromsu/Wiggle-TIL/blob/master/ComputerScience/4.1Y86-64%EC%9D%B8%EC%8A%A4%ED%8A%B8%EB%9F%AD%EC%85%98%EC%A7%91%ED%95%A9.md)에 쓴 글을 옮겼습니다.*
