---
aliases: []
date_created: 2023-08-17
date_modified: 2023-08-17
permalink: boj-11866
tags:
  - algorithm
  - baekjoon
title: "Baekjoon_요세푸스 문제 0"
---

## 문제

1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다.  
이제 순서대로 K번째 사람을 제거한다.

한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다.  
이 과정은 N명의 사람이 모두 제거될 때까지 계속된다.

원에서 사람들이 제거되는 순서를 (N, K)-요세푸스 순열이라고 한다.  
예를 들어 (7, 3)-요세푸스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.

N과 K가 주어지면 (N, K)-요세푸스 순열을 구하는 프로그램을 작성하시오.

## 풀이

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

public class JosephusProblem {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            String[] input = reader.readLine().split(" ");
            int N = Integer.parseInt(input[0]);
            int K = Integer.parseInt(input[1]);

            Queue<Integer> queue = new LinkedList<>();
            for (int i = 1; i <= N; i++) {
                queue.add(i);
            }

            String result = "<";
            while (queue.size() > 1) {
                for (int i = 0; i < K - 1; i++) {
                    queue.add(queue.poll());
                }
                result += queue.poll() + ", ";
            }

            result += queue.poll() + ">";
            System.out.println(result);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

queue에 유저를 넣고 순차적으로 출력해내면 되는 문제이다

LinkedList를 사용한 이뉴는 중간 위치에서의 삽입 및 삭제 연산이 상수 시간에 이뤄지기 때문이다.  
즉 원탁에서 유저가 한명씩 나가는 문제를 푸는데 적절하다

또한 ArrayList는 인덱스를 기반으로 빠르게 요소에 액세스 할 수 있지만, 중간 위치에서의 삽입 및 삭제 작업은 비효율적이다  
배열의 경욱 더욱 그런데, 크기가 고정 되어 있으므로 삽입 및 삭제가 매우 비효율적일 수 있다

---

*2023-08-17에 [Tistory](https://berom.tistory.com/484)에 쓴 글을 옮겼습니다.*
