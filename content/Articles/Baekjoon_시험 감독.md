---
aliases: []
date_created: 2023-10-25
date_modified: 2023-10-25
permalink: boj-13458
tags:
  - algorithm
  - baekjoon
title: "Baekjoon_시험 감독"
---

## 문제

총 N개의 시험장이 있고, 각각의 시험장마다 응시자들이 있다. i번 시험장에 있는 응시자의 수는 Ai명이다.  
감독관은 총감독관과 부감독관으로 두 종류가 있다. 총감독관은 한 시험장에서 감시할 수 있는 응시자의 수가 B명이고, 부감독관은 한 시험장에서 감시할 수 있는 응시자의 수가 C명이다.  
각각의 시험장에 총감독관은 오직 1명만 있어야 하고, 부감독관은 여러 명 있어도 된다.  
각 시험장마다 응시생들을 모두 감시해야 한다. 이때, 필요한 감독관 수의 최솟값을 구하는 프로그램을 작성하시오.

### 입력

첫째 줄에 시험장의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다.  
둘째 줄에는 각 시험장에 있는 응시자의 수 Ai (1 ≤ Ai ≤ 1,000,000)가 주어진다.  
셋째 줄에는 B와 C가 주어진다. (1 ≤ B, C ≤ 1,000,000)

### 출력

각 시험장마다 응시생을 모두 감독하기 위해 필요한 감독관의 최소 수를 출력한다.

### 풀이

N 개의 시험장, i번 시험장의 응시자 수는 A_i이다.

총 감독관은 감시 할 수 있는 응시자가 B명, 부감독관은 한 시험장에 감시할 수 있는 수가 C명이다

1. 일단 각 시험장마다 총 감독관을 1명씩 배치해서, 해당 수만큼 시험장의 학생 수를 감소 시킨다
2. 남은 시험장의 학생 수를 부감독관의 수로 나눈 몫에 +1을 한다
3. 1과 2의 단계에서 배치된 감독관의 수를 출력한다

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt(); // Number of test rooms
        long[] A = new long[N]; // Number of students in each test room

        for (int i = 0; i < N; i++) {
            A[i] = sc.nextLong();
        }
험
        long B = sc.nextLong(); // Number of students one main supervisor can watch
        long C = sc.nextLong(); // Number of students one additional supervisor can watch

        long totalSupervisors = 0;

        for (int i = 0; i < N; i++) {
            totalSupervisors++; // Assign one main supervisor to each test room
            A[i] -= B; // Reduce the number of students in the test room by B

            if (A[i] > 0) {
                // Calculate number of additional supervisors needed
                totalSupervisors += A[i] / C;
                if (A[i] % C != 0) {
                    totalSupervisors++;
                }
            }
        }

        System.out.println(totalSupervisors);
    }
}
```

---

*2023-10-25에 [Tistory](https://berom.tistory.com/522)에 쓴 글을 옮겼습니다.*
