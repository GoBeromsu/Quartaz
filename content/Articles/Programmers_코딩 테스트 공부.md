---
aliases: []
date_created: 2023-11-21
date_modified: 2023-11-21
permalink: programmers-coding-test-study
tags:
  - algorithm
  - programmers
  - dp
title: "Programmers_코딩 테스트 공부"
---

## 문제 설명

**[본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]**

당신은 코딩 테스트를 준비하기 위해 공부하려고 합니다.  
코딩 테스트 문제를 풀기 위해서는 알고리즘에 대한 지식과 코드를 구현하는 능력이 필요합니다.

알고리즘에 대한 지식은 `알고력`, 코드를 구현하는 능력은 `코딩력`이라고 표현합니다.  
`알고력`과 `코딩력`은 0 이상의 정수로 표현됩니다.

문제를 풀기 위해서는 문제가 요구하는 일정 이상의 `알고력`과 `코딩력`이 필요합니다.

예를 들어, 당신의 현재 `알고력`이 15, `코딩력`이 10이라고 가정해보겠습니다.

- A라는 문제가 `알고력` 10, `코딩력` 10을 요구한다면 A 문제를 풀 수 있습니다.
- B라는 문제가 `알고력` 10, `코딩력` 20을 요구한다면 `코딩력`이 부족하기 때문에 B 문제를 풀 수 없습니다.

풀 수 없는 문제를 해결하기 위해서는 `알고력`과 `코딩력`을 높여야 합니다. `

### `알고력`과 `코딩력`을 높이기 위한 방법

- `알고력`을 높이기 위해 알고리즘 공부를 합니다. `알고력` 1을 높이기 위해서 1의 시간이 필요합니다.
- `코딩력`을 높이기 위해 코딩 공부를 합니다. `코딩력` 1을 높이기 위해서 1의 시간이 필요합니다.
- 현재 풀 수 있는 문제 중 하나를 풀어 `알고력`과 `코딩력`을 높입니다.

  - 각 문제마다 문제를 풀면 올라가는 알고력과 코딩력이 정해져 있습니다.
- 문제를 하나 푸는 데는 문제가 요구하는 시간이 필요하며 같은 문제를 여러 번 푸는 것이 가능합니다.

### 요구사항

당신은 주어진 모든 문제들을 풀 수 있는 `알고력`과 `코딩력`을 얻는 최단시간을 구하려 합니다.

초기의 `알고력`과 `코딩력`을 담은 정수 `alp`와 `cop`, 문제의 정보를 담은 2차원 정수 배열 `problems`가 매개변수로 주어졌을 때, 모든 문제들을 풀 수 있는 `알고력`과 `코딩력`을 얻는 최단시간을 return 하도록 solution 함수를 작성해주세요.

**모든 문제들을 1번 이상씩 풀 필요는 없습니다. `입출력 예 설명`을 참고해주세요.**

### 제한사항

- 초기의 `알고력`을 나타내는 `alp`와 초기의 `코딩력`을 나타내는 `cop`가 입력으로 주어집니다.
  - 0 ≤ `alp`,`cop` ≤ 150
- 1 ≤ `problems`의 길이 ≤ 100
- `problems`의 원소는 [`alp_req`, `cop_req`, `alp_rwd`, `cop_rwd`, `cost`]의 형태로 이루어져 있습니다.
- `alp_req`는 문제를 푸는데 필요한 `알고력`입니다.
  - 0 ≤ `alp_req` ≤ 150
- `cop_req`는 문제를 푸는데 필요한 `코딩력`입니다.
  - 0 ≤ `cop_req` ≤ 150
- `alp_rwd`는 문제를 풀었을 때 증가하는 `알고력`입니다.
  - 0 ≤ `alp_rwd` ≤ 30
- `cop_rwd`는 문제를 풀었을 때 증가하는 `코딩력`입니다.
  - 0 ≤ `cop_rwd` ≤ 30
- `cost`는 문제를 푸는데 드는 시간입니다.
  - 1 ≤ `cost` ≤ 100

**정확성 테스트 케이스 제한사항**

- 0 ≤ `alp`,`cop` ≤ 20
- 1 ≤ `problems`의 길이 ≤ 6
  - 0 ≤ `alp_req`,`cop_req` ≤ 20
  - 0 ≤ `alp_rwd`,`cop_rwd` ≤ 5
  - 1 ≤ `cost` ≤ 10

## 풀이

당신은 주어진 모든 문제들을 풀 수 있는 `알고력`과 `코딩력`을 얻는 최단시간을 구하려 합니다.

- [`alp_req`, `cop_req`, `alp_rwd`, `cop_rwd`, `cost`]
  - `alp_req` : 문제를 푸는데 필요한 `알고력`
  - `cop_req`: 문제를 푸는데 필요한 `코딩력`
  - `alp_rwd`: 문제를 풀었을 때 증가하는 `알고력`
  - `cop_rwd`: 문제를 풀었을 때 증가하는 `코딩력`
  - `cost`: 문제를 푸는데 드는 시간  
    **구현 단계**

1. `dp` 배열을 초기화합니다. 최대 `알고력`과 `코딩력`을 기준으로 2차원 배열을 생성합니다.
2. 각 문제에 대해 반복하면서, 해당 문제를 풀 수 있는 `알고력`과 `코딩력`의 조합에 대해 `dp` 배열을 업데이트합니다.
3. `알고력`과 `코딩력`을 증가시키는 데 필요한 시간도 고려하여 `dp` 배열을 업데이트합니다.
4. 최종적으로 모든 문제를 풀 수 있는 `알고력`과 `코딩력` 조합에 대해 최소 시간을 찾습니다.

### DP : 시간 초과

```python
def solution(alp, cop, problems):
    max_alp = max(max(p[0] for p in problems), alp)
    max_cop = max(max(p[1] for p in problems), cop)

    # DP 배열 초기화
    dp = [[float('inf')] * (max_cop + 1) for _ in range(max_alp + 1)]
    dp[alp][cop] = 0

    for current_alp in range(max_alp + 1):
        for current_cop in range(max_cop + 1):
            # 현재 상태에서 코딩력 또는 알고력을 1 증가시키는 경우
            if current_alp < max_alp:
                dp[current_alp + 1][current_cop] = min(dp[current_alp + 1][current_cop], dp[current_alp][current_cop] + 1)
            if current_cop < max_cop:
                dp[current_alp][current_cop + 1] = min(dp[current_alp][current_cop + 1], dp[current_alp][current_cop] + 1)

            # 문제를 풀어서 코딩력과 알고력을 증가시키는 경우
            for alp_req, cop_req, alp_rwd, cop_rwd, cost in problems:
                if current_alp >= alp_req and current_cop >= cop_req:
                    next_alp = min(max_alp, current_alp + alp_rwd)
                    next_cop = min(max_cop, current_cop + cop_rwd)
                    dp[next_alp][next_cop] = min(dp[next_alp][next_cop], dp[current_alp][current_cop] + cost)

    return dp[max_alp][max_cop]
