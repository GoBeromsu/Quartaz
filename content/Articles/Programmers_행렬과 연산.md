---
aliases: []
date_created: 2023-11-23
date_modified: 2023-11-23
permalink: programmers-matrix-operations
tags:
  - algorithm
  - programmers
title: "Programmers_행렬과 연산"
---

- **ShiftRow**

  - 모든 행이 아래쪽으로 한 칸씩 밀려납니다. 즉, 모든 행에 대해서 `i`번째 행은 `i+1`번째 행이 됩니다. (마지막 행은 1번째 행이 됩니다.)
  - ShiftRow의 예 ![ShiftRow의 예](/_attachments/tistory-537-01.png)
    - 왼쪽 행렬이 초기 상태이고 오른쪽 행렬이 ShiftRow를 한 번 시행한 뒤의 행렬입니다.
    - 1번째 행에 있던 [1,2,3]이 2번째 행으로, 2번째 행에 있던 [4,5,6]이 3번째 행으로, 3번째 행에 있던 [7,8,9]가 1번째 행이 된 것을 확인할 수 있습니다.
- **Rotate**

  - 행렬의 바깥쪽에 있는 원소들을 시계 방향으로 한 칸 회전시킵니다.
  - 행렬의 바깥쪽에 있는 원소들은 첫 행, 첫 열, 끝 행, 끝 열에 포함되는 원소들입니다.
  - 한 칸 회전시킨다는 것은 이 원소들이 시계 방향으로 한 칸씩 밀려난다는 것을 의미합니다. 즉, 다음 4개의 연산이 동시에 시행됩니다.
    - 첫 행에서 끝 열에 있는 원소를 제외한 첫 행의 모든 원소는 오른쪽으로 한 칸 이동합니다.
    - 끝 열에서 끝 행에 있는 원소를 제외한 끝 열의 모든 원소는 아래쪽으로 한 칸 이동합니다.
    - 끝 행에서 첫 열에 있는 원소를 제외한 끝 행의 모든 원소는 왼쪽으로 한 칸 이동합니다.
    - 첫 열에서 첫 행에 있는 원소를 제외한 첫 열의 모든 원소는 위쪽으로 한 칸 이동합니다.
  - Rotate의 예 ![Rotate의 예](/_attachments/tistory-537-02.png)
    - 왼쪽 행렬이 초기 상태이고 오른쪽 행렬이 Rotate를 한 번 시행한 뒤의 행렬입니다.
    - 바깥쪽에 있는 값들이 시계 방향으로 한 칸씩 이동한 것을 확인할 수 있습니다.

당신은 행렬에 연산을 여러 번 시행하려고 합니다.  
행렬의 초기 상태를 담고 있는 2차원 정수 배열 `rc`, 시행할 연산을 순서대로 담고 있는 문자열 배열 `operations`가 매개변수로 주어졌을 때, 연산을 차례대로 시행한 후의 행렬 상태를 return 하도록 solution 함수를 완성해주세요.

## **문제 설명 및 요구사항**

### **개요**

- 이 문제는 주어진 행렬에 대해 두 가지 연산(`ShiftRow`와 `Rotate`)을 수행하는 알고리즘을 구현하는 것입니다.
- 각 연산은 행렬의 요소들을 특정한 방식으로 이동시키는 것을 목표로 합니다.

### **연산 상세**

1. **ShiftRow**

   - 모든 행을 아래쪽으로 한 칸씩 이동시킵니다.
   - 마지막 행은 첫 번째 행으로 이동합니다.
2. **Rotate**

   - 행렬의 외곽에 위치한 원소들을 시계 방향으로 한 칸 이동시킵니다.
   - 이는 행렬의 첫 행, 첫 열, 마지막 행, 마지막 열에 위치한 원소들을 포함합니다.

### **함수 요구사항**

- **파라미터**:
  - `rc`: 2차원 정수 배열 (행렬의 초기 상태)
  - `operations`: 문자열 배열 (수행할 연산들)
- **리턴**: 연산을 순서대로 수행한 후의 행렬 상태

### **제한사항**

- 행렬 `rc`의 가로와 세로 길이는 각각 2 이상 50,000 이하입니다.
- `rc`의 행과 열의 길이는 동일합니다.
- `rc[i][j]`는 행렬의 `i+1`번째 행과 `j+1`번째 열에 위치한 원소를 나타냅니다.
- `operations`의 길이는 1 이상 100,000 이하입니다.
- `operations`의 원소는 `"ShiftRow"` 또는 `"Rotate"`입니다.

