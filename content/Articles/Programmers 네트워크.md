---
aliases: []
date_created: 2023-11-24
date_modified: 2023-11-24
permalink: programmers-network
tags:
  - algorithm
  - programmers
  - dfs
title: "Programmers 네트워크"
---

네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다.

예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.

컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

## 제한사항

- 컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
- 각 컴퓨터는 0부터 `n-1`인 정수로 표현합니다.
- i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
- computer[i][i]는 항상 1입니다.

## 풀이

입력을 보면, 노드의 갯수와 각 네트워크에 대해서 연결 되었는지 여부를 알려준다

[DFS](https://berom.tistory.com/534) 문제라 생각하는데 그 이유는 네트워크 토폴로지를 먼저 구성하고 제외하는 형식으로 탐색을 하는 것이 효율적이라 생각했기 때문이다

리스트로 주어지는 접근 여부를 그래프로 먼저 만들어야겠다

```python
from collections import defaultdict
from heapq import heappop,heappush

def solution(n, computers):
    answer=0
    cs = defaultdict(set)

    for i,computer in enumerate(computers):

        for node,check in enumerate(computer):
            if check==1 and i!=node:
                cs[i].add(node)
    visited = [False] * n

    for i in range(n):
        if visited[i]:
            continue
        nodes = [i]

        while nodes:

            node= heappop(nodes)
            visited[node] = True

            for c in cs[node]:
                if visited[c]:
                    continue
                heappush(nodes,c)
        answer+=1

    for v in visited:
        if v ==False:
            answer+=1
    return answer
```

### 최적화

1. **heapq 모듈의 사용**: `heapq`를 사용하여 노드를 탐색하는 것은 이 문제에서 최적의 선택이 아닙니다. 그래프 탐색에서는 일반적으로 `queue` (너비 우선 탐색) 또는 `stack` (깊이 우선 탐색)을 사용합니다. `heapq`는 최소 힙을 구현하는데, 이 문제에서는 특별한 순서가 필요하지 않습니다.
2. **네트워크 카운트 방식**: 마지막에 `visited` 리스트를 다시 확인하여 네트워크 개수를 추가하는 것은 불필요합니다. 이미 모든 노드를 순회하면서 네트워크를 카운트했기 때문입니다.
3. **그래프 구축**: `defaultdict`를 사용하여 그래프를 구축하는 것은 적절합니다. 하지만 더 효율적인 방법이 있을 수 있습니다.

```python
def optimized_solution(n, computers):
    def dfs(node):
        # 이미 방문한 노드라면 반환
        if visited[node]:
            return
        # 현재 노드를 방문 처리
        visited[node] = True
        # 모든 노드를 순회하며 연결된 노드를 탐색
        for neighbor in range(n):
            # 연결된 노드이고 아직 방문하지 않았다면 DFS 수행
            if computers[node][neighbor] == 1 and not visited[neighbor]:
                dfs(neighbor)

    answer = 0
    visited = [False] * n  # 방문 여부를 체크하는 리스트

    # 모든 노드에 대해 반복
    for i in range(n):
        if not visited[i]:
            # 방문하지 않은 노드에서 DFS 시작
            dfs(i)
            # 새로운 네트워크 발견
            answer += 1

    return answer
```

이 코드는 깊이 우선 탐색(DFS)을 사용하여 네트워크를 탐색하고 카운트합니다. DFS는 일반적으로 그래프 문제에 효율적이며, 복잡도를 줄이는 데 도움이 됩니다.

최적화된 코드를 사용하여 예시 데이터로 테스트한 결과, 네트워크의 개수는 `2`로 나타났습니다. 이 예시에서는 3개의 컴퓨터가 있으며, 첫 번째와 두 번째 컴퓨터가 서로 연결되어 있고, 세 번째 컴퓨터는 독립적인 네트워크를 형성합니다.

최적화된 코드는 다음과 같이 작동합니다:

1. **깊이 우선 탐색(DFS) 함수 정의**: `dfs` 함수는 주어진 노드에서 시작하여 모든 연결된 노드를 방문합니다. 방문한 노드는 `visited` 리스트에 표시됩니다.
2. **네트워크 카운트**: 모든 노드에 대해 반복하며, 아직 방문하지 않은 노드에서 DFS를 시작합니다. DFS가 한 번 실행될 때마다 새로운 네트워크가 발견되었다고 간주하고 `answer`를 1 증가시킵니다.
3. **결과 반환**: 모든 노드를 순회한 후, `answer`에 저장된 네트워크의 개수를 반환합니다.

이 최적화된 방법은 `heapq`를 사용하지 않고, 불필요한 탐색을 최소화하여 효율성을 높입니다.

---

*2023-11-24에 [Tistory](https://berom.tistory.com/539)에 쓴 글을 옮겼습니다.*
