---
aliases: []
date_created: 2023-08-31
date_modified: 2023-08-31
permalink: goorm-small-node
tags:
  - algorithm
  - goorm
title: "Goorm _작은 노드"
---

## 문제

N개의 노드와 M개의 양방향 간선으로 이루어진 그래프가 있다. 이 그래프의 노드는 1번부터 N번까지 번호가 붙어 있다. 양끝 노드가 동일한 간선은 주어지지 않는다.

플레이어는 아래 규칙에 따라 그래프에서 이동하려고 한다. 플레이어는 처음에 K 번 노드에 있다.

한 번 방문한 노드는 다시 방문할 수 없다. 시작 노드도 방문한 것으로 간주한다.  
현재 노드와 간선으로 직접 연결된 다른 노드 중, 방문할 수 있으면서 번호가 가장 작은 노드로 이동한다.  
플레이어가 더 이상 이동할 수 있는 노드가 없을 때, 방문한 서로 다른 노드의 개수와 마지막 노드 번호를 구해보자.

## 풀이

```python
from collections import defaultdict

def solve(N, M, K, edges):
    # Initialize the adjacency list
    adj_list = defaultdict(list)

    for u, v in edges:
        adj_list[u].append(v)
        adj_list[v].append(u)

    # Sort the adjacency list
    for node in adj_list.keys():
        adj_list[node].sort()

    # Initialize visited set and start node
    visited = set()
    current_node = K
    visited.add(current_node)

    # Start the traversal
    while True:
        found_next_node = False
        for neighbor in adj_list[current_node]:
            if neighbor not in visited:
                current_node = neighbor
                visited.add(current_node)
                found_next_node = True
                break
        if not found_next_node:
            break

    return len(visited), current_node

# Test the function
N, M, K = map(int,input().split())
edges = []
for _ in range(M):
	u, v = map(int, input().split())
	edges.append((u, v))

x,y= solve(N, M, K, edges)
print(x,y)
```

---

*2023-08-31에 [Tistory](https://berom.tistory.com/494)에 쓴 글을 옮겼습니다.*
