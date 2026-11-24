---
aliases: []
date_created: 2023-03-02
date_modified: 2023-03-02
permalink: programmers-coding-test-warmup-day-2
tags:
  - algorithm
  - programmers
title: "CodingTest 감 살리기 with Programmers - 2일차"
---

# CodingTest 감 살리기 with Programmers

- 코딩 테스트를 벼락치기 하게 되어서, 기본적인 문법도 되짚고, 감을 되찾기 위해 시작합니다

## K번째수

```python
def solution(array, commands):
    answer = []
    for c in commands:
        s,d,n = c
        result = array[s-1:d]
        result.sort()
        answer.append(result[n-1])
    return answer
```

## 기능 개발

### 머리 박아식 풀이

```python
def solution(progresses, speeds):
    answer = []
    p = list(map(calc,progresses))
    check = [0 for i in range(len(p))]
    # 선행 프로세스가 끝난 상태에서 자신의 일이 다 끝나야 함
    # 걍 갔으면 체크하면 되지 뭘 고민함
    for i in range(len(p)):
        count=0
        day = p[i]//speeds[i]+1
        for j in range(i,len(p)):
            p[j] -=day*speeds[j]

            if j==0 or (check[j-1]==1 and check[j]==0 and p[j] < 0):
                count+=1
                check[j] = 1
        if(count>0):
            answer.append(count)
    return answer

def calc(x):
    return 100-x
```

- 일단 마지막 하나를 통과하지 못했고, 선형 탐색을 하지만, 큐나 스택을 전혀 사용하지 않은 주먹구구식 풀이임

### 진짜 풀이

- 접근
  - 선형 탐색을 해서 하나씩 어차피 증가시켜야 함
  - 앞의 프로세스가 모두 끝났음이 자명해야 함
  - 회차가 아니라 한 회당 몇 개의 프로세스가 끝났는지

```python
from collections import deque
def solution(progresses, speeds):
    answer = []
    p = deque(map(calc,progresses))
    speeds = deque(speeds)

    while True:
        check = [0 for i in range(len(p))]
        count = 1
        if not p:
            break
        n = p.popleft()
        s = speeds.popleft()
        day = n//s if n//s==n/s else n//s+1

        for i in range(len(p)):
            p[i]-=day*speeds[i]
            if p[i]<1:
                check[i]=1
        for c in check:
            if c==1:
                count+=1
                speeds.popleft()
                p.popleft()
            else:
                break
        answer.append(count)
    return answer
def calc(x):
    return 100-x
```

- `from colletions import deque` : deque를 불러오기 위해 사용함

## 최소 직사각형

```python
def solution(sizes):
    answer = 0
    w,h =[],[]
    wMax,hMax = 0,0
    for s in sizes:
        a,b = map(int,s)
        if a>b:
            w.append(a)
            h.append(b)
        else:
            w.append(b)
            h.append(a)
        if w[-1]>wMax:
            wMax = w[-1]
        if h[-1]>hMax:
            hMax = h[-1]
    answer = hMax * wMax
    return answer
```

- 명함을 돌릴 수 있으므로. 긴 면과 짧은 면을 분리하면서 최대 값을 조회한다.

## 전화부 목록

```python
def solution(phone_book):
    hashMap = {}
    for pNumber in phone_book:
        hashMap[pNumber] = 1
    for pNumber in phone_book:
        jb=""
        for pN in pNumber:
            jb+=pN
            if jb in hashMap and jb !=pNumber:
                return False
    return True
```

- 하나씩 슬라이싱해서 비교하는 아이디어는 유효했지만, hash를 생각하지 않고 푸니 시간 초과 발생

### 레퍼런스

- [Programmers 해시 전화번호 목록](https://coding-grandpa.tistory.com/86)

---

*2023-03-02에 [Tistory](https://berom.tistory.com/53)에 쓴 글을 옮겼습니다.*
