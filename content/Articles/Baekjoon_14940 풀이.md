---
aliases: []
date_created: 2023-08-07
date_modified: 2023-08-07
permalink: boj-14940
tags:
  - algorithm
  - baekjoon
  - bfs
title: "Baekjoon_14940 풀이"
---

MOC:  
Index: 🏷️ Develop Notes

## 실패한 코드

```python
import sys

n,m = map(int,sys.stdin.readline().split())
paper = [list(map(int,sys.stdin.readline().split())) for i in range(m)]
idx = [0,0]
result = [[10001 for i in range(n)] for i in range(m) ]

for p in enumerate(paper):
    for a in enumerate(p[1]):
        if a[1]==2:
            idx[0],idx[1] = p[0],a[0]
            break

def solution(x,y,value):
    global result
    global n
    global m

    if x < 0 or x>=n:
        return
    if y< 0 or y>=m:
        return
    if paper[x][y]==0:
        return
    if result[x][y] <= value:
        return
    result[x][y] = value
    solution(x-1,y,result[x][y]+1)
    solution(x+1,y,result[x][y]+1)
    solution(x,y-1,result[x][y]+1)
    solution(x,y+1,result[x][y]+1)

solution(idx[0],idx[1],0)

for r in result:
    for j in r:
        if j==10001:
            print(0,end=" ")
        else:
            print(j,end=" ")
    print("")
```

[Baekjoon_2630 풀이](https://berom.tistory.com/457)에서 영감을 받아, 재귀 함수를 만들었는데, 작동은 하지만 지나치게 반복 횟수가 많은 문제가 있다

## 성공한 코드

```python
import sys
from collections import deque

n,m = map(int,sys.stdin.readline().split())

paper = [list(map(int,sys.stdin.readline().split())) for i in range(n)]
result = [[-1 for i in range(m)] for i in range(n) ]

dx, dy = [0,0,-1,1], [-1,1,0,0]

def bfs(i,j):
    global dx
    global dy
    queue = deque()
    queue.append((i,j))

    result[i][j] = 0

    while queue:
        x,y = queue.popleft()
        for i in range(4):
            nx,ny = dx[i] + x,dy[i]+y
            if 0<=nx<n and 0<=ny <m and result[nx][ny]==-1:
                if paper[nx][ny]==0:
                    result[nx][ny]=0
                elif paper[nx][ny]==1:
                    result[nx][ny] = result[x][y]+1
                    queue.append((nx,ny))

for i in range(n):
    for j in range(m):
        if paper[i][j] == 2 and result[i][j] == -1:
            bfs(i,j)

for i in range(n):
    for j in range(m):
        if paper[i][j] == 0:
            print(0, end=' ')
        else:
            print(result[i][j], end=' ')
    print()
```

BFS를 이용해서 문제를 풀었다.

```python
n,m = map(int,sys.stdin.readline().split())

paper = [list(map(int,sys.stdin.readline().split())) for i in range(n)]
result = [[-1 for i in range(m)] for i in range(n) ]

dx, dy = [0,0,-1,1], [-1,1,0,0]
```

데이터를 입력 받고, 이동 하는데 사용할 벡터 dx,dy를 만든다

```python
def bfs(i,j):
    global dx
    global dy
    queue = deque()
    queue.append((i,j))

    result[i][j] = 0

    while queue:
        x,y = queue.popleft()
        for i in range(4):
            nx,ny = dx[i] + x,dy[i]+y
            if 0<=nx<n and 0<=ny <m and result[nx][ny]==-1:
                if paper[nx][ny]==0:
                    result[nx][ny]=0
                elif paper[nx][ny]==1:
                    result[nx][ny] = result[x][y]+1
                    queue.append((nx,ny))
```

BFS 함수이다. 1차적으로주어진 n과 m 사이의 좌표를 가지고, result가 -1인 곳이면 통과한다

paper 좌표의 값이 0이면 가지 못하는 곳이므로 result에도 표시를 한다  
만약 paper 좌표가 1이라면, 갈 수 있으므로, 이전 좌표 + 1로 값을 올립니다

여기서 `result[nx][ny] == -1` 조건이 있어서, BFS로 탐색하는 곳을 한 번만 지나가는 것이 자명합니다

```python
for i in range(n):
    for j in range(m):
        if paper[i][j] == 2 and result[i][j] == -1:
            bfs(i,j)
```

목표 지점이 하나가 아닐 수 있고, 빠진 부분이 있을수도 있어 완전 탐색을 하며 BFS를 할 곳을 찾습니다  
반복문을 돌며 조건에 부합하는 경우 bfs 탐색을 시작합니다

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-07에 [Tistory](https://berom.tistory.com/458)에 쓴 글을 옮겼습니다.*
