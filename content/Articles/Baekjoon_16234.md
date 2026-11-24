---
aliases: []
date_created: 2023-12-11
date_modified: 2023-12-11
permalink: boj-16234
tags:
  - algorithm
  - baekjoon
  - bfs
title: "Baekjoon_16234"
---

# Baekjoon 16234

N×N크기의 땅이 있고, 땅은 1×1개의 칸으로 나누어져 있다.  
각각의 땅에는 나라가 하나씩 존재하며, r행 c열에 있는 나라에는 A[r][c]명이 살고 있다.  
인접한 나라 사이에는 국경선이 존재한다.  
모든 나라는 1×1 크기이기 때문에, 모든 국경선은 정사각형 형태이다.

오늘부터 인구 이동이 시작되는날이다.

인구 이동은 하루 동안 다음과 같이 진행되고, 더 이상 아래 방법에 의해 인구 이동이 없을 때까지 지속된다.

- 국경선을 공유하는 두 나라의 인구 차이가 L명 이상, R명 이하라면, 두 나라가 공유하는 국경선을 오늘 하루 동안 연다.
- 위의 조건에 의해 열어야하는 국경선이 모두 열렸다면, 인구 이동을 시작한다.
- 국경선이 열려있어 인접한 칸만을 이용해 이동할 수 있으면, 그 나라를 오늘 하루 동안은 연합이라고 한다.
- 연합을 이루고 있는 각 칸의 인구수는 (연합의 인구수) / (연합을 이루고 있는 칸의 개수)가 된다. 편의상 소수점은 버린다.
- 연합을 해체하고, 모든 국경선을 닫는다.

각 나라의 인구수가 주어졌을 때, 인구 이동이 며칠 동안 발생하는지 구하는 프로그램을 작성하시오.

## 입/출력

### 입력

첫째 줄에 N, L, R이 주어진다. (1 ≤ N ≤ 50, 1 ≤ L ≤ R ≤ 100)

둘째 줄부터 N개의 줄에 각 나라의 인구수가 주어진다. r행 c열에 주어지는 정수는 A[r][c]의 값이다. (0 ≤ A[r][c] ≤ 100)

인구 이동이 발생하는 일수가 2,000번 보다 작거나 같은 입력만 주어진다.

### 출력

인구 이동이 며칠 동안 발생하는지 첫째 줄에 출력한다.

## 풀이

- 국경선을 공유하는 두 나라의 인구 차이가 L 이상, R명 이하라면, 두 나라가 공유하는 국경선을 하루 동안 연다
  - 열려야하는 모든 국경선이 열렸다면 인구 이동을 시작한다
  - 국경선이 열려 있어 인접한 칸만을 이용해 이동 할 수 있으며, 그 나라를 하루 동안 연합 이라고 한다
  - 연합을 이루고 있는 각 칸의 인구 수는 (연합의 인구수)/연합을 이루고 있는 칸의 개수가 된다
    - 편의상 소수 점은 버린다
  - 연합을 해체하고 모든 국경선을 닫는다
- 각 나라의 인구 수가 주어졌을 때 인구 이동이 며칠 동안 발생하는지 구하는 프로그램을 작성하시오

### BFS를 이용한 연합 탐색

BFS는 특정 시작점에서 출발하여 주변을 단계적으로 탐색하는 방식으로, 연합을 형성할 수 있는 나라들을 효율적으로 찾을 수 있게 합니다.

