---
aliases: []
date_created: 2023-08-09
date_modified: 2023-08-09
permalink: programmers-add-fractions
tags:
  - algorithm
  - programmers
title: "Programmers_분수의 덧셈"
---

MOC:  
Index:

## 문제

첫 번째 분수의 분자와 분모를 뜻하는 `numer1`, `denom1`, 두 번째 분수의 분자와 분모를 뜻하는 `numer2`, `denom2`가 매개변수로 주어집니다.  
두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

## 코드

```java
class Solution {
    public int[] solution(int numer1, int denom1, int numer2, int denom2) {
        int commonDenom = denom1*denom2;
        int commonNumber = (numer1*denom2) + (numer2 * denom1);

        int gcd = gcd(commonDenom,commonNumber);

        int[] answer = {commonNumber/gcd,commonDenom/gcd};
        return answer;
    }
    public int gcd(int a,int b){
        while(b!=0){
            int temp = a%b;
            a=b;
            b=temp;
        }
        return a;
    }
}
```

최대 공약수를 이용해서 문제를 풀었다  
이 문제의 핵심은 유클리드 호제법을 아는가이다

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-09에 [Tistory](https://berom.tistory.com/463)에 쓴 글을 옮겼습니다.*
