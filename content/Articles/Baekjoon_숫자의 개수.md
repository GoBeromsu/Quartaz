---
aliases: []
date_created: 2023-08-12
date_modified: 2023-08-12
permalink: boj-2577
tags:
  - algorithm
  - baekjoon
title: "Baekjoon_숫자의 개수"
---

MOC:  
Index:

## 문제

세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.

예를 들어 A = 150, B = 266, C = 427 이라면 A × B × C = 150 × 266 × 427 = 17037300 이 되고,  
계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.

## 풀이

일단 파이썬 Dictionary를 사용하고, 모두 곱해서 string으로 변경해서 세고 출력하면 될거 같다

```python
number = 1
for _ in range(3):
    number *= int(input())
number = str(number)

count_digits = [0] * 10
for digit in number:
    count_digits[int(digit)] += 1

for count in count_digits:
    print(count)
```

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number = 1;

        for (int i = 0; i < 3; i++) {
            number *= scanner.nextInt();
        }

        String numberStr = Integer.toString(number);
        int[] countDigits = new int[10];

        for (char digitChar : numberStr.toCharArray()) {
            int digit = Character.getNumericValue(digitChar);
            countDigits[digit]++;
        }

        for (int count : countDigits) {
            System.out.println(count);
        }

        scanner.close();
    }
}
```

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-12에 [Tistory](https://berom.tistory.com/466)에 쓴 글을 옮겼습니다.*
