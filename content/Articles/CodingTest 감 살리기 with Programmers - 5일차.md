---
aliases: []
date_created: 2023-03-13
date_modified: 2023-03-13
permalink: programmers-coding-test-warmup-day-5
tags:
  - algorithm
  - programmers
title: "CodingTest 감 살리기 with Programmers - 5일차"
---

## CodingTest 감 살리기 with Programmers

- 코딩 테스트를 준비 하게 되어서, 기본적인 문법도 되짚고, 감을 되찾기 위해 시작합니다

### 가장 큰수

```python
def solution(numbers):
    numbers= list(map(str,numbers))
    numbers.sort(key=lambda x :x*3,reverse=True)
    return str(int(''.join(numbers)))
```

- `lambda x : x*3` 을 하는 이유는 30,34,3을 정렬하면 34,3,30 이렇게 정렬이 되어야 하는데, 34,30,3 순으로 정렬이 된다.
  - 이 때 문자열로 변환한 문자열을 3번 곱해서 정렬하면 34,3,30으로 정렬이 된다
  - 이 방법은 경험적으로 발견된 방법이라고 한다.

### 다리를 지나는 트럭

```python
from collections import deque

def solution(bridge_length, weight, truck_weights):
    answer = 0
    current_weight = 0
    trucks_on_bridge = [0] * bridge_length
    truck_weights = deque(truck_weights)

    while truck_weights or current_weight:
        answer += 1
        current_weight -= trucks_on_bridge.pop(0)

        if truck_weights and current_weight + truck_weights[0] <= weight:
            current_weight += truck_weights[0]
            trucks_on_bridge.append(truck_weights.popleft())
        else:
            trucks_on_bridge.append(0)

    return answer
```

---

*2023-03-13에 [Tistory](https://berom.tistory.com/58)에 쓴 글을 옮겼습니다.*
