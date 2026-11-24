---
aliases:
  - Metadata Auto Classifier
date_created: 2026-11-25
date_modified: 2026-11-25
permalink: obsidian-plugin-metadata-auto-classifier
tags:
  - obsidian
  - obsidian-plugin
  - open-source
title: "Obsidian 플러그인 - Metadata Auto Classifier"
---

> [!info] 2026-11-25 측정
> 다운로드 **8,912** · GitHub stars **59** · 최신 릴리스 **1.17.1** (2026-11-04) · MIT · 2024년 9월부터 관리

## 해결하는 문제

노트가 쌓이면 tags와 frontmatter를 손으로 채우는 일이 병목이 됩니다. Metadata Auto Classifier는 노트 본문을 읽고 이미 쓰고 있는 값 중에서 맞는 tags와 frontmatter 값을 골라 자동으로 기록합니다.

## 작동 방식

필드마다 기존 후보 값, 지시문, 최소·최대 개수를 정해 두면, decision API 모델이 후보 하나하나에 확률을 매기고 확신이 높은 yes만 frontmatter에 씁니다. 애매하거나 요청이 실패하면 필드를 건드리지 않고, 관련 없는 frontmatter와 본문은 그대로 보존합니다. 새 tag 생성은 기본값이 꺼져 있고, 켜면 `tags` 필드에 한해 chat 모델이 새 값을 만듭니다.

Provider는 TypeSafe, OpenAI, Anthropic, Gemini, OpenRouter, Ollama, DeepSeek, LM Studio, Codex(OAuth), OpenAI 호환 custom endpoint를 지원합니다. 분류는 decision API 모델(TypeSafe Jev, OpenAI Decisions, OpenRouter, custom `/systemone` endpoint)만 맡고, chat 모델은 새 tag 생성에만 씁니다. 분류할 노트 외에는 어떤 노트 본문도 provider로 보내지 않고, 볼트 전체를 훑지 않으며, telemetry는 없습니다.

## 쓰는 법

1. Settings에서 provider와 decision API 모델을 추가합니다.
2. 필드, 기존 참조 값, 지시문, 개수 제한을 정합니다.
3. 노트를 열고 command palette에서 **Fetch frontmatter: Fetch all frontmatter using current provider**를 실행합니다.

## 링크

- [GitHub 저장소](https://github.com/GoBeromsu/obsidian-metadata-auto-classifier)
- [Obsidian Community Plugins](https://community.obsidian.md/plugins/metadata-auto-classifier)
- [최신 릴리스 1.17.1](https://github.com/GoBeromsu/obsidian-metadata-auto-classifier/releases/latest)

다운로드 수는 [Obsidian 공식 통계](https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json), stars는 GitHub API 기준입니다.
