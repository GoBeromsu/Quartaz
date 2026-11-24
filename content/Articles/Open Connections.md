---
aliases:
  - Open Connections
date_created: 2026-11-25
date_modified: 2026-11-25
description: "지금 열어 둔 노트와 의미가 가까운 노트를 embedding으로 찾아 주는 Obsidian 플러그인 Open Connections를 소개합니다. Smart Connections에서 갈라져 나온 배경, 작동 방식, 설치와 사용법, 1만 3천 노트 볼트의 OOM 해결 기록, 다운로드·릴리스 현황을 한곳에 모았습니다."
permalink: obsidian-plugin-open-connections
tags:
  - obsidian
  - obsidian-plugin
  - open-source
title: "Open Connections"
---

> [!abstract] TL;DR
> 지금 열어 둔 노트와 의미가 가까운 노트를 찾아 보여 주고, 볼트 전체를 의미로 검색하게 하는 Obsidian 플러그인입니다. Brian Petro의 Smart Connections를 fork해 만들었고, 기본 embedding은 로컬에서 만듭니다. 2026-11-25 기준 누적 다운로드 **5,031**회, GitHub stars **23**개입니다.

## 만든 배경

[[최근 Andrej Karpathy가 X에 LLM Knowledge Bases 에 대한 글을 올린 것처럼 개인 지식 관리에 있어서도 AI가 스며들어오고 있습니다|2026년 4월 글]]에 시작을 이렇게 적었습니다.

> 기존에 Smart Connections라는 플러그인이 있었는데, v4로 넘어가면서 기존에 사용하던 모델을 더 이상 쓸 수 없게 되었습니다. 그래서 MIT 라이선스 레포와 흩어져 있던 의존성들을 모아 재구성하기 시작했고, 그 과정에서 Open Connections가 만들어졌습니다.

같은 글에서 embedding을 고른 이유도 남겼습니다.

> 빠르게 맥락을 회수하는 방법으로 임베딩은 매우 효과적이라고 판단했습니다. 예를 들어, Andrew Ng 교수님의 강의 노트를 열면, 제가 축적해온 관련 노트들이 함께 떠오르는 식입니다.

## 해결하는 문제

키워드 검색은 단어가 다르면 관련 노트를 놓칩니다. Open Connections는 지금 열어 둔 노트와 의미가 가까운 노트를 찾아 보여 주고, 볼트 전체를 의미로 검색하게 합니다.

## 작동 방식

노트를 embedding으로 바꿔 로컬에 캐시하고, Connections view에서 현재 노트와 관련도 순으로 다른 노트를 나열합니다. 위 예처럼 강의 노트 하나를 열면, 그 노트와 의미가 가까운 노트가 sidebar에 함께 뜹니다. 노트를 이동하면 목록이 바로 갱신되고, Lookup view에서는 평문 질의로 볼트를 검색합니다.

기본 embedding은 Transformers.js(WebGPU, WASM fallback)로 로컬에서 만들기 때문에 API key가 필요 없고 노트가 밖으로 나가지 않습니다. OpenAI, Gemini, Ollama, LM Studio, Upstage, OpenRouter로 바꿀 수도 있고, 모델을 바꾸면 embedding을 자동으로 다시 만듭니다.

MCP server를 켜면 볼트의 connections를 다른 MCP client에 엽니다. 이 서버는 `127.0.0.1`에서만 listen하고, 직접 시작하기 전까지 꺼져 있습니다. Embedding은 Node 내장 `node:sqlite`로 플러그인 폴더에 저장하고, telemetry는 없습니다.

저장소를 `node:sqlite`로 옮긴 데에는 이유가 있습니다. 4096차원 모델로 1만 3천 노트를 색인하면 저장할 때마다 메모리가 바닥났고, 그 원인을 찾아 저장 엔진을 바꾼 과정을 [[1만 3천 노트 볼트의 OOM을 잡은 방법]]에 정리했습니다.

## 설치와 사용

Desktop 전용이며 Obsidian 1.13.0 이상이 필요합니다. Settings → Community plugins → Browse에서 "Open Connections"를 검색해 설치하고 켭니다.

1. Settings에서 embedding provider와 모델을 고릅니다. 기본값은 로컬이고 API key가 필요 없습니다.
2. Ribbon에서 **Connections** view를 열고 status bar의 embedding이 끝나기를 기다립니다.
3. 아무 노트나 열어 관련 노트를 보거나, **Open smart lookup**으로 검색합니다.
4. 필요하면 settings에서 **MCP**를 켜고 **Start local server**를 실행합니다.

## 현황

> [!info] 2026-11-25 측정
> 다운로드 **5,031** · GitHub stars **23** · 최신 릴리스 **3.10.4** (2026-10-26) · GPL-3.0 · 2026년 2월부터 관리

- 첫 릴리스 1.0.3(2026-02-03)부터 3.10.4까지 GitHub 릴리스 109개를 냈습니다.
- Electron 안에서 1만 3천 노트 볼트의 메모리 초과와 멈춤, 색인 정체를 원인부터 해결했고, 외부 사용자가 올린 이슈를 종결했습니다. 자세한 내용은 [[1만 3천 노트 볼트의 OOM을 잡은 방법]]에 있습니다.

다운로드 수는 [Obsidian 공식 통계](https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json), stars는 GitHub API 기준입니다.

## 링크

- [GitHub 저장소](https://github.com/GoBeromsu/obsidian-open-connections)
- [Obsidian Community Plugins](https://community.obsidian.md/plugins/open-connections)
- [최신 릴리스 3.10.4](https://github.com/GoBeromsu/obsidian-open-connections/releases/latest)
- [릴리스 기록](https://github.com/GoBeromsu/obsidian-open-connections/releases)
- 원본: Brian Petro의 [Smart Connections](https://github.com/brianpetro/obsidian-smart-connections)
- [Obsidian Community 작성자 페이지](https://community.obsidian.md/users/goberomsu)

## 관련 글

- [[최근 Andrej Karpathy가 X에 LLM Knowledge Bases 에 대한 글을 올린 것처럼 개인 지식 관리에 있어서도 AI가 스며들어오고 있습니다]]: Open Connections를 만든 배경과 embedding을 고른 이유 (2026-04-09)
- [[1만 3천 노트 볼트의 OOM을 잡은 방법]]: sql.js에서 `node:sqlite`로 저장소를 옮겨 OOM을 없앤 기록 (2026-11-25)
- [[AI 를 통한 연구 맥락 복원과 지식 관리 워크플로우]]: Open Connections 이전, Smart Connections로 연구 맥락을 복원하던 방식을 다룬 발표 (2025-10-24)

비슷한 일을 하는 플러그인: [[QMD Search]]는 로컬 QMD CLI로 키워드·의미·hybrid 검색과 관련 노트를 제공합니다.

다른 플러그인: [[Metadata Auto Classifier]] · [[QMD Search]] · [[Eagle Integration]] · [[Note Player]] · [[Hermes Control Center]] · [[Multilingual Bible Search]]
