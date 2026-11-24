---
aliases:
  - Open Connections
date_created: 2026-11-25
date_modified: 2026-11-25
permalink: obsidian-plugin-open-connections
tags:
  - obsidian
  - obsidian-plugin
  - open-source
title: "Obsidian 플러그인 - Open Connections"
---

> [!info] 2026-11-25 측정
> 다운로드 **5,031** · GitHub stars **23** · 최신 릴리스 **3.10.4** (2026-10-26) · GPL-3.0 · 2026년 2월부터 관리

## 해결하는 문제

키워드 검색은 단어가 다르면 관련 노트를 놓칩니다. Open Connections는 지금 열어 둔 노트와 의미가 가까운 노트를 찾아 보여 주고, 볼트 전체를 의미로 검색하게 합니다.

## 작동 방식

노트를 embedding으로 바꿔 로컬에 캐시하고, Connections view에서 현재 노트와 관련도 순으로 다른 노트를 나열합니다. 노트를 이동하면 목록이 바로 갱신되고, Lookup view에서는 평문 질의로 볼트를 검색합니다. 기본 embedding은 Transformers.js(WebGPU, WASM fallback)로 로컬에서 만들기 때문에 API key가 필요 없고 노트가 밖으로 나가지 않습니다. OpenAI, Gemini, Ollama, LM Studio, Upstage, OpenRouter로 바꿀 수도 있고, 모델을 바꾸면 embedding을 자동으로 다시 만듭니다.

MCP server를 켜면 볼트의 connections를 다른 MCP client에 엽니다. 이 서버는 `127.0.0.1`에서만 listen하고, 직접 시작하기 전까지 꺼져 있습니다. Embedding은 Node 내장 `node:sqlite`로 플러그인 폴더에 저장하고, telemetry는 없습니다.

Brian Petro의 [Smart Connections](https://github.com/brianpetro/obsidian-smart-connections)를 fork해 만들었습니다. Desktop 전용이며 Obsidian 1.13.0 이상이 필요합니다.

## 쓰는 법

1. Settings에서 embedding provider와 모델을 고릅니다. 기본값은 로컬입니다.
2. Ribbon에서 **Connections** view를 열고 status bar의 embedding이 끝나기를 기다립니다.
3. 아무 노트나 열어 관련 노트를 보거나, **Open smart lookup**으로 검색합니다.

## 링크

- [GitHub 저장소](https://github.com/GoBeromsu/obsidian-open-connections)
- [Obsidian Community Plugins](https://community.obsidian.md/plugins/open-connections)
- [최신 릴리스 3.10.4](https://github.com/GoBeromsu/obsidian-open-connections/releases/latest)

다운로드 수는 [Obsidian 공식 통계](https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json), stars는 GitHub API 기준입니다.
