---
aliases: []
date_created: 2023-10-23
date_modified: 2023-10-23
permalink: boj-2565
tags:
  - algorithm
  - baekjoon
  - dp
title: "Baekjoon_전깃줄"
---

## 문제

두 전봇대 A와 B 사이에 하나 둘씩 전깃줄을 추가하다 보니 전깃줄이 서로 교차하는 경우가 발생하였다.  
합선의 위험이 있어 이들 중 몇 개의 전깃줄을 없애 전깃줄이 교차하지 않도록 만들려고 한다.

예를 들어, < 그림 1 >과 같이 전깃줄이 연결되어 있는 경우 A의 1번 위치와 B의 8번 위치를 잇는 전깃줄, A의 3번 위치와 B의 9번 위치를 잇는 전깃줄, A의 4번 위치와 B의 1번 위치를 잇는 전깃줄을 없애면 남아있는 모든 전깃줄이 서로 교차하지 않게 된다.

![<그림 1> 두 전봇대 A와 B 사이에 연결된 전깃줄](/_attachments/tistory-521-01.jpg)

< 그림 1 >

전깃줄이 전봇대에 연결되는 위치는 전봇대 위에서부터 차례대로 번호가 매겨진다. 전깃줄의 개수와 전깃줄들이 두 전봇대에 연결되는 위치의 번호가 주어질 때, 남아있는 모든 전깃줄이 서로 교차하지 않게 하기 위해 없애야 하는 전깃줄의 최소 개수를 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에는 두 전봇대 사이의 전깃줄의 개수가 주어진다. 전깃줄의 개수는 100 이하의 자연수이다. 둘째 줄부터 한 줄에 하나씩 전깃줄이 A전봇대와 연결되는 위치의 번호와 B전봇대와 연결되는 위치의 번호가 차례로 주어진다. 위치의 번호는 500 이하의 자연수이고, 같은 위치에 두 개 이상의 전깃줄이 연결될 수 없다.

## 출력

첫째 줄에 남아있는 모든 전깃줄이 서로 교차하지 않게 하기 위해 없애야 하는 전깃줄의 최소 개수를 출력한다.

## 예제

```text
8
1 8
3 9
2 2
4 1
6 4
10 10
9 7
7 6
```

```text
3
```

## 풀이

A를 start, B를 end로 값들을 저장한다  
교차하는지 확인하는 방법은 A와 B 값 사이에 있는 선들은 교차하는 선이다

선들을 모두 입력 받고, 교차하는 선의 갯수를 저장한다  
교차하는 선의 갯수가 가장 많은 순으로 선을 제거한다  
선 하나를 제거 할 때마다 전체 선의 갯수를 업데이트 한다

```java
import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] wires = new int[n][2];
        for (int i = 0; i < n; i++) {
            wires[i][0] = sc.nextInt();
            wires[i][1] = sc.nextInt();
        }
        sc.close();

        // A전봇대의 위치 번호를 기준으로 오름차순 정렬
        Arrays.sort(wires, (a, b) -> Integer.compare(a[0], b[0]));

        // LIS 계산
        int[] dp = new int[n];
        Arrays.fill(dp, 1);
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (wires[i][1] > wires[j][1] && dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1;
                }
            }
        }

        // 최장 증가 부분 수열의 길이 찾기
        int lisLength = Arrays.stream(dp).max().getAsInt();

        // 결과 출력
        System.out.println(n - lisLength);
    }
}
```

---

*2023-10-23에 [Tistory](https://berom.tistory.com/521)에 쓴 글을 옮겼습니다.*
