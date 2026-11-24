---
aliases: []
date_created: 2023-08-19
date_modified: 2023-08-19
permalink: boj-2805
tags:
  - algorithm
  - baekjoon
  - binary-search
title: "Baekjoon_나무 자르기"
---

## 문제

상근이는 나무 M미터가 필요하다. 근처에 나무를 구입할 곳이 모두 망해버렸기 때문에, 정부에 벌목 허가를 요청했다.  
정부는 상근이네 집 근처의 나무 한 줄에 대한 벌목 허가를 내주었고, 상근이는 새로 구입한 목재절단기를 이용해서 나무를 구할것이다.

목재절단기는 다음과 같이 동작한다.

먼저, 상근이는 절단기에 높이 H를 지정해야 한다.  
높이를 지정하면 톱날이 땅으로부터 H미터 위로 올라간다.  
그 다음, 한 줄에 연속해있는 나무를 모두 절단해버린다.

따라서, 높이가 H보다 큰 나무는 H 위의 부분이 잘릴 것이고, 낮은 나무는 잘리지 않을 것이다.

예를 들어, 한 줄에 연속해있는 나무의 높이가 20, 15, 10, 17이라고 하자. 상근이가 높이를 15로 지정했다면,

나무를 자른 뒤의 높이는 15, 15, 10, 15가 될 것이고, 상근이는 길이가 5인 나무와 2인 나무를 들고 집에 갈 것이다. (총 7미터를 집에 들고 간다) 절단기에 설정할 수 있는 높이는 양의 정수 또는 0이다.

상근이는 환경에 매우 관심이 많기 때문에, 나무를 필요한 만큼만 집으로 가져가려고 한다.  
이때, 적어도 M미터의 나무를 집에 가져가기 위해서 절단기에 설정할 수 있는 높이의 최댓값을 구하는 프로그램을 작성하시오.

### 입력

첫째 줄에 나무의 수 N과 상근이가 집으로 가져가려고 하는 나무의 길이 M이 주어진다. (1 ≤ N ≤ 1,000,000, 1 ≤ M ≤ 2,000,000,000)

둘째 줄에는 나무의 높이가 주어진다. 나무의 높이의 합은 항상 M보다 크거나 같기 때문에, 상근이는 집에 필요한 나무를 항상 가져갈 수 있다. 높이는 1,000,000,000보다 작거나 같은 양의 정수 또는 0이다.

### 출력

적어도 M미터의 나무를 집에 가져가기 위해서 절단기에 설정할 수 있는 높이의 최댓값을 출력한다.

### 예제 입력

```text
4 7
20 15 10 17
```

## 풀이

환경을 사랑하는? 상근이는 나무들을 임계 높이 이상에서 자를 것이고, 자신이 필요한 나무를 모두 모았는지 계산을 할 것이다

1. **절단기 높이 범위 설정**: 0부터 최대 나무 높이까지의 범위에서 이진 탐색을 시작합니다.
2. **이진 탐색 시작**: 중간 높이에서 나무를 잘랐을 때 얻을 수 있는 나무의 길이를 계산합니다.
3. **나무 길이 비교**: 잘린 나무의 길이가 M보다 크거나 같으면, 높이를 높여서 탐색 범위를 줄입니다. M보다 작으면, 높이를 낮춰서 탐색 범위를 줄입니다.
4. **최적 높이 찾기**: 위의 과정을 반복하여 최적의 높이를 찾습니다.

```python
# Given input
N, M = map(int,input().split())
trees = list(map(int,input().split()))

def cut_trees(height):
    total_length = 0
    for tree in trees:
        if tree > height:
            total_length += tree - height
    return total_length

def find_optimal_height():
    low, high = 0, max(trees)
    optimal_height = 0
    while low <= high:
        mid = (low + high) // 2
        cut_length = cut_trees(mid)
        if cut_length >= M:
            optimal_height = mid
            low = mid + 1
        else:
            high = mid - 1
    return optimal_height

optimal_height = find_optimal_height()
print(optimal_height)
```

여기서 이진 탐색임에도 정렬을 하지 않는 이유에 대해 궁금 할 수 있다

이 문제에서는 나무 높이 자체에 대해 수행 되는 것이 아니라 절단기 높이에 대해 이진 탐색을 한다.  
핵심이 특정 높이에서 나무를 자르면 충분한 양의 나무를 얻을 수 있는가를 판단하는 것이기 때문이다

1. **절단기 높이 범위 설정**
   - 절단기 높이의 최소값은 0, 최대값은 주어진 나무 중 가장 높은 나무의 높이입니다.
   - 이 범위 내에서 이진 탐색을 수행합니다.
2. **나무 자르기 시뮬레이션**
   - 각 이진 탐색 단계에서, 절단기 높이를 중간 값으로 설정하고 나무를 잘랐을 때 얻을 수 있는 총 나무의 길이를 계산합니다.
3. **나무 길이 비교**
   1. 잘린 나무의 길이가 필요한 길이 M보다 크거나 같으면, 절단기 높이를 높여 더 적게 자르도록 합니다.
   2. 그렇지 않으면, 절단기 높이를 낮춰 더 많이 자르도록 합니다.

### 겪었던 이슈 : 시간 초과

```python
def cut_trees(height):
    return sum(max(0, tree - height) for tree in trees)
```

일반적으로 루프 내에서 수행 되는 연산의 효율성을 살펴보는 것이 좋습니다

cut_trees에서 보다시피, 절단기 위의 높이를 모두 계산하다보니 쓸모 없는 연산이 생기고 있었습니다

```python
N, M = map(int, input().split())
trees = list(map(int, input().split()))

def cut_trees(height):
    total_length = 0
    for tree in trees:
        if tree > height:
            total_length += tree - height
    return total_length
```

이젠 나무의 높이가 절단기 높이보다 낮으면 절단 되지 않도록 함으로써 불필요한 연산을 줄였습니다  
![백준 2805 나무 자르기 Python 3와 Java 8 맞았습니다 제출 기록](/_attachments/tistory-486-01.png)

## Java

```python
import java.util.Scanner;

class Main {

    public static long cutTrees(long height, long[] trees) {
        long totalLength = 0;
        for (long tree : trees) {
            totalLength += Math.max(0, tree - height);
        }
        return totalLength;
    }

    public static long findOptimalHeight(long[] trees, long M) {
        long low = 0, high = 0;
        for (long tree : trees) {
            high = Math.max(high, tree);
        }
        long optimalHeight = 0;
        while (low <= high) {
            long mid = (low + high) / 2;
            long cutLength = cutTrees(mid, trees);
            if (cutLength >= M) {
                optimalHeight = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return optimalHeight;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        long M = scanner.nextLong();
        long[] trees = new long[N];
        for (int i = 0; i < N; i++) {
            trees[i] = scanner.nextLong();
        }
        scanner.close();

        long optimalHeight = findOptimalHeight(trees, M);
        System.out.println(optimalHeight);
    }
}
```

---

*2023-08-19에 [Tistory](https://berom.tistory.com/486)에 쓴 글을 옮겼습니다.*
