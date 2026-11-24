---
aliases: []
date_created: 2022-10-14
date_modified: 2022-10-14
permalink: hexo-blog-seo-sitemap
tags:
  - hexo
  - seo
title: "hexo blog SEO와 Sitemap setting"
---

# Hexo SEO와 sitemap.xml

- 아래 커맨드를 터미널(git bash 등)에 실행해주세요

```bash
npm install hexo-generator-feed --save
npm install hexo-generator-seo-friendly-sitemap --save
```

- 블로그 폴더의 `_config.yml`에 아래 복사 붙여 넣기 합니다

```yml
feed:
  type: atom # atom or rss2
  path: atom.xml
  limit: 50 # 공개할 rss feed 수
  # 기본적으로 여기까지만 쓴다. 아래는 옵션
  hub:
  content:
  content_limit: 140 # 요약 글자수
  content_limit_delim: ' '
# sitemap auto generator
sitemap:
    path: sitemap.xml
    tag: true # 사이트맵에 태그 주소 포함 여부
    category: true # 사이트맵에 카테고리 주소 포함 여부
```

- 터미널에 `hexo deploy -g` 를 입력합니다

- [구글 서치 콘솔](https://search.google.com/search-console?hl=ko&resource_id=https://goberomsu.github.io/)에 들어갑니다.

  - 처음 들어가면 속성 유형을 선택하라 뜰텐데, URL 접두어에 자신의 블로그 주소를 입력합니다
    - ![image](/_attachments/ghio-hexo-blog-seo-sitemap-01.png)
    - 저의 경우 <https://goberomsu.github.io/>를 입력해야겠죠!?
  - 다음은 sitemaps에 들어가 sitemap.xml을 입력하고 제출합니다
    - ![image](/_attachments/ghio-hexo-blog-seo-sitemap-02.png)
    - 왼쪽 Tab을 보면 있습니다

- sitemap이 바로 뜨지 않기도 하는데 그럴 땐 조금 기다려주세요

---

*2022-10-14에 [GitHub Pages](https://goberomsu.github.io/2022/10/14/blog-sitemap-seo/)에 쓴 글을 옮겼습니다.*
