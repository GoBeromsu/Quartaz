---
aliases: []
date_created: 2023-08-12
date_modified: 2023-08-12
permalink: boj-11723
tags:
  - algorithm
  - baekjoon
title: "Baekjoon_집합"
---

MOC:  
Index:

## 문제

비어있는 공집합 S가 주어졌을 때, 아래 연산을 수행하는 프로그램을 작성하시오.

- `add x`: S에 x를 추가한다. (1 ≤ x ≤ 20) S에 x가 이미 있는 경우에는 연산을 무시한다.
- `remove x`: S에서 x를 제거한다. (1 ≤ x ≤ 20) S에 x가 없는 경우에는 연산을 무시한다.
- `check x`: S에 x가 있으면 1을, 없으면 0을 출력한다. (1 ≤ x ≤ 20)
- `toggle x`: S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다. (1 ≤ x ≤ 20)
- `all`: S를 {1, 2, …, 20} 으로 바꾼다.
- `empty`: S를 공집합으로 바꾼다.

### 입력

첫째 줄에 수행해야 하는 연산의 수 M (1 ≤ M ≤ 3,000,000)이 주어진다.  
둘째 줄부터 M개의 줄에 수행해야 하는 연산이 한 줄에 하나씩 주어진다.

### 출력

`check` 연산이 주어질때마다, 결과를 출력한다.

## 풀이

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // 입력을 빠르게 읽기 위한 BufferedReader
        StringBuilder sb = new StringBuilder(); // 출력을 빠르게 하기 위한 StringBuilder
        int S = 0; // 집합을 표현할 변수
        int M = Integer.parseInt(br.readLine()); // 연산의 개수
        StringTokenizer st; // 입력 분리를 위한 StringTokenizer
        while (M-- > 0) {
            st = new StringTokenizer(br.readLine()); // 한 줄을 읽어 토큰으로 분리
            String str = st.nextToken(); // 연산 종류
            if(str.equals("all")) S = (1 << 21) - 1; // 모든 수 추가
            else if(str.equals("empty")) S = 0; // 집합 비우기
            else {
                int num = Integer.parseInt(st.nextToken()); // 수행할 숫자
                if(str.equals("add"))
                    S |= (1 << num); // 숫자 추가
                else if(str.equals("remove"))
                    S &= ~(1 << num); // 숫자 제거
                else if(str.equals("check"))
                    sb.append((S & (1 << num)) != 0 ? 1 : 0).append("\n"); // 숫자 확인
                else if(str.equals("toggle"))
                    S ^= (1 << num); // 숫자 토글
            }
        }
        System.out.println(sb); // 결과 출력
    }
}
```

### 효율성

`BufferedReader`는 내부 버퍼를 사용하여 한 번에 큰 덩어리의 데이터를 읽을 수 있으므로, 많은 양의 입력을 처리할 때 `Scanner`보다 빠릅니다.

### 문자열 처리

`StringTokenizer`를 사용하면 입력된 문자열을 공백을 기준으로 토큰으로 쉽게 나눌 수 있습니다. `Scanner`의 `next` 메서드와 유사한 기능을 제공하지만, 문자열을 직접 처리해야 하는 경우에 더 유연하고 빠를 수 있습니다.

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-12에 [Tistory](https://berom.tistory.com/468)에 쓴 글을 옮겼습니다.*
