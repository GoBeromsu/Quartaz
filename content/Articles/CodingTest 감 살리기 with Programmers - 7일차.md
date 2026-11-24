---
aliases: []
date_created: 2023-03-15
date_modified: 2023-03-15
permalink: programmers-coding-test-warmup-day-7
tags:
  - algorithm
  - programmers
title: "CodingTest 감 살리기 with Programmers - 7일차"
---

## CodingTest 감 살리기 with Programmers

- 코딩 테스트를 준비 하게 되어서, 기본적인 문법도 되짚고, 감을 되찾기 위해 시작합니다

### 바탕화면 정리

```python
def solution(wallpaper):
    x1,x2,y1,y2 = 9999,-9999,9999,-9999
    for y,wp in enumerate(wallpaper):
        for x,w in enumerate(wp):
            if w=="#":
                x1 = min(x1,x)
                x2 = max(x2,x)
                y1 = min(y1,y)
                y2 = max(y2,y)
    return y1,x1,y2+1,x2+1
```

### 개인 정보 수집 유효 기간

```python
def solution(today, terms, privacies):
    answer = []
    dic = {}
    ty,tm,td = map(int,today.split("."))
    # ty,tm,td = 1,2,3
    for t in terms:
        a,b = map(str,t.split())
        dic[a]=int(b)
    pr = [ list(map(str,a.split())) for a in privacies]
    r = []
    for p in pr:
        year,month,day = map(int,p[0].split("."))
        month += dic[p[1]]

        if month >12:
            year+=1
            month-=12
        while month>12:
            year+=1
            month-=12
        if day ==1 :
            month-=1
            day = 28
        else:
            day-=1

        r.append([year,month,day])
    for index,i in enumerate(r):
        y,m,d = i[0],i[1],i[2]
        if y==ty:
            if m <tm:
                answer.append(index+1)
            elif m==tm:
                if d<td:
                    answer.append(index+1)
        elif y<ty:
            answer.append(index+1)

    return answer
```

- 유효 기간이 100개월일수도 있는 조건을 빠뜨려서 헤맸다
- 문제를 똑바로 읽자!

---

*2023-03-15에 [Tistory](https://berom.tistory.com/62)에 쓴 글을 옮겼습니다.*
