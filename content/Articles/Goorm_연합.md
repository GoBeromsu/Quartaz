---
aliases: []
date_created: 2023-09-04
date_modified: 2023-09-04
permalink: goorm-union
tags:
  - algorithm
  - goorm
  - dfs
title: "Goorm_연합"
---

# 문제

바다 위에 개의 섬이 있다. 섬은 1번부터 N번까지 차례대로 번호가 붙어 있다.  
서로 다른 두 섬 사이를 연결하는 M개의 다리도 있다. 모든 다리는 단방향으로만 이동 가능하고, 어떤 두 섬 사이를 잇는 다리는 정방향 하나, 역방향 하나씩 해서 최대 두 개이다.

어느 날, 섬들 사이에 분쟁이 일어났다. 모든 섬들은 세력을 키우기 위해 다른 섬과 연합을 결성하려고 한다. 임의의 두 섬 와 에 대해, a번 섬에서 b번 섬으로 직접 이동할 수 있는 다리와 b번 섬에서 a번 섬으로 직접 이동할 수 있는 다리가 있으면, 두 섬은 연합을 결성한다.  
이때, a와b 가 연합을 결성하고 b와 c가 연합을 결성했다면 와 역시 위 조건을 만족하지 않더라도 같은 연합에 속해있는 것으로 본다.

다른 섬과 연합을 결성하지 않은 섬들도 각각 하나의 연합에 속해 있는 것으로 볼 때, N개의 섬 사이에 존재하는 연합의 개수를 구해보자.

# 풀이

```python
from collections import defaultdict, deque

N,M = map(int,input().split())

graph = [tuple(map(int,input().split())) for _ in range(M)]

def find_union_iterative(N, M, graph):
	# Step 1: Initialize the graph
	g = defaultdict(set)
	for a, b in graph:
			g[a].add(b)

	# Step 2: Check for bidirectional links and create a union set
	visited = set()
	unions = []
	def dfs_iterative(start_node):
			stack = [start_node]
			current_union = set()
			while stack:
					node = stack.pop()
					if node not in visited:
							visited.add(node)
							current_union.add(node)
							for neighbor in g[node]:
									if neighbor not in visited and node in g[neighbor]:
											stack.append(neighbor)
			return current_union

	for node in range(1, N + 1):
			if node not in visited:
					current_union = dfs_iterative(node)
					unions.append(current_union)

	# Step 3: Return the number of unions
	return len(unions)
print(find_union_iterative(N, M, graph))
```

## 문제 분석

- 연합의 갯수를 구하라
- 섬은 1번부터 N번까지 차례대로 번호가 붙어있다
- 다리
  - 서로 다른 두 섬 사이를 연결하는 M개의 다리가 있다
  - 모든 다리는 단방향으로만 이동 가능하다 (정방향, 역방향 이렇게 2개까지 가능)
- 연합 조건
  - a와 b 상호 간 그래프로 연결이 되어 있으면 연합이다
  - 같은 맥락으로, 연속적인 a-b-c는 하나의 연합이 될 수 있다

## 해설

그래프 내에서 양방향으로 연결된 노드의 그룹(Union)의 개수를 찾는게 핵심이다.

1. 그래프의 정보를 입력 받고, 이를 defaultdict를 사용하여 표현합니다
2. 깊이 우선 탐색(DFS)를 반복적으로 수행하여 각 노드가 속한 Union을 찾습니다
3. 찾아낸 Union의 갯수를 반환합니다

---

*2023-09-04에 [Tistory](https://berom.tistory.com/498)에 쓴 글을 옮겼습니다.*
