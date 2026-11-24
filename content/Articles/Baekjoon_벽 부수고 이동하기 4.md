---
aliases: []
date_created: 2023-10-06
date_modified: 2023-10-06
permalink: boj-16946
tags:
  - algorithm
  - baekjoon
  - bfs
title: "Baekjoon_벽 부수고 이동하기 4"
---

## 문제

N×M의 행렬로 표현되는 맵이 있다. 맵에서 0은 이동할 수 있는 곳을 나타내고, 1은 이동할 수 없는 벽이 있는 곳을 나타낸다. 한 칸에서 다른 칸으로 이동하려면, 두 칸이 인접해야 한다. 두 칸이 변을 공유할 때, 인접하다고 한다.

각각의 벽에 대해서 다음을 구해보려고 한다.

- 벽을 부수고 이동할 수 있는 곳으로 변경한다.
- 그 위치에서 이동할 수 있는 칸의 개수를 세어본다.

한 칸에서 이동할 수 있는 칸은 상하좌우로 인접한 칸이다.

### 입력

첫째 줄에 N(1 ≤ N ≤ 1,000), M(1 ≤ M ≤ 1,000)이 주어진다. 다음 N개의 줄에 M개의 숫자로 맵이 주어진다.

### 출력

맵의 형태로 정답을 출력한다. 원래 빈 칸인 곳은 0을 출력하고, 벽인 곳은 이동할 수 있는 칸의 개수를 10으로 나눈 나머지를 출력한다.

## 예제

### 예제 입력

```text
4 5
11001
00111
01010
10101
```

### 예제 출력 2

```text
46003
00732
06040
50403
```

## 풀이

```python
from collections import deque

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
```

deque 자료구조를 사용하며, dx와 dy는 각각 상 하 좌 우로 움직일 때 x와 y 좌표에 더해주는 값을 지정합니다

```python
def bfs(x, y, board, visited, area_id):
    n, m = len(board), len(board[0])
    cnt = 1  # 연결된 영역의 크기
    queue = deque([(x, y)])
    visited[x][y] = area_id

    while queue:
        cx, cy = queue.popleft()

        for i in range(4):
            nx, ny = cx + dx[i], cy + dy[i]

            if 0 <= nx < n and 0 <= ny < m and board[nx][ny] == "0" and visited[nx][ny] == 0:
                visited[nx][ny] = area_id
                queue.append((nx, ny))
                cnt += 1

    return cnt
```

bfs 함수는 주어진 위치에서 시작하여 0으로 이루어진 영역의 크기를 계산합니다  
visited 배열에는 방문한 위치에 해당하는 영역의 Id(area_id)를 저장합니다

```python
n, m = map(int, input().split())
board = [list(input()) for _ in range(n)]
visited = [[0] * m for _ in range(n)]

area = {}  # {영역 ID: 영역의 크기}
area_id = 1

# 먼저 0인 영역의 크기를 미리 계산
for i in range(n):
    for j in range(m):
        if board[i][j] == "0" and visited[i][j] == 0:
            area_size = bfs(i, j, board, visited, area_id)
            area[area_id] = area_size
            area_id += 1
```

맵의 행과 열을 입력 받고, Board는 맵을 저장하고, visited는 방문 여부와 영역 ID를 저장합니다  
area_size를 얻고 나면, area_id : area_size를 맵핑합니다

```python
# 답 계산
for i in range(n):
    for j in range(m):
        if board[i][j] == "1":
            s = 1
            adj_area = set()

            for d in range(4):
                ni, nj = i + dx[d], j + dy[d]

                if 0 <= ni < n and 0 <= nj < m:
                    adj_area.add(visited[ni][nj])

            for adj in adj_area:
                s += area.get(adj, 0)

            print(s % 10, end='')
        else:
            print(0, end='')
    print()
```

마지막으로 각 '1’에 대해서 상하좌우에 있는 ‘0’ 영역들의 크기를 합하여 출력합니다.  
이때 10으로 나눈 나머지만 출력합니다.

---

*2023-10-06에 [Tistory](https://berom.tistory.com/515)에 쓴 글을 옮겼습니다.*
