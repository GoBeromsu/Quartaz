---
aliases: []
date_created: 2021-03-10
date_modified: 2022-01-11
permalink: til-async-await
tags:
  - javascript
title: "async await 문법"
---
## let

* 블록 범위(scope)의 지역 변수를 선언한다.
* 선언과 동시에 값을 초기화할 수도 있다.

## async await

* 비동기 처리를 위해 쓴다.
    * 비동기 처리는 특정 로직이 끝나지 않았어도 바로 나머지 코드를 실행하는 방식이다.
* async랑 await는 세트!
* 프로미스 : javascript에서 비동기 처리를 위한 객체
    * Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
    * Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
    * Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

```javascript
async function 함수명() {
  await 비동기_처리_메서드_명();
}

```

* async는 예약어이고, await는 비동기 처리 메서드 앞에 붙인다!

* [async await 문법 참고 블로그](https://joshua1988.github.io/web-development/javascript/js-async-await/)

---

*2021-03-10에 [GitHub TIL](https://github.com/GoBeromsu/Wiggle-TIL/blob/master/Etc/Syncawait%EB%AC%B8%EB%B2%95.md)에 쓴 글을 옮겼습니다.*
