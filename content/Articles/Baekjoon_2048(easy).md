---
aliases: []
date_created: 2023-10-25
date_modified: 2023-10-25
permalink: boj-12100
tags:
  - algorithm
  - baekjoon
  - dfs
title: "Baekjoon_2048(easy)"
---

## 문제

2048 게임은 4×4 크기의 보드에서 혼자 즐기는 재미있는 게임이다. 이 [링크](https://gabrielecirulli.github.io/2048/)를 누르면 게임을 해볼 수 있다.

이 게임에서 한 번의 이동은 보드 위에 있는 전체 블록을 상하좌우 네 방향 중 하나로 이동시키는 것이다.  
이때, 같은 값을 갖는 두 블록이 충돌하면 두 블록은 하나로 합쳐지게 된다.

한 번의 이동에서 이미 합쳐진 블록은 또 다른 블록과 다시 합쳐질 수 없다.  
(실제 게임에서는 이동을 한 번 할 때마다 블록이 추가되지만, 이 문제에서 블록이 추가되는 경우는 없다)

|  |  |  |
| --- | --- | --- |
| ![2048 게임판 예시 그림 1](/_attachments/tistory-523-01.png) | ![2048 게임판 예시 그림 2](/_attachments/tistory-523-02.png) | ![2048 게임판 예시 그림 3](/_attachments/tistory-523-03.png) |
|  |  |  |
| --- | --- | --- |
| <그림 1> | <그림 2> | <그림 3> |

<그림 1>의 경우에서 위로 블록을 이동시키면 <그림 2>의 상태가 된다.  
여기서, 왼쪽으로 블록을 이동시키면 <그림 3>의 상태가 된다.

|  |  |  |  |
| --- | --- | --- | --- |
| ![2048 게임판 예시 그림 4](/_attachments/tistory-523-04.png) | ![2048 게임판 예시 그림 5](/_attachments/tistory-523-05.png) | ![2048 게임판 예시 그림 6](/_attachments/tistory-523-06.png) | ![2048 게임판 예시 그림 7](/_attachments/tistory-523-07.png) |
|  |  |  |  |
| --- | --- | --- | --- |
| <그림 4> | <그림 5> | <그림 6> | <그림 7> |

<그림 4>의 상태에서 블록을 오른쪽으로 이동시키면 <그림 5>가 되고, 여기서 다시 위로 블록을 이동시키면 <그림 6>이 된다. 여기서 오른쪽으로 블록을 이동시켜 <그림 7>을 만들 수 있다.

|  |  |
| --- | --- |
| ![2048 게임판 예시 그림 8](/_attachments/tistory-523-08.png) | ![2048 게임판 예시 그림 9](/_attachments/tistory-523-09.png) |
|  |  |
| --- | --- |
| <그림 8> | <그림 9> |

<그림 8>의 상태에서 왼쪽으로 블록을 옮기면 어떻게 될까?  
2가 충돌하기 때문에, 4로 합쳐지게 되고 <그림 9>의 상태가 된다.

|  |  |  |  |
| --- | --- | --- | --- |
| ![2048 게임판 예시 그림 10](/_attachments/tistory-523-10.png) | ![2048 게임판 예시 그림 11](/_attachments/tistory-523-11.png) | ![2048 게임판 예시 그림 12](/_attachments/tistory-523-12.png) | ![2048 게임판 예시 그림 13](/_attachments/tistory-523-13.png) |
|  |  |  |  |
| --- | --- | --- | --- |
| <그림 10> | <그림 11> | <그림 12> | <그림 13> |

<그림 10>에서 위로 블록을 이동시키면 <그림 11>의 상태가 된다.

<그림 12>의 경우에 위로 블록을 이동시키면 <그림 13>의 상태가 되는데,  
그 이유는 한 번의 이동에서 이미 합쳐진 블록은 또 합쳐질 수 없기 때문이다.

|  |  |
| --- | --- |
| ![2048 게임판 예시 그림 14](/_attachments/tistory-523-14.png) | ![2048 게임판 예시 그림 15](/_attachments/tistory-523-15.png) |
|  |  |
| --- | --- |
| <그림 14> | <그림 15> |

마지막으로, 똑같은 수가 세 개가 있는 경우에는 이동하려고 하는 쪽의 칸이 먼저 합쳐진다.  
예를 들어, 위로 이동시키는 경우에는 위쪽에 있는 블록이 먼저 합쳐지게 된다.

<그림 14>의 경우에 위로 이동하면 <그림 15>를 만든다.

이 문제에서 다루는 2048 게임은 보드의 크기가 N×N 이다.  
보드의 크기와 보드판의 블록 상태가 주어졌을 때, 최대 5번 이동해서 만들 수 있는 가장 큰 블록의 값을 구하는 프로그램을 작성하시오.

### 입력

첫째 줄에 보드의 크기 N (1 ≤ N ≤ 20)이 주어진다. 둘째 줄부터 N개의 줄에는 게임판의 초기 상태가 주어진다.  
0은 빈 칸을 나타내며, 이외의 값은 모두 블록을 나타낸다.

블록에 쓰여 있는 수는 2보다 크거나 같고, 1024보다 작거나 같은 2의 제곱꼴이다.  
블록은 적어도 하나 주어진다.

### 출력

최대 5번 이동시켜서 얻을 수 있는 가장 큰 블록을 출력한다.

### 풀이

- 조건

  - 블록은 추가 되지 않는다
  - 이미 합쳐진 블록은 또 다른 블록과 다시 합쳐질 수 없다
  - 이동시 모든 블록이 같은 방향으로 움직인다
  - 이동하려고 하는 쪽의 칸이 먼져 합쳐진다
- 흐름

  - 모든 값을 입력 받는다
  - DFS 함수를 돌린다
    - 4방향으로 보드를 굴린다
    - 보드를 1회 한 방향으로 움직 일때마다 인자로 보드를 넘긴다
    - 단 위의 조건을 매번 체크 해서, 같은 값인 경우 2의 배수로 합친다
  - DFS의 결과를 반환한다

```java
import java.util.Scanner;

public class Main {
    static int N;
    static int maxBlock = 0;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();
        int[][] board = new int[N][N];
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                board[i][j] = sc.nextInt();
            }
        }
        dfs(board, 0);
        System.out.println(maxBlock);
    }

    static void dfs(int[][] board, int depth) {
        if (depth == 5) {
            for (int i = 0; i < N; i++) {
                for (int j = 0; j < N; j++) {
                    maxBlock = Math.max(maxBlock, board[i][j]);
                }
            }
            return;
        }

        for (int dir = 0; dir < 4; dir++) {
            int[][] newBoard = move(board, dir);
            dfs(newBoard, depth + 1);
        }
    }

    static int[][] move(int[][] board, int dir) {
        int[][] newBoard = new int[N][N];
        boolean[][] combined = new boolean[N][N];

        // Copy the board
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                newBoard[i][j] = board[i][j];
            }
        }

        switch(dir) {
		    case 0: // 위로 이동
		        for (int j = 0; j < N; j++) {
		            for (int i = 1; i < N; i++) {
		                if (newBoard[i][j] == 0) continue; // 블록이 없으면 다음으로 이동
		                int pos = i;
		                // 위쪽으로 빈 칸이 있는지 확인
		                while (pos > 0 && newBoard[pos - 1][j] == 0) pos--;
		                // 위쪽 블록과 현재 블록이 같고 아직 합쳐지지 않았다면 합치기
		                if (pos > 0 && newBoard[pos - 1][j] == newBoard[i][j] && !combined[pos - 1][j]) {
		                    newBoard[pos - 1][j] *= 2;
		                    combined[pos - 1][j] = true;
		                    newBoard[i][j] = 0;
		                } else if (pos != i) { // 그렇지 않으면 블록 이동
		                    newBoard[pos][j] = newBoard[i][j];
		                    newBoard[i][j] = 0;
		                }
		            }
		        }
		        break;
		    case 1: // 아래로 이동
		        for (int j = 0; j < N; j++) {
		            for (int i = N - 2; i >= 0; i--) {
		                if (newBoard[i][j] == 0) continue; // 블록이 없으면 다음으로 이동
		                int pos = i;
		                // 아래쪽으로 빈 칸이 있는지 확인
		                while (pos < N - 1 && newBoard[pos + 1][j] == 0) pos++;
		                // 아래쪽 블록과 현재 블록이 같고 아직 합쳐지지 않았다면 합치기
		                if (pos < N - 1 && newBoard[pos + 1][j] == newBoard[i][j] && !combined[pos + 1][j]) {
		                    newBoard[pos + 1][j] *= 2;
		                    combined[pos + 1][j] = true;
		                    newBoard[i][j] = 0;
		                } else if (pos != i) { // 그렇지 않으면 블록 이동
		                    newBoard[pos][j] = newBoard[i][j];
		                    newBoard[i][j] = 0;
		                }
		            }
		        }
		        break;
		    case 2: // 왼쪽으로 이동
		        for (int i = 0; i < N; i++) {
		            for (int j = 1; j < N; j++) {
		                if (newBoard[i][j] == 0) continue; // 블록이 없으면 다음으로 이동
		                int pos = j;
		                // 왼쪽으로 빈 칸이 있는지 확인
		                while (pos > 0 && newBoard[i][pos - 1] == 0) pos--;
		                // 왼쪽 블록과 현재 블록이 같고 아직 합쳐지지 않았다면 합치기
		                if (pos > 0 && newBoard[i][pos - 1] == newBoard[i][j] && !combined[i][pos - 1]) {
		                    newBoard[i][pos - 1] *= 2;
		                    combined[i][pos - 1] = true;
		                    newBoard[i][j] = 0;
		                } else if (pos != j) { // 그렇지 않으면 블록 이동
		                    newBoard[i][pos] = newBoard[i][j];
		                    newBoard[i][j] = 0;
		                }
		            }
		        }
		        break;
		    case 3: // 오른쪽으로 이동
		        for (int i = 0; i < N; i++) {
		            for (int j = N - 2; j >= 0; j--) {
		                if (newBoard[i][j] == 0) continue; // 블록이 없으면 다음으로 이동
		                int pos = j;
		                // 오른쪽으로 빈 칸이 있는지 확인
		                while (pos < N - 1 && newBoard[i][pos + 1] == 0) pos++;
		                // 오른쪽 블록과 현재 블록이 같고 아직 합쳐지지 않았다면 합치기
		                if (pos < N - 1 && newBoard[i][pos + 1] == newBoard[i][j] && !combined[i][pos + 1]) {
		                    newBoard[i][pos + 1] *= 2;
		                    combined[i][pos + 1] = true;
		                    newBoard[i][j] = 0;
		                } else if (pos != j) { // 그렇지 않으면 블록 이동
		                    newBoard[i][pos] = newBoard[i][j];
		                    newBoard[i][j] = 0;
		                }
		            }
		        }
		        break;
		}
		return newBoard;
    }
}
```

#### DP로 풀지 않는 이유

2048 게임 문제를 풀 때, 동적 프로그래밍 (DP)를 사용하는 것은 비효율적일 수 있습니다.

1. **상태의 정의가 어렵습니다**

   - DP는 상태와 그 상태에서의 최적의 값을 저장하고 재사용하는 것을 기반으로 합니다
   - 2048 게임에서는 각 이동마다 보드의 상태가 수많은 가능한 방식으로 변경될 수 있습니다
   - 따라서 모든 가능한 보드 상태를 저장하려면 공간 복잡도가 매우 높아집니다.
2. **상태 전이가 복잡합니다**

   - DP에서는 한 상태에서 다른 상태로의 전이를 정의해야 합니다.
   - 2048 게임에서는 한 상태에서 다른 상태로의 전이를 정확하게 예측하는 것이 어렵습니다.
   - 보드의 각 칸에 있는 값과 이동 방향에 따라 결과 상태가 달라질 수 있기 때문입니다.
3. **중복된 계산이 적습니다**

   - DP의 핵심은 중복된 계산을 피하기 위해 부분 문제의 결과를 저장하고 재사용하는 것입니다
   - 그러나 2048 게임에서는 각 이동마다 보드의 상태가 크게 바뀌기 때문에 중복되는 계산이 많지 않습니다. 따라서 DP의 장점을 활용하기 어렵습니다.
4. **탐색의 범위가 제한적입니다**

   - 문제에서는 최대 5번의 이동만을 고려하므로, 모든 가능한 이동 조합을 탐색하는 깊이 우선 탐색 (DFS) 방식이 효율적입니다.

---

*2023-10-25에 [Tistory](https://berom.tistory.com/523)에 쓴 글을 옮겼습니다.*
