---
aliases: []
date_created: 2023-09-17
date_modified: 2023-09-17
permalink: boj-21736
tags:
  - algorithm
  - baekjoon
  - bfs
title: "Baekjoon_21736"
---

## 헌내기는 친구가 필요해 (Baekjoon 21736)

### 문제

2020년에 입학한 헌내기 도연이가 있다. 도연이는 비대면 수업 때문에 학교에 가지 못해 학교에 아는 친구가 없었다.

드디어 대면 수업을 하게 된 도연이는 어서 캠퍼스 내의 사람들과 친해지고 싶다.  
도연이가 다니는 대학의 캠퍼스는 N X M 크기이며 캠퍼스에서 이동하는 방법은 벽이 아닌 상하좌우로 이동하는 것이다. 예를 들어, 도연이가 (x, y)에 있다면 이동할 수 있는 곳은 (x+1, y), (x, y+1), (x-1, y), (x, y-1)이다. 단, 캠퍼스의 밖으로 이동할 수는 없다.

불쌍한 도연이를 위하여 캠퍼스에서 도연이가 만날 수 있는 사람의 수를 출력하는 프로그램을 작성해보자.

### 입력

첫째 줄에는 캠퍼스의 크기를 나타내는 두 정수 N (1 <= N <= 600), M (1 <= M <= 600)이 주어진다.  
둘째 줄부터 N개의 줄에는 캠퍼스의 정보들이 주어진다. O는 빈 공간, X는 벽, I는 도연이, P는 사람이다. I가 한 번만 주어짐이 보장된다.

### 출력

첫째 줄에 도연이가 만날 수 있는 사람의 수를 출력한다. 단, 아무도 만나지 못한 경우 TT를 출력한다.

### 풀이

```python
from collections import deque

def find_people(N, M, campus):
    # Initialize variables to keep track of 도연이's position and number of people met
    doyeon_x, doyeon_y = 0, 0
    people_count = 0

    # Search for 도연이's initial position
    for i in range(N):
        for j in range(M):
            if campus[i][j] == 'I':
                doyeon_x, doyeon_y = i, j
                break

    # Directions for movement (Up, Down, Left, Right)
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    # Initialize BFS queue and visited set
    queue = deque([(doyeon_x, doyeon_y)])
    visited = set([(doyeon_x, doyeon_y)])

    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            # Check if the next move is within the campus boundary
            if nx < 0 or nx >= N or ny < 0 or ny >= M:
                continue

            # Check if the next position is a wall or already visited
            if campus[nx][ny] == 'X' or (nx, ny) in visited:
                continue

            # Update visited set and queue
            visited.add((nx, ny))
            queue.append((nx, ny))

            # Check if the next position is a person
            if campus[nx][ny] == 'P':
                people_count += 1

    return people_count if people_count > 0 else 'TT'

# Read N, M and campus dynamically
N, M = map(int, input().split())
campus = [input() for _ in range(N)]

# Call the function and print the result
print(find_people(N, M, campus))
```

---

*2023-09-17에 [Tistory](https://berom.tistory.com/512)에 쓴 글을 옮겼습니다.*
