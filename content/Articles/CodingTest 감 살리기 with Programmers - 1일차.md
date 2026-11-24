---
aliases: []
date_created: 2023-03-01
date_modified: 2023-03-01
permalink: programmers-coding-test-warmup-day-1
tags:
  - algorithm
  - programmers
title: "CodingTest 감 살리기 with Programmers - 1일차"
---

# CodingTest 감 살리기 with Programmers

- 코딩 테스트를 준비 하게 되어서, 기본적인 문법도 되짚고, 감을 되찾기 위해 시작합니다

## OX퀴즈

```python
def solution(quiz):
    answer = []
    for q in quiz:
        var1,c,var2,equal,result = map(str,q.split())
        if int(result) == calc(var1,var2,c):
            answer.append("O")
        else:
            answer.append("X")
    return answer

def calc(var1,var2,c):
    if (c=="-"):
        return int(var1)-int(var2)
    else:
        return int(var1)+int(var2)
```

- map(function,iterable)
  - map 함수의 반환 값은 map 객체여서, 리스트나 튜플 또는 변수랑 값을 매핑해줘야 한다.
  - map(적용 할 함수,반복 할 값) 형태라 생각하자

## 완주하지 못한 선수

```python
from collections import defaultdict

def solution(participant, completion):

    dic = defaultdict(int)
    check = []
    for p in participant:
        dic[p]+=1
    for c in completion:
        dic[c]-=1
    result = [k for k,v in dic.items() if v>0]
    return result[0]
```

- `from collections import defaultdict` : defaultdict(int)로, dictionary 값을 0으로 바로 초기화 하기 위함
- `[k for k,v in dic.items() if v>0]` : value로 key 값 찾는 방법
  - if 조건으로 원하는 값을 판별 할 수 있다.

## 같은 숫자는 싫어

```python
def solution(arr):
    answer = [arr[0]]
    # [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    index = arr[0]
    for i in range(1,len(arr)):
        if arr[i] ==index:
            continue
        else:
            index = arr[i]
            answer.append(index)
    return answer
```

---

*2023-03-01에 [Tistory](https://berom.tistory.com/52)에 쓴 글을 옮겼습니다.*
