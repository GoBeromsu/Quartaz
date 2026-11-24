---
aliases: []
date_created: 2023-08-01
date_modified: 2023-08-01
permalink: programmers-sort-string-descending
tags:
  - algorithm
  - programmers
title: "Programmers_문자열 내림차순으로 배치하기"
---

## 문제 설명

문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.  
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

## 풀이

프로그래머스 AI가 보기엔, 내게 적정한 난이도는 여기인가보다 이 자식

```python
def solution(s):
    s = list(s)
    s.sort(reverse=True)
    answer= "".join(s)
    return answer
```

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-01에 [Tistory](https://berom.tistory.com/450)에 쓴 글을 옮겼습니다.*
