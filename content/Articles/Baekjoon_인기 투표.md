---
aliases: []
date_created: 2023-09-16
date_modified: 2023-09-16
permalink: boj-popularity-vote
tags:
  - algorithm
  - baekjoon
title: "Baekjoon_인기 투표"
---

## 문제

종현은 인생에서 한 번 있을 군 생활을 기념 겸 추억거리로 남겨두기 위해 증명사진을 찍어보았다.

그런데 웬걸! 사진관으로부터 받은 증명사진 속엔 대학생 상병 박종현이 아니라 세상 고초 다 겪은 직업 군인 중사 박종현이 찍혀있었다.  
사진에 불만이 생긴 종현은 생활관 동기들에게 하소연 했지만, 동기들은 종현을 놀리기에 바빴다.

억울한 종현은 SNS에 이 사진이 정말로 자신과 닮았는지 공개 투표를 부쳐, 사진관에서 사진을 이상하게 편집했다고 주장하려고 한다.  
투표는 백분율로 공개되고, 철회하거나 번복할 수 없다.

근성은 공개 투표가 친구가 많은 사람의 전유물이라고 생각했기 때문에, 감히 친구가 적은 종현이 SNS에 자신의 증명사진과 공개 투표를 올린 것을 용서하지 못한다.  
하지만 근성의 생각과 달리 종현이 새로 사귄 친구가 많을 수도 있으므로, 투표 상황을 지켜보고 종현의 인기를 추정해 보기로 했다.

백분율로 나타나는 투표 결과로부터 전체 투표수를 추측할 수 있으므로, 과거 어느 시점에서의 투표 결과와 현재의 투표 결과를 모두 만족하는 현재의 총 투표수를 추정한다.

### ## 입력

첫째 줄에 투표 항목의 개수  () 과 투표 결과가 표현되는 소수점 자릿수  ()가 공백으로 구분되어 주어진다.

둘째 줄에 이전 시점, 백분율로 표현되는 각 항목의 투표 결과에 를 곱한 값 개가 공백으로 구분되어 주어진다.

셋째 줄에 현재 시점, 백분율로 표현되는 각 항목의 투표 결과에 를 곱한 값 개가 공백으로 구분되어 주어진다.

둘째 줄과 셋째 줄에 주어지는 각 값은 반올림이 이루어지지 않은 값이다. 각 시점에서 주어지는 수의 합은 임이 보장된다.

### 출력

근성이 추정하는 이전 시점의 총 투표수와 현재 시점의 총 투표수를 공백을 간격으로 순서대로 출력한다.

## 풀이

```python
n,p = map(int,input().split())
past = list(map(int,input().split()))
future= list(map(int,input().split()))

def custom_gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def dynamic_gcd(numbers):
    result = numbers[0]
    for num in numbers[1:]:
        result = custom_gcd(result, num)
    return result

def estimate_votes(n, p, past, future):
    past = [n // dynamic_gcd(past) for n in past]
    future = [n // dynamic_gcd(future) for n in future]

    filter = [1]
    for x, y in zip(past, future):
        if y==0:
            continue
        if x%y==0:
            filter.append(int(x/y))
        else:
            filter.append(int(x/y)+1)

    print(sum(past), max(filter) * sum(future))

estimate_votes(n, p, past, future)
```

---

*2023-09-16에 [Tistory](https://berom.tistory.com/510)에 쓴 글을 옮겼습니다.*