```

이 문제는 모든 가능한 경우를 고려해야 최적의 해결책을 찾을 수 있기 때문에 DP로 문제를 풀었습니다  
각 단계에서 가능한 모든 알고력과 코딩력의 조합을 고려하여 최소 시간을 계산 할 수 있습니다

```python
def solution(alp, cop, problems):
    max_alp = max(max(p[0] for p in problems), alp)
    max_cop = max(max(p[1] for p in problems), cop)
```

`dp[alp][cop]`를 `alp`와 `cop`를 달성하기 위해 필요한 최소 시간으로 정의합니다.

```python
	# DP 배열 초기화
    dp = [[float('inf')] * (max_cop + 1) for _ in range(max_alp + 1)]
    dp[alp][cop] = 0
```

초기 상태에서 `dp[alp][cop]`는 0입니다.

```python
for current_alp in range(max_alp + 1):
        for current_cop in range(max_cop + 1):
```

```python
# 현재 상태에서 코딩력 또는 알고력을 1 증가시키는 경우
if current_alp < max_alp:
	 dp[current_alp + 1][current_cop] = min(dp[current_alp + 1][current_cop], dp[current_alp][current_cop] + 1)
if current_cop < max_cop:
	 dp[current_alp][current_cop + 1] = min(dp[current_alp][current_cop + 1], dp[current_alp][current_cop] + 1)
```

최대 알고력과 최대 코딩력 만큼 순회를 합니다  
코딩력 또는 알고력을 1 증가시키는 경우입니다  
현재 알고력 또는 코딩력이 최대치에 도달하지 않았을 경우, 각각을 1씩 증가시키는 경우를 고려합니다

현재 시간에 1을 더한 값과 이전에 계산된 최소 시간 중 작은 값으로 업데이트합니다

도표로 그리면 아래와 같습니다, DP 알고리즘을 사용하기 때문에 이와 같이 나옵니다  
![시작 상태 dp(0,0)에서 알고력·코딩력을 1씩 올리며 dp 칸으로 이어지는 상태 전이 그림](/_attachments/tistory-530-01.png)

```python
# 문제를 풀어서 코딩력과 알고력을 증가시키는 경우
	for alp_req, cop_req, alp_rwd, cop_rwd, cost in problems:
		 if current_alp >= alp_req and current_cop >= cop_req:
			  next_alp = min(max_alp, current_alp + alp_rwd)
			  next_cop = min(max_cop, current_cop + cop_rwd)
			  dp[next_alp][next_cop] = min(dp[next_alp][next_cop], dp[current_alp][current_cop] + cost)

