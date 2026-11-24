---
aliases: []
date_created: 2023-07-26
date_modified: 2023-07-26
permalink: programmers-triangle-condition-2
tags:
  - algorithm
  - programmers
title: "Programmers_삼각형의완성조건(2)_고범수"
---

## 문제

이 문제는 선분 세 개로 삼각형을 만들기 위한 조건을 만족하는 선분의 개수를 찾는 것입니다.  
삼각형을 만들기 위한 조건은 가장 긴 변의 길이가 다른 두 변의 길이의 합보다 작아야 한다는 것입니다.  
삼각형의 두 변의 길이가 담긴 배열 sides가 주어지고, 나머지 한 변이 될 수 있는 정수의 개수를 반환하는 함수를 작성해야 합니다.

### 제한사항

- sides의 원소는 자연수입니다.
- sides의 길이는 2입니다.
- 1 ≤ sides의 원소 ≤ 1,000

## 입출력 예

- 예시 1: sides가 [1, 2]인 경우, 결과는 1입니다. 두 변이 1, 2인 경우 삼각형을 완성시키려면 나머지 한 변이 2여야 합니다.

## 문제 풀이

```python
def solution(sides):
    sides.sort()
    return 2*sides[0]-1
```

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-07-26에 [Tistory](https://berom.tistory.com/442)에 쓴 글을 옮겼습니다.*
