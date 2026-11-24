---
aliases: []
date_created: 2023-03-31
date_modified: 2023-03-31
permalink: blindtok-ci-github-actions
tags:
  - github-actions
  - ci-cd
  - nodejs
  - backend
title: "BlindTok (2) - 프로젝트 CI 구성"
---

## Intro. CI/CD는 필수 - Stress 탈출하자!

협업을 하다보면, github 프로젝트가 실행 되지 않는 코드를 합침으로써 터지는 경우가 발생한다.

사실 그 이유는 다양한데 각자의 환경 변수 설정이라던가, 다른 OS에서 개발한다던가 등이 있다.  
하지만, 실행 되지 않는 코드가 이렇게 섞이기 시작하면, 불필요한 에너지 낭비가 당연히 존재하는 법

이 문제를 깃허브 액션을 통해 해결하고자 한다  
배포까지는 고려하지 않고, 일단 CI 구성해서 사용하다가 확장해 나갈 것이다

### Github Action 구성 - 정말 CI 인가?

CI/CD는 지속적 통합(Continuous Integration)과 지속적 배포(Continuous Deployment)의 약자로, 개발자들이 지속적으로 코드를 통합하고 배포하는 과정을 의미한다.

지속적 통합은 프로젝트의 빌드와 테스트를 자동화하는 것을 의미한다.  
그래서 팀원들이 작성한 코드를 자주 통합하고 빌드가 정상적으로 이루어지는지, 테스트가 통과하는지 확인한다.  
내가 작성한 워크플로우는 PR에서 코드가 정상적으로 실행되는지 확인하는 것이기 때문에 CI의 일부분으로 볼 수 있다.

하지만 이 워크플로우는 CD에 해당하지 않는다.  
CD는 코드가 무사히 통합되면 자동으로 배포하는 과정인데, 제공된 워크플로우에는 배포 과정이 없어서 CD라고 볼 수 없다.

#### worklow 내용

우리 프로젝트는 front/backend로 디렉터리를 나눠 개발을 하고 있다  
그래서. 프론트/백엔드의 각 프로젝트가 실행 되는지 체크를 한다

실행 환경은 우분투이고, node 버전은 16을 사용한다  
worklow 실행 시 각 프로젝트의 라이브러리를 설치하고

프로젝트가 실행 되는 것을 확인하고 종료한다  
이 과정에서 프로젝트가 실행 되지 않을 경우, PR 메세지 옆에 ❌ 표시를 한다  
반대로, 프로젝트가 성공적으로 실행이 되면, 아래와 같이 ✔️ 표시를 한다  
![PR 목록의 Feat : cross-env 세팅 PR 옆에 표시된 성공 체크](/_attachments/tistory-97-01.png)

처음 알았는데 PR 날린 내용에 대해서, 이전에 실패한 이력도 보여준다!  
![PR Checks 탭에 남은 build (16.x) 이전 실패 이력](/_attachments/tistory-97-02.png)

PR을 생성하면, 아래와 같이 workflow가 생성 되는 것을 알 수 있다  
![PR 화면에서 CI/CD Workflow / build (16.x) 체크가 통과한 모습](/_attachments/tistory-97-03.png)

#### workflow 코드

```yaml
name: CI/CD Workflow

on:
  pull_request:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x]

    steps:
    - uses: actions/checkout@v2

    - name: Set up Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies for backend
      working-directory: ./backend
      run: yarn install

    - name: Install dependencies for frontend
      working-directory: ./frontend
      run: npm install

    - name: Run backend
      working-directory: ./backend
      run: yarn dev & sleep 5; pkill -f "node ."

    - name: Run frontend
      working-directory: ./frontend
      run: npm start & sleep 5; pkill -f "node ."
```

---

*2023-03-31에 [Tistory](https://berom.tistory.com/97)에 쓴 글을 옮겼습니다.*
