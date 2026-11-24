---
aliases:
  - Eagle Integration
date_created: 2026-11-25
date_modified: 2026-11-25
description: "노트에 붙여 넣은 이미지를 Eagle 라이브러리로 올리고 노트에서는 그대로 렌더링하는 Obsidian 플러그인 Eagle Integration을 소개합니다. 작동 방식, 설치와 사용법, 다운로드·릴리스 현황을 한곳에 모았습니다."
permalink: obsidian-plugin-eagle-integration
tags:
  - obsidian
  - obsidian-plugin
  - open-source
title: "Eagle Integration"
---

> [!abstract] TL;DR
> 노트에 붙여 넣은 이미지를 [Eagle](https://eagle.cool/) 라이브러리로 올리고, 노트에서는 볼트 안의 캐시 사본으로 그대로 렌더링하는 Obsidian 플러그인입니다. Eagle local API 외에는 어떤 서비스에도 연결하지 않습니다. 2026-11-25 기준 누적 다운로드 **3,740**회, GitHub stars **11**개입니다.

## 해결하는 문제

이미지를 [Eagle](https://eagle.cool/) 라이브러리에서 관리하면서 Obsidian 노트에도 넣으려면, 같은 파일을 두 곳에 따로 관리해야 합니다. Eagle Integration은 노트에 붙여 넣은 이미지를 Eagle로 올리고, 노트에서는 그 이미지를 그대로 렌더링합니다.

## 작동 방식

예를 들어 노트에 이미지를 붙여 넣으면 업로드 placeholder와 진행 상황이 잠깐 보인 뒤, 이미지가 Eagle의 local API(기본 `localhost:41595`)로 올라가고 노트에는 `![[eagle-cache/<id>.jpg]]` 형태의 wikilink가 들어갑니다. 볼트 안의 캐시 사본으로 렌더링하므로 Eagle을 닫아도 이미지가 보입니다. Canvas에 끌어 놓아도 같습니다.

이미 Eagle에 있는 이미지는 다시 올리지 않고 재사용하며, 노트 위치에 따라 업로드할 Eagle 폴더를 정하는 folder mapping(가장 길게 일치하는 prefix 우선)과 `{uuid}_{noteName}` 같은 naming template을 지원합니다.

**Insert image from Eagle (search)** 명령으로 썸네일을 보며 라이브러리를 검색해 이미지를 넣을 수 있습니다. 캐시 파일이 없으면 노트를 열 때 Eagle에서 복원하고, 플러그인은 열어 둔 노트만 읽습니다. Eagle을 닫은 상태로 붙여 넣으면 일반 첨부 파일로 저장했다가 나중에 **Upload to Eagle**로 올립니다. Eagle local API 외에는 어떤 서비스에도 연결하지 않고, telemetry는 없습니다.

## 설치와 사용

Desktop 전용이며 Eagle 3.0 이상이 필요합니다. Eagle은 따로 설치하는 유료 앱입니다. Settings → Community plugins → Browse에서 "Eagle Integration"을 검색해 설치하고 켭니다.

1. Eagle을 실행하고 local API를 켭니다. 기본 주소는 `localhost:41595`입니다.
2. 노트에 이미지를 붙여 넣거나 끌어 놓습니다.
3. 기존 이미지를 넣으려면 **Insert image from Eagle (search)**를 실행합니다. 볼트에 있는 이미지는 오른쪽 클릭 후 **Upload to Eagle**로 올립니다.

## 현황

> [!info] 2026-11-25 측정
> 다운로드 **3,740** · GitHub stars **11** · 최신 릴리스 **2.10.1** (2026-10-26) · MIT · 2025년 7월부터 관리

- 첫 릴리스 1.0.1(2025-07-09)부터 2.10.1까지 GitHub 릴리스 53개를 냈습니다.

다운로드 수는 [Obsidian 공식 통계](https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json), stars는 GitHub API 기준입니다.

## 링크

- [GitHub 저장소](https://github.com/GoBeromsu/obsidian-eagle)
- [Obsidian Community Plugins](https://community.obsidian.md/plugins/eagle)
- [최신 릴리스 2.10.1](https://github.com/GoBeromsu/obsidian-eagle/releases/latest)
- [릴리스 기록](https://github.com/GoBeromsu/obsidian-eagle/releases)
- [Obsidian Community 작성자 페이지](https://community.obsidian.md/users/goberomsu)

다른 플러그인: [[Metadata Auto Classifier]] · [[Open Connections]] · [[QMD Search]] · [[Note Player]] · [[Hermes Control Center]] · [[Multilingual Bible Search]]
