---
aliases: []
date_created: 2023-08-09
date_modified: 2023-08-09
permalink: programmers-sort-string-1
tags:
  - algorithm
  - programmers
title: "Programmers-문자열 정렬하기 (1)"
---

MOC:  
Index:

## 문제 설명

문자열 `my_string`이 매개변수로 주어질 때, `my_string` 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

## 코드

```java
import java.util.ArrayList;
import java.util.Collections;

class Solution{
	public int[] solution(String my_string){
		ArrayList<Integer> numbers = new ArrayList<>();
		// 숫자를 찾아 리스트에 추가
		for (char ch : my_string.toCharArray()){
			if (Character.isDigit(ch)){
				numbers.add(Character.getNumericValue(ch))
			}
		}
		Collections.sort(numbers);
		int[] answer = new int[numbers.size()];
		for (int i=0;i<numbers.size();i++){
			answer[i] = numbers.get(i)
		}

		return answer
	}
}
```

Java로 코딩테스트를 준비해야 할 필요를 느껴서, 문법에 익숙해지는 것을 목표로 합니다

## Java의 리스트와 배열은 어떻게 다른가?

- 배열
  - 선언시 지정된 타입의 요소만 포함 할 수 있다
  - 크기가 고정 되어 있으며, 선언시에 크기를 지정해야 한다
  - 메모리 할당과 접근이 리스트보다 더 빠르며 효율적이다
- 리스트
  - 크기가 동적으로 변경 된다(요소를 추가하거나 제거 할 수 있으며 크기가 자동 조정된다)
    - Jeneric을 사용하지 않으면, 어떠한 타입의 객체도 포함 할 수 있으
      - 타입 안정성을 위해 Jeneric을 사용하자

## New ArrayList<>(); 에서 `<>`는 생략해도 되지 않는가?

다이아몬드 연산자는 Java 7 이상에서 사용 할 수 있다  
다이아몬드 연산자는 컴파일러가 좌변에 명시된 타입을 추론하므로, 생성자 호출시 타입 인자를 생략 할 수 있다

## 레퍼런스

- [배열이 리스트보다 더 빠른 이유](https://berom.tistory.com/460)

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-09에 [Tistory](https://berom.tistory.com/461)에 쓴 글을 옮겼습니다.*