### **테스트 케이스**

- 정확성 테스트: `rc`의 행과 열 길이는 최대 1,000, `operations`의 길이는 최대 100입니다.
- 효율성 테스트: 추가 제한사항 없음.

## 풀이

```python
from collections import deque

def solution(rc, operations):
    # 초기 변수 설정
    r_len, c_len = len(rc), len(rc[0])
    rows = deque(deque(row[1:-1]) for row in rc)
    out_cols = [deque(rc[r][0] for r in range(r_len)),
                deque(rc[r][c_len - 1] for r in range(r_len))]

    # 연산 수행
    for operation in operations:
        if operation[0] == "S":
            # ShiftRow 연산
            rows.appendleft(rows.pop())
            out_cols[0].appendleft(out_cols[0].pop())
            out_cols[1].appendleft(out_cols[1].pop())
        else:
            # Rotate 연산
            rows[r_len - 1].append(out_cols[1].pop())
            out_cols[0].append(rows[r_len - 1].popleft())
            rows[0].appendleft(out_cols[0].popleft())
            out_cols[1].appendleft(rows[0].pop())

    # 결과 생성
    answer = []
    for r in range(r_len):
        answer.append([out_cols[0][r]] + list(rows[r]) + [out_cols[1][r]])

    return answer
```

아래는 주어진 파이썬 코드에 대한 상세한 설명입니다. 코드는 블록 단위로 나누어 설명하겠습니다.

### 코드 블록 1: 초기 변수 설정

```python
from collections import deque

def solution(rc, operations):
    r_len, c_len = len(rc), len(rc[0])
    rows = deque(deque(row[1:-1]) for row in rc)
    out_cols = [deque(rc[r][0] for r in range(r_len)),
                deque(rc[r][c_len - 1] for r in range(r_len))]
```

- `deque`는 양방향 큐를 의미합니다. 이를 사용하여 데이터의 앞뒤로 빠르게 접근할 수 있습니다.
- `solution` 함수는 행렬 `rc`와 연산 목록 `operations`를 매개변수로 받습니다.
- `r_len`과 `c_len`은 각각 행렬의 행과 열의 길이를 저장합니다.
- `rows`는 행렬의 중간 부분(첫 열과 마지막 열을 제외한 부분)을 저장합니다.
- `out_cols`는 행렬의 첫 열과 마지막 열을 저장합니다. 첫 열은 `out_cols[0]`에, 마지막 열은 `out_cols[1]`에 저장됩니다.

### 코드 블록 2: 연산 수행

```python
for operation in operations:
    if operation[0] == "S":
        # ShiftRow 연산
        rows.appendleft(rows.pop())
        out_cols[0].appendleft(out_cols[0].pop())
        out_cols[1].appendleft(out_cols[1].pop())
    else:
        # Rotate 연산
        rows[r_len - 1].append(out_cols[1].pop())
        out_cols[0].append(rows[r_len - 1].popleft())
        rows[0].appendleft(out_cols[0].popleft())
        out_cols[1].appendleft(rows[0].pop())
```

- `operations` 배열에 있는 각 연산을 순차적으로 수행합니다.
- `ShiftRow` 연산의 경우, `rows`와 `out_cols`의 원소들을 왼쪽으로 이동시킵니다.
- `Rotate` 연산의 경우, 행렬의 외곽 요소들을 시계 방향으로 이동시킵니다. 이 때, 외곽 요소들의 이동은 첫 열, 마지막 열, 마지막 행, 첫 행 순으로 이루어집니다.

### 코드 블록 3: 결과 생성

```python
answer = []
for r in range(r_len):
    answer.append([out_cols[0][r]] + list(rows[r]) + [out_cols[1][r]])

return answer
```

- 최종적으로 `answer` 배열을 생성하여 반환합니다.
- `answer` 배열은 각 행의 첫 열 원소(`out_cols[0][r]`), 중간 부분(`rows[r]`), 마지막 열 원소(`out_cols[1][r]`)를 합쳐서 구성됩니다.
- 이렇게 생성된 `answer`는 연산이 모두 적용된 후의 행렬 상태를 나타냅니다.

이 코드는 주어진 `rc` 행렬에 `operations`에 정의된 `ShiftRow`와 `Rotate` 연산을 순서대로 적용하여, 최종적으로 변형된 행렬 상태를 반환하는 로직을 구현하고 있습니다.

---

*2023-11-23에 [Tistory](https://berom.tistory.com/537)에 쓴 글을 옮겼습니다.*
