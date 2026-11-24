---
aliases: []
date_created: 2023-11-24
date_modified: 2023-11-24
permalink: programmers-target-number
tags:
  - algorithm
  - programmers
title: "Programmers 타겟 넘버"
---

n개의 음이 아닌 정수들이 있습니다.  
이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다.  
예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

```text
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
```

사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

## 제한사항

- 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
- 각 숫자는 1 이상 50 이하인 자연수입니다.
- 타겟 넘버는 1 이상 1000 이하인 자연수입니다.

## 입출력 예

| numbers | target | return |
| --- | --- | --- |
| [1, 1, 1, 1, 1] | 3 | 5 |
| [4, 1, 2, 1] | 4 | 2 |

## 입출력 예 설명

**입출력 예 #1**

문제 예시와 같습니다.

**입출력 예 #2**

```text
+4+1-2+1 = 4
+4-1+2-1 = 4
```

- 총 2가지 방법이 있으므로, 2를 return 합니다.

## 풀이

- 경우의 수는 더하거나 빼거나 2가지이다
- [BFS](https://berom.tistory.com/535)로 푸는게 유리할거 같다, 왜냐하면 순차적으로 모든 경우의 수를 확인해야 하고, 범위가 한정 되어 있기 때문이다
- 경우의 수가 아무리 많아 봐야 2^n 밖에 나오지 않는다

```python
from heapq import heappop,heappush

def solution(numbers, target):
    answer=0

    init = heappop(numbers)
    qu = [init,-init]

    count=0
    while numbers:
        n = heappop(numbers)
        temp = []
        for q in qu:
            temp.append(q+n)
            temp.append(q-n)
        qu = temp

    for q in qu:
        if target==q:
            answer+=1
	    return answer
```

## 최적화 된 코드

```python
def solution(numbers, target):
    # 사전을 사용하여 중간 결과를 저장
    sums = {0: 1}  # 초기값: 0의 합계가 1번 나타남

    for number in numbers:
        temp = {}
        for sum_, count in sums.items():
            # 각 숫자를 더하거나 빼서 새로운 합계를 만듦
            temp[sum_ + number] = temp.get(sum_ + number, 0) + count
            temp[sum_ - number] = temp.get(sum_ - number, 0) + count
        sums = temp

    # 목표 숫자를 만드는 방법의 수 반환
    return sums.get(target, 0)
```

1. **사전 초기화**: `sums`라는 사전을 `{0: 1}`로 초기화합니다. 이는 합계가 `0`일 때의 경우의 수가 `1`이라는 의미입니다.
2. **숫자 리스트 순회**: 입력된 `numbers` 리스트의 각 숫자에 대해 반복문을 실행합니다.
3. **합계 계산 및 저장**: 각 숫자에 대해, 현재까지 계산된 모든 합계(`sum_`)에 대해 해당 숫자를 더하고 빼는 경우를 고려합니다. 이렇게 생성된 새로운 합계와 그 합계를 만드는 경우의 수를 임시 사전 `temp`에 저장합니다.
4. **결과 반환**: 반복문이 끝나면, `sums` 사전에서 목표 숫자 `target`에 해당하는 합계를 만드는 경우의 수를 조회하여 반환합니다. 만약 `target`에 해당하는 합계가 없으면 `0`을 반환합니다.

---

*2023-11-24에 [Tistory](https://berom.tistory.com/538)에 쓴 글을 옮겼습니다.*
