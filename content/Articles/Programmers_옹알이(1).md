---
aliases: []
date_created: 2023-08-01
date_modified: 2023-08-01
permalink: programmers-babbling-1
tags:
  - algorithm
  - programmers
title: "Programmers_옹알이(1)"
---

## 문제 설명

머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다.  
조카는 아직 “aya”, “ye”, “woo”, “ma” 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다.  
문자열 배열 `babbling`이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

## 제한사항

- 1 ≤ `babbling`의 길이 ≤ 100
- 1 ≤ `babbling[i]`의 길이 ≤ 15
- `babbling`의 각 문자열에서 “aya”, “ye”, “woo”, "ma"는 각각 최대 한 번씩만 등장합니다.
  - 즉, 각 문자열의 가능한 모든 부분 문자열 중에서 “aya”, “ye”, “woo”, "ma"가 한 번씩만 등장합니다.
- 문자열은 알파벳 소문자로만 이루어져 있습니다.

## 풀이

```python
def solution(babbling):
    baby_words = ["aya", "ye", "woo", "ma"]

    valid_word_count = 0
    for babbling_word in babbling:
        baby_word_count = 0
        partial_word = ''
        for character in babbling_word:
            partial_word += character
            if partial_word in baby_words:
                partial_word = ''
                baby_word_count += 1
        if not partial_word and baby_word_count > 0:
            valid_word_count += 1
    return valid_word_count
```

앞에서부터 순차적으로, 문자열에 데이터를 하나씩 쌓아 가고, 다 차면 카운트를 올립니다  
만약 이상한 문자가 들어갔다면, 애초에 카운트가 안됩니다

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-01에 [Tistory](https://berom.tistory.com/452)에 쓴 글을 옮겼습니다.*
