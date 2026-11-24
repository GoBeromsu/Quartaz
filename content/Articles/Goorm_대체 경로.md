---
aliases: []
date_created: 2023-09-07
date_modified: 2023-09-07
permalink: goorm-alternative-route
tags:
  - algorithm
  - goorm
  - bfs
title: "Goorm_대체 경로"
---

## 문제

플레이어는 1번부터 N번까지의 번호가 붙은 N개의 도시와 M개의 도로가 있는 나라에 살고 있다.  
각 도로는 서로 다른 두 도시를 양방향으로 연결하고 있고, 주어진 도로만을 이용해 임의의 두 도시 사이를 이동하는 것이 가능하다.

플레이어는 차를 타고 S번 도시에서 E번 도시로 이동하려고 한다.  
플레이어가 두 도시 사이를 이동할 때는 항상 가장 작은 수의 도시를 거치는 경로를 따라 이동한다.

예를 들어 아래 그림과 같이 도시와 도로가 주어지고, 플레이어가 1번 도시에서 4번 도시로 이동하려고 할 때는 항상 1 → 3 → 4의 경로를 따라 이동한다.  
이 경우에는 출발 도시와 도착 도시를 포함해 총 세 개의 도시를 거쳐 이동할 수 있다.  
1 → 5 → 2 → 4의 경로로 이동하는 것은 출발 도시와 도착 도시를 포함해 네 개의 도시를 거치는 경로이므로, 플레이어는 해당 경로로는 이동하지 않을 것이다.

항상 가장 작은 수의 도시를 거치는 경로가 유일하지 않을 수 있다. 아래 그림과 같이 도시와 도로가 주어지고, 3번 도시에서 1번 도시로 이동하고자 할 때 가장 작은 수의 도시를 거치는 경로는 3 → 2 → 1과 3 → 4 → 1의 두 개가 있다. 이런 경우에 플레이어는 두 경로 중 아무 경로나 택해서 이동한다

플레이어가 사는 나라에서는 자주 공사를 한다. 일 뒤에는 번 도시에서 하루 동안 공사를 할 예정이다. 어떤 도시에서 공사를 하고 있으면, 그 도시에 연결된 모든 도로를 일시적으로 사용할 수 없다.

어떤 도시에서 공사를 하느냐에 따라 플레이어가 이동해야 하는 경로가 달라질 수 있다. 앞으로 N일 동안 매일 플레이어는 S번 도시에서 E번 도시로 이동한다고 할 때, 각 날마다 플레이어가 이동하는 경로에 포함되는 도시의 수를 구해서 출력해보자.  
단, 출발 도시와 도착 도시에서 공사를 하거나, 두 도시 사이를 이동할 수 없는 경우에는 -1 을 대신 출력한다

## 풀이

```python
from collections import deque

def find_path_through_construction(N, M, S, E, roads):
	# Initialize the graph as an adjacency list
	graph = {i: [] for i in range(1, N+1)}
	for u, v in roads:
			graph[u].append(v)
			graph[v].append(u)

	# Function to find the shortest path from S to E with BFS
	def bfs_shortest_path(graph, start, end, blocked=None):
			visited = {node: False for node in graph.keys()}
			dist = {node: float('inf') for node in graph.keys()}
			dist[start] = 0
			queue = deque([start])
			visited[start] = True

			while queue:
					current = queue.popleft()
					for neighbor in graph[current]:
							if neighbor == blocked or visited[neighbor]:
									continue
							visited[neighbor] = True
							queue.append(neighbor)
							dist[neighbor] = min(dist[neighbor], dist[current] + 1)

			return dist[end] if dist[end] != float('inf') else -1

	# Find the shortest path from S to E without any construction
	shortest_path_length = bfs_shortest_path(graph, S, E)

	result = []
	# Check each day with construction on each city
	for i in range(1, N+1):
			if i == S or i == E:
					result.append(-1)
					continue
			path_length = bfs_shortest_path(graph, S, E, blocked=i)
			if path_length == -1:
					result.append(-1)
			else:
					result.append(path_length + 1)  # Include the destination city in the count
	return result

N,M,S,E = map(int,input().split())
l = [tuple(map(int,input().split())) for _ in range(M)]
for i in find_path_through_construction(N,M,S,E,l):
	print(i)
```

---

*2023-09-07에 [Tistory](https://berom.tistory.com/504)에 쓴 글을 옮겼습니다.*
