---
aliases: []
date_created: 2023-01-10
date_modified: 2023-01-10
permalink: vlm-bootcamp-coding-test-review
tags:
  - algorithm
title: "VLM 부트캠프 - Coding Test Review"
---

## 문제

JSON 형식의 파일에서 정해진 조건으로 데이터를 출력하는 문제이다

```javascript
const users = [
  { "name": "하윤", "gender": "female", "age": 23, "birth": "2000-3-25" },
  { "name": "예준", "gender": "male", "age": 24, "birth": "1999-4-4" },
  { "name": "도윤", "gender": "female", "age": 22, "birth": "2001-5-12" },
  { "name": "민준", "gender": "male", "age": 24, "birth": "1999-4-14" },
  { "name": "서준", "gender": "male", "age": 23, "birth": "2000-10-27" }
]
```

주어진 JSON 배열에서 결과를 추출하세요.(index.js)

1. users의 평균나이를 구하시오
2. 24살이상인 user를 출력하시오
3. users의 이름[나이/성별]로 출력하시오 ex) 민준[24/남], 하윤[23/여]
4. users를 이름(오름차순)으로 정렬하시오
5. users를 나이(내림차순)로 정렬하시오
6. users를 생일(년도오름차순)으로 정렬하시오

### 내 코드

#### 1. Users의 평균나이를 구하시오

```javascript
function problem1() {
    //TODO: 1. users의 평균나이를 구하시오

    console.log(
        `평균나이: ${
            users.reduce((prev, cur) => prev + cur.age, 0) / users.length
        }`
    );
}
```

핵심은 reduce 함수이다. Array.prototype 함수의 일종으로 리듀서 함수를 실행하고, 하나의 결과 값을 반환한다.  
`reduce()`는 빈 여 요소를 제외하고 배열 내에 존재하는 각 요소에 callback 함수를 한번 씩 실행한다.  
인자로는 누산기, 현재 값, 현재 인덱스, 원본 배열을 가진다.  
리듀서 함수의 반환 값은 누산기에 계속 할당되고, 누산기는 순회 중에도 유지되므로, 최종 결과는 하나의 값이 나온다

예제로 보면 이해가 훨씬 더 쉽다

```javascript
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
});
```

#### 2. 24살이상인 User를 출력하시오

```javascript
function problem2() {
    //TODO: 2. 24살이상인 user를 출력하시오

    console.log(users.filter(({ age }) => age >= 24));
}
```

해당 문제의 핵심은 filter이다. `filter()` 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다. 단 호출되는 배열을 변화시키지는 않는다.

```javascript
arr.filter(callback(element[, index[, array]])[, thisArg])
```

기본적인 형태는 위와 같은데, callback 함수의 참을 반환하는 값들로만 새로운 배열을 만들어준다

#### 3. Users의 이름`[나이/성별]`로 출력하시오

```javascript
function problem3() {
    //TODO: 3. users의 이름[나이/성별]로 출력하시오
    //ex) 민준[24/남], 하윤[23/여]

    console.log(
        users.map(
            (user) =>
                `${user.name}[${user.age}/${
                    user.gender == "male" ? "남" : "여"
                }]`
        )
    );
}
```

#### 4. Users를 이름(오름차순)으로 정렬하시오

```javascript
function problem4() {
    //TODO: 4. users를 이름(오름차순)으로 정렬하시오

    console.log(users.sort((a, b) => (a.name > b.name ? 1 : -1)));
}
```

#### 5. Users를 나이(내림차순)로 정렬하시오

```javascript
function problem5() {
    //TODO: 5. users를 나이(내림차순)로 정렬하시오

    console.log(users.sort((a, b) => (a.age > b.age ? -1 : 1)));
}
```

#### 6. Users를 생일(년도오름차순)으로 정렬하시오

```javascript
function problem6() {
    //TODO: 6. users를 생일(년도오름차순)으로 정렬하시오

    console.log(
        users.sort(
            (a, b) => new Date(a.birth).getTime() - new Date(b.birth).getTime()
        )
    );
}
```

#### 피드백

코드를 줄여야겠다는 생각에, 함수에서 console 창에 찍는 것도 함께 했다.  
이런 짧은 코드에서도 기능 분리하는 습관을 들일 필요가 있다

---

*2023-01-10에 [Tistory](https://berom.tistory.com/5)에 쓴 글을 옮겼습니다.*
