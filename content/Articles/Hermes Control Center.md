---
aliases:
  - Hermes Control Center
date_created: 2026-11-25
date_modified: 2026-11-25
description: "원격 서버의 Hermes Agent profile을 SSH로 연결해 칸반, profile canvas, 스킬, cron job, 대화를 Obsidian 안에서 다루는 플러그인 Hermes Control Center를 소개합니다. 작동 방식, 설치와 사용법, 다운로드·릴리스 현황을 한곳에 모았습니다."
permalink: obsidian-plugin-hermes-control-center
tags:
  - obsidian
  - obsidian-plugin
  - open-source
title: "Hermes Control Center"
---

> [!abstract] TL;DR
> 원격 서버에서 돌아가는 [Hermes Agent](https://github.com/NousResearch/hermes-agent) profile을 SSH로 연결해, 칸반·profile canvas·스킬·cron job·대화를 Obsidian view 하나로 모으는 플러그인입니다. 추가한 SSH host에만 연결하고 telemetry는 없습니다. 2026-11-25 기준 누적 다운로드 **125**회, GitHub stars **1**개입니다.

## 해결하는 문제

원격 서버에서 [Hermes Agent](https://github.com/NousResearch/hermes-agent) profile을 여럿 돌리면, 칸반, 스킬, cron job, 대화 상태를 확인하려고 계속 SSH로 접속해야 합니다. Hermes Control Center는 이 작업을 Obsidian 안의 view 하나로 모읍니다.

## 작동 방식

플러그인은 시스템의 `ssh`로 설정한 host alias에 접속하고, 읽기나 동작마다 짧은 POSIX shell script를 실행합니다. Script는 `cat`, 읽기 전용 `sqlite3` query, `hermes` 명령을 씁니다.

예를 들어 **Open kanban**을 실행하면 host의 모든 board가 열리고, board를 열어 둔 동안 SSH 세션 하나가 board의 database에 바뀐 것이 있는지 읽기 전용으로 1초에 세 번가량 묻습니다. 그래서 task 상태가 실시간으로 갱신되고, task가 멈추면 알림이 뜹니다.

Profiles canvas는 profile마다 활동 sparkline과 token·비용 합계를 카드로 보여 주고, profile끼리 얼마나 함께 일하는지 edge로 그립니다. Profile popup에서는 세션을 보고, 스킬과 cron job을 켜고 끄고, Soul·User·Memory 문서를 편집합니다. Chat 패널에서는 아무 profile과 대화하고, `/`로 스킬 메뉴를 열고, turn이 도는 동안에도 메시지를 queue에 쌓아 순서대로 보냅니다. Cron은 오늘·주간 calendar로 봅니다.

플러그인은 추가한 SSH host에만 연결하고, host를 바꾸는 동작은 사용자가 요청할 때만 실행합니다. 볼트를 통째로 훑지 않고, 비밀값과 chat transcript는 디스크에 쓰지 않으며, telemetry는 없습니다.

## 설치와 사용

시스템의 `ssh`를 실행하므로 Desktop 전용입니다. Settings → Community plugins → Browse에서 "Hermes Control Center"를 검색해 설치하고 켭니다.

1. Settings에서 SSH host alias를 추가하고 plug 아이콘으로 연결을 확인합니다. Alias는 비밀번호 없이 key로 로그인되어야 하고, host key가 `known_hosts`에 있어야 합니다.
2. Host에는 `PATH`에 `hermes` 명령이 있는 Hermes Agent와 `sqlite3`가 필요합니다.
3. Ribbon이나 command palette에서 **Open profiles**, **Open kanban**, **Open chat**, **Open today timeline**, **Open week calendar** 중 하나를 엽니다.

## 현황

> [!info] 2026-11-25 측정
> 다운로드 **125** · GitHub stars **1** · 최신 릴리스 **1.0.10** (2026-10-26) · MIT · 2026년 9월부터 관리

- 첫 릴리스 0.1.0(2026-09-13)부터 1.0.10까지 GitHub 릴리스 12개를 냈습니다.

다운로드 수는 [Obsidian 공식 통계](https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json), stars는 GitHub API 기준입니다.

## 링크

- [GitHub 저장소](https://github.com/GoBeromsu/obsidian-hermes)
- [Obsidian Community Plugins](https://community.obsidian.md/plugins/hermes-control-center)
- [최신 릴리스 1.0.10](https://github.com/GoBeromsu/obsidian-hermes/releases/latest)
- [릴리스 기록](https://github.com/GoBeromsu/obsidian-hermes/releases)
- [Obsidian Community 작성자 페이지](https://community.obsidian.md/users/goberomsu)

다른 플러그인: [[Metadata Auto Classifier]] · [[Open Connections]] · [[QMD Search]] · [[Eagle Integration]] · [[Note Player]] · [[Multilingual Bible Search]]
