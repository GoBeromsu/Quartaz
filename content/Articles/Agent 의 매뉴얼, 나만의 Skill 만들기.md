---
aliases: []
date_created: 2026-07-23
date_modified: 2026-07-23
permalink: agent-manual-build-your-own-skill
tags:
  - talk
  - ai
  - ai-agent
  - agent-skill
  - harness-engineering
title: "Agent 의 매뉴얼, 나만의 Skill 만들기"
---

2026 DGIST AI Build Week Education Track · 2026-07-23 · DGIST

![Agent 의 매뉴얼,](/_attachments/dgist-skill-workshop-01.jpg)

AI Harness Engineering · Education Session

**Agent 의 매뉴얼,**

나만의 Skill 만들기

고범수 — Upstage AI Ambassador

---

![목차](/_attachments/dgist-skill-workshop-02.jpg)

Contents

**목차**

- 01도입 — 쓰다 · 만들다 · 설계하다

- 02컨텍스트 이후의 시대, Harness Engineering

- 03Skill 이란 — 등장 배경부터 구조 · 실물까지

---

![도입 — 쓰다 · 만들다 · 설계하다](/_attachments/dgist-skill-workshop-03.jpg)

Chapter 01

01

**도입 — 쓰다 · 만들다 · 설계하다**

이 세션의 목표와 흐름

---

![왜 오늘 Skill 인가 흡수되는 암묵지, 남는 오케스트레이션](/_attachments/dgist-skill-workshop-04.jpg)

01 · 도입 — 발표자 메시지

**왜 오늘 Skill 인가 흡수되는 암묵지, 남는 오케스트레이션**

모델은 빠르게 배포되고 빠르게 똑똑해집니다. 그 과정에서 우리의 입맛, 우리의 암묵지가 모델에 흡수되고 있습니다.

그럼에도

오케스트레이션은 우리 몫

흡수된 암묵지를 우리 삶의 현장에 꺼내 쓰는 오케스트레이션은 여전히 우리가 한다.

Skill 의 가치

같은 맥락으로 풀게

우리 팀·나의 개인화된 맥락으로, 내 현장의 문제를 에이전트가 같은 맥락으로 풀게 하는 것.

한 단어로

자산화

근거는 본론에서 — Harness 만이 누적 자산이라는 장과 Compounding 장이 이 주장을 받친다.

---

![세션 목적 오늘 하는 것](/_attachments/dgist-skill-workshop-05.jpg)

01 · 도입

**세션 목적 오늘 하는 것**

무엇을

절차를 매뉴얼로

내 절차를 매뉴얼(SKILL.md)로 적어 에이전트에게 가르친다 — AI Harness Engineering 실습.

왜

쓰는 법 다음 단계

앞 세션에서 에이전트를 쓰는 법은 알았다. 이 세션은 내 반복 업무를 에이전트가 같은 맥락으로 풀게 만드는 시간.

어디서든

이식되는 절차

도구가 바뀌어도 매뉴얼로 남긴 절차는 이식된다.

GOAL 오늘의 산출물 — 100분 뒤, 각자 동작하는 Skill 1개.

---

![컨텍스트 이후의 시대, Harness Engineering](/_attachments/dgist-skill-workshop-06.jpg)

Chapter 02

02

**컨텍스트 이후의 시대, Harness Engineering**

Prompt → Context → Harness — 우리는 진화의 세 번째 단계 입구에 서 있다

---

![모델은 수렴 중 모델 선택이 ROI 를 만들지 않는 시대](/_attachments/dgist-skill-workshop-07.jpg)

02 · Harness Engineering

**모델은 수렴 중 모델 선택이 ROI 를 만들지 않는 시대**

주요 LLM 벤치마크의 격차가 좁혀지고 있습니다. 모델 선택 자체는 더 이상 ROI 를 만들지 않습니다.

---

![진화의 3단계 Prompt → Context → Harness](/_attachments/dgist-skill-workshop-08.jpg)

