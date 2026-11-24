---
aliases: []
date_created: 2022-03-10
date_modified: 2022-03-10
permalink: jekyll-theme-customization
tags:
  - jekyll
title: "jeykll theme 꾸미기"
---

![cover](/_attachments/ghio-jekyll-theme-customization-01.png)

## minimal_mistakes skin 변경

확실히 많이 쓰이는 테마인 만큼 테마안에서도 skin을 변경할 수 있다.
개인적으로 default skin은 칙칙하기도하고 답답해서 난 contrast skin으로 변경했다.

- \_config.yml - minimal_mistakes_skin

```
minimal_mistakes_skin: "default" # "air", "aqua", "contrast", "dark", "dirt", "neon", "mint", "plum" "sunrise"
```

Dark도 괜찮은듯? 아이폰 다크모드 느낌나는데 글 쓰는 지금이 봄이라 그닥 하고 싶지 않다.

근데 막상 써보니 색감이 이상하다. 랜덤박스에서 색깔 뽑아서 쓴거같은? 이름에 충실한 스킨인가

## Site default logo image 변경

- \_config.yml - logo

```
logo : /assets/images/500x300.png
```

- logo 가 뭔고하니 Blog title 옆에 이미지로 띄워진다.

![test](/_attachments/ghio-jekyll-theme-customization-02.jpg)

보통은 assets 하위 폴더에 images라는 폴더를 만들어 사진을 저장하고 상대경로로 이미지를 가지고 온다.

- (theme docs에서도 권장하는 내용이더라)

## Navigation Bar 수정

- \_data/navigation.yml:

```
main:
  - title: "Home"
    url: https://goberomsu.github.io/

  - title: "Categories"
    url: /categories/
  - title: "Tags"
    url: /tags/
```

- title : navigation에 표시될 이름
- url : 링크 (permerlink, hotlink 다 된다. )

## Font 크기 변경

- \_sass/minimal-mistakes/\_variables.scss

```
$doc-font-size: 14 !default;
```

default가 16인데 조금 큰거 같아 14로 바꿨다.

## Text Color 변경

- \_sass/minimal-mistakes/skins/해당테마.scss

contrast skin으로 바꿨는데 다 좋은데 뭐랄까 Post가 파란글씨로 뜨는게 맘에 안들어서 직접 들어가서 바꿨다.

```
/* Colors */

$text-color: #000 !default;
$muted-text-color: $text-color !default;
$primary-color: #ff0000 !default;
$border-color: mix(#fff, $text-color, 75%) !default;
$footer-background-color: #000 !default;
$link-color: #000000 !default;
$masthead-link-color: $text-color !default;
$masthead-link-color-hover: $text-color !default;
$navicon-link-color-hover: mix(#fff, $text-color, 80%) !default;

```

![test](/_attachments/ghio-jekyll-theme-customization-03.jpg)

visual stuido code를 이용할 경우 마우스 커서가 \#에 가까이가면 RGB 설정 GUI가 뜬다.
그래서 직접 색상 코드를 입력하거나 그냥 고르면 된다.

## Breadcrumbs 달기

- breadcrum 이란 게시물의 현재 경로를 표시해 주는 것
- \_config.yml -> breadcrumbs : **true** 변경

---

*2022-03-10에 [GitHub Pages](https://goberomsu.github.io/2022/03/10/blog_jeykllTheme%EA%BE%B8%EB%AF%B8%EA%B8%B0/)에 쓴 글을 옮겼습니다.*
