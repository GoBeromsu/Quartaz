---
aliases: []
date_created: 2021-06-11
date_modified: 2022-01-11
permalink: csapp-5
tags:
  - computer-architecture
  - performance
title: "CS:APP 5. 프로그램 성능 최적화하기"
---
* 효율적인 프로그램을 만드는 데는 여러 활동이 필요하다
	* 적절한 알고리즘과 자료구조
	* 컴파일러가 이해하기 쉬운 소스코드
* 프로그래머는 개발과 최적화에 대하여 어떻게 코드가 사용되며 어떤 결정적 요소들이 영향을 미치는지 생각해야 한다
	* 코드 가독성과 정확성을 유지하면서 말이다.
* 프로그램 최적화의 단계
	* 불필요한 작업 제거
	* 프로세서 능력 최대 활용(인스트럭션 수준 병렬)
* 어셈블리 코드 표시를 공부하는 이유
	* 컴파일러를 이해하고 어떻게 코드가 실행되는지 이해하는 데 효과적인 방법
	* 내부 루프, 과도한 메모리 참조, 부적절한 레지스터 사용 같은 성능 감소 특성 찾기
	* 우린 어떤 연산이 병렬 실행되는지, 어떻게 프로세서 자원을 사용하는지 예측 가능
		* critical path를 찾아 시간 값 측정 가능

---

*2021-06-11에 [GitHub TIL](https://github.com/GoBeromsu/Wiggle-TIL/blob/master/ComputerScience/5.%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8%EC%84%B1%EB%8A%A5%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%98%EA%B8%B0.md)에 쓴 글을 옮겼습니다.*
