---
aliases: []
date_created: 2023-08-12
date_modified: 2023-08-12
permalink: boj-10250
tags:
  - algorithm
  - baekjoon
title: "Baekjoon_ACM 호텔"
---

MOC:  
Index:

## 문제

손님들은 호텔 정문으로부터 걸어서 가장 짧은 거리에 있는 방을 선호한다고 한다.  
여러분은 지우를 도와 줄 프로그램을 작성하고자 한다.  
즉 설문조사 결과 대로 호텔 정문으로부터 걷는 거리가 가장 짧도록 방을 배정하는 프로그램을 작성하고자 한다.

문제를 단순화하기 위해서 호텔은 직사각형 모양이라고 가정하자.  
각 층에 W 개의 방이 있는 H 층 건물이라고 가정하자 (1 ≤ H, W ≤ 99).  
그리고 엘리베이터는 가장 왼쪽에 있다고 가정하자(그림 1 참고).

이런 형태의 호텔을 H × W 형태 호텔이라고 부른다.  
호텔 정문은 일층 엘리베이터 바로 앞에 있는데, 정문에서 엘리베이터까지의 거리는 무시한다.  
또 모든 인접한 두 방 사이의 거리는 같은 거리(거리 1)라고 가정하고 호텔의 정면 쪽에만 방이 있다고 가정한다.

![그림 1. H = 6이고 W = 12인 H × W 호텔](/_attachments/tistory-465-01.png)  
그림 1. H = 6 이고 W = 12 인 H × W 호텔을 간략하게 나타낸 그림

방 번호는 YXX 나 YYXX 형태인데 여기서 Y 나 YY 는 층 수를 나타내고 XX 는 엘리베이터에서부터 세었을 때의 번호를 나타낸다. 즉, 그림 1 에서 빗금으로 표시한 방은 305 호가 된다.

손님은 엘리베이터를 타고 이동하는 거리는 신경 쓰지 않는다.  
다만 걷는 거리가 같을 때에는 아래층의 방을 더 선호한다.  
예를 들면 102 호 방보다는 301 호 방을 더 선호하는데, 102 호는 거리 2 만큼 걸어야 하지만  
301 호는 거리 1 만큼만 걸으면 되기 때문이다. 같은 이유로 102 호보다 2101 호를 더 선호한다.

여러분이 작성할 프로그램은 초기에 모든 방이 비어있다고 가정하에  
이 정책에 따라 N 번째로 도착한 손님에게 배정될 방 번호를 계산하는 프로그램이다.  
첫 번째 손님은 101 호, 두 번째 손님은 201 호 등과 같이 배정한다.  
그림 1 의 경우를 예로 들면, H = 6이므로 10 번째 손님은 402 호에 배정해야 한다.

## 풀이

프로그램의 입력은 T 개의 테스트 데이터로 이루어져 있는데 T 는 입력의 맨 첫 줄에 주어진다.

각 테스트 데이터는 한 행으로서 H, W, N, 세 정수를 포함하고 있으며 각각 호텔의 층 수, 각 층의 방 수, 몇 번째 손님인지를 나타낸다

즉 정리하면, 엘리베이터로부터 가까운 순으로 오르락 내리락 하면 된다

```python
import sys

t = int(sys.stdin.readline())
result = []
for i in range(t):
    H,W,N = map(int,sys.stdin.readline().split())
    floor = H if N%H ==0 else N%H
    side = N//H  if N%H==0 else N//H +1

    sideText = "0" + str(side) if side < 10 else str(side)

    result.append(f"{floor}{sideText}")
for r in result:
    print(r)
```

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();
        int[] results = new int[t];

        for (int i = 0; i < t; i++) {
            int H = scanner.nextInt();
            int W = scanner.nextInt();
            int N = scanner.nextInt();

            int floor = N % H == 0 ? H : N % H;
            int side = N % H == 0 ? N / H : N / H + 1;

            String sideText = side < 10 ? "0" + side : Integer.toString(side);

            results[i] = Integer.parseInt(floor + sideText);
        }

        for (int result : results) {
            System.out.println(result);
        }

        scanner.close();
    }
}
```

### 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-12에 [Tistory](https://berom.tistory.com/465)에 쓴 글을 옮겼습니다.*
