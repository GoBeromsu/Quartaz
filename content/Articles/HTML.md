---
aliases: []
date_created: 2019-01-28
date_modified: 2019-01-28
permalink: til-html-1
tags:
  - html
title: "HTML"
---
* What is web
     *server computer에 접근 후 돌아갈 때는 location만 기억하고 돌아가기 때문에 packet의 돌아가는 길은 다양하다
    * website components =  The front-End +  The Back End
        * The front End : user로 접속해 보는 모든 것
        * The Back End : Front End에 보여주기 위한 기술적인 모든 것

        The front End Technologies

        1. HTML
        2. CSS
        * Home page Styling
        * But It isn't mandatory
        3. Java script
        * allow us to add interactivity to website
        * javascript를 사용하는 경우 site가 상호작용성을 가지게 됨

        The Back End Technologies

        1. launguage
        2. Framework
        3. DataBase

* HTML에 관하여
    * WEB이 돌아가는 원리에 대한 기초임을 명심하도록
    * LEVEL 1
        * HTML Basics
        * Tagging
        * lists
        * Divs and Spans
        * attributes

    * html head

    ```html
    html head는 metadata를 포함한다. head는 그렇게 큰 역할을 하지 않는 대신 다른 파일들과 연결해준다.
    예를 들어 cssa파일 또는 내 데이터 베이스의 javascript파일을 연결할 수 있다는 거지
    ```

    * title
    ```html
    진짜 제목이다. puretext 신경 ㄴㄴ
    ```

    * body
        ```html
        실질적인 데이터가 포함된다.
        opening tag : <!--
        end of comment : -->
        ```

         * header tag & heading tag
    ```html
    <h1> this is a title </h1> (헤더 열고 닫기)
        h1~h8로 갈수록 크기가 점점 작아진다.

    <p> This is a paragraph </p> (normal text)
        태그를 새로 만들지 않으면 계속 이어진다.

        <b> 두껍게 나온다. </b>
        <strong>        </strong>

        <i> 옆으로 기울여서 italic체 </i>
        <em>                    </em>
    <ol> 순서 있는 목록 생성 </ol>
        <li> 목록 내용       </li>

    <ul> 순서 없는 목록 생성 </ul>
        <li>        </li>
    ```

    * Span & div tag
        * <div> 레이아웃 나눌 때 쓰지만 주로 css 랑 같이 사용함    </div>
        * <span> 그냥 div랑 p 사이에 쓰는데 주로 스타일 적용할 때 사용 </span>

    * attribuates
        *  img src="" alt="" (<>이거 필순데 적용하니까 코드가 안보여서 이렇게 했어)
            *  src : 이미지 파일 소스 (같은 폴더에 있어야함)
            *  alt : alternative, src에서 소스가 잘 못될 경우 선택적으로 시행됨
        * a href="#"> /a>(<>이거 빠짐 유의하셈)
            * href="url,html 파일 주소"
            * 그 뒤에 text 입력 : click 하면 그 url, html로 이동

* 오늘의 문제
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Excercise title</title>
  </head>
  <body>
    <h1><b>Welcome to my website!</b></h1>
    <p> I'm excited to eventually learn Django!</p>
    <a href="https://www.djangoproject.com/">
    Here is a link to the official Django Website</a>
    <p>Here is a picture of the Python Logo:</p>
    <img src="C:\Users\고범수\Desktop\django\python-logo-master-v3-TM.png" alt="">
    <ol>Here are three reaseons Django is cool
      <li>Ridiculously Fast</li>
      <li>Reassuringly Secure</li>
      <li>Exceedingly Scalable</li>
    </ol>
    <p><b> Bonus: optional Extra Credit</b></p>
    <p> can you figure out how to make a picure a link?</p>
    <<a href="https://www.djangoproject.com/">
      <img src="C:\Users\고범수\Desktop\django\django.png" alt=""></a>
  </body>
</html>
```

할만해

---

*2019-01-28에 GitHub TIL 저장소에 쓴 글을 옮겼습니다.*
