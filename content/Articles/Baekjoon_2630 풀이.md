---
aliases: []
date_created: 2023-08-07
date_modified: 2023-08-07
permalink: boj-2630-2023
tags:
  - algorithm
  - baekjoon
  - divide-and-conquer
title: "Baekjoon_2630 풀이"
---

MOC:  
Index: 🏷️ Develop Notes

## 풀이

![백준 2630 색종이 만들기의 8×8 흰색·파란색 종이 그림](/_attachments/tistory-457-01.png)

최종적으로는 하얀 블록과 파란 블록의 개수를 찾으면 되는 문제이다  
분할 정복법과 재귀가 이번 문제의 핵심이다

알고리즘을 못 떠올려서 for문을 여러 개 만드는 삽질을 했었다

cut(x,y)를 만들어서, 반복적으로 정사각형으로 도형을 쪼개서 문제를 해결 한다

## Code

```python
import sys

N = int(input())
paper = [list(map(int, input().split())) for _ in range(N)]
white, blue = 0, 0
def cut(x,y,n):
    global white,blue
    check = paper[x][y]
    for i in range(x,x+n):
        for j in range(y,y+n):
            if check != paper[i][j]:
                cut(x,y,n//2)
                cut(x,y+n//2,n//2)
                cut(x+n//2,y,n//2)
                cut(x+n//2,y+n//2,n//2)
                return
    if check==0:
        white +=1
    else:
        blue+=1
cut(0,0,N)
print(white)
print(blue)
```

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-07에 [Tistory](https://berom.tistory.com/457)에 쓴 글을 옮겼습니다.*
