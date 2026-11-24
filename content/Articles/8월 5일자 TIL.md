---
aliases: []
date_created: 2018-08-06
date_modified: 2018-08-06
permalink: til-2018-08-05
tags:
  - python
title: "8월 5일자 TIL"
---
Dictionary 안에 Dictionary를 넣어서 코스 제공 여부를 확인하는 문제다. hexamester와 course가 주어지면, 그 과정이 dictionary 핵심인지 파악해야 한다.

```python
def is_offered(courses, course, hexamester):
      return course in courses[hexamester]
```

출력 값 : true or false

course : Ex. feb2012, apr2012
hexmaster : Ex. cs101, cs212

Dictionary 안에 Dictionary 를 넣음으로써 세부 형태로 데이터 구조를 짤 수 있다. 계속 보다 보니 컴퓨터 과학적 사고 시간에 배운 루트가 떠오른다. 결국 언어가 거기서 거기라는 말이 이런 점에서 기인하는 게 아닌가 싶다.
```python
courses = {
    'feb2012': { 'cs101': {'name': 'Building a Search Engine',
                           'teacher': 'Dave',
                           'assistant': 'Peter C.'},
                 'cs373': {'name': 'Programming a Robotic Car',
                           'teacher': 'Sebastian',
                           'assistant': 'Andy'}},
    'apr2012': { 'cs101': {'name': 'Building a Search Engine',
                           'teacher': 'Dave',
                           'assistant': 'Sarah'},
                 'cs212': {'name': 'The Design of Computer Programs',
                           'teacher': 'Peter N.',
                           'assistant': 'Andy',
                           'prereq': 'cs101'},
                 'cs253':
                {'name': 'Web Application Engineering - Building a Blog',
                           'teacher': 'Steve',
                           'prereq': 'cs101'},
                 'cs262':
                {'name': 'Programming Languages - Building a Web Browser',
                           'teacher': 'Wes',
                           'assistant': 'Peter C.',
                           'prereq': 'cs101'},
                 'cs373': {'name': 'Programming a Robotic Car',
                           'teacher': 'Sebastian'},
                 'cs387': {'name': 'Applied Cryptography',
                           'teacher': 'Dave'}},
    'jan2044': { 'cs001': {'name': 'Building a Quantum Holodeck',
                           'teacher': 'Dorina'},
                 'cs003': {'name': 'Programming a Robotic Robotics Teacher',
                           'teacher': 'Jasper'},
                     }
    }
```
Dictionary 내장 정보 : name teacher assistant prereq

---

*2018-08-06에 GitHub TIL 저장소에 쓴 글을 옮겼습니다.*
