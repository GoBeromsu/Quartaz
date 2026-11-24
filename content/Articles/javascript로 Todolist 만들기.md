---
aliases: []
date_created: 2022-03-10
date_modified: 2022-03-10
permalink: javascript-todolist
tags:
  - javascript
title: "javascript로 Todolist 만들기"
---

![cover](/_attachments/ghio-javascript-todolist-01.jpg)

## 코드 리뷰

### index html && css

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <link rel="stylesheet" href="index.css" />
    <title>Document</title>
  </head>
  <body>
    <div class="js-clock">
      <h1>00:00</h1>
    </div>
    <form class="js-form form">
      <input type="text" placeholder="what is your name?" />
    </form>
    <h4 class="js-greetings greetings"></h4>
    <script src="clock.js"></script>
    <script src="greeting.js"></script>
  </body>
</html>
```

```css
.form,
.greetings {
  display: none;
}

.showing {
  display: block;
}
```

#### 새로 알게 된 것들

- html에서 class 선언 할 때 nickname을 쓸 수 있다
  ```html
  <form class="js-form form">
    <input type="text" placeholder="what is your name?" />
  </form>
  ```
  ```CSS
  .form,
  .greetings {
  display: none;
  }
  ```
  - 위에서 볼 수 있다시피 class name을 form으로 해도 인식한다
    - 세상 편하지 인생 실전이였다

* script tag 쓸 때 src로 js 파일과 연결해야한다
  - 까먹지마!
* css 연결하는 법 까먹지 말아라
  ```html
  <link rel="stylesheet" href="index.css" />
  ```

### javascript

- 기능 별로 js파일을 나눈 후 파일 안에서도 function 분할을 하여 코드를 간결히 하라
  - 객체의 중요성이라 생각한다

#### clock.js

```javascript
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  clockTitle.innerText = ` ${hours < 10 ? `0${hours}` : hours} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  setInterval(getTime, 1);
}

init();
```

##### 새로 알게 된 것들

- javascript에서 html에 접근하는 것도 crawler와 다르지 않다
  - document가 index.html의 정보를 객체로 긁어오면 그 정보를 토대로 이벤트를 발생시키는 것이 기본 개념
- 삼항 연산자 오랜만에 본다!
- setInterval(function, interveral time)
  - 실행시킬 함수와 함수를 다시 실행시킬 간격을 인수로 받는다
- ,를 잘사용하자 코드의 가독성이 올라간다

#### greeting.js

```javascript
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // she is not
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
```

##### 새로 알게 된 것들

- html, javascript, css의 연결 방식
  1. javascript에서 document로 html 소스를 읽고 객체로 만든다
  2. javascript에서는 받은 소스로 html 소스에 접근한다
     1. function
     2. variable
     3. etc
  3. html에서 선언한 class, id, tag를 변환
  4. 예시를 든다면 css 안에 여러 옵션을 만들어 놓는다
  5. html tag를 바꿈으로써 이벤트를 발생시킴

---

*2022-03-10에 [GitHub Pages](https://goberomsu.github.io/2022/03/10/javascript_Todolist%EB%A7%8C%EB%93%A4%EA%B8%B0/)에 쓴 글을 옮겼습니다.*
