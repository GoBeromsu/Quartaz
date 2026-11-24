---
aliases: []
date_created: 2023-08-16
date_modified: 2023-08-16
permalink: fixing-obsidian-tistory-plugin-frontmatter
tags:
  - obsidian
  - obsidian-plugin
  - open-source
  - troubleshooting
title: "Obsidian Tistory 플러그인 버그 수정"
---

아무 생각 없이 제가 쓴 글을 모바일로 보는데, …? 프론트 매터가 여러개가 나오고 있었습니다  
이게 뭔일이지 싶어, 확인해보니, 글을 배포 할 때마다,

즉 배포하고 수정 할 때마다 프론트 매터가 덧붙여지는 문제가 생겼습니다

## 해결 과정

일단 [안피곤님의 깃허브 저장소](https://github.com/anpigon/obsidian-tistory-plugin)로 찾아가 소스를 받고, 실행하였습니다  
플러그인으로는 Hot-Reload, IDE는 인텔리제이를 사용하였습니다

### 문제 분석

결론부터 말씀드리면, Obsidian 베타 버전을 사용하면서, 기존의 옵시디언 프론트 매터 관련 코드가 바뀌어서 생긴 문제였습니다

![position 필드로 프론트 매터 위치를 찾는 기존 updateFile 코드](/_attachments/tistory-482-01.png)  
원래는 이런 일이 없었는데 갑자기 발생한거라면, 베타 버전으로 바뀌면서 내부 코드가 변경 되었다 생각했습니다  
그리고, 프론트 매터가 갑자기 추가 되기 시작한거라면, 내부 파일을 업데이트 하는 부분에서 문제가 생겼을거라 추측했죠

그래서 위의 updateFile 부분에 순차적으로 console.log()를 찍으며 확인했습니다  
확인 결과, 위의 사진의 `position` 필드가 존재 하지 않았습니다

즉 position을 기준으로 프론트 매터를 업데이트 했었는데, 프론트 매터의 position이 없어지면서 프론트 매터를 지우고 추가하지 못하게 된 것입니다!  
그러니, 프론트 매터가 없다고 판단하고 계속 추가 되었던 것이죠

### 문제 해결

![frontmatterPosition을 사용하도록 수정한 updateFile 코드](/_attachments/tistory-482-02.png)

문제는 베타 버전으로 넘어오면서, frontmatterPosition으로 필드명이 변경 되어 발생했습니다

사실 수정해도 여전히 프론트 매터가 출력 되었습니다  
확인해보니 updateFile 뿐만 아니라, 포스트 할 때도 position을 읽지 못해 전처리가 안되고 있었습니다!

## 결론

![플러그인 저장소에 남긴 수정 내용 코멘트](/_attachments/tistory-482-03.png)  
최근에 GPT를 사용해서, [GPT로 오픈 소스 기여하기](https://berom.tistory.com/456)에서 플러그인을 다룬 경험이 있어 비교적 수월하게 해결 할 수 있었던거 같습니다  
다음엔 플러그인 개발을 해봐야겠습니다!

---

*2023-08-16에 [Tistory](https://berom.tistory.com/482)에 쓴 글을 옮겼습니다.*
