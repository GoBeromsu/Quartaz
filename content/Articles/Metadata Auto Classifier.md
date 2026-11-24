---
aliases:
  - Metadata Auto Classifier
date_created: 2026-11-25
date_modified: 2026-11-25
description: "노트 본문을 읽고 이미 쓰고 있는 tags와 frontmatter 값 중 맞는 것을 골라 자동으로 기록하는 Obsidian 플러그인 Metadata Auto Classifier를 소개합니다. 만든 배경, 작동 방식, 설치와 사용법, 다운로드·릴리스 현황, 관련 글을 한곳에 모았습니다."
permalink: obsidian-plugin-metadata-auto-classifier
tags:
  - obsidian
  - obsidian-plugin
  - open-source
title: "Metadata Auto Classifier"
---

> [!abstract] TL;DR
> 노트 본문을 읽고, 이미 쓰고 있는 값 중에서 맞는 tags와 frontmatter 값을 골라 자동으로 기록하는 Obsidian 플러그인입니다. 제가 처음 출시한 Obsidian 플러그인이고, 2024년 9월부터 관리하고 있습니다. 2026-11-25 기준 누적 다운로드 **8,912**회, GitHub stars **59**개입니다.

## 만든 배경

[[Why did I develop the Obsidian plugin ‘Metadata Auto Classifier’|이 플러그인을 만든 이유]]를 2024년 10월에 이렇게 적었습니다.

> The main motivation was that I wanted to create a plugin directly in Obsidian, which is my favorite tool. Also, as the name suggests, entering metadata into notes manually is cumbersome and I wanted to solve this problem.

첫 출시 직후 [[내가 만든 Obsidian Plugin 리팩토링 하기 - 난 똥쟁이|리팩토링 회고]]에는 이렇게 남겼습니다.

> 드디어 첫 옵시디언 플러그인인을 출시하였습니다 !!! 옵시디언을 좋아해서 꼭 직접 만들어서 기여하고 싶다는 생각을 했었는데 만들면서 참 즐거웠습니다!

## 해결하는 문제

노트가 쌓이면 tags와 frontmatter를 손으로 채우는 일이 병목이 됩니다. Metadata Auto Classifier는 노트 본문을 읽고 이미 쓰고 있는 값 중에서 맞는 tags와 frontmatter 값을 골라 자동으로 기록합니다.

## 작동 방식

예를 들어 `tags` 필드에 기존 tag 목록을 후보로 두고 노트에서 **Fetch frontmatter: tags**를 실행하면, decision API 모델이 후보 하나하나에 yes/no 확률을 매기고 확신이 높은 yes만 frontmatter에 씁니다. 애매하거나 요청이 실패하면 필드를 건드리지 않고, 관련 없는 frontmatter와 본문은 그대로 보존합니다. 필드마다 지시문, 최소·최대 개수, overwrite/append, WikiLink 옵션을 정할 수 있습니다.

새 tag 생성은 기본값이 꺼져 있고, 켜면 `tags` 필드에 한해 chat 모델이 새 값을 만듭니다. 분류는 decision API 모델(TypeSafe Jev, OpenAI Decisions, OpenRouter, custom `/systemone` endpoint)만 맡고, chat 모델은 새 tag 생성에만 씁니다.

Provider는 TypeSafe, OpenAI, Anthropic, Gemini, OpenRouter, Ollama, DeepSeek, LM Studio, Codex(OAuth), OpenAI 호환 custom endpoint를 지원합니다. 분류할 노트 외에는 어떤 노트 본문도 provider로 보내지 않고, 볼트 전체를 훑지 않으며, telemetry는 없습니다.

## 설치와 사용

Settings → Community plugins → Browse에서 "Metadata Auto Classifier"를 검색해 설치하고 켭니다.

1. Settings에서 provider와 decision API 모델을 추가합니다. 새 tag가 필요하면 chat 모델도 추가합니다.
2. 필드, 기존 참조 값, 지시문, 개수 제한을 정합니다.
3. 노트를 열고 command palette에서 **Fetch frontmatter: Fetch all frontmatter using current provider**를 실행합니다. 필드 하나만 채우려면 **Fetch frontmatter: tags**처럼 필드별 명령을 씁니다.
4. 노트의 properties에서 결과를 확인합니다.

## 현황

> [!info] 2026-11-25 측정
> 다운로드 **8,912** · GitHub stars **59** · 최신 릴리스 **1.17.1** (2026-11-04) · MIT · 2024년 9월부터 관리

- 첫 릴리스 1.1.1(2024-09-23)부터 1.17.1까지 GitHub 릴리스 95개를 냈습니다.
- Technology Hits의 [Obsidian Plugins Review — 83](https://medium.com/technology-hits/obsidian-plugins-review-83-b9a59351199d)(Nuno Campos, 2024-11-12)과 [Obsidian Plugin Updates](https://obsidianpluginstats.substack.com/p/obsidian-plugin-updates-2024-10-26) 뉴스레터(Ganessh Kumar R P, 2024-11-02)에 소개되었습니다.

다운로드 수는 [Obsidian 공식 통계](https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json), stars는 GitHub API 기준입니다.

## 링크

- [GitHub 저장소](https://github.com/GoBeromsu/obsidian-metadata-auto-classifier)
- [Obsidian Community Plugins](https://community.obsidian.md/plugins/metadata-auto-classifier)
- [최신 릴리스 1.17.1](https://github.com/GoBeromsu/obsidian-metadata-auto-classifier/releases/latest)
- [릴리스 기록](https://github.com/GoBeromsu/obsidian-metadata-auto-classifier/releases)
- [Obsidian Community 작성자 페이지](https://community.obsidian.md/users/goberomsu)

## 관련 글

- [[Why did I develop the Obsidian plugin ‘Metadata Auto Classifier’]]: 플러그인을 만든 이유와 앞으로의 계획 (2024-10-10)
- [[Metadata auto classifier The Power of AI-Driven Metadata in Obsidian]]: AI로 metadata를 채우는 방식 소개 (2024-10-12)
- [[내가 만든 Obsidian Plugin 리팩토링 하기 - 난 똥쟁이]]: 첫 출시 후 FrontMatterHandler를 순수 함수로 리팩토링한 기록 (2024-11-10)

다른 플러그인: [[Open Connections]] · [[QMD Search]] · [[Eagle Integration]] · [[Note Player]] · [[Hermes Control Center]] · [[Multilingual Bible Search]]
