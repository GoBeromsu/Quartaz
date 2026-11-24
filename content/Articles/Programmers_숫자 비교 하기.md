---
aliases: []
date_created: 2023-08-09
date_modified: 2023-08-09
permalink: programmers-compare-numbers
tags:
  - algorithm
  - programmers
title: "Programmers_숫자 비교 하기"
---

MOC:  
Index:

## 문제

정수 `num1`과 `num2`가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

## 코드

```java
class Solution {
    public int solution(int num1, int num2) {
        int answer =  num1 == num2 ? 1 : -1;
        return answer;
    }
}
```

Java에서 삼항 연산자를 사용하는 방법을 배웠다  
`int answer = (조건) ? 변수 1 : 변수 2` 형태로 사용 하면 된다

### 더 궁금해하자 : 삼항 연산자를 사용했을 때의 트레이드 오프는?

찾아보니, 기능적으로 if-else와 동일하다고 한다. 즉 성능적인 저하는 없다

그러나, 간결함을 얻는 대신 디버깅과 유지보수의 어려움을 초래 할 수 있다!

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-09에 [Tistory](https://berom.tistory.com/462)에 쓴 글을 옮겼습니다.*
