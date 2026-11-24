---
aliases: []
date_created: 2018-08-03
date_modified: 2018-08-03
permalink: til-2018-08-02
tags:
  - python
title: "8월 2일자 TIL"
---
lookup를 dicitionary 형태로 바꾸기

```python
def lookup(index, keyword):
    for entry in index:
        if entry[0] == keyword:
            return entry[1]
    return None

def lookup(index, keyword):
    if keyword in index:
       return index[keyword]
   else:
        return None
```

index라는 dicitionary 안에 keyword 리스트를 만들어 나가는 것이죠

computerscience는 간단하고 빠르게!

for which of these procedures does the worst case running time scale lineorly in the number of elements in the input list p?

내장함수 len  : 입력된 요소의 전체 길이를 출력해준다.

문제내에서 선형적?이란 단어가 무슨 뜻인지 모르겠다. 모임 때 물어봐야 될듯

Sum_list
```python
def sum_list(p):
    sum = 0
    for e in p:
        sum = sum + e
    return sum
```

Sum_list는 e가 p안에 있을 경우 sum에 e를 더해 나간다.

Has_duplicate_element
```python
def has_duplicate_element(p):
   res = []
   for i in range(0, len(p)):
       for j in range(0, len(p)):
           if i != j and p[i] == p[j]:
               return True
   return False
```

forfor문을 써서 내장함수 range를 실행시킨다.
range(start,stop,step)
range(0,len(p))는 리스트를 0부터 p의 길이 만큼 늘려준다.

Mystery
```python
def mystery(p):
   i = 0
   while True:
       if i >= len(p):
           break
       if p[i] % 2:
           i = i + 2
       else:
           i = i + 1
   return i
```

익숙 한 형태

---

*2018-08-03에 GitHub TIL 저장소에 쓴 글을 옮겼습니다.*
