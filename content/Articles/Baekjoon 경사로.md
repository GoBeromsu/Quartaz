---
aliases: []
date_created: 2023-11-28
date_modified: 2023-11-28
permalink: boj-14890
tags:
  - algorithm
  - baekjoon
title: "Baekjoon 경사로"
---

## 경사로

크기가 N×N인 지도가 있다. 지도의 각 칸에는 그 곳의 높이가 적혀져 있다.

오늘은 이 지도에서 지나갈 수 있는 길이 몇 개 있는지 알아보려고 한다. 길이란 한 행 또는 한 열 전부를 나타내며, 한쪽 끝에서 다른쪽 끝까지 지나가는 것이다.

다음과 같은 N=6인 경우 지도를 살펴보자.

![N = 6인 지도](/_attachments/tistory-541-01.png)

이때, 길은 총 2N개가 있으며, 아래와 같다.

![N = 6인 지도의 길 2N개](/_attachments/tistory-541-02.png)

길을 지나갈 수 있으려면 길에 속한 모든 칸의 높이가 모두 같아야 한다. 또는, 경사로를 놓아서 지나갈 수 있는 길을 만들 수 있다. 경사로는 높이가 항상 1이며, 길이는 L이다. 또, 개수는 매우 많아 부족할 일이 없다. 경사로는 낮은 칸과 높은 칸을 연결하며, 아래와 같은 조건을 만족해야한다.

- 경사로는 낮은 칸에 놓으며, L개의 연속된 칸에 경사로의 바닥이 모두 접해야 한다.
- 낮은 칸과 높은 칸의 높이 차이는 1이어야 한다.
- 경사로를 놓을 낮은 칸의 높이는 모두 같아야 하고, L개의 칸이 연속되어 있어야 한다.

아래와 같은 경우에는 경사로를 놓을 수 없다.

- 경사로를 놓은 곳에 또 경사로를 놓는 경우
- 낮은 칸과 높은 칸의 높이 차이가 1이 아닌 경우
- 낮은 지점의 칸의 높이가 모두 같지 않거나, L개가 연속되지 않은 경우
- 경사로를 놓다가 범위를 벗어나는 경우

L = 2인 경우에 경사로를 놓을 수 있는 경우를 그림으로 나타내면 아래와 같다.

![L = 2일 때 경사로를 놓을 수 있는 경우](/_attachments/tistory-541-03.png)

경사로를 놓을 수 없는 경우는 아래와 같다.

![경사로를 놓을 수 없는 경우](/_attachments/tistory-541-04.png)

위의 그림의 가장 왼쪽부터 1번, 2번, 3번, 4번 예제라고 했을 때, 1번은 높이 차이가 1이 아니라서, 2번은 경사로를 바닥과 접하게 놓지 않아서, 3번은 겹쳐서 놓아서, 4번은 기울이게 놓아서 불가능한 경우이다.

가장 위에 주어진 그림 예의 경우에 지나갈 수 있는 길은 파란색으로, 지나갈 수 없는 길은 빨간색으로 표시되어 있으며, 아래와 같다. 경사로의 길이 L = 2이다.

![지나갈 수 있는 길은 파란색, 지나갈 수 없는 길은 빨간색으로 표시한 지도](/_attachments/tistory-541-05.png)

지도가 주어졌을 때, 지나갈 수 있는 길의 개수를 구하는 프로그램을 작성하시오.

### 풀이

문제의 핵심은 이미 경사로가 놓인 경우에 대한 처리를 하는 것입니다  
`is_path_valid` 함수 내에서 이를 처리하고 있습니다

1. **경사로 설치 여부 추적**

   - 함수의 시작 부분에서 `slope`라는 불리언 배열을 선언합니다. 이 배열은 각 칸에 경사로가 설치되었는지 여부를 추적합니다.
   - 초기에는 모든 원소가 `False`로 설정되어 있어, 어떤 칸에도 경사로가 설치되지 않았음을 나타냅니다.
2. **경사로 설치 시 `slope` 업데이트**

   - 경로를 순회하면서 경사로를 설치해야 하는 경우가 발생하면, 해당 경사로가 설치되는 칸들에 대해 `slope` 배열의 해당 위치를 `True`로 설정합니다
   - 이는 그 위치에 이미 경사로가 설치되었음을 나타냅니다.
