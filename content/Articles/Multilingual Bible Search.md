---
aliases:
  - Multilingual Bible Search
date_created: 2026-11-25
date_modified: 2026-11-25
description: "한국어·영어 성경 구절을 검색해 template대로 노트에 넣는 Obsidian 플러그인 Multilingual Bible Search를 소개합니다. 작동 방식, 본문 출처와 네트워크 사용, 설치와 사용법, 다운로드·릴리스 현황을 한곳에 모았습니다."
permalink: obsidian-plugin-multilingual-bible-search
tags:
  - obsidian
  - obsidian-plugin
  - open-source
title: "Multilingual Bible Search"
---

> [!abstract] TL;DR
> 한국어나 영어로 구절을 입력하면 본문을 찾아 template대로 노트에 넣는 Obsidian 플러그인입니다. 개역개정·개역한글·새번역과 ESV·KJV를 지원하고, 두 언어를 나란히 넣을 수 있습니다. 2026-11-25 기준 누적 다운로드 **34**회입니다.

## 해결하는 문제

설교 노트나 묵상 노트에 성경 구절을 넣으려면 다른 사이트에서 본문을 찾아 복사하고 형식을 맞춰야 합니다. 한국어와 영어 본문을 나란히 놓으려면 그 일을 두 번 합니다. Multilingual Bible Search는 구절 검색부터 삽입까지 command 하나로 끝냅니다.

## 작동 방식

예를 들어 **Search verse**를 실행해 `John 3:16`을 입력하고 구절을 고르면, `John 3:16`으로 표시되는 `John 3` 노트 링크와 한국어 본문, 영어(ESV) 본문이 인용 형식으로 커서 위치에 들어갑니다. `요한복음 3:16-18`처럼 한국어로 책, 장, 절 범위를 입력해도 됩니다.

Template 변수(`{bookKo}`, `{bookEn}`, `{chapter}`, `{range}`, `{versesKo}`, `{versesEn}`)로 blockquote나 callout 형식을 정하고, 절 번호를 넣거나 뺄 수 있습니다.

본문은 사용자가 구절을 고를 때만 해당 장 하나를 대한성서공회 사이트(한국어)와 `bolls.life`(영어)에서 받아 옵니다. 서버로 보내는 정보는 역본, 책, 장뿐이고 노트 내용은 보내지 않습니다. 받아 온 장은 메모리에만 최대 20장, 30분 동안 캐시하며 디스크에 쓰지 않습니다. 삽입한 구절 끝에는 역본과 출처를 밝히는 줄이 붙습니다. Telemetry는 없습니다.

## 설치와 사용

Settings → Community plugins → Browse에서 "Multilingual Bible Search"를 검색해 설치하고 켭니다.

1. 구절을 넣을 위치에 커서를 둡니다.
2. Command palette에서 **Search verse**를 실행합니다.
3. 구절을 입력하고 골라 template대로 삽입합니다.

Settings에서 한국어·영어 역본, template, callout 종류, 절 번호 표시, 출처 줄 추가, 캐시 사용 여부를 바꿀 수 있습니다.

## 현황

> [!info] 2026-11-25 측정
> 다운로드 **34** · GitHub stars **0** · 최신 릴리스 **1.4.3** (2026-10-26) · MIT · 2026년 3월부터 관리

- 첫 릴리스 1.0.2(2026-03-13)부터 1.4.3까지 GitHub 릴리스 25개를 냈습니다.

다운로드 수는 [Obsidian 공식 통계](https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json), stars는 GitHub API 기준입니다.

## 링크

- [GitHub 저장소](https://github.com/GoBeromsu/obsidian-bible-search)
- [Obsidian Community Plugins](https://community.obsidian.md/plugins/multilingual-bible-search)
- [최신 릴리스 1.4.3](https://github.com/GoBeromsu/obsidian-bible-search/releases/latest)
- [릴리스 기록](https://github.com/GoBeromsu/obsidian-bible-search/releases)
- [Obsidian Community 작성자 페이지](https://community.obsidian.md/users/goberomsu)

다른 플러그인: [[Metadata Auto Classifier]] · [[Open Connections]] · [[QMD Search]] · [[Eagle Integration]] · [[Note Player]] · [[Hermes Control Center]]
