---
aliases: []
date_created: 2023-08-30
date_modified: 2023-08-30
permalink: goorm-power-plant-2
tags:
  - algorithm
  - goorm
  - bfs
title: "Goorm_발전기(2)"
---

## 문제

![구름톤 챌린지 발전기 (2) 문제 설명](/_attachments/tistory-492-01.png)

## 풀이

```python
from collections import deque

def bfs(n,k,grid):
	dic = {}
	directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
	m = [[False for _ in range(n)] for _ in range(n)]

	for i in range(n):
		for j in range(n):
			current = grid[i][j]
			if current not in dic:
				dic[current]=0

			count=1
			if not m[i][j]:
				m[i][j]=True
				queue = deque([(i, j)])

				while queue:
					x, y = queue.popleft()
					for dx, dy in directions:
							nx, ny = x + dx, y + dy
							if 0 <= nx < n and 0 <= ny < n and not m[nx][ny]:

									if grid[nx][ny] == current:
											m[nx][ny] = True
											queue.append((nx, ny))
											count+=1
				if count>=k:
					dic[current]+=1
	result = sorted(dic.items(), key=lambda x: (-x[1], -x[0]))
	return result[0][0]
	# return m

# 동적 입력 받기
n,k = map(int,input().split())
grid = [list(map(int, input().split())) for _ in range(n)]
# print(grid)
print(bfs(n,k, grid))
```

즉 단지의 개수가 가장 많은 번호의 유형을 추가하면 된다

BFS 방식으로 문제를 풀었다. 모든 맵을 순회하면서, 새로운 유형의 건물을 만나면 dic에 추가한다

방문하지 않은 곳에 도착했을 때, 해당 건물의 유형과 일치하는 건물을 4 방향에서 찾은 후 점점 넓혀 간다  
모든 탐색이 끝나면, 현재 연결 된 건물들의 수를 k와 비교해서 큰 수를 입력한다

## 관련 검색어

- Union-Find 알고리즘

---

*2023-08-30에 [Tistory](https://berom.tistory.com/492)에 쓴 글을 옮겼습니다.*
