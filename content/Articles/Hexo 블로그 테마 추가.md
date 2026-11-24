---
aliases: []
date_created: 2022-11-03
date_modified: 2022-11-03
permalink: hexo-blog-theme
tags:
  - hexo
title: "Hexo 블로그 테마 추가"
---

# Hexo Blog 테마 설치

저의 경우 butterfly theme을 사용하고 있어, butterfly theme 기준으로 설명하겠습니다

- command 창에 아래 명령어를 입력해 테마를 github에서 다운로드 받아옵니다

```shell
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

- root 폴더의 config.yml로 이동하여 테마를 butterfly로 변경합니다

```yml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: butterfly
```

- 이제 `hexo clean && hexo server`로 local에서 테마가 바뀌었는지 테스트 합니다

  - 만약 바뀌지 않았다면?
    - themes 폴더에 들어가서 butterfly를 제외하고 모두 삭제
    - 브라우저에서 캐시 모두 삭제
    - `hexo deploy -g` 실행

- 테마 별로 지원하는 기능이 다르니 기존의 설정도 다시 해봅니다

  - `google-analystics`를 themes-config.yml에서 다시 설정할 수 있습니다

---

*2022-11-03에 [GitHub Pages](https://goberomsu.github.io/2022/11/03/blog-hexoTheme/)에 쓴 글을 옮겼습니다.*
