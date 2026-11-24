---
aliases: []
date_created: 2023-03-16
date_modified: 2023-03-16
permalink: programmers-coding-test-warmup-day-8
tags:
  - algorithm
  - programmers
title: "CodingTest 감 살리기 with Programmers - 8일차"
---

## CodingTest 감 살리기 with Programmers

- 코딩 테스트를 준비 하게 되어서, 기본적인 문법도 되짚고, 감을 되찾기 위해 시작합니다

### 다트 게임

```python
def solution(dartResult):
    dart = []
    temp=""
    for index,d in enumerate(dartResult):
        if d=="S" or d=="D" or d=="T":
            dart.append(calc(int(temp),d))
            temp=""
        elif d=="*":
            if dartResult[index-2]=="*":
                dart[-1]*=2
                dart[-2]*=2
            elif dartResult[index-2]=="#":
                dart[-2]*=2
            else:
                dart[-1]*=2
                if len(dart)>1:
                    dart[-2]*=2
        elif d=="#":
            dart[-1]*=-1
        else:
            temp+=d
    return sum(dart)
def calc(d,op):
    if op=="S":
        return d
    elif op=="D":
        return d*d
    elif op=="T":
        return d*d*d
```

### 비밀지도

```python
def solution(n, arr1, arr2):
    answer = []
    m = [[" " for n in range(n)] for i in range(n)]
    for y,a1 in enumerate(arr1):
        for x, a in enumerate(calc(n,a1)):
            if a=="1":
                m[y][x]="#"
    for y,a2 in enumerate(arr2):
        for x, a in enumerate(calc(n,a2)):
            if m[y][x]=="#" or a=="0":
                continue
            else:
                m[y][x]="#"
    result = []
    for l in m:
        temp = "".join(l)
        result.append(temp)
    return result
def calc(lenth,num):
    a,b = num,0
    result = ""
    temp=""
    while num>0:
        if num%2==1:
            result= "1"+result
            num = int(num//2)
        else:
            result="0"+result
            num = num//2
    return (lenth-len(result))*"0"+result
```

- 이진수 바꾸는걸 직접 구현해서 풀었다
  - 파이썬에서 제공하긴 하지만, 그냥 만들어서 쓰는 것도 연습해두는게 좋을거란 생각이 들었기 때문이다!

### 성격 유형 검사하기

```python
def solution(survey, choices):
    dic={}
    m = {1:3,2:2,3:1,5:1,6:2,7:3}
    for i in ["T","R","C","F","J","M","A","N"]:
        dic[i]=0

    answer = ''
    for sc in zip(survey,choices):
        pass
        if sc[1] < 4:
            dic[sc[0][0]]+=m[sc[1]]
        elif sc[1]>4:
            dic[sc[0][1]]+=m[sc[1]]
    for i in [["R","T"],["C","F"],["J","M"],["A","N"]]:
        if dic[i[0]]>dic[i[1]]:
            answer+=i[0]
        elif dic[i[0]]<dic[i[1]]:
            answer+=i[1]
        else:
            answer+=i[0]
    return answer
```

- 조회도 해야 하고, 정렬도 해야하지만, 그 수가 많지 않기 때문에 미리 값을 박아두고 풀었다

---

*2023-03-16에 [Tistory](https://berom.tistory.com/63)에 쓴 글을 옮겼습니다.*
