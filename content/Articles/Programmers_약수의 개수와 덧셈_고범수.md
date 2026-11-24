---
aliases: []
date_created: 2023-07-26
date_modified: 2023-07-26
permalink: programmers-divisor-count-and-sum
tags:
  - algorithm
  - programmers
title: "Programmers_약수의 개수와 덧셈_고범수"
---

## 문제 요약

두 정수 left와 right가 주어지고, left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 반환하는 함수를 작성하라

- 단 1 ≤ left ≤ right ≤ 1,000

### 입출력 예

- 예시 1: left가 13, right가 17인 경우, 결과는 43입니다. 이는 13부터 17까지의 수들 중에서 약수의 개수가 짝수인 수(13, 14, 15, 17)를 더하고, 약수의 개수가 홀수인 수(16)를 뺀 결과입니다.
- 예시 2: left가 24, right가 27인 경우, 결과는 52입니다. 이는 24부터 27까지의 수들 중에서 약수의 개수가 짝수인 수(24, 26, 27)를 더하고, 약수의 개수가 홀수인 수(25)를 뺀 결과입니다.

## 1번째 코드 : 일단 작성해서 통과

```python
def solution(left, right):
    answer = 0
    l  = [i for i in range(left,right+1,1)]

    for i in l:
        count=0
        for j in range(1,i+1,1):
            if i%j==0:
                count+=1
            continue
        if count%2==0:
            answer+=i
        else:
            answer-=i
    return answer
```

## 2번째 코드 : 반복문을 줄여보았다

```python
def solution(left, right):
    answer = 0

    for n in range(left,right+1,1):
        count=0
        for i in range(1,n+1):
            if n%i==0:
                count+=1
        answer+= n if count%2==0 else -n
    return answer
```

## 3번째 코드 : GPT와 함께 최적화

```python
def solution(left, right):
    answer = 0
    for i in range(left, right+1):
        if int(i**0.5)**2 == i:
            answer -= i
        else:
            answer += i
    return answer
```

시간 복잡도가 n이다. 와우

완전 제곱에는 홀수의 요소가 있다는 사실을 사용하여 이 코드를 최적화할 수 있다  
인수는 쌍으로 나오지만 완전제곱의 경우 한 쌍이 중복되기 때문입니다(예: 16의 인수는 1, 2, 4, 8, 16이고 여기서 4는 중복됨).

따라서 숫자를 더할 것인지 뺄 것인지를 결정하기 위해 숫자가 완전제곱수인지 확인하면 된다

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-07-26에 [Tistory](https://berom.tistory.com/441)에 쓴 글을 옮겼습니다.*
