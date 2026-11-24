---
aliases: []
date_created: 2023-11-23
date_modified: 2023-11-23
permalink: programmers-choose-hiking-course
tags:
  - algorithm
  - programmers
  - dijkstra
title: "Programmers_등산 코스 정하기"
---

XX산은 `n`개의 지점으로 이루어져 있습니다.  
각 지점은 1부터 `n`까지 번호가 붙어있으며, 출입구, 쉼터, 혹은 산봉우리입니다.  
각 지점은 양방향 통행이 가능한 등산로로 연결되어 있으며, 서로 다른 지점을 이동할 때 이 등산로를 이용해야 합니다.

이때, 등산로별로 이동하는데 일정 시간이 소요됩니다.

등산코스는 방문할 지점 번호들을 순서대로 나열하여 표현할 수 있습니다.  
예를 들어 `1-2-3-2-1` 으로 표현하는 등산코스는 1번지점에서 출발하여 2번, 3번, 2번, 1번 지점을 순서대로 방문한다는 뜻입니다.  
등산코스를 따라 이동하는 중 쉼터 혹은 산봉우리를 방문할 때마다 휴식을 취할 수 있으며, 휴식 없이 이동해야 하는 시간 중 가장 긴 시간을 해당 등산코스의 `intensity`라고 부르기로 합니다.

당신은 XX산의 출입구 중 한 곳에서 출발하여 산봉우리 중 한 곳만 방문한 뒤 다시 **원래의** 출입구로 돌아오는 등산코스를 정하려고 합니다.

다시 말해, 등산코스에서 출입구는 **처음과 끝에 한 번씩**, 산봉우리는 **한 번만** 포함되어야 합니다.  
당신은 이러한 규칙을 지키면서 `intensity`가 최소가 되도록 등산코스를 정하려고 합니다.

다음은 XX산의 지점과 등산로를 그림으로 표현한 예시입니다.  
![등산코스 예시 그림 1](/_attachments/tistory-533-01.png)

- 위 그림에서 원에 적힌 숫자는 지점의 번호를 나타내며, 1, 3번 지점에 출입구, 5번 지점에 산봉우리가 있습니다.
  - 각 선분은 등산로를 나타내며, 각 선분에 적힌 수는 이동 시간을 나타냅니다.
  - 예를 들어 1번 지점에서 2번 지점으로 이동할 때는 3시간이 소요됩니다.

위의 예시에서 `1-2-5-4-3` 과 같은 등산코스는 처음 출발한 원래의 출입구로 돌아오지 않기 때문에 잘못된 등산코스입니다.  
또한 `1-2-5-6-4-3-2-1` 과 같은 등산코스는 코스의 처음과 끝 외에 3번 출입구를 방문하기 때문에 잘못된 등산코스입니다.

등산코스를 `3-2-5-4-3` 과 같이 정했을 때의 이동경로를 그림으로 나타내면 아래와 같습니다.  
![등산코스 예시 그림 2](/_attachments/tistory-533-02.png)  
이때, 휴식 없이 이동해야 하는 시간 중 가장 긴 시간은 5시간입니다. 따라서 이 등산코스의 `intensity`는 5입니다.

등산코스를 `1-2-4-5-6-4-2-1` 과 같이 정했을 때의 이동경로를 그림으로 나타내면 아래와 같습니다.  
![등산코스 예시 그림 3](/_attachments/tistory-533-03.png)  
이때, 휴식 없이 이동해야 하는 시간 중 가장 긴 시간은 3시간입니다.  
따라서 이 등산코스의 `intensity`는 3이며, 이 보다 `intensity`가 낮은 등산코스는 없습니다.

XX산의 지점 수 `n`, 각 등산로의 정보를 담은 2차원 정수 배열 `paths`, 출입구들의 번호가 담긴 정수 배열 `gates`, 산봉우리들의 번호가 담긴 정수 배열 `summits`가 매개변수로 주어집니다.  
이때, `intensity`가 최소가 되는 등산코스에 포함된 산봉우리 번호와 `intensity`의 최솟값을 차례대로 정수 배열에 담아 return 하도록 solution 함수를 완성해주세요.  
`intensity`가 최소가 되는 등산코스가 여러 개라면 그중 산봉우리의 번호가 가장 낮은 등산코스를 선택합니다.

