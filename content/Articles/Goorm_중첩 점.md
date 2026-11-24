---
aliases: []
date_created: 2023-09-06
date_modified: 2023-09-06
permalink: goorm-overlapping-points
tags:
  - algorithm
  - goorm
title: "Goorm_중첩 점"
---

## 문제

한 변의 길이가 N인 정사각형이 있다. 플레이어는 이 정사각형 위에 M개의 반직선을 그린 뒤, 두 반직선이 교차하는 점의 수를 세려고 한다.  
플레이어가 반직선을 그리는 과정은 아래와 같다.

1. 반직선을 그리기 시작할 칸 (y,x)를 정한다. (x,y)는 주어진 정사각형을 크기의 정사각형으로 나눴을 때,y 번째 행의 x번째 열에 해당하는 칸이다.
2. 반직선을 그릴 방향 를 정한다.
   - 방향은 상하좌우 중 하나이며, 항상 정사각형 테두리의 가로 혹은 세로와 평행하다.
3. 반직선을 그린다.
   - 반직선은 항상 시작 칸의 테두리에서부터 시작하며, 같은 칸을 지나는 평행한 직선이 서로 만나지 않도록 그린다.

## 풀이

```python
def count_intersections(N, M, lines):
	vertical = [[0]*N for _ in range(N)]
	horizontal = [[0]*N for _ in range(N)]

	for y, x, d in lines:
			y = int(y)
			x = int(x)
			y -= 1
			x -= 1
			if d == 'R':
					for i in range(x, N):
							vertical[y][i] += 1
			elif d == 'L':
					for i in range(0, x+1):
							vertical[y][i] += 1
			elif d == 'U':
					for i in range(0, y+1):
							horizontal[i][x] += 1
			elif d == 'D':
					for i in range(y, N):
							horizontal[i][x] += 1

	total_intersections = 0
	for i in range(N):
			for j in range(N):
					total_intersections += vertical[i][j] * horizontal[i][j]

	return total_intersections

N,M = map(int,input().split())
lines = [tuple(input().split()) for _ in range(M)]

print(count_intersections(N, M, lines))
```

---

*2023-09-06에 [Tistory](https://berom.tistory.com/502)에 쓴 글을 옮겼습니다.*
