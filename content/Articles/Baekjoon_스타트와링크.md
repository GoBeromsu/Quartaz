---
aliases: []
date_created: 2023-11-03
date_modified: 2023-11-03
permalink: boj-14889
tags:
  - algorithm
  - baekjoon
title: "Baekjoon_스타트와링크"
---

# 스타트와 링크 성공

| 시간 제한 | 메모리 제한 | 제출 | 정답 | 맞힌 사람 | 정답 비율 |
| --- | --- | --- | --- | --- | --- |
| 2 초 | 512 MB | 91277 | 44705 | 26307 | 46.032% |

## 문제

오늘은 스타트링크에 다니는 사람들이 모여서 축구를 해보려고 한다. 축구는 평일 오후에 하고 의무 참석도 아니다. 축구를 하기 위해 모인 사람은 총 N명이고 신기하게도 N은 짝수이다. 이제 N/2명으로 이루어진 스타트 팀과 링크 팀으로 사람들을 나눠야 한다.

BOJ를 운영하는 회사 답게 사람에게 번호를 1부터 N까지로 배정했고, 아래와 같은 능력치를 조사했다. 능력치 Sij는 i번 사람과 j번 사람이 같은 팀에 속했을 때, 팀에 더해지는 능력치이다. 팀의 능력치는 팀에 속한 모든 쌍의 능력치 Sij의 합이다. Sij는 Sji와 다를 수도 있으며, i번 사람과 j번 사람이 같은 팀에 속했을 때, 팀에 더해지는 능력치는 Sij와 Sji이다.

N=4이고, S가 아래와 같은 경우를 살펴보자.

| i\j | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| 1 |  | 1 | 2 | 3 |
| 2 | 4 |  | 5 | 6 |
| 3 | 7 | 1 |  | 2 |
| 4 | 3 | 4 | 5 |  |

예를 들어, 1, 2번이 스타트 팀, 3, 4번이 링크 팀에 속한 경우에 두 팀의 능력치는 아래와 같다.

- 스타트 팀: S12 + S21 = 1 + 4 = 5
- 링크 팀: S34 + S43 = 2 + 5 = 7

1, 3번이 스타트 팀, 2, 4번이 링크 팀에 속하면, 두 팀의 능력치는 아래와 같다.

- 스타트 팀: S13 + S31 = 2 + 7 = 9
- 링크 팀: S24 + S42 = 6 + 4 = 10

축구를 재미있게 하기 위해서 스타트 팀의 능력치와 링크 팀의 능력치의 차이를 최소로 하려고 한다.  
위의 예제와 같은 경우에는 1, 4번이 스타트 팀, 2, 3번 팀이 링크 팀에 속하면 스타트 팀의 능력치는 6, 링크 팀의 능력치는 6이 되어서 차이가 0이 되고 이 값이 최소이다.

## 입력

첫째 줄에 N(4 ≤ N ≤ 20, N은 짝수)이 주어진다. 둘째 줄부터 N개의 줄에 S가 주어진다. 각 줄은 N개의 수로 이루어져 있고, i번 줄의 j번째 수는 Sij 이다. Sii는 항상 0이고, 나머지 Sij는 1보다 크거나 같고, 100보다 작거나 같은 정수이다.

## 출력

첫째 줄에 스타트 팀과 링크 팀의 능력치의 차이의 최솟값을 출력한다.

## 예제

### 예제 입력 1

```text
4
0 1 2 3
4 0 5 6
7 1 0 2
3 4 5 0
```

### 예제 출력 1

```text
0
```

### 예제 입력 2

```text
6
0 1 2 3 4 5
1 0 2 3 4 5
1 2 0 3 4 5
1 2 3 0 4 5
1 2 3 4 0 5
1 2 3 4 5 0
```

### 예제 출력 2

```text
2
```

### 예제 입력 3

```text
8
0 5 4 5 4 5 4 5
4 0 5 1 2 3 4 5
9 8 0 1 2 3 1 2
9 9 9 0 9 9 9 9
1 1 1 1 0 1 1 1
8 7 6 5 4 0 3 2
9 1 9 1 9 1 0 9
6 5 4 3 2 1 9 0
```

### 예제 출력 3

```text
1
```

## 힌트

예제 2의 경우에 (1, 3, 6), (2, 4, 5)로 팀을 나누면 되고,  
예제 3의 경우에는 (1, 2, 4, 5), (3, 6, 7, 8)로 팀을 나누면 된다.

## 풀이

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    static int N; // 사람 수
    static int[][] S; // 능력치 배열
    static boolean[] team; // 팀 분할을 나타내는 배열
    static int minDifference = Integer.MAX_VALUE; // 능력치 차이의 최소값

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        N = Integer.parseInt(br.readLine());
        S = new int[N][N];
        team = new boolean[N];

        // 능력치 입력 받기
        for (int i = 0; i < N; i++) {
            String[] input = br.readLine().split(" ");
            for (int j = 0; j < N; j++) {
                S[i][j] = Integer.parseInt(input[j]);
            }
        }

        // 팀 분할 및 능력치 차이 계산
        divideTeam(0);
        System.out.println(minDifference);

        br.close();
    }

	// 팀을 분할하는 함수
	public static void divideTeam(int player) {
	    if (player == N) {
	        // 모든 선수에 대한 팀 분할이 완료되었을 때 능력치 차이 계산
	        calculateDifference();
	        return;
	    }

	    // player번째 선수를 스타트 팀에 배정
	    team[player] = true;
	    divideTeam(player + 1);

	    // player번째 선수를 링크 팀에 배정
	    team[player] = false;
	    divideTeam(player + 1);
	}

	// 두 팀의 능력치 차이를 계산하는 함수
	public static void calculateDifference() {
	    int startTeamScore = 0;
	    int linkTeamScore = 0;

	    // 두 팀의 능력치를 계산
	    for (int i = 0; i < N - 1; i++) {
	        for (int j = i + 1; j < N; j++) {
	            // 두 선수가 같은 팀일 경우 해당 능력치를 합산
	            if (team[i] == team[j]) {
	                if (team[i]) { // 스타트 팀
	                    startTeamScore += S[i][j] + S[j][i];
	                } else { // 링크 팀
	                    linkTeamScore += S[i][j] + S[j][i];
	                }
	            }
	        }
	    }

	    // 두 팀의 능력치 차이를 계산하고 최소값을 갱신
	    int difference = Math.abs(startTeamScore - linkTeamScore);
	    minDifference = Math.min(minDifference, difference);
	}

}
```

---

*2023-11-03에 [Tistory](https://berom.tistory.com/526)에 쓴 글을 옮겼습니다.*
