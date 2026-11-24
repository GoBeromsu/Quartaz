---
aliases: []
date_created: 2022-08-10
date_modified: 2022-08-10
permalink: how-to-use-git
tags:
  - git
title: "git 사용 방법"
---

## Git 사용법

- 원격 저장소 갱신

```shell
git remote update 
```

- 원격 저장소 branch 확인

```shell
git branch -r
```

- 원격 저장소 가져오기
  - branch 이름 형식은 origin/dev 이렇게 적어야합니다.
  - git branch -r로 출력된 이름을 입력하면 돼요

```shell
git checkout -t [branch 이름]
```

### Reference

[git 브랜치: 가져오기, 합치기, 삭제하기](https://yztech.tistory.com/32)

---

*2022-08-10에 [GitHub Pages](https://goberomsu.github.io/2022/08/10/howToUseGit/)에 쓴 글을 옮겼습니다.*
