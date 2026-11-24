---
aliases: []
date_created: 2021-06-05
date_modified: 2022-01-11
permalink: til-arm-architecture
tags:
  - computer-architecture
title: "ARM 아키텍쳐"
---
* 임베디드에서 많이 사용되는 RISC 프로세서이다.
	* 저전력을 사용하도록 설계되었다.
		* 비트 수랑 관련이 있었던가? 명령어 길이가 짧다고 했던 것 같다.
* 32비트 프로세서이다.
* 적은 수의 명령어를 유지하며, 명령어를 단순하게 유지한다.
* 명령어 세트당 많은 데이터를 처리하며, 마이크로 부재로 일어난 문제를 해결했다.

## RISC(Reduced instruction set computer)

* 명령어 길이를 16비트, 32비트로 관리
* 1 사이클 1 명령어
* 병렬 실행

---

*2021-06-05에 [GitHub TIL](https://github.com/GoBeromsu/Wiggle-TIL/blob/master/Etc/ARM%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90.md)에 쓴 글을 옮겼습니다.*
