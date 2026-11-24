---
aliases: []
date_created: 2023-08-19
date_modified: 2023-08-19
permalink: boj-1920
tags:
  - algorithm
  - baekjoon
  - binary-search
title: "Baekjoon_수 찾기"
---

## 문제

N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

### 입력

첫째 줄에 자연수 N(1 ≤ N ≤ 100,000)이 주어진다. 다음 줄에는 N개의 정수 A[1], A[2], …, A[N]이 주어진다.

다음 줄에는 M(1 ≤ M ≤ 100,000)이 주어진다.  
다음 줄에는 M개의 수들이 주어지는데, 이 수들이 A안에 존재하는지 알아내면 된다.

모든 정수의 범위는 -231 보다 크거나 같고 231보다 작다.

### 출력

M개의 줄에 답을 출력한다. 존재하면 1을, 존재하지 않으면 0을 출력한다.

## 풀이

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return 1
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return 0

def find_numbers(N, A, M, targets):
    A.sort()  # Sort the array for binary search
    result = [binary_search(A, target) for target in targets]
    return result

# Test the function with the provided input
N = int(input())
A = list(map(int, input().split()))
M = int(input())
targets = list(map(int, input().split()))
result = find_numbers(N, A, M, targets)
for n in result:
    print(n)
```

이진 탐색으로 주어진 A 안의 숫자가 target에 들어가 있는지 확인하는 문제이다

### Java로 풀기

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
// tip: each public class is put in its own file
public class Main
{
    // tip: arguments are passed via the field below this editor
    public static void main(String[] args)
    {
        try(BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))){
            int N = Integer.parseInt(reader.readLine());
            int[] A = Arrays.stream(reader.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
            int M = Integer.parseInt(reader.readLine());
            int[] target = Arrays.stream(reader.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
            solution(N,A,M,target);
        }catch(IOException e){
            e.printStackTrace();
        }

    }

    static void solution(int N, int[] A, int M, int[] target) {
        Arrays.sort(A);
        for (int n : target) { // Search for each value in target within A
            System.out.println(binary_search(A, n));
        }
    }

    static int binary_search(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            if (arr[mid] == target)
                return 1;
            else if (arr[mid] < target)
                left = mid + 1;
            else {
                right = mid - 1;
            }
    }

    return 0;
	}
}
```

A를 정렬하는 이유는 이진 트리는 정렬된 배열에서 동작하기 때문입니다

---

*2023-08-19에 [Tistory](https://berom.tistory.com/485)에 쓴 글을 옮겼습니다.*
