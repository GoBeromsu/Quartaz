---
aliases: []
date_created: 2023-09-05
date_modified: 2023-09-05
permalink: goorm-network-analysis
tags:
  - algorithm
  - goorm
  - dfs
title: "Goorm_통신망 분석"
---

# 문제

이 세상에는 수많은 컴퓨터들이 통신망을 통해 서로 연결되어 정보를 교류하고 있다.  
오늘 플레이어는 이 거대한 통신망 중 한 구역을 조사하고자 한다.

플레이어가 조사할 구역에는 N개의 컴퓨터가 있고, M개의 통신 회선이 있다.  
각 컴퓨터는 1번부터 N번까지 번호가 붙어 있고, 통신 회선은 서로 다른 두 컴퓨터를 양방향으로 연결하고 있다.

컴퓨터들은 연결 여부에 따라 여러 개의 컴포넌트로 나뉜다.  
어떤 두 컴퓨터가 통신 회선만을 이용해서 연결되어 있다면 두 컴퓨터는 같은 컴포넌트에 속한다.

플레이어는 여러 개의 컴포넌트 중, 가장 밀도가 높은 컴포넌트를 조사하려고 한다.  
컴포넌트의 밀도는 그 컴포넌트에 포함된 통신 회선의 개수를 컴퓨터의 수로 나눈 값이다.  
주어진 통신 구역을 분석해서, 가장 밀도가 높은 컴포넌트의 정보를 출력해보자.

# 풀이

```python
from collections import defaultdict

def dfs(node, graph, visited, vertex_degree):
    stack = [node]
    component = set()
    degree_sum = 0
    while stack:
        current_node = stack.pop()
        if current_node not in visited:
            visited.add(current_node)
            component.add(current_node)
            degree_sum += vertex_degree.get(current_node, 0)
            stack.extend(graph[current_node] - visited)
    return component, degree_sum

def find_most_dense_component(N, M, edges):
    graph = defaultdict(set)
    vertex_degree = defaultdict(int)

    for a, b in edges:
        graph[a].add(b)
        graph[b].add(a)
        vertex_degree[a] += 1

    visited = set()
    components = []

    for node in range(1, N + 1):
        if node not in visited:
            component, degree_sum = dfs(node, graph, visited, vertex_degree)
            density = degree_sum / len(component)
            components.append((component, density))

    components.sort(key=lambda x: (-x[1], len(x[0]), min(x[0])))
    return ' '.join(map(str, sorted(components[0][0])))

N, M = map(int, input().split())
edges = [tuple(map(int, input().split())) for _ in range(M)]
print(find_most_dense_component(N, M, edges))
```

문제의 핵심을 꼽으라 한다면, 아래 2가지 입니다

- 컴포넌트의 밀도 = 컴포넌트에 포함된 통신 회선의 개수 / 컴퓨터의 수
- 다중 조건 출력
  - 가장 밀도가 높은 컴포넌트를 출력한다.
    - 1을 만족하는 컴포넌트가 여러 개라면, 컴포넌트를 구성하는 컴퓨터의 수가 가장 작은 컴포넌트를 출력한다.
  - 2를 만족하는 컴포넌트가 여러 개라면, 더 작은 번호를 가진 컴퓨터가 있는 컴포넌트를 출력한다.

기본적으로 어제 풀었던 [Goorm_연합](https://berom.tistory.com/498) 문제와 큰 흐름에서 비슷합니다  
단방향 그래프였던게, 양방향 그래프로 바뀌었고, 계산을 할 때 이제 연결 된 노드까지 고려해야하죠

DFS로 문제를 풀어서, 그래프 연결의 용이함을 위해, 노드마다 연결된 간선들을 모두 등록을했습니다  
따라서, 각 노드 별 연결된 그래프를 모두 등록해야했습니다

깊이 우선 탐색을 하면서, 새로 연결된 노드의 탐색이 시작 될 때, 그래프를 더하는 식으로 코드를 작성했습니다

다중 조건 문제는 파이썬의 람다를 이용하니 쉽게 해결 할 수 있었습니다

---

*2023-09-05에 [Tistory](https://berom.tistory.com/501)에 쓴 글을 옮겼습니다.*
