---
aliases: []
date_created: 2024-02-24
date_modified: 2024-02-24
permalink: electron-app-slow-on-apple-silicon
tags:
  - electron
  - macos
  - github-actions
  - troubleshooting
title: "왜 Mac OS 앱을 배포했더니 내 앱은 끔찍하게 느려졌는가?"
---

# 왜 배포했더니 내 앱은 끔찍하게 느려졌는가?

로컬에서 배포 전 실행했을 때는 빠르게 잘 동작하던 앱이 배포했더니 끔찍하게 느려졌던 이유를 알아봅시다,  
처음 만든 앱이라 성능에 다소 미흡할 수 있다는 점을 감안해도, 앱 실행 후 첫 화면을 마주하기까지 5~10초나 기다려야 한다는 사실에 무언가 잘못 되었다 싶었습니다

이 글에서는 배포 전 로컬 환경에서는 문제없이 잘 돌아가던 앱이 왜 배포 후에는 끔찍한 속도 저하를 경험하게 되는지, 그 원인과 이를 해결하기 위한 방법들을 탐색해 보겠습니다.

## 원인 파악

### DMG 파일의 특성 문제일까?

처음에는 DMG 파일로 패키징 후 느려졌기 때문에, 파일 확장자의 특성에 기인한 문제라 생각을 했습니다. 하지만 DMG 파일 확장자의 경우, 배포를 위해 패키징 되는 일종의 컨테이너 이기 때문에 초기 설치에서는 마운트 되어야 하기 때문에 느릴 수 있지만, 실행 환경에 영향을 주지 않습니다.

즉 응용 프로그램을 배포할 때 DMG 파일은 주로 설치 패키지나 배포 컨테이너로 활용됩니다. 사용자가 DMG 파일을 마운트하고 내부의 .app 파일을 애플리케이션 폴더로 복사한 이후에는 .app 파일이 직접 실행되며 이전의 성능 문제는 자연스럽게 해결됩니다. 즉, DMG 파일 자체의 성능 저하는 주로 설치 과정에서만 발생합니다

문제의 원인은 DMG 파일 확장자가 아니었다!

### 배포 과정에서의 M1 실리콘 칩 호환성 문제

돌아보니, 친구의 윈도우 PC에서는 앱이 빠른 속도로 로딩되는 것을 확인할 수 있었습니다. 하지만 제 m1 pro에서는 렉이 걸리거나 앱이 실행 되는 도중에 자주 멈추었습니다

그렇다면, 제 컴퓨터 문제라 생각을 해 앱 실행 중지 후 로그를 확인해보니, ROSETTA에서 중지가 발생한 것을 알 수 있었습니다.

```text
Notes:
PC register does not match crashing frame (0x0 vs 0x7FF8A47E6A78)

Crashed Thread:        3  ThreadPoolServiceThread

Exception Type:        EXC_CRASH (SIGABRT)
Exception Codes:       0x0000000000000000, 0x0000000000000000

Termination Reason:    Namespace ROSETTA, Code 0
```

찾았습니다! 로제타는 인텔 CPU 용으로 빌드 된 앱을 실리콘 칩에서 실행하기 위한 에뮬레이터입니다. 즉 인텔 CPU로 빌드 된 프로그램을 에뮬레이팅 하고 있었기 때문에 느린 것이었죠

라서, 성능 문제의 핵심은 DMG 파일의 특성이 아니라, 실리콘 칩에서 네이티브하게 실행되지 않는 앱의 호환성 문제에 있었습니다. 이를 해결하기 위해서는 GitHub Workflows에서 ARM 아키텍처를 지원하는 macOS 빌드를 수정하는 것이 필요했습니다

## 해결책

성능 저하 문제를 해결하는 핵심은 GitHub Workflow에서 ARM 아키텍처를 지원하는 macOS 빌드를 추가하는 것입니다. [GitHub-hosted runners에 대한 공식 문서](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners)를 참고하면, 실리콘 칩은 `macos-latest-14` 형식으로 설정하여 해결할 수 있다고 합니다. 이렇게 함으로써, M1 실리콘 칩을 타겟으로 한 빌드를 통해 앱의 성능을 최적화할 수 있습니다.

```yaml
jobs:
  draft_release:
    permissions:
      contents: write # Allows this job to create releases
    strategy:
      fail-fast: true
      matrix:
        os: [macos-14, ubuntu-latest, windows-latest]
    runs-on: ${{ matrix.os }}
```

실리콘 칩을 위한 runner인 macos-14는 아직 베타이기 때문에 추후 내용이 변경 될 수 있습니다

### 주의사항: GitHub Copilot 사용 시 주의 필요

Github Copilot 은 macos-arm64 로 설정을 하면 작동할 것이라 했지만, 해당 runner는 없기 때문에 job이 무한정 기다리는 문제를 겪을 수 있습니다

```yaml
jobs:
  tests:
    strategy:
      fail-fast: false
      matrix:
        os: [windows-latest, ubuntu-latest, macos-latest, macos-arm64]
    runs-on: ${{ matrix.os }}
```

---

*2024-02-24에 [Tistory](https://berom.tistory.com/584)에 쓴 글을 옮겼습니다.*