# 제한사항

- 2 ≤ `n` ≤ 50,000
- `n` - 1 ≤ `paths`의 길이 ≤ 200,000
- `paths`의 원소는 `[i, j, w]` 형태입니다.
  - `i`번 지점과 `j`번 지점을 연결하는 등산로가 있다는 뜻입니다.
  - `w`는 두 지점 사이를 이동하는 데 걸리는 시간입니다.
  - 1 ≤ `i` < `j` ≤ `n`
  - 1 ≤ `w` ≤ 10,000,000
  - 서로 다른 두 지점을 직접 연결하는 등산로는 최대 1개입니다.
- 1 ≤ `gates`의 길이 ≤ `n`
  - 1 ≤ `gates`의 원소 ≤ `n`
  - `gates`의 원소는 해당 지점이 출입구임을 나타냅니다.
- 1 ≤ `summits`의 길이 ≤ `n`
  - 1 ≤ `summits`의 원소 ≤ `n`
  - `summits`의 원소는 해당 지점이 산봉우리임을 나타냅니다.
- 출입구이면서 동시에 산봉우리인 지점은 없습니다.
- `gates`와 `summits`에 등장하지 않은 지점은 모두 쉼터입니다.
- 임의의 두 지점 사이에 이동 가능한 경로가 항상 존재합니다.
- return 하는 배열은 `[산봉우리의 번호, intensity의 최솟값]` 순서여야 합니다.

# 풀이

```python
from collections import defaultdict
from heapq import heappop, heappush

def solution(n, paths, gates, summits):
    def get_min_intensity():
        pq = []  # (intensity, 현재 위치)
        visited = [10000001] * (n + 1)

        # 모든 출발지를 우선순위 큐에 삽입
        for gate in gates:
            heappush(pq, (0, gate))
            visited[gate] = 0

        # 산봉우리에 도착할 때까지 반복
        while pq:
            intensity, node = heappop(pq)

            # 산봉우리이거나 더 큰 intensity라면 더 이상 이동하지 않음
            if node in summits_set or intensity > visited[node]:
                continue

            # 이번 위치에서 이동할 수 있는 곳으로 이동
            for weight, next_node in graph[node]:
                # next_node 위치에 더 작은 intensity로 도착할 수 있다면 큐에 넣지 않음
                # (출입구는 이미 0으로 세팅되어있기 때문에 방문하지 않음)
                new_intensity = max(intensity, weight)
                if new_intensity < visited[next_node]:
                    visited[next_node] = new_intensity
                    heappush(pq, (new_intensity, next_node))

        # 구한 intensity 중 가장 작은 값 반환
        min_intensity = [0, 10000001]
        for summit in summits:
            if visited[summit] < min_intensity[1] or (visited[summit] == min_intensity[1] and summit < min_intensity[0]):
                min_intensity[0] = summit
                min_intensity[1] = visited[summit]

        return min_intensity

    summits.sort()
    summits_set = set(summits)
    # graph: 등산로 정보
    graph = defaultdict(list)
    for i, j, w in paths:
        graph[i].append((w, j))
        graph[j].append((w, i))

    return get_min_intensity()
```

## 1. 필요한 라이브러리 임포트

```python
from collections import defaultdict
from heapq import heappop, heappush
```

- `defaultdict`: 사전 기본값을 사용하여 존재하지 않는 키에 대한 조회시 기본값을 제공하는 딕셔너리입니다. 이를 통해 그래프를 구현합니다.
- `heappop`, `heappush`: 우선순위 큐 구현을 위해 사용됩니다. `heappop`은 가장 작은 요소를, `heappush`는 요소를 큐에 삽입합니다.

## 2. Solution 함수 정의

```python
def solution(n, paths, gates, summits):
    # 이어지는 함수 정의 및 로직 수행…
```

- `n`: 전체 노드(지점)의 수입니다.
- `paths`: 각 등산로의 정보를 담은 리스트입니다. 각 등산로는 시작점, 끝점, 소요 시간을 담고 있습니다.
- `gates`: 출입구의 번호를 담은 리스트입니다.
- `summits`: 산봉우리의 번호를 담은 리스트입니다.

