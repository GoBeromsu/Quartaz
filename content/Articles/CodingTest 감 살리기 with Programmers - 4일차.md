---
aliases: []
date_created: 2023-03-11
date_modified: 2023-03-11
permalink: programmers-coding-test-warmup-day-4
tags:
  - algorithm
  - programmers
title: "CodingTest 감 살리기 with Programmers - 4일차"
---

## CodingTest 감 살리기 with Programmers

- 코딩 테스트를 준비 하게 되어서, 기본적인 문법도 되짚고, 감을 되찾기 위해 시작합니다

### 올바른 괄호

```python
def solution(s):
    answer = True
    list = []
    for i in s:
        if i=="(":
            list.append(i)
        else:
            if (len(list)==0):
                list.append(i)
            else:
                list.pop()
    if len(list)!=0:
        answer=False
    return answer
```

### 프린터

```python
from collections import deque

def solution(priorities, location):
    pd = deque(priorities)
    loc = deque([0 for i in range(len(pd)) ])
    loc[location] = 1

    pq = priorities
    pq.sort()
    count = 0
    while True:
        idx = pd.popleft()
        l = loc.popleft()
        if(idx == pq[-1]):
            pq.pop()
            count+=1
            if (l==1):
                break
            continue
        else:
            pd.append(idx)
            loc.append(l)
    return count
```

### 모의고사

```python
def solution(answers):

    player = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    check = [0,0,0]
    l = len(answers)
    for i,a in enumerate(answers):
        for j,p in enumerate(player):
            ok = i%len(p)
            if(p[ok]==a):
                check[j]+=1
    m = max(check)
    answer=[]
    for i,c in enumerate(check):
        if c==m:
            answer.append(i+1)
    return answer

```

### 소수 찾기

```python
from itertools import permutations
from collections import defaultdict
# 제곱근을 구하기 위해 math 라이브러리 임포트
import math

def is_prime_num(n):
    if n<2:
        return False
    for i in range(2, int(math.sqrt(n))+1): # n의 제곱근을 정수화 시켜준 후 + 1
        if n % i == 0:
            return False
    return True
def solution(numbers):
    answer = 0
    li = []
    for i in range(1,len(numbers)+1):
        str = list(permutations(numbers,i))
        for s in str:
            li.append(s)
    dic = defaultdict(int)
    for i in li:
        n  = int(''.join(i))
        if n<2 or dic[n]>0:
            continue
        if dic[n]==0:
            dic[n]=1
        if is_prime_num(n):
            answer+=1
    return answer
```

#### 고민했던 것들

- 순열로 숫자를 조합하니 중복이 많아 자원 낭비가 발생한다
  - set으로 모두 지우려고 했지만, 전처리 단계를 무조건 거치는 것이 효율적이지 않으며, 인덱스가 다르면 걸러지지 않았다
  - memoization 비스무리하게 dictionary로 값을 조회해서, 중복을 제거하였다.
- 소수 찾기를 어떻게 해야 효율적일까?
  - numbers의 길이가 7이하이니까 미리 전부 구하는 것은 비효율적이라 생각했다

### 체육복

```python
def solution(n, lost, reserve):
    # 도난 당한 학생 중 여분의 체육복이 있는 학생 제외
    real_lost = list(set(lost) - set(reserve))
    real_reserve = list(set(reserve) - set(lost))

    # 각 학생의 체육복 개수를 담은 리스트 생성
    st = [1] * n
    for l in real_lost:
        st[l-1] -= 1
    for r in real_reserve:
        st[r-1] += 1

    # 체육복 빌려주기
    for i in range(n):
        if st[i] == 0:
            if i > 0 and st[i-1] > 1:
                st[i] += 1
                st[i-1] -= 1
            elif i < n-1 and st[i+1] > 1:
                st[i] += 1
                st[i+1] -= 1

    # 체육복을 빌리지 못한 학생 수 계산
    answer = sum(1 for x in st if x > 0)
    return answer
```

- 그리디 알고리즘을 아는가 물어보는 문제이다

#### 기억하자

- 중복을 미리 제거하는 것을 잊지 말자
  - 이 문제에서라면 도난 당한 학생 중 여분의 체육복이 있는 학생을 미리 제거하는 것이 더 효율적이다
- for 문보다 list comprehension을 사용하자
  - `answer = sum(1 for x in st if x > 0)`

### 조이스틱

```python
def solution(name):
    num_list = [min(abs(ord('A') - ord(n)), 26 - abs(ord('A') - ord(n))) for n in name]
    answer = sum(num_list)  # 상하로 움직이는 횟수를 더함

    min_move = len(name) - 1  # 초기값은 마지막 문자까지 이동하는 횟수

    for i, c in enumerate(name):
        # 다음 A가 아닌 문자까지의 거리 계산
        next_i = i + 1
        while next_i < len(name) and name[next_i] == 'A':
            next_i += 1
        # 현재 문자를 왼쪽에서부터 타이핑하는 것과, 오른쪽에서부터 타이핑하는 것 중 최소값 계산
        min_move = min(min_move, 2 * i + len(name) - next_i, 2 * (len(name) - next_i) + i)

    answer += min_move  # 좌우로 움직이는 횟수를 더함
    return answer
```

```text
▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
```

- 문제의 조건을 잘못 이해해서 시간을 잡아 먹었다.
  - 각 문자마다 처음 좌우를 클릭하면 커서가 이동한다
  - 커서가 이동 한 후 알파벳을 선택 할 수 있다

---

*2023-03-11에 [Tistory](https://berom.tistory.com/57)에 쓴 글을 옮겼습니다.*
