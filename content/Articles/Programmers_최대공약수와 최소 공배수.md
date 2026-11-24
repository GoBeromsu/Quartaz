---
aliases: []
date_created: 2023-08-01
date_modified: 2023-08-01
permalink: programmers-gcd-and-lcm
tags:
  - algorithm
  - programmers
title: "Programmers_최대공약수와 최소 공배수"
---

두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.  
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.  
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

## 풀이

```python
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def lcm(a, b):
    return a * b // gcd(a, b)

def solution(n, m):
    return [gcd(n, m), lcm(n, m)]
```

유클리드 호제법을 사용하는 간단한 문제입니다

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-01에 [Tistory](https://berom.tistory.com/451)에 쓴 글을 옮겼습니다.*