## 3. get_min_intensity 함수 정의

```python
    def get_min_intensity():
        pq = []  # (intensity, 현재 위치)
        visited = [10000001] * (n + 1)

        # 모든 출발지를 우선순위 큐에 삽입
        for gate in gates:
            heappush(pq, (0, gate))
            visited[gate] = 0

        # 산봉우리에 도착할 때까지 반복
        # 이어지는 로직 수행…
```

- `get_min_intensity`: 각 출입구에서 산봉우리까지의 최소 `intensity`를 찾는 함수입니다.
- `pq`: 현재 위치와 그 위치까지의 `intensity`를 저장하는 우선순위 큐입니다.
- `visited`: 각 노드까지의 최소 `intensity`를 저장하는 배열입니다.

## 4. 다익스트라 알고리즘 실행

```python
        while pq:
            intensity, node = heappop(pq)

            # 산봉우리이거나 더 큰 intensity라면 더 이상 이동하지 않음
            if node in summits_set or intensity > visited[node]:
                continue

            # 이번 위치에서 이동할 수 있는 곳으로 이동
            for weight, next_node in graph[node]:
                # 이어지는 로직 수행…
```

- [다익스트라 알고리즘(Dijkstra’s Algorithm)](https://berom.tistory.com/185)을 사용하여 각 노드까지의 최소 `intensity`를 계산합니다.
- 산봉우리에 도달하거나, 현재 `intensity`가 기록된 `intensity`보다 크면 더 이상 탐색하지 않습니다.

## 5. 최소 Intensity 산봉우리 선택

```python
        # 구한 intensity 중 가장 작은 값 반환
        min_intensity = [0, 10000001]
        for summit in summits:
            if visited[summit] < min_intensity[1] or (visited[summit] == min_intensity[1] and summit < min_intensity[0]):
                min_intensity[0] = summit
                min_intensity[1] = visited[summit]

        return min_intensity
```

- 구한 `intensity` 중 가장 작은 값을 가진 산봉우리를 선택합니다.
- `intensity`가 같은 경우, 번호가 더 낮은 산봉우리를 선택합니다.

## 6. 그래프 및 초기 설정

```python
    summits.sort()
    summits_set = set(summits)
    graph = defaultdict(list)

 for i, j, w in paths:
        graph[i].append((w, j))
        graph[j].append((w, i))

    return get_min_intensity()
```

- `summits`를 정렬하고, `summits_set`으로 변환하여 빠른 검색을 가능하게 합니다.
- `graph`: 등산로 정보를 저장하는 그래프입니다. 각 노드에서 이동 가능한 다른 노드와 그 등산로의 가중치를 저장합니다.
- `get_min_intensity` 함수를 호출하여 최종 결과를 반환합니다.

이와 같은 절차를 따라 코드는 각 출입구에서 출발하여 산봉우리까지의 최소 `intensity` 경로를 찾고, 그 중에서도 최소 `intensity`를 가진 산봉우리를 효율적으로 찾아냅니다.

## 고도화

```python
from collections import defaultdict
from heapq import heappop, heappush

def solution(n, paths, gates, summits):

    graph = defaultdict(set)

    for i,j,w in paths:
        graph[i].add((j,w))
        graph[j].add((i,w))

    q = []
    intensites = [float('inf')] *(n+1)
    for g in gates:
        intensites[g]=0
        heappush(q,(0,g))
    while q:
        intensity, node = heappop(q)

        if intensity > intensites[node] or node in summits:
            continue

        for j,ji in graph[node]:
            ni = max(intensity,ji)
            if intensites[j] >ni:
                intensites[j]=ni
                heappush(q,(ni,j))

    answer = [-1,10**9]
    summits = set(summits)
    for s in sorted(summits):
        if intensites[s] < answer[1]:
            answer = [s,intensites[s]]
    return answer
```

# 복습

---

*2023-11-23에 [Tistory](https://berom.tistory.com/533)에 쓴 글을 옮겼습니다.*
