---
aliases: []
date_created: 2023-03-20
date_modified: 2023-03-20
permalink: programmers-coding-test-warmup-day-11
tags:
  - algorithm
  - programmers
title: "CodingTest 감 살리기 with Programmers - 11일차"
---

## CodingTest 감 살리기 with Programmers

- 코딩 테스트를 준비 하게 되어서, 기본적인 문법도 되짚고, 감을 되찾기 위해 시작합니다

### 예산

```python
def solution(d, budget):
    answer = 0
    d.sort()
    for b in d:
        if budget-b<0:
            break
        answer+=1
        budget-=b
    return answer
```

### 소수 만들기

```python
import itertools
def solution(nums):
    answer = 0
    n = []
    count=1
    for s in list(itertools.combinations(nums,3)):
        count=1
        num= sum(s)
        for i in range(2,int(num/2)+1):
            if num%i==0:
                count=0
                break
        answer+=count
    return answer
```

### 부족한 금액 계산하기

```python
def solution(price, money, count):
    answer = 0
    p = 0
    for i in range(1,count+1):
        p+=i
    p*=price
    answer= 0 if money-p>0 else abs(money-p)
    return answer
```

---

*2023-03-20에 [Tistory](https://berom.tistory.com/66)에 쓴 글을 옮겼습니다.*