return dp[max_alp][max_cop]
```

1. **최소 시간의 업데이트:**
   - `dp[current_alp + 1][current_cop]`의 값을 업데이트할 때, 우리는 두 가지 경우를 고려합니다:
     - **이전에 계산된 시간:** `dp[current_alp + 1][current_cop]`가 이미 어떤 경로를 통해 계산되었다면, 그 값은 `current_alp + 1`과 `current_cop`를 달성하기 위해 지금까지 알려진 최소 시간입니다.
     - **새로운 계산:** `current_alp`에서 `알고력`을 하나 증가시키는 데 추가로 1시간이 필요합니다.
       - 따라서 `dp[current_alp][current_cop] + 1`은 새로운 경로를 통해 `current_alp + 1`과 `current_cop`를 달성하는 데 필요한 총 시간입니다.
2. **최소 시간을 선택:**
   - `min` 함수를 사용하여 이 두 가지 경우 중 더 작은 값을 선택합니다. 이는 `current_alp + 1`과 `current_cop`를 달성하기 위한 **최소 시간**을 보장합니다.

모든 업데이트가 완료된 후의 최종 동적 프로그래밍(DP) 테이블은 다음과 같습니다.  
테이블에서 각 셀은 특정 `알고력`과 `코딩력` 조합을 달성하기 위해 필요한 최소 시간을 나타냅니다.

| 알고력 \ 코딩력 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **10** | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| **11** | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| **12** | 2 | 3 | 4 | 5 | 6 | 7 | 7 | 8 | 9 | 10 | 11 |
| **13** | 3 | 4 | 5 | 6 | 7 | 8 | 8 | 9 | 10 | 11 | 12 |
| **14** | 4 | 5 | 6 | 7 | 8 | 9 | 9 | 9 | 10 | 11 | 12 |
| **15** | 5 | 6 | 7 | 8 | 9 | 10 | 10 | 10 | 11 | 12 | 13 |
| **16** | 6 | 7 | 8 | 9 | 10 | 11 | 11 | 11 | 11 | 12 | 13 |
| **17** | 7 | 8 | 9 | 10 | 11 | 12 | 12 | 12 | 12 | 13 | 14 |
| **18** | 8 | 9 | 10 | 11 | 12 | 13 | 13 | 13 | 13 | 13 | 14 |
| **19** | 9 | 10 | 11 | 12 | 13 | 14 | 14 | 14 | 14 | 14 | 15 |
| **20** | 10 | 11 | 12 | 13 | 14 | 15 | 15 | 15 | 15 | 15 | 15 |

이 테이블에서 각 셀의 값은 그 셀의 `알고력`과 `코딩력` 조합을 달성하기 위해 필요한 최소 시간을 나타냅니다.  
예를 들어, `dp[20][20]`의 값은 15로, 이는 `알고력` 20과 `코딩력` 20을 달성하기 위해 필요한 최소 시간이 15라는 것을 의미합니다.

### DP : 통과

```python
def solution(alp, cop, problems):

    target_alp = max(max(p[0] for p in problems), alp)
    target_cop = max(max(p[1] for p in problems), cop)

    dp = [[float('inf')] * (target_cop + 1) for _ in range(target_alp + 1)]
    dp[alp][cop] = 0

    for current_alp in range(alp, target_alp + 1):
        for current_cop in range(cop, target_cop + 1):
            # 현재 상태에서 코딩력 또는 알고력을 1 증가시키는 경우
            if current_alp < target_alp:
                dp[current_alp + 1][current_cop] = min(dp[current_alp + 1][current_cop], dp[current_alp][current_cop] + 1)
            if current_cop < target_cop:
                dp[current_alp][current_cop + 1] = min(dp[current_alp][current_cop + 1], dp[current_alp][current_cop] + 1)

            # 문제를 풀어서 코딩력과 알고력을 증가시키는 경우
            for alp_req, cop_req, alp_rwd, cop_rwd, cost in problems:
                if current_alp >= alp_req and current_cop >= cop_req:
                    next_alp = min(target_alp, current_alp + alp_rwd)
                    next_cop = min(target_cop, current_cop + cop_rwd)
                    dp[next_alp][next_cop] = min(dp[next_alp][next_cop], dp[current_alp][current_cop] + cost)

    return dp[target_alp][target_cop]
