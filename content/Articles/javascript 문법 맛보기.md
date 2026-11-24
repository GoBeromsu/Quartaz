---
aliases: []
date_created: 2022-03-10
date_modified: 2022-03-10
permalink: javascript-syntax-basics
tags:
  - javascript
title: "javascript 문법 맛보기"
---

![cover](/_attachments/ghio-javascript-syntax-basics-01.png)

## javascript 기본 문법

- 언어를 이거저거 써보다보니 느끼는 건데 거의 비슷 비슷하다
- [생활코딩](https://opentutorials.org/course/743/4650) 보고 튜토리얼 따라하고 쉘 코딩 아니면 node.js 만져볼까 생각 중이다

- **와 오졌다 설레 미쳤어**
  - Javascirpt가 시대가 흐름에 따라 확장성이라 해야하나 할 수 있는게 많아 졌는데 와우 그냥 다 할 수 있어 멋져 역동적이야 코오,,,
  - 살짝 그래서 노마드 코더의 바닐라.JS 따라해볼까 생각중

## 주석

- //
  - 한 줄 주석
- /\* \*/
  - 여러 줄 주석

## 문자

- 문자는 ' '나 " " 중 하나로 감싸야한다.
- 문자를 더할 땐 + 사용

  ```javascript
  alert("안녕" + "요런 느낌이랄까?");
  ```

- .length : 문자열의 길이를 계산하는 메소드

## 변수

- 모든 intruction은 다른 줄에 선언되어야 한다
  - 그러고 싶지 않으면 ; 이용하자
- 변수 생성, 초기화, 사용 단계로 사용하자
  - 기본이다!

```javascript
let a = 221;
let b = a - 5;
console.log(b);
```

- const : 상수
- let : 바뀌어도 되는 변수
- variable : 변수
  - let처럼 바뀔 수 있음
- 첫 사용은 const, 필요할 때만 let!

## 연산자

- = : 대입 연산자
- == : 동등 연산자
  - 값이 같은가?
- === : 일치 연산자
  - 좌우 항이 일치하는가?
- != : 같지 않다
- && : AND 연산자
- || : OR 연산자
- ! : 값을 역전시킴, 부정하는 것이지
  - 0 도 관습적으로 false가 될 수 있다

## 조건문

```javascript
if (id == "beomsu") {
  alert("아이디가 일치하는군");
} else {
  alert("아이디가 일치하지 않습니다");
}
```

- 사실 별 차이가 없다

## 반복문

```javascript
while (true) {
  document.write("안녕?");
}
```

- document는 javascript를 이용해 웹페이지 문자를 적는데 콘솔에서 하면 안보인다
  - console.log로 대신할 수 있음

## 함수

기본 형식은 역시나 비슷하다

```javascript
function 함수명(인자1,인자2... 마지막 인자){
  코드
  return 반환값
}
```

## 배열

- 배열 선언을 아래와 같이 하며 된다

```javascript
const somthing = "something";

const daysOfWeek = ["mon", "true", "sun", true, something];
```

- indexing
  - daysOfWeek[2] --> sun

### 배열 가지고 놀아보기

- .push()
  - 괄호 안의 값을 인덱스에 넣어줌
- .shift()
  - 인덱스의 첫번째 값을 삭제
- .pop()
  - 인덱스의 마지막 값을 삭제
- .sort()
  - 정렬 함수
- .reveser()
  - 역순 정렬

## 객체

여기부터 좀 재밌다

- 처음에 봤을 땐 딕셔너리 같다 생각했는데 이 형식으로 객체를 저장하고 있다. 웃기네
  - 와 소름;; json이 javascript Object Notion이란 뜻인데 어쩐지 json이랑 똑같네 아주 그냥 표현하는게 신기하다

```javascript
var beomsu = {
  name: "beomsu",
  show: function () {
    alert(this.name);
  },
};
beomsu.show();
```

위의 코드를 실행시키면 아래와 같은 화면을 확인할 수 있다.

- 코드 리뷰
  - name에 beomsu 저장
  - show라는 function 선언
    - show 함수는 이 클래스의 name에 접근해 이름을 출력한다

![image](/_attachments/ghio-javascript-syntax-basics-02.png)

## 모듈

- 자주 사용되는 코드를 별도의 파일로 만들어 필요할 때 가져다가 쓰는거지
- 이에 따라서 유지보수 및 메모리 낭비 거기에 웹브라우저에서 사용한다면 속도가 까지 빨라지는 거지

* 아래 js와 html 파일은 같은 디렉터리에 있어용

```javascript
var beomsu = {
  name: "beomsu",
  show: function () {
    alert(this.name);
  },
};
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="test.js"></script>
    <title>Document</title>
  </head>
  <body>
    <script>
      alert(beomsu.show());
    </script>
  </body>
</html>
```

- html 코드를 보면 head에서 script source를 받아 오는 걸 볼 수 있다. 저런 느낌으로 자주 사용하는 모듈을 받아오면 된다. 뭐 jquery이런 것들 말이다
- 대신 환경마다 소스를 받아오는 방법이 다르다
  - 예를 들어 node.js랑 web의 차이랄까

## DOM(Document Object Module)

- document로 javascript에서 css에 접근 할 수 있다.
- JS에서 내 HTML의 모든 것들은 객체로 바꿔 버려 접근 가능하게 하는 것이지

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="CSS.css" />
  </head>
  <body>
    <h1 id="title" class="btn">Hi this is my first test</h1>
  </body>
  <script type="text/javascript" src="test.js"></script>
</html>
```

```javascript
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
```

```css
body {
  background-color: palegoldenrod;
}

.color {
  color: tomato;
}
.clicked {
  color: teal;
}
.btn {
  cursor: pointer;
}
```

---

*2022-03-10에 [GitHub Pages](https://goberomsu.github.io/2022/03/10/javascript_%EA%B8%B0%EB%B3%B8%EB%AC%B8%EB%B2%95/)에 쓴 글을 옮겼습니다.*
