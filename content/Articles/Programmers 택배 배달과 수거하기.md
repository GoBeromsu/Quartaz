---
aliases: []
date_created: 2023-11-22
date_modified: 2023-11-22
permalink: programmers-delivery-and-pickup
tags:
  - algorithm
  - programmers
  - greedy
title: "Programmers 택배 배달과 수거하기"
---

- 택배 배달과 수거하기

## 문제 설명

![물류창고와 거리 1 간격으로 놓인 집 다섯 채](/_attachments/tistory-532-01.png)

당신은 일렬로 나열된 `n`개의 집에 택배를 배달하려 합니다.  
배달할 물건은 모두 크기가 같은 재활용 택배 상자에 담아 배달하며, 배달을 다니면서 빈 재활용 택배 상자들을 수거하려 합니다.

배달할 택배들은 모두 재활용 택배 상자에 담겨서 물류창고에 보관되어 있고, `i`번째 집은 물류창고에서 거리 `i`만큼 떨어져 있습니다.  
또한 `i`번째 집은 `j`번째 집과 거리 `j - i`만큼 떨어져 있습니다. (1 ≤ `i` ≤ `j` ≤ `n`)

트럭에는 재활용 택배 상자를 최대 `cap`개 실을 수 있습니다.  
트럭은 배달할 재활용 택배 상자들을 실어 물류창고에서 출발해 각 집에 배달하면서, 빈 재활용 택배 상자들을 수거해 물류창고에 내립니다.

각 집마다 배달할 재활용 택배 상자의 개수와 수거할 빈 재활용 택배 상자의 개수를 알고 있을 때, 트럭 하나로 모든 배달과 수거를 마치고 물류창고까지 돌아올 수 있는 최소 이동 거리를 구하려 합니다.  
**각 집에 배달 및 수거할 때, 원하는 개수만큼 택배를 배달 및 수거할 수 있습니다.**

다음은 `cap`=4 일 때, 최소 거리로 이동하면서 5개의 집에 배달 및 수거하는 과정을 나타낸 예시입니다.

### 배달 및 수거할 재활용 택배 상자 개수

|  | 집 #1 | 집 #2 | 집 #3 | 집 #4 | 집 #5 |
| --- | --- | --- | --- | --- | --- |
| 배달 | 1개 | 0개 | 3개 | 1개 | 2개 |
| 수거 | 0개 | 3개 | 0개 | 4개 | 0개 |

### 배달 및 수거 과정

