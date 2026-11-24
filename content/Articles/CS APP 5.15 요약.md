---
aliases: []
date_created: 2021-06-24
date_modified: 2022-01-11
permalink: csapp-5-15
tags:
  - computer-architecture
  - performance
title: "CS:APP 5.15 요약"
---
* 프로그래머는 컴파일러를 도와야 한다.
	* 컴파일러는 비효율적인 알고리즘과 자료구조를 좋은 것으로 교체할 수 없다.
	* 최적화 장애물들이 컴파일러의 최적화 능력을 제한한다.
* 성능을 기본 수준 이상으로 끌어올리는 법
	* 프로세서 마이크로 구조를 이해한다.
	* 무순서 프로세서의 경우, 연산, 성능, 지연 시간에 걸리는 시간을 파악한다.
* 최적화에 깊이 들어갈수록 생성된 어셈블리 코드를 공부하고, 해당 머신에서 프로그램이 어떻게 수행되는지 이해하는 것이 중요하다.
* 조건부 분기나 메모리 시스템과 상호작용하는 프로그램의 경우
	* 분기를 예측 가능하게 하거나
	* 데이터 이동을 구현하기 쉽게 한다.

---

*2021-06-24에 [GitHub TIL](https://github.com/GoBeromsu/Wiggle-TIL/blob/master/ComputerScience/5.15%EC%9A%94%EC%95%BD.md)에 쓴 글을 옮겼습니다.*