02 · Harness Engineering

**진화의 3단계 Prompt → Context → Harness**

2022–2023

Prompt Engineering

모델에 무엇을 말할 것인가

제로샷/퓨샷 프롬프트, 입력 최적화.

핵심 질문: "어떻게 말하면 모델이 잘 이해할까?"

2024–2025

Context Engineering

모델에 무엇을 보여줄 것인가

RAG, 메모리, 시스템 프롬프트 설계.

핵심 질문: "무엇을 보여주면 문제가 풀릴까?"

2025–

Harness Engineering

모델 주변에 무엇을 구축할 것인가

도구 권한, 가드레일, 피드백 루프, 관찰가능성.

핵심 질문: "어떤 환경을 만들면 효과적일까?"

---

![변화의 동력 한계가 다음 단계를 부른다](/_attachments/dgist-skill-workshop-09.jpg)

02 · Harness Engineering

**변화의 동력 한계가 다음 단계를 부른다**

MODEL 핵심 엔진 텍스트 생성·추론·답변 생성 — 6개월마다 새 모델로 교체되는 소모품.

PROMPT 명령 체계 CoT·Few-shot·Role — 정보가 부족해 Context 로 이동한다.

CONTEXT 정보 환경 RAG·Memory·Tool — 정보가 많아도 안 풀려 Harness 로 이동한다.

HARNESS 실행 시스템 Skills·Rules·AGENTS.md — 누적·지속 가능한 자산.

---

![컨텍스트도 답이 아니다 Context Rot — 95% → 36%](/_attachments/dgist-skill-workshop-10.jpg)

02 · Harness Engineering

**컨텍스트도 답이 아니다 Context Rot — 95% → 36%**

Chroma Research — 50K 토큰 컨텍스트에서 채움 비율이 높아질수록 성공률이 급락합니다.

CORE 컨텍스트는 쌓을수록 좋은 자산이 아니라 소진되는 유한한 예산이다.

---

![Test Harness 에서 Agent Harness 로 신조어가 아니다](/_attachments/dgist-skill-workshop-11.jpg)

02 · Harness Engineering

**Test Harness 에서 Agent Harness 로 신조어가 아니다**

코드가 제대로 도는지 자동으로 검증해 주는 틀을, 소프트웨어 업계는 오래전부터 Test Harness 라 불렀습니다. 우리가 지금 만드는 것도 같은 발상의 확장입니다.

전통 Test Harness

1 Test Case 테스트 케이스 정의

2 Stub 의존성 모의 객체

3 SUT (System Under Test) 테스트 대상 시스템

4 Result 테스트 결과 검증

Agent Harness

1 Goal 목표 설정

2 Context 컨텍스트 제공

3 Model LLM 추론

4 Tools 도구 호출

5 Verify 결과 검증

6 Loop 반복/개선

확장 Test Harness 에는 없던 것 — Loop. 결과를 보고 판단을 조정해 다시 시도하는 반복 고리가 Agent Harness 의 핵심 확장입니다.

---

![Skill 이란 — 등장 배경부터 구조 · 실물까지](/_attachments/dgist-skill-workshop-12.jpg)

Chapter 03

03

**Skill 이란 — 등장 배경부터 구조 · 실물까지**

프롬프트에서 매뉴얼로

---

![지난주의 잘 만든 프롬프트 다음 주에 어떻게 찾으세요?](/_attachments/dgist-skill-workshop-13.jpg)

03 · Skill 이란

**지난주의 잘 만든 프롬프트 다음 주에 어떻게 찾으세요?**

여러분이 지난 주에 잘 만든 프롬프트

다음 주에 다시 쓰려면 어떻게 찾으세요?

찾아봅니까?

다시 만듭니까?

"프롬프트는 우리에게 도구였지만 자산은 아니었습니다."

---

![Skill 을 만든 3가지 동력 효율 · 자율 호출 · Compounding](/_attachments/dgist-skill-workshop-14.jpg)

