---
aliases: []
date_created: 2023-07-25
date_modified: 2023-07-25
permalink: programmers-running-race
tags:
  - algorithm
  - programmers
title: "Programmers_달리기경주_고범수"
---

## 문제 요약

"달리기 경주"라는 문제는 매년 열리는 달리기 경주에서 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부르는 해설진의 역할을 수행하는 알고리즘을 구현하는 것입니다.

- 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 `players`와 해설진이 부른 이름을 담은 문자열 배열 `callings`가 주어집니다.
- 해설진이 선수의 이름을 부르면, 그 선수는 바로 앞의 선수를 추월하게 됩니다.
- 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해야 합니다.

### 제한사항

- `players`의 길이는 5 이상 50,000 이하입니다.
- `players[i]`는 i번째 선수의 이름을 의미합니다.
- `players`의 원소들은 알파벳 소문자로만 이루어져 있습니다.
- `players`에는 중복된 값이 들어가 있지 않습니다.
- `players[i]`의 길이는 3 이상 10 이하입니다.
- `callings`의 길이는 2 이상 1,000,000 이하입니다.
- `callings`는 `players`의 원소들로만 이루어져 있습니다.
- 경주 진행중 1등인 선수의 이름은 불리지 않습니다.

### 입출력 예

- players: [“mumu”, “soe”, “poe”, “kai”, “mine”]
- callings: [“kai”, “kai”, “mine”, “mine”]
- result: [“mumu”, “kai”, “mine”, “soe”, “poe”]

## 코드

### 실패 : 시간 초과

```python
def solution(players, callings):
    dic = {}

    for i in range(len(players)):
        dic[players[i]] = i

    for c in callings:
        for player, position in dic.items():
            if position == dic[c] - 1:
                dic[player] += 1
                break
        dic[c] -= 1

    # Sort the dictionary by values (positions) and extract the keys (player names)
    answer = [k for k, v in sorted(dic.items(), key=lambda item: item[1])]

    return answer
```

딕셔너리에 `유저:순서` 순으로 입력해서, 마지막에 lambda를 사용해서 정렬하는 Idea였다

- `callings` 배열의 각 요소에 대해 `dic` 딕셔너리의 모든 요소를 순회하므로, 시간 복잡도가 n^2이다.
- answer 부분에서 다시, player 수만큼 정렬한다,

### 정답

```python
def solution(players, callings):
    dic = {player: i for i, player in enumerate(players)}
    order = list(players)  # 선수들의 순서를 저장하는 리스트

    for c in callings:
        index = dic[c]
        if index > 0:  # 1등 선수는 추월할 수 없으므로 index가 0보다 커야 합니다.
            # 선수 c와 그 앞의 선수의 위치를 바꿉니다.
            order[index], order[index - 1] = order[index - 1], order[index]
            # 딕셔너리의 선수들의 위치를 업데이트합니다.
            dic[order[index]], dic[order[index - 1]] = index, index - 1

    return order
```

아이디어를 살짝 바꿔서, 선수들의 순서를 저장하고, 반복문을 한 번 돌 때 위치 교환까지 한 번에 한다

- `if index > 0` : 1등 선수는 추월 할 수 없도록 한다
- 선수들의 순서와 인덱스를 모두 활용한다

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-07-25에 [Tistory](https://berom.tistory.com/440)에 쓴 글을 옮겼습니다.*
