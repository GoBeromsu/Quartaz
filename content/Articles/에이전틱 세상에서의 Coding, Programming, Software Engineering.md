---
aliases: []
date_created: 2026-04-02
date_modified: 2026-11-25
permalink: coding-programming-software-engineering-agentic-era
tags:
  - ai-agent
  - software-engineering
title: "에이전틱 세상에서의 Coding, Programming, Software Engineering"
---

## 공명
> AI 와 인간이 같은 사다리를 오르고 있다. Coding → Programming → Software Engineering, 이 층위는 사라지지 않았다. 다만 AI 에이전트가 아래에서부터 빠르게 올라오고, 인간은 위로 밀려나는 것이 아니라 **스스로 위로 올라가고 있다**. 나 자신이 이미 Claude Code 와 oh-my-claudecode 를 쓰며 그 이동 위에 서 있다.

## Why
> Coding, Programming, Software Engineering — 흔히 혼용되지만, 이 세 개념의 층위를 명확히 구분하는 것은 에이전틱 시대에 자신의 위치를 파악하는 데 필수적이다.
>
> **카파시**는 "2025 년 12 월 이후 한 줄도 안 쳤다. Agentic engineering 이 새로운 최고 기술이다 " 라고 선언했고, **앤드류 응**은 "Multi-agent design patterns + eval-driven 프로세스가 foundation model 보다 더 큰 진보를 가져온다 " 고 강조한다. 두 사람 모두 같은 방향을 가리킨다: **인간은 코드를 쓰는 사람이 아니라, 에이전트를 통해 가치를 창출하는 시스템 오케스트레이터가 되어야 한다.**

## What

### 세 층위의 정의

| 층위 | 초점 | 핵심 질문 |
|------|------|-----------|
| **Coding** | 구현 (Syntax, 타이핑) | " 이 로직을 어떻게 쓸까?" |
| **Programming** | 문제 해결 (알고리즘, 로직 설계) | " 이 문제를 어떻게 풀까?" |
| **Software Engineering** | 시스템 생애주기 (아키텍처, 유지보수, 팀, 비용) | " 이걸 어떻게 지속 가능하게 만들까?" |

### 에이전틱 세상에서의 재배치

카파시와 앤드류 응의 프레임을 빌리면:

| 층위 | 에이전틱 시대 담당 | 카파시의 표현 | 앤드류 응의 표현 |
|------|-------------------|-------------|-----------------|
| **Coding** | AI 90%+ | " 한 줄도 안 친다. 에이전트가 parallel 로 실행 " | "Tool use + iterative code gen/test" |
| **Programming** | 인간 60% + AI 40% | "Task 를 just right 하게 decompose" | "Planning + multi-agent workflow" |
| **SE** | 인간 90%+ | "Direction, judgement, taste, oversight" | "Eval-driven error analysis + business process 를 agentic workflow 로 분해 " |

### 핵심 통찰: 평행 상승

AI(에이전트) 와 인간이 같은 층위 사다리를 **동시에 올라가고 있다.**

- **AI 의 상승**: Coding 자동화 → Programming 수준의 자율 계획·실행 → 점차 SE 영역 (아키텍처 제안, 테스트 전략) 까지 진입 중
- **인간의 상승**: Coding 에서 해방 → Programming 수준의 에이전트 오케스트레이션 → SE 수준의 시스템 사고·거버넌스·윤리적 판단으로 이동
- **경계는 고정이 아니라 이동 중**: 오늘의 " 인간 영역 " 이 내일은 "AI 영역 " 이 될 수 있다. 중요한 것은 **항상 한 층위 위에 서 있는 것**.

### 층위에 붙는 실천 학문들

이 세 층위를 발견하면, 각 층위에 **붙어서 작동하는 실천 학문**이 보인다:

| 실천 학문 | 붙는 층위 | 역할 |
|-----------|-----------|------|
| **Prompt Engineering** | Coding | 단일 입력을 최적화하는 구현 기술 — " 삽질 " 의 영역 |
| **Context Engineering** | Coding ↔ Programming | 암묵적 맥락을 명시적 입력으로 바꾸는 설계 — prompt 의 진화형 |
| **Harness Engineering** | Programming ↔ SE | 비결정적 모델을 결정적 워크플로우로 감싸는 설계 — goal, eval, routing, fallback 의 레일 |

