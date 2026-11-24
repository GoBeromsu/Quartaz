---
aliases: []
date_created: 2023-03-14
date_modified: 2023-03-14
permalink: programmers-coding-test-warmup-day-6
tags:
  - algorithm
  - programmers
title: "CodingTest 감 살리기 with Programmers - 6일차"
---

# CodingTest 감 살리기 with Programmers

- 코딩 테스트를 준비 하게 되어서, 기본적인 문법도 되짚고, 감을 되찾기 위해 시작합니다

## 타겟 넘버

```python
from collections import deque
def solution(numbers, target):
    answer = 0
    numbers = deque(numbers)
    result = deque()
    while numbers:
        n = numbers.popleft()
        temp = deque()
        if len(result)==0:
            result.append(n)
            result.append(-n)
        else:
            for r in result:
                temp.append(r+n)
                temp.append(r-n)
            result = temp
            print(result)
    for r in result:
        if r==target:
            answer+=1
    return answer
```

- BFS로 풀어야 한다는 느낌이 오는 문제였다.
  - 해당 문제는 타겟과 같은 갯수가 몇개인가 카운트 하는 것이다
  - BFS 특성 상 형제 노드 탐색이 끝나고 아래 자식 노드들을 탐색하기에 알맞을거라 생각이 들었다

---

*2023-03-14에 [Tistory](https://berom.tistory.com/61)에 쓴 글을 옮겼습니다.*
