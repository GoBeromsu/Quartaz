---
aliases: []
date_created: 2022-03-10
date_modified: 2022-03-10
permalink: javascript-dev-environment-setup
tags:
  - javascript
title: "javascript 개발환경 세팅"
---

# 응? 뜬금 javascript 하는거냐?

깊게 공부할 생각은 없고 그냥 코드를 읽으면 이렇게 돌아가는구나 자바스크립트는 이런 언어 이구나 알고 싶다. 그런것도 있고 자바 스크립트의 철학이라던가 워게임 할 때도 필요하고 하니 미리 조곰 해두려고 이 때 아니면 언제 해보냐?

# VScode에서 jscode 개발 환경 세팅

- liver server 설치
  - 파일 - 설정 - liveserver default 브라우저 크롬으로 변환
- html, js 파일 생성

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <script type="text/javascript" src="test.js"></script>
    </body>
  </html>
  ```

  - vscode에서 html 파일 생성 후 html:5 입력 후 엔터치면 디폴트 세팅을 해줌
  - 생성한 js파일을 소스로 받아오게 설정해주자

여기까지 하면 준비 끝! 그래서 테스트 삼아 실행을 해보았다

- liveserver 포트는 5500번으로 열었다

![image](/_attachments/ghio-javascript-dev-environment-setup-01.png)
![image](/_attachments/ghio-javascript-dev-environment-setup-02.png)

---

*2022-03-10에 [GitHub Pages](https://goberomsu.github.io/2022/03/10/javascript_%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD%EC%84%B8%ED%8C%85/)에 쓴 글을 옮겼습니다.*
