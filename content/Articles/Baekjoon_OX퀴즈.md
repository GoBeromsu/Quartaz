---
aliases: []
date_created: 2023-08-12
date_modified: 2023-08-12
permalink: boj-8958
tags:
  - algorithm
  - baekjoon
title: "Baekjoon_OX퀴즈"
---

MOC:  
Index:

## 문제

"OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다.  
O는 문제를 맞은 것이고, X는 문제를 틀린 것이다.

문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다.

예를 들어, 10번 문제의 점수는 3이 된다.  
"OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

### 입력

첫째 줄에 테스트 케이스의 개수가 주어진다.  
각 테스트 케이스는 한 줄로 이루어져 있고, 길이가 0보다 크고 80보다 작은 문자열이 주어진다.  
문자열은 O와 X만으로 이루어져 있다.

### 출력

각 테스트 케이스마다 점수를 출력한다.

## 풀이

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int testCases = scanner.nextInt();
        scanner.nextLine(); // Consume newline left-over

        for (int t = 0; t < testCases; t++) {
            String quizResult = scanner.nextLine();
            int score = 0;
            int consecutiveOs = 0;

            for (char c : quizResult.toCharArray()) {
                if (c == 'O') {
                    consecutiveOs++;
                    score += consecutiveOs;
                } else {
                    consecutiveOs = 0;
                }
            }

            System.out.println(score);
        }

        scanner.close();
    }
}
```

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-12에 [Tistory](https://berom.tistory.com/467)에 쓴 글을 옮겼습니다.*