Prompt engineering 이 " 어떻게 말할까 " 라면, harness engineering 은 " 어떻게 검증하고 반복할까 " 다. 에이전틱 세상에서 인간이 올라가야 할 사다리의 발판이 바로 이 실천 학문들이다.

### Aha Moments — 그들이 보는 방향

#### 카파시: " 에이전트의 해가 아니라 에이전트의 10 년 "

카파시의 시선은 의외로 **보수적**이다. " 한 줄도 안 친다 " 는 선언 이면에는 테슬라 오토파일럿 5 년의 교훈이 깔려 있다:

> "2013 년에 Waymo 자율주행차를 30 분 탔을 때 ' 자율주행이 임박했구나 ' 라고 생각했다. 12 년이 지난 지금도 우리는 여전히 개발 중이다."

그가 진짜 말하고 싶은 것은 **자율성 슬라이더를 천천히 올리라**는 것이다. " 아이언맨 로봇을 만들지 말고 아이언맨 수트를 만들어라 " — AI 가 Coding 을 대신하더라도 인간이 **감사 (audit) 루프 안에 머물러야** 한다. 10,000 줄 diff 를 한 번에 던지는 에이전트보다, 작은 증분 청크를 빠르게 검증하는 인간 +AI 루프가 더 낫다.

Software 1.0(코드) → 2.0(신경망 가중치) → 3.0(영어 프롬프트) 라는 진화 모델에서 가장 놀라운 지점: **" 프롬프트는 LLM 을 프로그래밍하는 프로그램이다."** 그런데 이 " 프로그래밍 언어 " 는 영어다. 즉, Coding 의 정의 자체가 바뀌었다. 타이핑하는 대상이 Python 에서 English 로 이동한 것이다.

#### 앤드류 응: " 잘못된 비트를 뒤집으면 2 배가 아니라 10 배 느려진다 "

앤드류 응의 시선은 **실행 속도**에 집착한다. 하지만 그가 말하는 속도는 " 빨리 코드 치기 " 가 아니다:

> "Concreteness buys you speed. 모호한 아이디어는 박수를 받지만, 구체적인 아이디어가 실행을 산다."

AI 가 엔지니어링을 10 배 가속시킨 결과, 병목은 이제 **Coding 이 아니라 Product Management**로 이동했다. 과거 PM:Engineer = 1:7 이었다면, 지금은 1:0.5 까지 역전 가능하다. 이것은 SE 층위의 역할 (무엇을 만들지 결정하고, 사용자 피드백을 반영하는 일) 이 Coding 보다 훨씬 희소해졌다는 뜻이다.

그의 레고 블록 비유도 핵심이다: Prompting, Evals, Guardrails, RAG, Voice, Fine-tuning — 이 블록들을 개별적으로 아는 것보다 **조합하는 능력**이 기하급수적 기회를 만든다. 이것이 정확히 Programming → SE 층위의 역량이다.

#### 두 사람이 교차하는 지점

카파시는 " 자율성 슬라이더를 천천히 " 라 하고, 앤드류 응은 " 속도가 곧 생존 " 이라 한다. 모순처럼 보이지만 실은 같은 말이다: **빠르게 돌리되, 루프를 짧게 유지하라.** 10,000 줄을 한 번에 검증하는 것보다 100 줄씩 100 번 검증하는 것이 더 빠르다. 속도의 본질은 타이핑 속도가 아니라 **피드백 루프의 주기**다.

### 나의 현재 위치

Claude Code + oh-my-claudecode 로 Coding~SE 전 층위를 동시 탐색 중. 에이전트에게 코드 생성을 맡기고, multi-agent 오케스트레이션 (autopilot, ralph, team) 으로 문제를 분해하며, 전체 시스템의 방향·판단·검증은 내가 책임진다. 이것이 이미 카파시가 말한 "agentic engineering" 이고, 앤드류 응이 말한 "agentic workflow" 다.

관련 글: [[Agent 의 매뉴얼, 나만의 Skill 만들기]] · [[Skill, MCP, Sub-agent in Agentic Coding Agents]]
