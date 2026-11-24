---
aliases:
  - QMD Search
date_created: 2026-11-25
date_modified: 2026-11-25
description: "로컬 QMD CLI의 키워드·의미·hybrid 검색과 관련 노트, 자동 재색인을 Obsidian 안으로 가져오는 플러그인 QMD Search를 소개합니다. 작동 방식, 설치와 사용법, 다운로드·릴리스 현황, Open Connections와의 관계를 한곳에 모았습니다."
permalink: obsidian-plugin-qmd-search
tags:
  - obsidian
  - obsidian-plugin
  - open-source
title: "QMD Search"
---

> [!abstract] TL;DR
> 로컬 [QMD CLI](https://github.com/tobi/qmd)의 검색을 Obsidian 안으로 가져오는 플러그인입니다. 키워드(BM25), 의미(vector), hybrid 검색과 관련 노트 sidebar, 자동 재색인을 제공하고, 플러그인 자체는 네트워크를 쓰지 않습니다. 2026-11-25 기준 누적 다운로드 **786**회, GitHub stars **3**개입니다.

## 해결하는 문제

[QMD CLI](https://github.com/tobi/qmd)는 마크다운 문서를 로컬에서 색인하고 검색하는 도구입니다. 볼트를 QMD로 색인해 두어도 검색할 때마다 터미널로 나가야 했습니다. QMD Search는 그 검색을 Obsidian 안으로 가져옵니다.

## 작동 방식

플러그인은 로컬 `qmd` 프로그램을 child process로 실행해 결과를 받아 옵니다. 예를 들어 **Open search**로 검색 modal을 열고 Exact match(keyword) 모드에서 "coffee"를 입력하면, 그 단어가 들어간 노트가 하이라이트된 snippet과 함께 나옵니다. 모드는 keyword(BM25), 의미(vector), hybrid, advanced query 중에서 고릅니다. 결과를 현재 노트에 wikilink로 넣을 수 있고, sidebar에서는 지금 열린 노트와 비슷한 노트를 보여 줍니다.

Auto-sync는 노트가 바뀌면 다시 색인하고 진행 상황을 status bar에 표시합니다. 플러그인 자체는 네트워크를 쓰지 않으며, 색인과 검색은 모두 로컬에서 일어납니다. 볼트 전체를 나열하지 않고, 결과 링크를 넣을 때만 노트를 수정합니다. Telemetry는 없습니다.

## 설치와 사용

Desktop 전용이며 Obsidian 1.13.0 이상이 필요합니다. Settings → Community plugins → Browse에서 "QMD"를 검색해 설치하고 켭니다.

1. QMD CLI를 설치하고 볼트 폴더를 가리키는 collection을 만듭니다.
2. Settings에서 `qmd` 경로를 확인합니다. `PATH`에 있으면 자동으로 찾습니다.
3. **Open search**로 검색하고, **Open related notes**로 관련 노트를 봅니다.

그 밖의 명령으로 **Sync now**, **Run update**, **Run embed**, **Refresh related notes**, **Re-scan collections**가 있습니다.

## 현황

> [!info] 2026-11-25 측정
> 다운로드 **786** · GitHub stars **3** · 최신 릴리스 **1.6.3** (2026-10-26) · MIT · 2026년 3월부터 관리

- 첫 릴리스 1.0.3(2026-03-16)부터 1.6.3까지 GitHub 릴리스 37개를 냈습니다.

다운로드 수는 [Obsidian 공식 통계](https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json), stars는 GitHub API 기준입니다.

## 링크

- [GitHub 저장소](https://github.com/GoBeromsu/obsidian-qmd)
- [Obsidian Community Plugins](https://community.obsidian.md/plugins/qmd)
- [최신 릴리스 1.6.3](https://github.com/GoBeromsu/obsidian-qmd/releases/latest)
- [릴리스 기록](https://github.com/GoBeromsu/obsidian-qmd/releases)
- [QMD CLI](https://github.com/tobi/qmd)
- [Obsidian Community 작성자 페이지](https://community.obsidian.md/users/goberomsu)

## 관련 글

- [[최근 Andrej Karpathy가 X에 LLM Knowledge Bases 에 대한 글을 올린 것처럼 개인 지식 관리에 있어서도 AI가 스며들어오고 있습니다]]: [[Open Connections]]를 만들며 qmd를 참고했지만, qmd wrapper로 가지 않은 이유를 적은 글 (2026-04-09)

비슷한 일을 하는 플러그인: [[Open Connections]]는 플러그인 안에서 embedding을 만들어 관련 노트와 의미 검색을 제공합니다.

다른 플러그인: [[Metadata Auto Classifier]] · [[Open Connections]] · [[Eagle Integration]] · [[Note Player]] · [[Hermes Control Center]] · [[Multilingual Bible Search]]