[BFS](https://berom.tistory.com/535) 로 풀어야겠다 싶었던게, 국경선이 열리고 연합을 먼저 체크하고 인구 수를 분배하기 때문이었습니다

```python
from collections import deque

def bfs(x, y):
    """ 연합 찾기 및 인구 계산 """
    union = [(x, y)]
    queue = deque(union)
    total_population = m[x][y]  # 연합의 총 인구수
    countries = 1  # 연합을 이루는 나라의 수

    while queue:
        x, y = queue.popleft()
        for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny]:
                if L <= abs(m[x][y] - m[nx][ny]) <= R:
                    visited[nx][ny] = True
                    queue.append((nx, ny))
                    union.append((nx, ny))
                    total_population += m[nx][ny]
                    countries += 1

    new_population = total_population // countries
    return union, new_population
```

이 함수는 연합을 이루는 `나라들의 좌표와 새로운 인구 수`를 반환합니다.  
각 나라의 인구 수가 주어진 L과 R 사이일 경우, 해당 나라는 연합에 포함됩니다.

### 인구 이동

모든 연합이 확인되면, 각 연합 내에서 인구를 재분배합니다.  
인구 이동이 발생하지 않을 때까지 이 과정을 반복합니다

```python
N, L, R = map(int, input().split())
m = [list(map(int, input().split())) for _ in range(N)]

cnt = 0  # 인구 이동이 발생한 총 일수
while True:
    visited = [[False] * N for _ in range(N)]
    is_moved = False

    for i in range(N):
        for j in range(N):
            if not visited[i][j]:
                visited[i][j] = True
                union, new_population = bfs(i, j)
                if len(union) > 1:
                    for x, y in union:
                        m[x][y] = new_population
                    is_moved = True

    if not is_moved:
        break
    cnt += 1

print(cnt)
```

이 코드는 연합의 형성과 해체, 인구 이동을 깔끔하게 처리합니다.  
`while` 루프는 더 이상 인구 이동이 발생하지 않을 때 종료되며, 각 반복마다 인구 이동이 발생한 일수를 증가시킵니다.

## 정답 코드

```python
from collections import deque
N, L, R = map(int, input().split())

m = []
for _ in range(N):
    m.append(list(map(int, input().split())))
cnt = 0

def bfs(x, y):
    union = []
    union.append((x, y))
    q = deque()
    q.append((x, y))
    visited[x][y] = True
    tp = m[x][y]
    countries = 1

    while q:
        x, y = q.popleft()
        for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny]:
                if L <= abs(m[x][y] - m[nx][ny]) <= R:
                    visited[nx][ny] = True
                    q.append((nx, ny))
                    union.append((nx, ny))
                    tp += m[nx][ny]
                    countries += 1
    return union, tp, countries

while True:
    visited = [[False] * N for _ in range(N)]
    is_moved = False
    unions = []

    for i in range(N):
        for j in range(N):
            if not visited[i][j]:
                union, tp, countries = bfs(i, j)
                if countries > 1:
                    unions.append((union, tp // countries))
                    is_moved = True

    for union, new_population in unions:
        for x, y in union:
            m[x][y] = new_population

    if not is_moved:
        break
    cnt += 1

print(cnt)
```

### 최적화 된 코드

```python
from collections import deque

# 상수 정의
DIRECTIONS = [(1, 0), (-1, 0), (0, 1), (0, -1)]

def find_union(x, y):
    """ 연합을 찾는 함수 """
    union = [(x, y)]
    queue = deque(union)
    total_population = m[x][y]
    countries = 1

    while queue:
        x, y = queue.popleft()
        for dx, dy in DIRECTIONS:
            nx, ny = x + dx, y + dy
            if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny]:
                if L <= abs(m[x][y] - m[nx][ny]) <= R:
                    visited[nx][ny] = True
                    queue.append((nx, ny))
                    union.append((nx, ny))
                    total_population += m[nx][ny]
                    countries += 1

    return union, total_population // countries

N, L, R = map(int, input().split())
m = [list(map(int, input().split())) for _ in range(N)]
cnt = 0

while True:
    visited = [[False] * N for _ in range(N)]
    is_moved = False
    unions = []

    for i in range(N):
        for j in range(N):
            if not visited[i][j]:
                visited[i][j] = True
                union, new_population = find_union(i, j)
                if len(union) > 1:
                    unions.append((union, new_population))
                    is_moved = True

    # 인구 이동 처리
    for union, new_population in unions:
        for x, y in union:
            m[x][y] = new_population

    if not is_moved:
        break
    cnt += 1

print(cnt)
```

---

*2023-12-11에 [Tistory](https://berom.tistory.com/547)에 쓴 글을 옮겼습니다.*