```

시작점(`alp`, `cop`)부터 타겟(`target_alp`, `target_cop`)까지만 고려하여 계산 범위를 줄였습니다

## 복습

- 알고력, 코딩력
- 알고력과 코딩력 높이는 방법
  - 각자 1의시간을 소비해서, 1씩 올릴 수 있음
  - 현재 풀 수 있는 문제 중 하나를 풀어 알고력을 높일 수 있음
    - 같은 문제 여러 번 푸는 것 가능
- 우리는 주어진 모든 문제들을 풀 수 있는 알고력과 코딩력을 얻는 최단 시간을 구하려고 한다

### 궁금증 : 왜 이렇게 업데이트 되는가?

```python
# 현재 상태에서 코딩력 또는 알고력을 1 증가시키는 경우
if current_alp < max_alp:
	 dp[current_alp + 1][current_cop] = min(dp[current_alp + 1][current_cop], dp[current_alp][current_cop] + 1)
if current_cop < max_cop:
	 dp[current_alp][current_cop + 1] = min(dp[current_alp][current_cop + 1], dp[current_alp][current_cop] + 1)
```

해당 코드 부분은 동적 프로그래밍을 이용하여 `알고력`과 `코딩력`을 증가시키는 데 필요한 최소 시간을 계산하는 데 사용됩니다.  
각각의 `if` 문은 현재 `알고력`(`current_alp`) 또는 `코딩력`(`current_cop`)에서 한 단계 증가시키는 경우를 고려합니다. 이를 도표로 표현하면 다음과 같습니다:

예시로, `max_alp = 3`, `max_cop = 3`인 상황을 가정해 보겠습니다. 초기 `alp`와 `cop`는 0이라고 가정합니다.

```text
DP 표:
      C0  C1  C2  C3
A0    0   1   2   3
A1    1  [ ] [ ] [ ]
A2    2  [ ] [ ] [ ]
A3    3  [ ] [ ] [ ]

A는 알고력, C는 코딩력을 나타냅니다. 각 셀의 값은 해당 알고력과 코딩력 조합을 달성하는 데 필요한 최소 시간입니다.
```

이제 `A0, C1` 셀(알고력 0, 코딩력 1)을 살펴보겠습니다. 여기서 가능한 경우는 다음과 같습니다:

- `A0, C0`에서 코딩력을 1 증가시키는 경우: 현재 시간 `0` + 추가 시간 `1` = `1`
- `A1, C1`에서 알고력을 1 감소시키는 경우: 현재 `A1, C1`에 도달하는 데 필요한 시간 + 추가 시간 `0` (이 경우는 고려하지 않습니다)

이렇게 계산하여 `A0, C1`의 최소 시간은 `1`이 됩니다.  
이와 같은 방식으로 DP 표를 채워 나가며, 각 셀에서 가능한 최소 시간을 계산합니다.  
결국 모든 셀을 채운 후에 `A3, C3`에 도달하는 데 필요한 최소 시간을 알 수 있습니다.

이 코드의 핵심은 "각 단계에서 가능한 모든 조합을 고려하여 최소 시간을 계산하는 것"입니다.  
각 셀은 해당 `알고력`과 `코딩력`을 달성하기 위한 최소 시간을 나타내며, 이는 문제를 푸는 데 필요한 전체 최소 시간을 찾는 데 중요한 기준이 됩니다.

### 궁금증 2. 왜 DP인가?

결국은 Dynamic Programming 문제인데 이 문제의 경우 x와 y축을 알고력과 코딩력으로 선정해서 문제를 풀 수 있다

그 표의 크기는 주어진 문제 들 중 가장 큰 문제의 알고력과 코딩력일테고 말이다

복습을 하며 Dynamic Programming 이라 판단한 이유는 알고력과 코딩력을 높이는데 있어서 Greedy Algorithm 으로 할 경우 무엇이 더 효율적인지 판단하기 애매하기 때문이었다

그렇다면 이러한 내 접근 방식이 맞는걸까?

## 레퍼런스

- Python의 for-else 구문

---

*2023-11-21에 [Tistory](https://berom.tistory.com/530)에 쓴 글을 옮겼습니다.*