|  | 집 #1 | 집 #2 | 집 #3 | 집 #4 | 집 #5 | 설명 |
| --- | --- | --- | --- | --- | --- | --- |
| 남은 배달/수거 | 1/0 | 0/3 | 3/0 | 1/4 | 2/0 | 물류창고에서 택배 3개를 트럭에 실어 출발합니다. |
| 남은 배달/수거 | 1/0 | 0/3 | 3/0 | **0**/4 | **0**/0 | 물류창고에서 5번째 집까지 이동하면서(거리 5) 4번째 집에 택배 1개를 배달하고, 5번째 집에 택배 2개를 배달합니다. |
| 남은 배달/수거 | 1/0 | 0/3 | 3/0 | 0/**0** | 0/0 | 5번째 집에서 물류창고까지 이동하면서(거리 5) 4번째 집에서 빈 택배 상자 4개를 수거한 후, 수거한 빈 택배 상자를 물류창고에 내리고 택배 4개를 트럭에 싣습니다. |
| 남은 배달/수거 | **0**/0 | 0/3 | **0**/0 | 0/0 | 0/0 | 물류창고에서 3번째 집까지 이동하면서(거리 3) 1번째 집에 택배 1개를 배달하고, 3번째 집에 택배 3개를 배달합니다. |
| 남은 배달/수거 | 0/0 | 0/**0** | 0/0 | 0/0 | 0/0 | 3번째 집에서 물류창고까지 이동하면서(거리 3) 2번째 집에서 빈 택배 상자 3개를 수거한 후, 수거한 빈 택배 상자를 물류창고에 내립니다. |

16(=5+5+3+3)의 거리를 이동하면서 모든 배달 및 수거를 마쳤습니다.  
같은 거리로 모든 배달 및 수거를 마치는 다른 방법이 있지만, 이보다 짧은 거리로 모든 배달 및 수거를 마치는 방법은 없습니다.

트럭에 실을 수 있는 재활용 택배 상자의 최대 개수를 나타내는 정수 `cap`, 배달할 집의 개수를 나타내는 정수 `n`, 각 집에 배달할 재활용 택배 상자의 개수를 담은 1차원 정수 배열 `deliveries`와 각 집에서 수거할 빈 재활용 택배 상자의 개수를 담은 1차원 정수 배열 `pickups`가 매개변수로 주어집니다. 이때, 트럭 하나로 모든 배달과 수거를 마치고 물류창고까지 돌아올 수 있는 최소 이동 거리를 return 하도록 solution 함수를 완성해 주세요.

## 제한사항

- 1 ≤ `cap` ≤ 50
- 1 ≤ `n` ≤ 100,000
- `deliveries`의 길이 = `pickups`의 길이 = `n`
  - `deliveries[i]`는 i+1번째 집에 배달할 재활용 택배 상자의 개수를 나타냅니다.
  - `pickups[i]`는 i+1번째 집에서 수거할 빈 재활용 택배 상자의 개수를 나타냅니다.
  - 0 ≤ `deliveries`의 원소 ≤ 50
  - 0 ≤ `pickups`의 원소 ≤ 50
- 트럭의 초기 위치는 물류창고입니다.

## 문제 풀이

```python
def solution(cap, n, deliveries, pickups):
    answer = 0
    de = sum(deliveries)
    pi = sum(pickups)

    while de > 0 or pi > 0:
        d = 0
        b = cap
        for i in range(n - 1, -1, -1):
            if de == 0 or b == 0:
                break
            if deliveries[i] > 0:
                if deliveries[i] > b:
                    deliveries[i] -= b
                    de -= b
                    b = 0
                else:
                    b -= deliveries[i]
                    de -= deliveries[i]
                    deliveries[i] = 0
                d = max(d, i)
        b = cap
        for i in range(n - 1, -1, -1):
            if pi == 0 or b == 0:
                break
            if pickups[i] > 0:
                if pickups[i] > b:
                    pickups[i] -= b
                    pi -= b
                    b = 0
                else:
                    b -= pickups[i]
                    pi -= pickups[i]
                    pickups[i] = 0
                d = max(d, i)
        answer += (d + 1) * 2
    return answer
```

### 시간 초과 : 최대 인덱스를 업데이트 하는 방식으로 최적화

```python
def solution(cap, n, deliveries, pickups):
    answer = 0
    de = sum(deliveries)
    pi = sum(pickups)

    # 최대 인덱스 초기화
    max_index = n - 1

    while de > 0 or pi > 0:
        d = 0
        b = cap

        # 최대 인덱스까지만 순회
        for i in range(max_index, -1, -1):
            if de == 0 or b == 0:
                break
            if deliveries[i] > 0:
                if deliveries[i] > b:
                    deliveries[i] -= b
                    de -= b
                    b = 0
                else:
                    b -= deliveries[i]
                    de -= deliveries[i]
                    deliveries[i] = 0
                d = max(d, i)

        b = cap
        for i in range(max_index, -1, -1):
            if pi == 0 or b == 0:
                break
            if pickups[i] > 0:
                if pickups[i] > b:
                    pickups[i] -= b
                    pi -= b
                    b = 0
                else:
                    b -= pickups[i]
                    pi -= pickups[i]
                    pickups[i] = 0
                d = max(d, i)

        # 최대 인덱스 업데이트
        max_index = d
        answer += (d + 1) * 2

    return answer
```

### 쉽지 않다,

위의 방법으로 시간 복잡도 이슈가 생기기 때문에 마지막 테스트 케이스 4개 정도에서 통과를 하지 못한다

내 기존 방법으로의 접근이 잘못 된거 같다  
왜냐하면 n-1로 일단 냅다 뒤에서부터 반복하는게 계산을 낭비하고 있다

---

*2023-11-22에 [Tistory](https://berom.tistory.com/532)에 쓴 글을 옮겼습니다.*
