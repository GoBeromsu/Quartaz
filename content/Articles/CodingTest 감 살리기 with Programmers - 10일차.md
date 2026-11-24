---
aliases: []
date_created: 2023-03-19
date_modified: 2023-03-19
permalink: programmers-coding-test-warmup-day-10
tags:
  - algorithm
  - programmers
title: "CodingTest 감 살리기 with Programmers - 10일차"
---

## CodingTest 감 살리기 with Programmers

- 코딩 테스트를 준비 하게 되어서, 기본적인 문법도 되짚고, 감을 되찾기 위해 시작합니다

### 크레인 인형 뽑기

```python
from collections import deque
def solution(board, moves):
    answer = 0
    m = [deque([]) for i in range(len(board)) ]
    for bo in board:
        for i,b in enumerate(bo):
            if b==0:
                continue
            m[i].appendleft(b)
    result = []
    for move in moves:
        move-=1
        if len(m[move])==0:
            continue
        else:
            result.append(m[move].pop())
            if len(result)>1 and result[-1]==result[-2]:
                answer+=2
                result.pop()
                result.pop()
    return answer
```

- 로직은 처음 순회하면서 제시된 문제의 세로 축 하나를 큐라 생각하고 넣는다. 그러고 바구니에 값을 하나씩 넣어서 터치는 문제이다
- 위의 코드에서 실행 시간을 더 줄이려면, 처음 탐색을 하면서 동시에 바구니를 확인해서 일치하면 터뜨리는 식으로 할 수 있다

### 실패율

```python
from collections import defaultdict
def solution(N, stages):
    answer = []
    dic={}
    for i in range(1,N+2):
        dic[i]=0
    for s in stages:
        dic[s]+=1
    person = 0
    for i in range(N+1,0,-1):
        person+=dic[i]
        if i<N+1 and person>0:
            dic[i]/=person
        else:
            dic[i]=0
    answer=list(dic.items())
    answer.pop()
    answer.sort(key=lambda x:x[1],reverse=True)
    return [n[0] for n in answer ]
```

- 핵심 로직은 딕셔너리에 유저의 수를 넣고, 실패율로 치환 후 정렬하는 것이다.
- 유의 사항은 실패율을 구할 때 역순으로 차례대로 이미 클리어한 사람들을 더하는데 사람의 수가 0이 되지 않도록해야 한다

---

*2023-03-19에 [Tistory](https://berom.tistory.com/65)에 쓴 글을 옮겼습니다.*
