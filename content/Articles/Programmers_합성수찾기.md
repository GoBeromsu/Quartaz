---
aliases: []
date_created: 2023-08-01
date_modified: 2023-08-01
permalink: programmers-find-composite-numbers
tags:
  - algorithm
  - programmers
title: "Programmers_합성수찾기"
---

```text
약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
자연수 `n`이 매개변수로 주어질 때 `n`이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
```

## 통과한 코드 하지만, 비효율적이다

```python
def solution(n):
    answer = 0
    dic ={}
    for i in range(2,n+1):
        for j in range(2,i):
            if i%j==0:
                dic[i]=1
                continue
    return len(dic.items())
```

- dictionary에 넣고 item만 세서 중복을 회피하였다

## 최적화

```python
def solution(n):
    answer = 0
    for i in range(4, n+1):
        if len([j for j in range(1, i+1) if i % j == 0]) > 2:
            answer += 1
    return answer
```

이 코드는 4부터 n까지의 모든 숫자에 대해 반복합니다.  
이는 1, 2, 3은 약수의 개수가 2개 이하이므로 합성수가 아니기 때문입니다.

그 다음, 각 숫자 i에 대해 1부터 i까지의 모든 숫자 j를 검사하여 i를 j로 나눌 수 있는지 확인합니다.

이는 약수를 찾는 방법입니다.  
이 결과를 리스트 컴프리헨션으로 생성하고, 그 길이를 확인합니다.  
이 길이가 2를 초과하면, 그 숫자는 약수가 3개 이상인 합성수입니다.

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-01에 [Tistory](https://berom.tistory.com/448)에 쓴 글을 옮겼습니다.*
