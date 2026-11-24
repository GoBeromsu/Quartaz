---
aliases: []
date_created: 2023-03-17
date_modified: 2023-03-17
permalink: programmers-coding-test-warmup-day-9
tags:
  - algorithm
  - programmers
title: "CodingTest 감 살리기 with Programmers - 9일차"
---

## CodingTest 감 살리기 with Programmers

- 코딩 테스트를 준비 하게 되어서, 기본적인 문법도 되짚고, 감을 되찾기 위해 시작합니다

### 숫자 문자열과 영단어

```python
from collections import deque
def solution(s):
    answer = 0
    n=[i for i in range(10)]
    en = {0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine"}
    for i in range(10):
        n[i]=i

    jump=0
    number = []
    s = deque(s)
    while s:
        idx = s.popleft()
        if idx=="z":
            jump = 3
            number.append("0")
        elif idx=="o":
            jump=2
            number.append("1")
        elif idx=="s":
            if s[0]=="e":
                jump=4
                number.append("7")
            else:
                jump=2
                number.append("6")
        elif idx =="e":
            jump=4
            number.append("8")
        elif idx=="n":
            jump=3
            number.append("9")
        elif idx=="f":
            if s[0]=="i":
                jump=3
                number.append("5")
            else:
                jump=3
                number.append("4")
        elif  idx=="t":
            if s[0]=="w":
                jump = 2
                number.append("2")
            else:
                jump=4
                number.append("3")
        else:
            number.append(idx)
        if jump>0:
            for j in range(jump):
                s.popleft()
            jump=0
    return int(''.join(number))
```

- 바로 풀면 위와 같이 직접 분기해서 풀어도 되지만 비효율적이다
- 핵심 아이디어는 문자 하나씩 빼서 매칭하는 숫자를 저장하고, 숫자의 영어 이름 길이만큼 pass 한다

```python
def solution(s):
    en = {"zero": "0", "one": "1", "two": "2", "three": "3", "four": "4", "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9"}
    number = []
    word = ""
    for c in s:
        if c.isnumeric():
            number.append(c)
        else:
            word += c
            if word in en:
                number.append(en[word])
                word = ""
    return int(''.join(number))
```

### [카카오 인턴] 키패드 누르기

```python
def solution(numbers, hand):
    p = {1:"L",4:"L",7:"L",3:"R" ,6:"R" ,9:"R",0:"x",2:"x",5:"x",8:"x"}
    idx = {}
    cnt=1
    left=[3,0]
    right=[3,2]
    for i in range(4):
        for j in range(3):
            if i==3 and j == 1:
                idx[0]=[i,j]
            else:
                idx[cnt] = [i,j]
            cnt+=1
    answer = ''

    for n in numbers:
        if p[n]=="x":
            l= abs(left[0]-idx[n][0])+abs(left[1]-idx[n][1])
            r=abs(right[0]-idx[n][0])+abs(right[1]-idx[n][1])

            if l>r:
                right = idx[n]
                answer+="R"
            elif l<r:
                left = idx[n]
                answer+="L"
            else:
                if hand=="right":
                    right = idx[n]
                    answer+="R"
                else:
                    left = idx[n]
                    answer+="L"
        else:
            answer+=p[n]
            if p[n]=="L":
                left = idx[n]
            else:
                right= idx[n]
    return answer
```

- 핵심 아이디어는 숫자 키패드의 인덱스를 미리 저장해두고 거리를 계산하는 것이다. (0은 예외처리 꼭 해주자)

---

*2023-03-17에 [Tistory](https://berom.tistory.com/64)에 쓴 글을 옮겼습니다.*
