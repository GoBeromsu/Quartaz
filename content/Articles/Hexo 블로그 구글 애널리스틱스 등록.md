---
aliases: []
date_created: 2022-10-31
date_modified: 2022-10-31
permalink: hexo-blog-google-analytics
tags:
  - hexo
  - google-analytics
title: "Hexo 블로그 구글 애널리스틱스 등록"
---

# 개요

멘토링 중 hexo blog를 구글 서치 콘솔에 등록하려던 중 문제 발생  
일반적인 html 삽입 방식 말고 깔끔한 방법이 있었던걸로 기억해서 기억 복구 겸 재정리합니다

# Google Analistics

- 구글 애널리스틱스는 웹,앱 등의 메타데이터 관리 지원해주는 구글 서비스입니다

## Google Analistics 등록

- [구글 애널리스틱스 홈페이지](https://analytics.google.com/)에 접속합니다
- 설정 - 관리에서 속성을 생성합니다
  - 속성 생성시 이름은 `Github Pages`로 생성합니다
  - 데이터 스트림 - 웹 - 본인의 블로그 url을 등록합니다
- url 등록까지 마치면 코드가 발급 됨을 확인할 수 있습니다

## Hexo 등록

- 본인의 theme 하위의 config.yml에 들어가 생성된 코드를 아래 형식으로 입력
  - `google_analytics: G-C17******`
- `hexo deploy -g`후 구글 서치 콘솔 등록시 구글 애널리스틱스로 등록하시면 됩니다

---

*2022-10-31에 [GitHub Pages](https://goberomsu.github.io/2022/10/31/blog-googleAnalistic/)에 쓴 글을 옮겼습니다.*
