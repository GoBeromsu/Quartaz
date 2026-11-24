---
aliases: []
date_created: 2023-08-11
date_modified: 2023-08-11
permalink: programmers-memory-score
tags:
  - algorithm
  - programmers
title: "Programmers_추억 점수"
---

MOC:  
Index:

## 문제 설명

사진들을 보며 추억에 젖어 있던 루는 사진별로 추억 점수를 매길려고 합니다.  
사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수가 됩니다.

예를 들어 사진 속 인물의 이름이 [“may”, “kein”, “kain”]이고 각 인물의 그리움 점수가 [5점, 10점, 1점]일 때 해당 사진의 추억 점수는 16(5 + 10 + 1)점이 됩니다.  
다른 사진 속 인물의 이름이 [“kali”, “mari”, “don”, “tony”]이고 [“kali”, “mari”, “don”]의 그리움 점수가 각각 [11점, 1점, 55점]]이고, "tony"는 그리움 점수가 없을 때,  
이 사진의 추억 점수는 3명의 그리움 점수를 합한 67(11 + 1 + 55)점입니다.

그리워하는 사람의 이름을 담은 문자열 배열 `name`, 각 사람별 그리움 점수를 담은 정수 배열 `yearning`,  
각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 `photo`가 매개변수로 주어질 때,  
사진들의 추억 점수를 `photo`에 주어진 순서대로 배열에 담아 return하는 solution 함수를 완성해주세요.

## 코드

```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] solution(String[] name, int[] yearning, String[][] photo) {
        int[] answer = new int[photo.length];

        Map<String, Integer> ht = new HashMap<>();

        for(int i=0;i<name.length;i++){
            ht.put(name[i],yearning[i]);
        }

        for (int i =0; i<photo.length;i++){
            int score=0;
            for (String person:photo[i]){

                if(ht.containsKey(person)){
                score+=ht.get(person);
                }
            }
            answer[i]=score;
        }

        return answer;
    }
}
```

### int와 Integer의 차이

`Integer`는 기본 데이터 타입 `int`의 래퍼 클래스입니다. java.lang 패키지의 일부로, `int`의 객체 표현을 제공합니다.  
`int`는 기본 타입이므로 값만 저장하고 메모리 효율적입니다.

#### Integer

- 객체이므로 null이 될 수 있습니다 하지만, `int`: 기본 타입이므로 null이 될 수 없습니다.
- 또한, 객체 자체에 대한 메타데이터를 포함하여 추가 오버헤드가 있습니다.
- 정수의 객체 표현이 필요한 경우 사용됩니다.
  - 예를 들어 객체가 필요한 컬렉션(예: `ArrayList<Integer>`)과 함께 작업하거나 `Integer` 클래스에서 제공하는 메서드를 사용해야 할 때입니다.

### HashMap의 containsKey()의 시간 복잡도

일반적으로 HashMap의 containsKey()는 O(1)의 시간 복잡도를 가진다  
왜냐하면, HashMap은 hash 함수를 사용해서 키를 특정 값과 바로 연관 짓기 때문이다

하지만, Hash Collision이 발생하고, 모든 키가 같은 곳에 있다면 시간 복잡도는 O(n)으로 내려간다

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-11에 [Tistory](https://berom.tistory.com/464)에 쓴 글을 옮겼습니다.*
