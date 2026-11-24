---
aliases:
  - Note Player
date_created: 2026-11-25
date_modified: 2026-11-25
description: "마크다운 노트를 플레이리스트로 삼아 Obsidian sidebar에서 YouTube 트랙, 캐시된 오디오, 로컬 오디오 파일을 재생하는 플러그인 Note Player를 소개합니다. 작동 방식, 설치와 사용법, 다운로드·릴리스 현황을 한곳에 모았습니다."
permalink: obsidian-plugin-note-player
tags:
  - obsidian
  - obsidian-plugin
  - open-source
title: "Note Player"
---

> [!abstract] TL;DR
> 트랙 하나를 마크다운 노트 하나로, 플레이리스트를 Bases 파일로 관리하고 Obsidian sidebar에서 재생하는 플러그인입니다. YouTube 트랙, 캐시된 오디오, 볼트 안의 로컬 오디오 파일을 재생합니다. 2026-11-25 기준 누적 다운로드 **525**회, GitHub stars **2**개입니다.

## 해결하는 문제

음악 목록을 노트로 정리해도 재생은 다른 앱에서 해야 합니다. Note Player는 노트를 그대로 플레이리스트로 삼아 Obsidian sidebar에서 YouTube 트랙, 캐시된 오디오, 볼트 안의 로컬 오디오 파일을 재생합니다.

## 작동 방식

트랙 하나가 마크다운 노트 하나이고, 플레이리스트는 companion 노트에 embed한 Bases 파일입니다. 그래서 트랙과 플레이리스트가 링크, properties, Bases와 그대로 연결됩니다.

예를 들어 YouTube 링크를 복사해 player view에 붙여 넣으면, 제목·채널·썸네일을 채운 트랙 노트가 **Music folder**에 만들어지고 선택한 플레이리스트 끝에 붙습니다. 플레이리스트가 하나도 없으면 `Inbox`라는 플레이리스트를 새로 만듭니다. 이미 라이브러리에 있는 영상이면 기존 노트를 재사용하고, YouTube 플레이리스트 링크를 넣으면 안의 영상을 모두 추가합니다.

오디오는 [yt-dlp](https://github.com/yt-dlp/yt-dlp)로 한 번 내려받아 로컬에 캐시하므로 다음부터 바로 재생됩니다. 변환에는 [ffmpeg](https://ffmpeg.org)를 씁니다. Now-playing 카드는 턴테이블 모양이고, 선택 사항인 바늘 소리와 crackle을 오디오 파일 없이 Web Audio로 합성합니다. Queue, repeat-one, autoplay를 지원합니다.

YouTube 외에는 어떤 서버에도 데이터를 보내지 않고, 계정과 telemetry가 없습니다. 볼트 안의 로컬 오디오는 네트워크를 쓰지 않습니다.

## 설치와 사용

Desktop 전용이며 Obsidian 1.13.0 이상과 `PATH`에 있는 yt-dlp, ffmpeg가 필요합니다. Settings → Community plugins → Browse에서 "Note Player"를 검색해 설치하고 켭니다.

1. **Add YouTube URL to playlist** 명령을 실행하거나 player view에 YouTube 링크를 붙여 넣습니다.
2. Ribbon 아이콘이나 **Open player view**로 플레이어를 엽니다.
3. 예전 방식의 트랙 목록이 있으면 **Convert playlist notes to Bases**로 변환을 미리 보고 적용합니다.

## 현황

> [!info] 2026-11-25 측정
> 다운로드 **525** · GitHub stars **2** · 최신 릴리스 **0.9.1** (2026-11-05) · MIT · 2026년 3월부터 관리

- 첫 릴리스 0.6.0(2026-03-24)부터 0.9.1까지 GitHub 릴리스 26개를 냈습니다.

다운로드 수는 [Obsidian 공식 통계](https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json), stars는 GitHub API 기준입니다.

## 링크

- [GitHub 저장소](https://github.com/GoBeromsu/obsidian-note-player)
- [Obsidian Community Plugins](https://community.obsidian.md/plugins/note-player)
- [최신 릴리스 0.9.1](https://github.com/GoBeromsu/obsidian-note-player/releases/latest)
- [릴리스 기록](https://github.com/GoBeromsu/obsidian-note-player/releases)
- [Obsidian Community 작성자 페이지](https://community.obsidian.md/users/goberomsu)

다른 플러그인: [[Metadata Auto Classifier]] · [[Open Connections]] · [[QMD Search]] · [[Eagle Integration]] · [[Hermes Control Center]] · [[Multilingual Bible Search]]
