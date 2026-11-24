---
aliases: []
date_created: 2023-12-12
date_modified: 2023-12-12
permalink: boj-2573
tags:
  - algorithm
  - baekjoon
  - bfs
title: "Baekjoon_2573"
---

지구 온난화로 인하여 북극의 빙산이 녹고 있다.  
빙산을 그림 1과 같이 2차원 배열에 표시한다고 하자.  
빙산의 각 부분별 높이 정보는 배열의 각 칸에 양의 정수로 저장된다.  
빙산 이외의 바다에 해당되는 칸에는 0이 저장된다. 그림 1에서 빈칸은 모두 0으로 채워져 있다고 생각한다.

한 덩어리의 빙산이 주어질 때, **이 빙산이 두 덩어리 이상으로 분리되는 최초의 시간(년)을 구하는 프로그램을 작성하시오**

만일 전부 다 녹을 때까지 두 덩어리 이상으로 분리되지 않으면 프로그램은 0을 출력한다.

## 풀이

```python
from collections import deque

N, M = map(int,input().split())
m = []
for _ in range(N):
	row = list(map(int, input().split()))
	m.append(row)

def melt():
    melt_list = []
    for i in range(N):
        for j in range(M):
            if m[i][j] > 0:
                iceCount = 0
                for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                    nx, ny = i + dx, j + dy
                    if 0 <= nx < N and 0 <= ny < M and m[nx][ny] == 0:
                        iceCount += 1
                melt_list.append((i, j, iceCount))
    for x, y, ic in melt_list:
        m[x][y] = max(m[x][y] - ic, 0)

def bfs(i, j, visited):
    q = deque([(i, j)])
    visited[i][j] = True
    while q:
        x, y = q.popleft()
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < N and 0 <= ny < M and m[nx][ny] > 0 and not visited[nx][ny]:
                q.append((nx, ny))
                visited[nx][ny] = True

def count_icebergs():
    visited = [[False for _ in range(M)] for _ in range(N)]
    count = 0
    for i in range(N):
        for j in range(M):
            if m[i][j] > 0 and not visited[i][j]:
                bfs(i, j, visited)
                count += 1
    return count

cnt = 0
while True:
    cnt += 1
    melt()  # 빙산 녹이기
    icebergs = count_icebergs()  # 빙산 덩어리 수 세기

    if icebergs >= 2:
        print(cnt)
        break
    if icebergs == 0:  # 전체 빙산이 녹았을 경우
        print(0)
        break
```

- 주변에 0이 있는 만큼 줄어든다
- 목적 : 빙산이 두 덩어리 이상으로 분리 되는 최초의 시간(년)
- [BFS](https://berom.tistory.com/535) 로 판단 한 이유

  - 빙산이 녹는 것을 탐지 할 때 Level 단위로 측정을 하면 효율적이라 생각했다
  - 추후 녹을 얼음을 한 번에 지워야 하기 때문
- 주변의 빙산을 모두 체크하고 한 번에 녹이자

  - (x,y,0의 갯수)로 큐에 넣어서 줄이면 될 듯

빙산이 쪼개지는 날짜를 체크해야 하기 때문에 While 문을 1번 순회 하는 것이 하루라 생각을 했다  
빙산을 녹이고, 빙산 덩어리의 수를 카운트하는 방식이다

```python
def bfs(i, j, visited):
    q = deque([(i, j)])
    visited[i][j] = True
    while q:
        x, y = q.popleft()
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < N and 0 <= ny < M and m[nx][ny] > 0 and not visited[nx][ny]:
                q.append((nx, ny))
                visited[nx][ny] = True
```

[BFS](https://berom.tistory.com/535) 를 할 때는 상하좌우를 탐지해서 연결된 빙하들을 찾아 갯수를 카운팅 한다

```python
def melt():
    melt_list = []
    for i in range(N):
        for j in range(M):
            if m[i][j] > 0:
                iceCount = 0
                for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                    nx, ny = i + dx, j + dy
                    if 0 <= nx < N and 0 <= ny < M and m[nx][ny] == 0:
                        iceCount += 1
                melt_list.append((i, j, iceCount))
    for x, y, ic in melt_list:
        m[x][y] = max(m[x][y] - ic, 0)
```

빙하를 녹이는 부분을 전체 순회를 해서 녹일 량을 측정하고, 한 번에 녹였다  
한 번에 녹이지 않으면, 연속적으로 빙하가 우르르 녹아버리는 문제가 발생한다

### 최적화 코드 : 빙산 위치 추적

```python
from collections import deque

N, M = map(int, input().split())
m = []
icebergs = []  # 빙산의 위치를 저장하는 리스트

for i in range(N):
    row = list(map(int, input().split()))
    for j, val in enumerate(row):
        if val > 0:
            icebergs.append((i, j))  # 빙산의 위치 추가
    m.append(row)

def melt():
    global icebergs
    new_icebergs = []
    melt_list = []
    for x, y in icebergs:
        iceCount = 0
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < N and 0 <= ny < M and m[nx][ny] == 0:
                iceCount += 1
        melt_list.append((x, y, iceCount))
        if m[x][y] - iceCount > 0:  # 빙산이 남아있으면 새 위치 리스트에 추가
            new_icebergs.append((x, y))

    for x, y, ic in melt_list:
        m[x][y] = max(m[x][y] - ic, 0)

    icebergs = new_icebergs  # 빙산 위치 업데이트

def bfs(i, j, visited):
    q = deque([(i, j)])
    visited[i][j] = True
    while q:
        x, y = q.popleft()
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < N and 0 <= ny < M and m[nx][ny] > 0 and not visited[nx][ny]:
                q.append((nx, ny))
                visited[nx][ny] = True

def count_icebergs():
    visited = [[False for _ in range(M)] for _ in range(N)]
    count = 0
    for x, y in icebergs:
        if not visited[x][y]:
            bfs(x, y, visited)
            count += 1
    return count

cnt = 0
while True:
    cnt += 1
    melt()  # 빙산 녹이기

    if not icebergs:  # 빙산이 전부 녹았을 경우
        print(0)
        break

    icebergs_count = count_icebergs()  # 빙산 덩어리 수 세기

    if icebergs_count >= 2:
        print(cnt)
        break
```

## 레퍼런스

- 🗂 파이썬 deque 사용법

---

*2023-12-12에 [Tistory](https://berom.tistory.com/548)에 쓴 글을 옮겼습니다.*
