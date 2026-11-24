---
aliases: []
date_created: 2023-08-14
date_modified: 2023-08-14
permalink: programmers-curse-number-3
tags:
  - algorithm
  - programmers
title: "Programmers_저주의 숫자 3"
---

MOC:  
Index:

## 문제

3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다.  
3x 마을 사람들의 숫자는 다음과 같습니다.

| 10진법 | 3x 마을에서 쓰는 숫자 | 10진법 | 3x 마을에서 쓰는 숫자 |
| --- | --- | --- | --- |
| 1 | 1 | 6 | 8 |
| 2 | 2 | 7 | 10 |
| 3 | 4 | 8 | 11 |
| 4 | 5 | 9 | 14 |
| 5 | 7 | 10 | 16 |

정수 `n`이 매개변수로 주어질 때, `n`을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

## 풀이

```java
class Solution {
    public int solution(int n) {
        int answer = 0;
        for (int i = 0; i < n; i++) {
            answer++;
            while (answer % 3 == 0 || String.valueOf(answer).contains("3")) {
                answer++;
            }
        }
        return answer;
    }
}
```

contains를 사용하면 문자열 체크를 알아서 해준다!

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-14에 [Tistory](https://berom.tistory.com/471)에 쓴 글을 옮겼습니다.*
