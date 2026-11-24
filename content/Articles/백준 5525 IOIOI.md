---
aliases: []
date_created: 2022-03-10
date_modified: 2022-03-10
permalink: boj-5525
tags:
  - algorithm
  - baekjoon
title: "백준 5525 IOIOI"
---

<!-- 
튜토리얼, 하우 투 가이드, 설명 ,레퍼런스 
https://documentation.divio.com/tutorials/
-->

## 문제

N+1개의 I와 N개의 O로 이루어져 있으면, I와 O이 교대로 나오는 문자열을 PN이라고 한다.

P1 IOI
P2 IOIOI
P3 IOIOIOI
PN IOIOI...OI (O가 N개)
I와 O로만 이루어진 문자열 S와 정수 N이 주어졌을 때, S안에 PN이 몇 군데 포함되어 있는지 구하는 프로그램을 작성하시오.

## 풀이

* 아래 코드는 50점 짜리 코드이다. 아마 시간 복잡도 때문인듯하다

```PYTHON
import sys
from collections import deque

n = int(sys.stdin.readline())
m = int(sys.stdin.readline())
s = sys.stdin.readline().rstrip()
ns = "IOI"
for i in range(1,n):
    ns+='OI'
nsLen=len(ns)
ans,cnt=0,0

while 1:
    if ns==str(s[cnt:cnt+nsLen]):
        ans+=1
    cnt+=1
    if nsLen==len(s)-cnt:
        break

print(ans)
```

* 아래 코드는 100점이다.

```python
import sys
from collections import deque

n = int(sys.stdin.readline())
m = int(sys.stdin.readline())
s = sys.stdin.readline().rstrip()

answer,i,count=0,0,0

while i<m-1:
    if s[i:i+3]=='IOI':
        i+=2
        count+=1
        if count ==n:
            answer+=1
            count -=1
    else:
        i+=1
        count=0
print(answer)
```

* IOI가 발견되면 index를 2개 이동시키고 아닌 경우에는 index를 1개 이동 시키면서 검사한다.
  * IOI를 찾을 때마다 카운트를 올린다. 이 카운트가 n가 동일하다면 주어진 P를 찾은 것이니 answer를 1 올린다.

---

*2022-03-10에 [GitHub Pages](https://goberomsu.github.io/2022/03/10/algorithm-boj5525/)에 쓴 글을 옮겼습니다.*
