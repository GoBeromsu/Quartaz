---
aliases: []
date_created: 2022-03-10
date_modified: 2022-03-10
permalink: jekyll-setup
tags:
  - jekyll
title: "Jekyll set up"
---

![cover](/_attachments/ghio-jekyll-setup-01.png)

내가 쓰는 jekyll theme은 minimal-mistakes 보편적이라 참고할 것도 많고 setup이 편하다

## Jekll setting

- 준비물 : jekyll theme, git, ruby(난 2.6.4 쓰는 중)

* github에 포스트를 커밋하고 블로그를 직접확인하는 것도 좋지만 너무 느려서 local에서 실행해서 확인하는게 훠얼씬 편하다

1. git bash를 로컬 repo에서 실행
2. jekyll 관련 install

   ```bash

   $ gem install jekyll
   $ gem install minima
   $ gem install bundler
   $ gem install jekyll-feed
   $ gem install tzinfo-data
   ```

3. bundle install

   gem파일에서 필요한 것들을 읽고 다운로드 받아주는 똑똑이임

4. jekyll serve

- --livereload : 수정마다 새로 고침
- 여기까지 하면 로컬에서 실행할 수 있음

- local에서 post 볼 때 포스트 이름이 한글이면 weblick 에러뜬다.

## YML 형식

jekyll post의 경우에는 yml 형식에 따라 포스트 세부 설정을 할 수 있다.

```yaml
---
title:  "Blog post YML 양식"
excerpt: ""

toc_sticky : true
---
```

- title : 제목
- excerpt : 대략적 소개(게시글 리스트에 표시됨 )
- categories : 카테고리 분류
  - theme 자체적으로 새로운 카테고리를 입력할 경우 그 카테고리를 생성해준다.
- tags : 태그 분류
- toc : 헤더를 읽고 표시
- toc_sticky : toc 고정

---

*2022-03-10에 [GitHub Pages](https://goberomsu.github.io/2022/03/10/blog_jekyllBlog%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0/)에 쓴 글을 옮겼습니다.*
