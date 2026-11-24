---
aliases: []
date_created: 2023-09-08
date_modified: 2023-09-08
permalink: goorm-remove-connected-components
tags:
  - algorithm
  - goorm
  - bfs
title: "Goorm_연결 요소하기"
---

## 문제

N x N 크기의 2차원 배열이 있다. 2차원 배열의 i 행 j열에 해당하는 칸은 로 나타낸다.  
처음에 이 배열의 각 칸에는 알파벳 대문자 또는 `.` 문자가 하나 적혀 있다.

상하좌우로 인접한 두 칸에 같은 문자가 적혀있는 경우, 두 칸은 연결되어 있다고 한다. 서로 **연결**된 칸들의 집합을 연결 요소라고 하고, 연결 요소의 크기는 그 연결 요소에 포함된 칸들의 개수와 같다.

구름이는 아래 작업을 Q번 수행하려고 한다.

1. (y, x) 칸을 고른 뒤, 그 칸에 알파벳 대문자 를 쓴다. 구름이가 고른 칸은 `.` 문자가 적힌 칸임이 보장된다.
2. 배열에 존재하는 모든 연결 요소의 크기를 계산한다.

- 만약 크기가 K 이상인 연결 요소가 존재한다면, 그 연결 요소에 포함된 모든 칸에 적힌 문자를 지운다.

3. 모든 작업을 수행한 뒤에, 배열에 적혀있는 문자를 구해보자.

### 입력

첫째 줄에 배열의 크기 N , 연결 요소를 지울 기준 K, 그리고 구름이가 문자를 적을 횟수 Q가 공백을 두고 주어진다.  
다음 N개의 줄에는 N개의 문자가 주어진다.

주어지는 문자는 . 또는 알파벳 대문자 중 하나이며, . 문자는 처음에 배열의 칸이 비어있음을 의미한다.  
r번째 줄에서 c번째로 주어지는 문자는 칸에 대한 정보이다.

다음 Q 개의 줄에는 두 정수 y,x와 알파벳 대문자 d가 공백을 두고 주어진다. 구름이가 (x,y) 칸에 d 문자를 적었음을 의미한다.

처음에는 크기가 이상인 연결 요소가 존재하지 않는다.  
구름이가 문자를 적을 칸은 비어있음이 보장된다.  
는 알파벳 대문자이다.

### 출력

구름이가 개의 작업을 모두 수행한 뒤, 마지막에 배열에 적혀있는 문자를 개의 줄에 걸쳐 출력한다. 아무 문자도 적혀있지 않은 칸은 . 문자를 대신 출력한다.

## 테스트 케이스

### 입력 1

5 5 6  
AB…C  
BBAZZ  
….A  
BBB.B  
CCBAB  
3 4 A  
3 1 A  
3 3 A  
3 2 B  
3 2 A  
1 2 D

### 출력 1

AD…C  
…ZZ  
……  
….B  
CC.AB

### 입력 2

3 3 1  
ABA  
B.B  
ABA  
2 2 A

### 출력 2

ABA  
BAB  
ABA

## 풀이

```python
from collections import deque

def find_connected_components(board, N):
  directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
  visited = set()
  components = []

  for i in range(N):
    for j in range(N):
      if (i, j) in visited or board[i][j] == '.':
        continue

      # BFS to find connected components
      component = []
      queue = deque([(i, j)])
      char = board[i][j]

      while queue:
        x, y = queue.popleft()
        if (x, y) in visited:
          continue
        visited.add((x, y))
        component.append((x, y))

        for dx, dy in directions:
          nx, ny = x + dx, y + dy
          if 0 <= nx < N and 0 <= ny < N and board[nx][ny] == char and (nx, ny) not in visited:
            queue.append((nx, ny))

      components.append((char, component))

  return components

# Remove connected components with size >= K
def remove_large_components(board, N, K):
  components = find_connected_components(board, N)
  for char, component in components:
    if len(component) >= K:
      for x, y in component:
        board[x][y] = '.'

# Main function to solve the problem
def solve(N, K, Q, board, queries):
  for y, x, d in queries:
    y = int(y)
    x = int(x)
    # Step 1: Update the board
    board[y-1][x-1] = d
    # Step 2: Remove large components
    remove_large_components(board, N, K)

  # Output the final board
  return ["".join(row) for row in board]

N, K, Q = map(int, input().split())
board = [list(input()) for _ in range(N)]
queries = [tuple(input().split()) for _ in range(Q)]

result = solve(N, K, Q, board, queries)

for r in result:
  print(r)
```

---

*2023-09-08에 [Tistory](https://berom.tistory.com/506)에 쓴 글을 옮겼습니다.*
