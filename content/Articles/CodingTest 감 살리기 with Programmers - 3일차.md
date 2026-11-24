---
aliases: []
date_created: 2023-03-03
date_modified: 2023-03-03
permalink: programmers-coding-test-warmup-day-3
tags:
  - algorithm
  - programmers
title: "CodingTest 감 살리기 with Programmers - 3일차"
---

# CodingTest 감 살리기 with Programmers

## 위장

```python
from collections import defaultdict
def solution(clothes):
    answer = 1
    dic = defaultdict(list)
    for cl in clothes:
        dic[cl[1]].append(cl[0])
    for d in dic:
        answer*=len(dic[d])+1
    return answer-1
```

딕셔너리에 값을 종류 별로 입력한 후에 못든 경우의 수 -1을 하였다.  
특정 옷 종류+1개의 경우의 수 - 옷을 전혀 입지 않은 수가 원하는 값이기 때문이다.

## 베스트 앨범

```python
from collections import defaultdict

def solution(genres, plays):
    answer = []
    dic1 =defaultdict(list)
    dic2 =defaultdict(int)

    for i,p in enumerate(zip(genres,plays)):
        dic1[p[0]].append((i,p))
        dic2[p[0]] +=p[1]
    for k,v in sorted(dic2.items(),key= lambda x : x[1],reverse=True):
        for (i,p) in sorted(dic1[k],key=lambda x:x[1],reverse=True)[:2]:
            answer.append(i)
    return answer
```

- 가장 많이 플레이한 장르, 재생 횟수가 같은 노래 중, 고유 번호가 낮은 노래를 4개 출력하면 된다.
- 로직은 간단한데, 문제를 제대로 읽지 않아 푸는데 오래 걸렸다
  - 1~2개씩 틀리는게 뭔가 했는데 예외처리를, 제대로 하지 않았다

### 레퍼런스

- [프로그래머스 LEVEL3 베스트앨범 (Python)](https://velog.io/@sem/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LEVEL3-%EB%B2%A0%EC%8A%A4%ED%8A%B8%EC%95%A8%EB%B2%94-Python)

---

*2023-03-03에 [Tistory](https://berom.tistory.com/54)에 쓴 글을 옮겼습니다.*