03 · Skill 이란

**Skill 을 만든 3가지 동력 효율 · 자율 호출 · Compounding**

01

컨텍스트 효율성

필요할 때만 펼침

Progressive Disclosure 원리

평소엔 안 보고, 필요할 때만 펼침

Context Rot 방지

02

모델 자율 호출

description 시맨틱 매칭

On-demand Knowledge via Semantic Matching

사용자가 매번 입력할 필요 없음

자연어 명령만으로 호출

03

Compounding

외부 자산 누적

작업 흔적이 외부 자산으로 누적

모델이 바뀌어도 자산은 유지

지속 가능한 자산화

---

![프롬프트는 도구, Skill 은 매뉴얼 가장 큰 변화](/_attachments/dgist-skill-workshop-15.jpg)

03 · Skill 이란

**프롬프트는 도구, Skill 은 매뉴얼 가장 큰 변화**

프롬프트 (도구)

사용자가 매번 텍스트 입력

- 입력 — 매번 텍스트 입력

- 부담 — 저장 위치 기억 필요

- 재사용 — 같은 작업 = 매번 같은 입력

- 결과 — 반복적인 입력 필요

Skill (모듈)

description 등록 →

모델이 자율 매칭

- 입력 — 자동 매칭

- 부담 — 자연어만

- 재사용 — 한 번 작성, 무한 재사용

- 결과 — 자동화된 호출

---

![실물 usecase — craft-skills 저는 사고를 스킬로 만든다](/_attachments/dgist-skill-workshop-16.jpg)

03 · Skill 이란 — 발표자 실사례

**실물 usecase — craft-skills 저는 사고를 스킬로 만든다**

좋은 하네스는 이미 많습니다(Claude Code · Codex · Hermes).

저는 제가 사고 친 것, 반복해서 배운 것을 스킬로 만들어 쌓습니다.

07-18 · 사고 10,000km 떨어진 영국 랩의 GPU 서버(RTX 6000)를 잠재웠다 — flash-attn 빌드 병렬도를 잘못 잡아 호스트 RAM 소진, 기동 2분 만에 SSH·Tailscale 완전 무응답.

그 후 · 격상 재발 방지 절차를 gpu 스킬로 격상 — "RAM cap first: MAX\_JOBS = free\_RAM\_GB / 6" 규칙 + 안전 빌드 커맨드.

지금 · 저장소 craft-skills: 32개 스킬 공개 저장소 — "Own your craft, vendor-agnostic". 같은 Markdown 을 Hermes·Claude Code·Codex 에 그대로 배포.

PROOF 방금 배운 SKILL.md 구조가 실제로 이렇게 쓰인다 — 매뉴얼로 남긴 절차는 도구를 넘어 이식된다 (인트로 "자산화"의 실물).

---

![Wrap up 오늘 우리가 확인한 것](/_attachments/dgist-skill-workshop-17.jpg)

03 · Wrap up

**Wrap up 오늘 우리가 확인한 것**

오늘 세션에서 함께 확인한 것들을 짚으며 마무리할게요.

Agent

Model + Harness, 기억나시죠

모델은 소모품이고, Harness 만이 누적되는 자산이라는 걸 확인했습니다.

Skill

프롬프트는 도구, Skill 은 매뉴얼

반복하는 절차를 파일로 남기면 모델이 알아서 꺼내 쓴다는 것도 봤습니다.

구조

SKILL.md, 딱 4가지

name · description · procedure · assets — 이 네 가지면 충분하다는 것도 짚었죠.

실물

craft-skills 로 본 것

사고를 매뉴얼로 남기면 자산이 된다는 걸, 실제 사례로 봤습니다.

---

![쓰는 사람에서](/_attachments/dgist-skill-workshop-18.jpg)

Q&A · Closing

**쓰는 사람에서**

설계하는 사람으로

궁금한 점, 편하게 질문해 주세요.

오늘 본 Skill 설계는 여러분 곁에 남는 자산입니다.