3. **이미 설치된 경사로 확인**

   - 경로를 순회할 때, 경사로를 설치해야 하는 상황에서 해당 위치의 `slope`값을 확인합니다.
   - 만약 `slope[j]`가 `True`라면, 그 위치에 이미 경사로가 설치되어 있음을 의미하고, 따라서 그 위치에 새로운 경사로를 설치할 수 없습니다.
   - 이 경우 함수는 `False`를 반환하여 해당 경로가 지나갈 수 없음을 나타냅니다.

이렇게 `slope` 배열을 사용함으로써 코드는 이미 경사로가 설치된 위치에 또 다른 경사로를 설치하는 것을 방지합니다.  
이는 문제에서 주어진 조건 중 하나인 "경사로를 놓은 곳에 또 경사로를 놓는 경우"를 제대로 처리하는 데 필수적입니다

#### Code

```python
import sys

def is_path_valid(path, L):

    n = len(path)
    slope = [False] * n  # Tracks where a slope has been installed

    for i in range(n - 1):
        # Check height difference
        if abs(path[i] - path[i + 1]) > 1:
            return False
        # Slope going up
        if path[i] < path[i + 1]:
            for j in range(i, i - L, -1):
                if j < 0 or path[j] != path[i] or slope[j]:
                    return False
                slope[j] = True
        # Slope going down
        elif path[i] > path[i + 1]:
            for j in range(i + 1, i + L + 1):
                if j >= n or path[j] != path[i + 1] or slope[j]:
                    return False
                slope[j] = True

    return True

def count_valid_paths(map, L):

    N = len(map)
    count = 0

    # Check rows
    for row in map:
        if is_path_valid(row, L):
            count += 1

    # Check columns
    for col in range(N):
        if is_path_valid([map[row][col] for row in range(N)], L):
            count += 1

    return count

# Read input
n, l = map(int, sys.stdin.readline().split())
graph = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]

# Calculate and print the result
result = count_valid_paths(graph, l)
print(result)
```

### 1. 필요한 함수 정의

#### `is_path_valid` 함수

- **목적**: 주어진 경로(행 또는 열)가 지나갈 수 있는지 여부를 판단합니다.
- **작동 원리**:
  - 경로의 길이(`n`)를 구하고, 경사로 설치 여부를 추적하는 `slope` 배열을 초기화합니다.
  - 경로를 순회하면서 인접한 두 칸의 높이 차이를 검사합니다.
    - **경사로 상승**: 현재 칸이 다음 칸보다 낮을 때, L 길이만큼 이전 칸들을 검사하여 경사로 설치 가능 여부를 판단합니다.
    - **경사로 하강**: 현재 칸이 다음 칸보다 높을 때, L 길이만큼 이후 칸들을 검사하여 경사로 설치 가능 여부를 판단합니다.
  - 경사로 설치가 불가능한 경우, `False`를 반환합니다.

#### `count_valid_paths` 함수

- **목적**: 지도에서 지나갈 수 있는 길의 수를 계산합니다.
- **작동 원리**:
  - 지도의 크기(`N`)를 구하고, 유효한 길의 수를 세는 변수(`count`)를 초기화합니다.
  - 모든 행과 열을 순회하면서, 각각에 대해 `is_path_valid` 함수를 호출하여 유효한 길인지 확인합니다.
  - 유효한 길의 수를 누적하여 계산합니다.

### 2. 입력 받기 및 결과 출력

- **코드 설명**:
  - `sys.stdin.readline()` 함수를 사용하여 표준 입력으로부터 `n`과 `l`을 읽어옵니다.
  - 이어서, `n`번에 걸쳐 각 행의 지도 데이터를 입력받아 `graph`에 저장합니다.
  - `count_valid_paths` 함수를 호출하여 지도에서 지나갈 수 있는 길의 총 수를 계산합니다.
  - 계산된 결과(`result`)를 출력합니다.

---

*2023-11-28에 [Tistory](https://berom.tistory.com/541)에 쓴 글을 옮겼습니다.*
