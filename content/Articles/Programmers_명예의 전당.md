---
aliases: []
date_created: 2023-08-01
date_modified: 2023-08-01
permalink: programmers-hall-of-fame
tags:
  - algorithm
  - programmers
  - heap
title: "Programmers_명예의 전당"
---

## 문제 설명

"명예의 전당"이라는 TV 프로그램에서는 매일 1명의 가수가 노래를 부르고, 시청자들의 문자 투표수로 가수에게 점수를 부여합니다. 매일 출연한 가수의 점수가 지금까지 출연 가수들의 점수 중 상위 k번째 이내이면 해당 가수의 점수를 명예의 전당이라는 목록에 올려 기념합니다.

즉 프로그램 시작 이후 초기에 k일까지는 모든 출연 가수의 점수가 명예의 전당에 오르게 됩니다.

k일 다음부터는 출연 가수의 점수가 기존의 명예의 전당 목록의 k번째 순위의 가수 점수보다 더 높으면, 출연 가수의 점수가 명예의 전당에 오르게 되고 기존의 k번째 순위의 점수는 명예의 전당에서 내려오게 됩니다.

이 프로그램에서는 매일 "명예의 전당"의 최하위 점수를 발표합니다.  
예를 들어, `k` = 3이고, 7일 동안 진행된 가수의 점수가 [10, 100, 20, 150, 1, 100, 200]이라면, 명예의 전당에서 발표된 점수는 아래의 그림과 같이 [10, 10, 10, 20, 20, 100, 100]입니다.

## 이진 트리를 이용한 방법

```python
import heapq

def hall_of_frame(k,scores):
    heap = []
    result = []

    for score in scores:
        heapq.heappush(heap, score)

        if len(heap) > k:
            heapq.heappop(heap)
        result.append(heap[0])

    return result

def solution(k, score):
    answer = hall_of_frame(k,score)

    return answer
```

이진트리를 이용해서 데이터가 들어오면, 자동으로 정렬 되게 합니다.  
길이가 k를 넘어서면, 데이터를 제거하고, 매회 마지막 회차에 최하위 랭커의 점수를 입력합니다

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-01에 [Tistory](https://berom.tistory.com/449)에 쓴 글을 옮겼습니다.*
