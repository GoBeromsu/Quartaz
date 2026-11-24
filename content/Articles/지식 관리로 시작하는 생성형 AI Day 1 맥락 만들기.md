---
aliases: []
date_created: 2026-09-18
date_modified: 2026-09-18
permalink: generative-ai-through-knowledge-management-day-1
tags:
  - talk
  - ai
  - pkm
  - obsidian
  - notebooklm
title: "지식 관리로 시작하는 생성형 AI Day 1 맥락 만들기"
---

전남대학교 「지식 관리로 시작하는 생성형 AI — 나의 맥락을 AI 에게 넘기는 법」 Day 1 · 2026-09-18 · 전남대학교 여수캠퍼스 이학관

![Day1](/_attachments/jnu-generative-ai-day1-01.jpg)

DAY1 · CONTEXT CREATION

**Day1**

맥락 만들기

나의 맥락을 AI에게 넘기는 법

무엇을 만들지보다, 왜 만드는지부터.

고범수 · 전남대학교 · 2026.09.18 © 2026 고범수

---

![하나의 주제로 맥락을 쌓고 결과를 만드는 하루](/_attachments/jnu-generative-ai-day1-02.jpg)

DAY1 · 목차

**하나의 주제로 맥락을 쌓고 결과를 만드는 하루**

ORIENTATION 전체 흐름·준비물 점검M01 Prompt에서 Agent와 Skill까지Context · Model + Harness · 재사용 절차M02 외부 맥락 주입수집·구조화·출처 고정·다음 질문

LUNCH 점심시간

M03 나의 디지털 집: ObsidianMarkdown·나만의 목차(MOC)·PARA·프로젝트 노트M04 에이전트에게 맥락 넘기기Me.md·AGENTS.md·Spec → Signpost → LoopM05 낯선 용어와 도메인 용어접근법·안정성·Gemini 영상 실습WRAP-UP 산출물 점검·내일 검증할 질문

---

![Prompt에서 Agent와 Skill까지](/_attachments/jnu-generative-ai-day1-03.jpg)

01

**Prompt에서 Agent와 Skill까지**

모델의 생성, 맥락의 선택, Harness의 실행, 재사용 절차의 축적을 연결한다.

---

![모델은 Context에서 다음 출력을 만든다](/_attachments/jnu-generative-ai-day1-04.jpg)

M01 · 모델과 도구 · 출발

**모델은 Context에서 다음 출력을 만든다**

LLM은 입력된 토큰을 바탕으로 텍스트·코드·도구 요청을 생성합니다. 파일 읽기·검색·계산·쓰기는 모델 밖의 실행 환경이 맡습니다.

INPUT

Context

사용자 요청, 선택한 자료, 작업 이력과 현재 상태를 입력합니다.

→

MODEL

출력 생성

답변이나 다음 행동에 필요한 도구 요청을 만듭니다.

→

RUNTIME

외부 실행

도구를 실행하고 결과·오류·새 상태를 모델에 돌려줍니다.

모델의 생성 능력은 목표·Context·실행 환경과 연결될 때 실제 작업으로 이어집니다.

---

![더 좋은 모델에도 목표·맥락·검증이 필요하다](/_attachments/jnu-generative-ai-day1-05.jpg)

M01 · 모델의 발전과 남는 설계

**더 좋은 모델에도 목표·맥락·검증이 필요하다**

모델의 언어·추론·멀티모달 능력이 좋아질수록 더 많은 일을 맡길 수 있습니다. 실제 과제의 목적과 근거, 완료 조건은 작업마다 새로 정합니다.

MODEL CAPABILITY

생성과 추론

답변을 만들고 후보 행동을 비교합니다. 향상된 능력은 같은 자료에서 더 많은 의미를 읽는 데 도움을 줍니다.

GOAL + CONTEXT

이번 일의 기준

무엇을 만들지, 어떤 자료를 근거로 삼을지, 어디까지 공유할지 정합니다.

VERIFICATION

완료를 확인

출처·파일·실행 결과를 확인하고, 승인·수정·중단 중 다음 행동을 고릅니다.

모델이 발전할수록 사람은 목표와 판단 기준을 더 선명하게 설계할 수 있습니다.

---

![엄밀함은 더 중요한 판단으로 이동한다](/_attachments/jnu-generative-ai-day1-06.jpg)

M01 · Rigor Relocation · 엄밀함의 이동

**엄밀함은 더 중요한 판단으로 이동한다**

강사 설명 · DGIST 09 수업 관점 재구성

도구가 세부 작업을 맡으면 사람은 목표·구조·검증에 집중합니다.

작성에서 무엇을 만들고 왜 필요한지 정하는 일로 이동합니다.

검색에서 어떤 근거를 선택하고 범위를 어떻게 표시할지로 이동합니다.

실행에서 권한·완료 기준·관찰 결과를 확인하는 일로 이동합니다.

자동화가 넓어질수록 판단의 위치와 책임을 명시합니다.

---

![Prompt → Context → Harness](/_attachments/jnu-generative-ai-day1-07.jpg)

M01 · 세 가지 설계 범위

**Prompt → Context → Harness**

한 문장의 요청에서 시작해, 판단 재료와 실행 환경으로 설계 범위를 넓힙니다.

PROMPT · 요청

어떻게 말할까?

이번 목표·제약·출력 형식을 적습니다. Prompt는 모델에 전달되는 Context의 일부입니다.

CONTEXT · 입력

무엇을 보여 줄까?

문서·이력·상태·도구 결과 중 지금 판단에 필요한 토큰을 고릅니다.

HARNESS · 환경

어떤 환경을 만들까?

도구·권한·상태·검증·반복을 연결해 작업이 이어지는 조건을 만듭니다.

Prompt ⊂ Context · Harness는 Context를 조립하고 행동과 관찰을 연결합니다.

---

![막히는 지점에서 다음 범위를 설계한다](/_attachments/jnu-generative-ai-day1-08.jpg)

M01 · 한계가 넓히는 설계

**막히는 지점에서 다음 범위를 설계한다**

Prompt의 한계 요청만으로 판단 재료가 부족하면 문서·이력·현재 상태를 Context에 더합니다.

Context의 한계 정보가 많아질수록 선택과 갱신이 필요합니다. 관련 자료와 완료 기준을 우선합니다.

Harness의 역할 도구 호출, 권한, 관찰, 승인, 중단과 상태 보존을 작업 흐름으로 묶습니다.

남는 자산 검토한 자료·규칙·절차·결과를 파일로 남겨 다음 작업과 새 모델에서 다시 씁니다.

범위의 확장은 요청 → 선택한 정보 → 실행과 확인의 순서로 이어집니다.

---

![Agent = Model + Harness](/_attachments/jnu-generative-ai-day1-09.jpg)

M01 · Agent의 정의

**Agent = Model + Harness**

Agent는 모델의 판단을 도구·권한·상태·검증과 연결해 목표를 향해 작업을 이어 가는 시스템입니다.

MODEL

다음 행동을 선택

Context를 읽고 답변·질문·도구 요청 중 다음 출력을 만듭니다.

\+

HARNESS

행동할 환경을 제공

Context를 조립하고 도구를 실행하며 권한·관찰·검증·상태를 관리합니다.

사람은 목표·완료 기준·승인·중단과 공유 범위를 정합니다.

---

![Harness는 모델 주변의 실행 환경이다](/_attachments/jnu-generative-ai-day1-10.jpg)

M01 · Harness의 정의

**Harness는 모델 주변의 실행 환경이다**

모델이 읽고 행동하고 결과를 확인할 수 있도록 도구와 상태를 연결하고, 사람이 정한 경계를 적용합니다.

Context 요청·자료·이력·도구 결과에서 지금 필요한 정보를 조립합니다.

Tools 검색·파일·코드·외부 서비스의 기능과 입력 형식을 모델에 제공합니다.

Control 접근 권한·승인·반복 한도·완료와 중단 조건을 적용합니다.

Observation 실행 결과·오류·변경 상태를 모델이 읽을 수 있는 형태로 돌려줍니다.

Persistence 검토한 파일·상태·기록을 Context window 밖에 남깁니다.

---

![모델의 요청과 도구의 실행을 구분한다](/_attachments/jnu-generative-ai-day1-11.jpg)

M01 · Harness의 경계

**모델의 요청과 도구의 실행을 구분한다**

HARNESS · CONTEXT

선택해 전달

목표·자료·현재 상태·사용 가능한 도구를 모델 입력으로 구성합니다.

→

MODEL

요청을 생성

답변하거나 도구 이름과 입력값을 제안합니다. 실행은 Harness가 연결한 도구가 맡습니다.

→

HARNESS · TOOL

실행해 관찰

권한을 확인해 도구를 실행하고 결과를 다시 Context로 돌려줍니다.

Harness 경계를 보면 누가 판단하고, 누가 실행하며, 무엇을 확인할지 분명해집니다.

---

![Test Harness에서 Agent Harness로](/_attachments/jnu-generative-ai-day1-12.jpg)

M01 · Harness라는 이름의 배경

**Test Harness에서 Agent Harness로**

두 Harness 모두 대상을 실행하고 관찰하며 기준과 대조하고 다시 시도할 수 있는 환경입니다.

TEST HARNESS

정한 조건에서 프로그램을 검사

테스트 입력과 의존성을 준비합니다.

대상 프로그램을 실행합니다.

결과를 기대값과 대조하고 반복합니다.

AGENT HARNESS

관찰에 따라 다음 행동을 선택

목표와 Context를 모델에 전달합니다.

모델이 고른 도구 요청을 실행합니다.

결과를 검증해 다음 판단·승인·중단으로 이어 갑니다.

확장의 핵심은 모델의 다음 행동 선택과 권한·승인·상태 관리입니다.

---

![제어·맥락·행동·관찰·보존을 연결한다](/_attachments/jnu-generative-ai-day1-13.jpg)

M01 · Harness 설계 요소

**제어·맥락·행동·관찰·보존을 연결한다**

Control 언제 계속하고, 승인받고, 완료하거나 중단할지 정합니다.

Context Injection 지금 판단에 필요한 요청·근거·상태를 선택해 넣습니다.

Action 허용한 도구와 입력 형식으로 외부 작업을 실행합니다.

Observe & Verify 결과·오류·변경을 읽고 완료 기준과 출처에 맞는지 확인합니다.

Persist 검토한 지식·절차·상태를 파일로 남겨 다음 실행에 이어 줍니다.

Agent loop는 이 다섯 요소를 통해 판단 → 실행 → 관찰 → 다음 판단으로 이어집니다.

---

![재사용할 절차와 지식을 남긴다](/_attachments/jnu-generative-ai-day1-14.jpg)

SKILL

**재사용할 절차와 지식을 남긴다**

필요할 때 찾고, 단계적으로 읽고, 검토하며 축적하는 Agent의 작업 매뉴얼.

---

![지난주에 만든 좋은 Prompt를 어떻게 다시 쓰는가?](/_attachments/jnu-generative-ai-day1-15.jpg)

M01 · Skill의 등장 배경 · 재사용

**지난주에 만든 좋은 Prompt를 어떻게 다시 쓰는가?**

한 번의 Prompt

이번 요청을 해결

목표·자료·출력 형식을 한 대화에 적습니다. 작업이 끝난 뒤 저장 위치와 적용 조건을 사람이 기억해야 합니다.

재사용할 Skill

절차와 지식을 파일로 보존

언제 쓸지, 어떤 순서로 할지, 무엇을 확인할지와 참고 자료를 함께 둡니다.

반복되는 좋은 요청을 찾을 수 있는 설명 + 실행 절차 + 검증 기준으로 바꿉니다.

---

![효율적으로 찾고, 조건에 맞춰 쓰고, 개선을 축적한다](/_attachments/jnu-generative-ai-day1-16.jpg)

M01 · Skill · 세 가지 동력

**효율적으로 찾고, 조건에 맞춰 쓰고, 개선을 축적한다**

01 · PROGRESSIVE DISCLOSURE

필요한 만큼 읽기

설명 → 본문 → 참고 파일 순서로 읽어 처음부터 적재하는 Context를 줄입니다.

02 · DESCRIPTION MATCHING

적용 조건 찾기

name과 description을 단서로 후보를 찾습니다. 자동 호출 여부는 실행 환경과 정책에 따라 달라집니다.

03 · COMPOUNDING

검토한 개선 누적

절차·참고 자료·검증 기준을 파일에서 고치면 다음 작업과 새 모델에서도 다시 씁니다.

Skill의 가치는 적은 Context로 찾고, 맞는 절차를 적용하고, 검토한 개선을 남기는 것입니다.

---

![이번 요청과 재사용 절차를 구분한다](/_attachments/jnu-generative-ai-day1-17.jpg)

M01 · Prompt와 Skill

**이번 요청과 재사용 절차를 구분한다**

PROMPT · 이번 요청

지금 할 일을 말한다

목표·대상·출력 형식·현재 질문을 적습니다.

- 이번 Context의 일부

- 작업마다 달라지는 입력

- 현재 결과를 위한 지시

SKILL · 재사용 절차

여러 작업에서 꺼내 쓴다

적용 조건·단계·참고 자료·검증 기준을 파일로 둡니다.

- Harness가 찾을 수 있는 자산

- 검토하며 갱신하는 절차

- 실행 환경과 정책에 따라 로드

Prompt는 이번 목표를 주고, Skill은 반복 가능한 수행 방법을 제공합니다.

---

![요청·입력·지식 자산·실행 환경을 연결한다](/_attachments/jnu-generative-ai-day1-18.jpg)

M01 · Prompt · Context · Skill · Harness

**요청·입력·지식 자산·실행 환경을 연결한다**

PROMPT

이번 요청

목표와 원하는 결과를 말합니다.

CONTEXT

지금 읽는 입력

요청·선택한 문서·상태·관찰을 담습니다.

SKILL

저장한 지식과 절차

필요할 때 본문과 선택 자료를 Context에 불러옵니다.

HARNESS

선택과 실행

도구·권한·검증·보존을 관리합니다.

지식 자산은 파일에 남고, Harness는 이번 목표에 맞는 부분을 선택해 Context로 전달합니다.

---

![외부 맥락을 주입한다](/_attachments/jnu-generative-ai-day1-19.jpg)

02

**외부 맥락을 주입한다**

자료를 구조화하고, 출처를 확인하며, 다음 질문으로 돌려놓는다.

---

![자료를 모아 구조화하고, 질문을 다음 노트로 잇는다](/_attachments/jnu-generative-ai-day1-20.jpg)

M02 · 외부 맥락 주입

**자료를 모아 구조화하고, 질문을 다음 노트로 잇는다**

자료 수집 → 소스에 근거한 질문 → 패턴·관계·빈틈 찾기 → 원문 확인 → 내 노트로

COLLECT

소스 모으기

공통 PDF·웹·영상과

추가 자료를 Sources에 넣습니다.

→

STRUCTURE

구조화하기

출처·저자·시점과

질문을 한곳에 정리합니다.

→

ASK & COMPARE

질의·비교하기

인용을 클릭하며

패턴·대립·빈틈을 찾습니다.

→

RETURN

노트로 되돌리기

인용 답변·소스·다음 질문을

개인 노트의 작업 맥락에 잇습니다.

M02의 완료 조건은 인용이 붙은 답변 + 실제 소스 + 다음 질문입니다.

---

![공통 파일을 baseline으로, 내 자료는 선택해 더한다](/_attachments/jnu-generative-ai-day1-21.jpg)

M02 · 외부 맥락 주입 · Sources

**공통 파일을 baseline으로, 내 자료는 선택해 더한다**

강사가 제공하는 공통 파일을 먼저 넣고, 자신의 자료는 질문과 권한에 맞을 때 선택합니다. 제목·저자·시점을 함께 기록합니다.

COMMON INSTRUCTOR FILES

공통 근거부터 준비하기

강사 파일로 오늘의 질문 범위를 맞춥니다.

지원되는 PDF·웹페이지·영상을 확인합니다.

OWN MATERIALS · OPTIONAL

내 자료를 목적에 맞춰 더하기

내 과제에 필요한 자료만 고르고, 공유 범위와 확인 조건을 적습니다.

자료 수보다 질문에 답할 수 있는 출처 범위를 먼저 만듭니다.

Google Help, “Notebooks in Gemini Apps” · source support and availability

---

![두 소스의 패턴·대립·빈틈을 함께 찾는다](/_attachments/jnu-generative-ai-day1-22.jpg)

M02 · 외부 맥락 주입 · 비교 질문

**두 소스의 패턴·대립·빈틈을 함께 찾는다**

강사가 연구에서 쓰는 비교 질문을 오늘의 자료에 적용합니다.

비교 축

질문 예시

기록할 것

공통 패턴

두 소스가 반복해서 말하는 개념·방법은 무엇인가?

공통 주장 + 인용 위치

상반된 해석

두 저자의 관점·방법·조건이 어디에서 갈라지는가?

차이 + 적용 조건

관계

한 소스의 개념이 다른 소스의 어떤 문제와 연결되는가?

연결 근거 + 내 해석

빈틈

평가 기준·반례·빠진 자료는 무엇인가?

다음에 확인할 질문

비교 결과는 공통점·대립·빈틈을 인용과 함께 정리한 답변으로 남깁니다.

---

![Sources·Chat·Studio를 한 작업으로 연결한다](/_attachments/jnu-generative-ai-day1-23.jpg)

M02 · 외부 맥락 주입 · UI 흐름

**Sources·Chat·Studio를 한 작업으로 연결한다**

Sources PDF·웹·영상 등 지원되는 자료를 추가하고 제목·출처·시점을 정리합니다.

Chat 선택한 소스에 비교 질문을 던지고, 인용을 클릭해 원문을 확인합니다.

Studio Audio Overview·Mind Map·학습 출력에서 다음에 배울 질문을 고릅니다.

Return 인용 답변·소스 위치·다음 질문을 개인 노트에 기록합니다.

기능을 구경하는 순서보다 수집 → 질문 → 비교 → 검증 → 기록의 학습 루프를 따라갑니다.

---

![답변 하나에서 다음 질문으로 이어 간다](/_attachments/jnu-generative-ai-day1-24.jpg)

M02 · 외부 맥락 주입 · 기록

**답변 하나에서 다음 질문으로 이어 간다**

```text
나의 질문:
내 말로 이해한 답:
근거: 소스 이름 · 링크 · 확인 위치
인용: 확인한 원문 한 문장

비교: 공통점 · 다른 해석 · 빠진 정보
다음에 확인할 질문:
```

이 기록을 다시 열 때

무엇이 궁금했는지 읽고,

근거를 다시 확인하고,

아직 남은 질문에서 시작합니다.

확인한 답변 + 실제 소스 + 다음 질문을 저장합니다. 형식은 자신의 작업에 맞게 고릅니다.

---

![인용 문장을 실제 소스에서 확인한다](/_attachments/jnu-generative-ai-day1-25.jpg)

M02 · 외부 맥락 주입 · 원문 검증

**인용 문장을 실제 소스에서 확인한다**

1

연다

인용을 눌러 소스의 해당 위치로 이동합니다.

2

읽는다

문장 앞뒤의 조건과 저자의 주장을 함께 읽습니다.

3

돌려놓는다

확인한 인용과 다음 질문을 노트에 기록합니다.

인용 클릭은 검증 행동의 시작입니다. 원문에서 확인한 범위만 답변에 남깁니다.

---

![제가 석사 연구에서 쓴 지식 루프](/_attachments/jnu-generative-ai-day1-26.jpg)

M02 · 강사의 연구 사례

**제가 석사 연구에서 쓴 지식 루프**

자료를 모아 구조화하고, Notebook에서 관계와 빈틈을 찾은 뒤, 원문을 확인해 연구 노트로 되돌립니다.

자료가 쌓일수록 이전 질문과 판단의 근거를 다시 찾을 수 있게 연결합니다.

강사 발표 · CMDS PKM Conference 2025 오픈 세미나 · Zotero·Obsidian·NotebookLM 연구 워크플로우

---

![만들고 싶은 것에서 필요한 지식으로 내려간다](/_attachments/jnu-generative-ai-day1-27.jpg)

M02 · 목표에서 출발하는 학습

**만들고 싶은 것에서 필요한 지식으로 내려간다**

Gabriel Petersson은 ChatGPT와 배우는 과정을 설명하며, 목표에서 출발해 모르는 부분을 재귀적으로 묻는 방식을 소개합니다.

목표

만들고 싶은 결과

어떤 일을 가능하게 할까?

→

빈틈

지금 막힌 부분

무엇을 아직 이해하지 못했나?

→

질문과 시도

작게 배워 적용

설명을 묻고 직접 확인한다.

수업 적용: “내가 정한 결과를 만들려면 어떤 개념을 더 알아야 할까?” → 필요한 개념·자료·확인 방법을 하나씩 적습니다.

목표 → 빈틈 → 질문 → 직접 적용을 반복하며 배울 지식을 고릅니다.

Gabriel Petersson interview · 10:11 top-down learning · 14:15–18:12 recursive gap-filling · 인터뷰 내용 요약

---

![인용 답변을 나의 디지털 집으로 가져간다](/_attachments/jnu-generative-ai-day1-28.jpg)

M02 · 외부 맥락 주입 · M03 연결

**인용 답변을 나의 디지털 집으로 가져간다**

오전에는 무엇을 확인할지 정했습니다.

이제 확인한 것을 다시 쓸 자리를 만듭니다.

저장할 것

인용 답변·실제 소스 링크·확인 위치.

이어 갈 것

다음 질문 하나와 지금 작업에 필요한 선택 노트.

M03으로 넘길 것: 인용이 붙은 답변 + 소스 + 다음 질문.

---

![수업 자료와 내 자료를 Notebook에 넣고 큐레이팅한다](/_attachments/jnu-generative-ai-day1-29.jpg)

M02 · 실습 · 나의 자료를 NotebookLM에 올린다

**수업 자료와 내 자료를 Notebook에 넣고 큐레이팅한다**

큐레이팅 기준 · 이 소스가 내 질문에 답하는가 · 같은 주장을 다른 소스는 어떻게 말하는가 · 빠진 자료와 반례는 무엇인가

01 · 공통 파일 강사가 배포한 공통 파일을 내 private Notebook의 Sources에 추가합니다.

02 · 내 자료 지금 과제와 관련된 PDF·웹페이지·영상을 한두 개 고릅니다. 공유해도 되는 자료만 넣습니다.

03 · 정리 소스마다 제목·저자·시점을 확인하고, 질문에 맞지 않는 자료는 뺍니다.

04 · 질문 비교 질문을 하나 던지고 인용 번호를 눌러 원문을 확인합니다.

05 · 기록 인용 답변·소스 위치·다음 질문 하나를 노트에 적습니다.

큐레이팅은 질문에 답할 소스만 남기고 근거를 확인하는 일입니다.

Google Help · Notebooks in Gemini Apps · 지원 소스와 계정 범위

---

![나의 디지털 집을 만든다](/_attachments/jnu-generative-ai-day1-30.jpg)

03

**나의 디지털 집을 만든다**

Markdown 파일과 링크로 생각이 돌아오는 자리를 만든다.

---

![PKM은 생각을 다시 쓰는 구조다](/_attachments/jnu-generative-ai-day1-31.jpg)

M03 · 나의 디지털 집 · WHY

**PKM은 생각을 다시 쓰는 구조다**

NICK MILO

“a home for your best thinking”

좋은 생각이 머물고, 다시 꺼내지는 집.

FILE OVER AI

파일에 남겨 다음 도구로

읽은 자료를 내 말로 정리하고,

다시 쓰고 싶은 생각을 연결합니다.

도구를 바꾸어도 내 파일을 가져갑니다.

개인 지식 관리(PKM)는 이해한 것을 연결하고, 다시 찾아 실제 일에 사용하는 과정입니다.

내 생각을 다시 찾아 실제 과제에 쓰는 힘을 기릅니다.

Nick Milo, The 3-File AI System That Works With ANY MODEL · 0:42 인용 / 한국어는 수업 해석 · 1:11 · File over AI

---

![여러분의 디지털 집은 어디이신가요?](/_attachments/jnu-generative-ai-day1-32.jpg)

M03 · 나의 디지털 집

**여러분의 디지털 집은 어디이신가요?**

도구를 닫은 뒤에도 내 생각과 근거로 돌아올 자리를 만듭니다.

Nick Milo의 “home” 비유에서 착안 · 질문과 집 도식은 수업용 재구성

---

![Notebook에서 확인하고, Obsidian에 정제해 남긴다](/_attachments/jnu-generative-ai-day1-33.jpg)

M03 · 나의 디지털 집 · 지식 순환

**Notebook에서 확인하고, Obsidian에 정제해 남긴다**

같은 Notebook context는 Gemini 앱과 NotebookLM 사이에서 이어집니다. 개인 vault에는 내가 검토한 결정과 근거만 되돌려 놓습니다.

NOTEBOOK · SOURCE WORKSPACE

이번 질문의 근거 범위

선별한 소스와 custom instructions로 질문합니다.

NotebookLM은 notebook sources에 근거를 두고, Gemini 앱은 같은 소스와 웹검색·도구를 함께 쓸 수 있습니다.

OBSIDIAN · PERSONAL SSOT

계속 쓰는 파일

Me.md·MOC·검토한 작업 노트를 남깁니다.

공유 범위는 학생이 직접 선택합니다.

도구 사이의 연결보다 검토한 지식이 내 파일로 돌아오는 경로를 먼저 설계합니다.

Google Help, “Notebooks in Gemini Apps” · sync and shared-notebook restrictions · Google, 2026-04-08 · NotebookLM/Gemini integration

---

![MOC는 나와 AI가 함께 쓰는 지도다](/_attachments/jnu-generative-ai-day1-34.jpg)

M03 · MOC · Map of Content · Nick Milo

**MOC는 나와 AI가 함께 쓰는 지도다**

NICK MILO · 원문

“…when you give it a map, it can navigate. It can figure out which files are actually relevant, isolate those, skip the rest without having to scan everything.”

4:14

“Your maps show the information highways which you or AI can navigate.”

4:46 · The 3-File AI System That Works With ANY MODEL

무엇 Map of Content · 내가 고른 노트를 이유와 함께 묶은 나만의 목차입니다.

나에게 주제로 돌아올 때 어디서부터 읽을지 알려 줍니다.

AI에게 전체를 뒤지지 않고 관련 파일만 찾아 읽게 하는 안내판이 됩니다.

오늘 주제 하나로 링크·선택 이유·다음 질문을 담은 MOC를 만듭니다.

MOC는 나와 AI가 같은 길로 찾아가는 지도입니다.

Nick Milo · 4:14 · 4:46 · 한국어 설명은 수업 해석

---

![실제 MOC는 범위·태도·연결·돌아갈 곳을 담는다](/_attachments/jnu-generative-ai-day1-35.jpg)

M03 · MOC · 강사의 실제 MOC

**실제 MOC는 범위·태도·연결·돌아갈 곳을 담는다**

```text
type: moc
up: "[[📚 102 Topics]]"

> [!info] Scope
> 이 MOC 는 AI/ML **도메인 지식**(머신러닝, 딥러닝, LLM, 프롬프트 엔지니어링) 을 다룬다.
> 소프트웨어 엔지니어 **역할 수행**은 [[📚 901 Programmer]] 에서 다룬다.

> [!notes]
> 생성형 AI 를 대하는 내 태도는 내 부족함을 파악하고 병목을 찾아내는 거다

- ## [[Machine Learning]]
  - [[Supervised Learning]]
- ## [[Generative AI|Generative AI]]
  - ## [[Large Language Model]]
```

MOC의 역할

범위 · 이 목차가 다루는 것과 다른 목차로 보낼 것을 정합니다.

태도 · 이 주제를 대하는 내 기준을 한 줄로 남깁니다.

연결 · 개념을 계층으로 묶어 읽는 순서를 만듭니다.

돌아갈 곳 · up으로 상위 목차에 돌아갑니다.

강사 볼트의 실제 MOC 발췌 · 70. Collections/03 MoC/102.03 AI.md · 일부 항목 생략

MOC는 내가 고른 순서와 이유로 삶의 주제를 엮습니다.

---

![영상 Prompt를 링크·선택 이유·다음 질문으로 묶는다](/_attachments/jnu-generative-ai-day1-36.jpg)

M03 · MOC · 실제 수집 자료로 구성한 수업용 예시

**영상 Prompt를 링크·선택 이유·다음 질문으로 묶는다**

```text
# 영상프롬프트 MOC

- [[Ghibli Motion Elements Viral.prompt|원형 프롬프트]] — 원문과 출처를 확인
- [[Ghibli Motion Wordswap Flying Paper Cinematic.prompt|단어를 바꾼 변형]] — 바꾼 조건과 실제 결과를 대조
- [[Video Generation Prompts.base|수집한 영상 프롬프트 목록]] — 다음 시도 후보

## 다음 질문
- 이미 보관된 날리는 종이와 카메라 조건은 어떤 움직임을 만들었나?
```

MOC가 하는 일

선택의 이유와 돌아올 질문을 남긴다

링크 · 실제 보관 파일로 이동합니다.

이유 · 왜 지금 이 자료를 골랐는지 읽습니다.

다음 질문 · 실제 영상에서 확인할 조건을 남깁니다.

MOC에서 선택한 자료를 열고, 작업 기록에서는 MOC로 돌아오는 링크를 따라갑니다.

구성 자료 · 70. Collections/02 Prompt/Ghibli Motion Elements Viral.prompt.md

70\. Collections/02 Prompt/Ghibli Motion Wordswap Flying Paper Cinematic.prompt.md · 90. Settings/05 Bases/Video Generation Prompts.base

---

![실제 보관 자료를 작업 노트에서 MOC로 되돌린다](/_attachments/jnu-generative-ai-day1-37.jpg)

M03 · MOC · 양방향 연결

**실제 보관 자료를 작업 노트에서 MOC로 되돌린다**

```text
# 단어를 바꾼 영상 프롬프트 작업 기록

프롬프트: [[Ghibli Motion Wordswap Flying Paper Cinematic.prompt|단어를 바꾼 변형]]
결과: assets/ghibli-motion/ghibli-motion-wordswap-flying-paper-cinematic_v1.mp4

확인할 조건:
- 날리는 종이의 움직임
- 카메라 움직임

돌아갈 목차: [[영상프롬프트 MOC]]
```

왕복 경로

MOC → 작업 기록 → MOC

MOC에서 실제 Prompt 노트를 열고, 보관 영상을 확인합니다.

작업 기록의 \[\[영상프롬프트 MOC\]\] 링크로 선택 이유와 다음 질문이 있는 목차에 돌아옵니다.

구분: 실제 보관 Prompt와 MP4를 연결한 수업용 작업 노트 발췌 · 수업용 큐레이션.

양쪽 파일에 링크를 두면 자료를 고른 이유와 실제 결과를 오가며 읽을 수 있습니다.

---

![내가 정한 주제의 MOC를 링크와 이유로 채운다](/_attachments/jnu-generative-ai-day1-38.jpg)

M03 · 나의 디지털 집 · MOC 작성

**내가 정한 주제의 MOC를 링크와 이유로 채운다**

```text
# [내가 정한 주제] MOC

## 지금 작업
- [[내가 정한 작업 노트]] — [목표·성공 조건·다음 행동]
- [[인용 답변]] — [원문 근거와 확인 위치]

## 다음 질문
- [다음에 확인할 질문 한 가지]
```

이름과 경로를 직접 정한다

[내가 정한 주제] MOC.md와 내가 정한 작업 노트.md를 실제 제목으로 바꿉니다.

작업 노트에 MOC로 돌아올 링크를 적고 실제로 열어 봅니다.

작업이 끝나면 MOC로 돌아와 다음 질문을 갱신합니다.

MOC는 복사 가능한 Markdown으로 시작하고, 내가 정한 주제와 파일 이름에 맞춰 자랍니다.

---

![Markdown 한 줄을 쓰고 링크를 확인한다](/_attachments/jnu-generative-ai-day1-39.jpg)

M03 · 나의 디지털 집 · practical Markdown

**Markdown 한 줄을 쓰고 링크를 확인한다**

```text
# 오늘의 작업

## 확인한 근거
- 원문 링크와 확인 위치를 적는다.

## 다음 행동
- [ ] [[내가 정한 작업 노트]]의 next action을 확인한다.
- [ ] [[인용 답변]]의 문장을 다시 읽는다.
```

직접 해 볼 일

- \# 제목을 하나 씁니다.

- \- 목록과 - [] 할 일을 씁니다.

- \[\[노트 이름\]\] 링크를 클릭합니다.

- 읽기 보기에서 저장 결과를 확인합니다.

Markdown은 짧게 쓰고, 링크로 이동하고, 다시 확인하는 실제 작업 언어입니다.

GoBeromsu, 「글쓰기와 AI」 · Markdown 기본 기호

---

![PARA는 네 폴더로 끝나는 간단한 구조다](/_attachments/jnu-generative-ai-day1-40.jpg)

M03 · PARA · 폴더 구조

**PARA는 네 폴더로 끝나는 간단한 구조다**

지금 하는 일과의 관계로 파일의 자리를 정합니다. 새 파일은 네 폴더 중 하나에 넣으면 됩니다.

Projects 끝이 있는 일 · 이번 과제·제작·연구 하나가 폴더 하나

Areas 계속 책임지는 영역 · 학업·건강·동아리처럼 끝이 없는 역할

Resources 관심 주제와 참고 자료 · 나중에 쓸 지식

Archives 끝났거나 멈춘 기록을 옮겨 두는 보관함

파일의 자리가 헷갈리면 “지금 하는 일과 얼마나 가까운가?”만 묻습니다.

Tiago Forte, The PARA Method · 폴더 예시는 수업 적용

---

![템플릿에는 PARA 자리가 이미 있다](/_attachments/jnu-generative-ai-day1-41.jpg)

M03 · PARA · 템플릿의 위치

**템플릿에는 PARA 자리가 이미 있다**

만들 것

공개 템플릿의 위치

역할

Projects

15\. Work/01 Project/[내 과제]/

과제 폴더와 프로젝트 노트

Areas · Archives

15\. Work/02 Area/ · 15. Work/03 Archive/

계속하는 역할 · 끝난 기록

Resources

80\. References/ · 30. Literature Notes/

참고 자료와 읽고 정리한 노트

나만의 목차

Home.md · 볼트 최상위 / 70. Collections/03 MoC/

첫 목차 · 주제별 목차

아직 분류할 자료

00\. Inbox/

검토 전 임시 수집

템플릿의 폴더는 유지합니다. 파일은 한곳에 두고, MOC와 프로젝트 노트에서 링크합니다.

공개 템플릿 배치 가이드

---

![프로젝트 노트는 기록·산출물·일정을 한곳에 잇는다](/_attachments/jnu-generative-ai-day1-42.jpg)

M03 · 프로젝트 노트 · 강사의 실제 허브

**프로젝트 노트는 기록·산출물·일정을 한곳에 잇는다**

```text
type: project
aliases: [Upstage Ambassador, 업스테이지 엠버서더]
date_started: 2026-01-12
date_finished: 2026-08-31
project:
  - "[[만학도]]"

- Way points
  - [[20260723-20260724 DGIST 교육 세션]]
- Timeline
  - [x] 미션 2: [[Upstage solar skill creator 만들어보자]]
  - [[2026 JNU x Upstage Skillthon]]
    - [[2026-05-08]] : [[2026 JNU x Upstage Skillthon 교육]]
## References
- [[2026-07-01 Upstage AI Ambassador 2기]]
```

연결되는 것

위 · project:로 상위 과제에 붙습니다.

아래 · 날짜 기록은 project: "\[\[Upstage AI Ambassador 2기\]\]"로 이 허브를 가리킵니다.

옆 · 산출물·행사·일정 노트를 링크로 모읍니다.

자동 수집 · Base가 이 허브를 가리키는 기록을 표로 모읍니다.

강사 볼트의 실제 허브 발췌 · Upstage AI Ambassador 2기.md · 일부 항목 생략

학생은 15. Work/01 Project/[내 과제]/[내 과제].md를 만들고 기록을 이 허브로 모읍니다.

---

![프로젝트 노트에서 작업의 범위를 정한다](/_attachments/jnu-generative-ai-day1-43.jpg)

M03 · 프로젝트 노트 · 내 과제

**프로젝트 노트에서 작업의 범위를 정한다**

자신의 실제 연구·제작·분석 과제에 맞춰 목표와 파일 경계를 채웁니다.

```text
# [내가 정한 작업] 프로젝트 노트
목표:
완료 기준:
근거: [[인용 답변]] · [실제 소스 또는 자료]
수정할 파일: [실제 파일 경로]
다음 행동: [확인할 질문 또는 작은 작업]
돌아갈 목차: [[Home]]
```

MOC → 프로젝트 → 실행

Home.md에서 이 노트를 연결합니다.

Agent가 읽을 파일과 수정할 파일을 선택합니다.

완료 기준과 다음 행동을 직접 적습니다.

M04에서 Agent에게 이 노트를 건넵니다.

실제 파일 경로와 확인 가능한 완료 기준을 자신의 과제에 맞춰 정합니다.

---

![PARA로 만들고, MOC로 엮고, 프로젝트 노트로 잇는다](/_attachments/jnu-generative-ai-day1-44.jpg)

M03 · 오늘 만드는 디지털 집

**PARA로 만들고, MOC로 엮고, 프로젝트 노트로 잇는다**

01 · PARA

내 프로젝트 폴더

15\. Work/01 Project/[내 과제]에 폴더와 허브 노트를 만듭니다.

→

02 · MOC

나만의 목차

root의 Home.md에 링크·선택 이유·다음 질문을 묶습니다.

→

03 · 프로젝트 노트

작업의 허브

목표·기록·산출물을 연결하고 MOC로 돌아갑니다.

→

04 · Me.md

AI에게 나를 설명

M04에서 씁니다. AI가 나와 일하는 기준이 됩니다.

```text
Home.md                                      ← 첫 목차 · root
Me.md                                        ← M04 · AI가 먼저 읽는 브리핑
70. Collections/03 MoC/[내 주제] MOC.md      ← 주제별 목차
15. Work/01 Project/[내 과제]/[내 과제].md   ← 프로젝트 노트 · 허브
15. Work/01 Project/[내 과제]/2026-09-18 [내 과제].md ← 날짜 기록
```

서로 가리키는 링크

Home.md ↔ 프로젝트 노트 · 날짜 기록 → 프로젝트 노트

Me.md는 Agent가 가장 먼저 읽습니다.

집이 생기면 다음은 AI가 이 집에서 나와 일하게 하는 일입니다.

---

![Agent에게 맥락을 넘긴다](/_attachments/jnu-generative-ai-day1-45.jpg)

04

**Agent에게 맥락을 넘긴다**

같은 폴더를 Antigravity에서 열고, Me.md로 나를 설명하고, Spec으로 작업을 넘겨 변경을 확인한다.

---

![AI가 나와 일하려면 먼저 나를 읽어야 한다](/_attachments/jnu-generative-ai-day1-46.jpg)

M04 · Me.md · 왜 필요한가 · Nick Milo

**AI가 나와 일하려면 먼저 나를 읽어야 한다**

NICK MILO · 원문

“The first map file to create is your me.md, a map for your portable identity.”

“…that's Claude specific. If you switch to a different AI tool next month, that file doesn't go with you. Instead, you're going to create your own me.md, just a markdown file.”

5:38 · The 3-File AI System That Works With ANY MODEL

무엇 내가 누구이고 어떻게 생각하며 어떻게 협업하고 싶은지 적은 브리핑 파일입니다.

왜 Agent는 파일을 읽고 일합니다. 나를 설명한 파일이 있어야 내 기준으로 판단합니다.

어디 볼트 최상위의 Me.md · 도구를 바꿔도 같은 파일을 가져갑니다.

지금 공개 템플릿의 다섯 제목을 읽고, 세 질문으로 초안을 만듭니다.

Me.md는 AI가 나와 일하기 위해 가장 먼저 읽는 파일입니다.

Nick Milo · 5:38 · me.md · 한국어 설명은 수업 해석

---

![나를 설명하는 시작점과 판단 기준을 쓴다](/_attachments/jnu-generative-ai-day1-47.jpg)

M04 · 공개 Me.md 원문 · 1/3

**나를 설명하는 시작점과 판단 기준을 쓴다**

```text
# Me

> 안내: 자신이 누구이고, 어떻게 생각하며, AI와 어떻게 협업하고 싶은지 직접 채우는 빈 브리핑 템플릿입니다. 저장소 규칙은 [AGENTS.md](AGENTS.md)에 있습니다.

## Summary Statement

> 역할: 전체 개요를 전하는 요약입니다. 자신이 누구인지, 현재 관심사와 하고 있는 일을 짧게 적으세요.

## First Principles

> 역할: 중요하게 여기는 가치와 판단 기준을 설명합니다. 선택할 때 지키고 싶은 원칙과 그 이유를 적으세요. 사고 방법의 사용법은 아래 How I Think에 적습니다.
```

학생이 채울 것

요약과 판단 기준

Summary Statement

현재 역할·관심사·하고 있는 일을 짧게 씁니다.

First Principles

선택할 때 지키는 가치와 그 이유를 씁니다.

공개 Me.md 원문 발췌 · YAML 메타데이터 제외 · # Me부터 ## First Principles까지

GoBeromsu · Obsidian-template · Me.md

---

![사고 방식과 AI 협업 선호를 구체화한다](/_attachments/jnu-generative-ai-day1-48.jpg)

M04 · 공개 Me.md 원문 · 2/3

**사고 방식과 AI 협업 선호를 구체화한다**

```text
## How I Think

> 역할: 문제를 이해하고 배우고 판단하는 사고 방식을 설명합니다. 예를 들어 bottom-up(상향식), top-down(하향식), first-principles(제1원리 사고)를 사용한다면 언제, 어떻게 쓰는지 적으세요. 이는 선택 가능한 예시이며 정해진 순서나 반드시 따라야 할 방식이 아닙니다.

## Working Preferences

> 역할: AI가 함께 일할 때 참고할 협업 선호를 설명합니다. 원하는 답변의 길이와 형식, 피드백 방식, 확인이 필요한 상황 등을 적으세요. 저장소 운영 규칙은 AGENTS.md에 둡니다.
```

학생이 채울 것

생각과 협업 방식

How I Think

문제를 이해하고 배우고 판단할 때 실제로 쓰는 방식을 적습니다.

Working Preferences

답변 길이·형식·피드백·확인이 필요한 상황을 적습니다.

공개 Me.md 원문 발췌 · YAML 제외 · ## How I Think–## Working Preferences

GoBeromsu · Obsidian-template · Me.md

---

![영향을 주는 사람은 이름만 기록한다](/_attachments/jnu-generative-ai-day1-49.jpg)

M04 · 공개 Me.md 원문 · 3/3

**영향을 주는 사람은 이름만 기록한다**

```text
## 나에게 영향을 주는 사람

> 역할: 자신에게 영향을 주는 사람을 간단히 보여 주는 목록입니다. 이름만 한 줄에 하나씩 적으세요. 소개, 영향에 대한 설명, 에세이는 쓰지 않습니다.
```

학생이 채울 것

이름만 한 줄에 하나씩

자신에게 실제로 영향을 주는 사람의 이름을 적습니다.

소개·영향 설명·에세이는 이 섹션에 넣지 않습니다.

공개 Me.md 원문 발췌 · YAML 제외 · 마지막 ## 섹션 전체

다섯 ## 제목과 실제 역할 문장을 읽고, 자신이 확인한 내용만 채웁니다.

GoBeromsu · Obsidian-template · Me.md

---

![세 질문에 답한 뒤 Me.md 초안을 검토한다](/_attachments/jnu-generative-ai-day1-50.jpg)

M04 · 나의 디지털 집 · Me.md 인터뷰

**세 질문에 답한 뒤 Me.md 초안을 검토한다**

```text
내가 공유한 Me.md를 읽고, 아래 세 질문만 해 줘.
1. Summary Statement에 적을 현재 역할과 관심 과제는 무엇인가?
2. First Principles와 How I Think에 나눠 적을 판단 기준과 사고 과정은 무엇인가?
3. Working Preferences에 적을 협업 방식과 ‘나에게 영향을 주는 사람’의 이름은 무엇인가?

내 답을 기다린 뒤 초안을 제안해 줘.
기존 다섯 ## 제목과 역할을 유지해.
내가 말하지 않은 신상·가치관·인물은 추측하지 마.
영향을 주는 사람은 내가 제공한 이름만 적어.
확인된 사실과 제안은 구분해 줘.
```

질문 → 답변 → 초안

AI는 정확히 세 가지를 묻습니다.

나는 세 질문에 답합니다.

AI는 답변을 기다린 뒤 초안을 제안합니다.

나는 내 말과 다른 부분을 고쳐 채택한 문장만 저장합니다.

웹 대화에는 선택한 발췌문만 전달합니다.

AI가 질문하고, 내가 의미를 정하고 저장합니다.

---

![내가 제공한 사실과 공유 범위를 확인한다](/_attachments/jnu-generative-ai-day1-51.jpg)

M04 · 나의 디지털 집 · Me.md 검토

**내가 제공한 사실과 공유 범위를 확인한다**

내용 점검

- 다섯 제목의 역할에 맞게 적었나요?

- 내가 실제로 말한 내용인가요?

- 인물은 이름만 적었나요?

- AI의 제안과 내 결정을 구분했나요?

공유 점검

- 이번 작업에 필요한 부분만 고릅니다.

- 민감정보와 타인의 비공개 이야기는 뺍니다.

- 별도의 사람 전용 기록은 공유하지 않습니다.

- 최종 문장은 직접 검토해 저장합니다.

Me.md에는 검토한 나의 브리핑을 남깁니다.

---

![필요한 파일과 보호할 기록을 구분한다](/_attachments/jnu-generative-ai-day1-52.jpg)

M04 · 나의 디지털 집 · 공유 범위

**필요한 파일과 보호할 기록을 구분한다**

선택할 파일

- Me.md에서 검토한 브리핑

- MOC에 연결한 작업·근거 노트

- 실제 인용과 다음 질문

보호할 기록

- 사람 전용으로 지정한 섹션

- 민감정보와 타인의 비공개 이야기

- 이번 작업에 필요 없는 파일

파일 접근 권한과 공유할 내용을 확인하고, AI의 제안은 직접 검토해 저장합니다.

---

![선택한 맥락만 다음 대화에 건넨다](/_attachments/jnu-generative-ai-day1-53.jpg)

M04 · 나의 디지털 집 · 다음 대화

**선택한 맥락만 다음 대화에 건넨다**

나의 기준

Me.md

이번 작업에 필요한

브리핑 발췌문

\+

선택한 근거

MOC 항목

실제 노트의 내용

출처와 연결 이유

→

다음 행동

새 대화

목적과 확인 조건

이어 할 질문 하나

전달 예시

“이 브리핑과 선택한 노트를 바탕으로 다음 행동 하나를 제안해 줘. 확인된 사실과 제안을 구분해 줘.”

웹 대화에는 검토한 내용과 실제 출처를 전달합니다. 개인 볼트의 링크만으로 파일 내용이 전달되지는 않습니다.

---

![Antigravity에서 실제 파일을 연결한다](/_attachments/jnu-generative-ai-day1-54.jpg)

M04 · Antigravity · 로컬 파일과 CLI

**Antigravity에서 실제 파일을 연결한다**

승인한 프로젝트 폴더를 열고, 이번 일에 필요한 Me.md 발췌·MOC·프로젝트 노트의 실제 경로를 지정합니다.

맥락 연결

무엇을 읽었나?

선택한 노트와 작업 규칙을 읽도록 요청합니다. Agent가 확인한 파일과 근거를 대조합니다.

작업과 확인

어디를 바꿨나?

허용한 파일·완료 기준을 정하고, 변경 내역과 실제 결과를 함께 확인합니다.

학생 계정 사전 확인

어떤 CLI를 쓰나?

무료·Google AI Pro/Ultra의 Gemini CLI 경로는 Antigravity CLI로 전환되었습니다.

Standard/Enterprise 및 유료 API 키 경로는 별도 지원 조건을 확인합니다.

파일 연결 → 읽은 근거 확인 → 승인한 작업 → 변경 검토를 한 바퀴 실행합니다.

Google Developers · 2026-05-19 공지 · 개인 계정 전환 2026-06-18 · 실제 로그인·쿼터·지원 범위는 현장 확인

---

![AGENTS.md로 읽기·쓰기의 경계를 알려 준다](/_attachments/jnu-generative-ai-day1-55.jpg)

M04 · 에이전트에게 맥락 넘기기 · 규칙

**AGENTS.md로 읽기·쓰기의 경계를 알려 준다**

```text
1. vault 최상위의 Me.md와 내가 정한 MOC를 먼저 읽는다.
2. 승인한 프로젝트 노트와 지정 파일만 읽고 수정한다.
3. 모르는 내용은 질문하고, 실제 변경 파일을 확인한다.
```

맥락

Me.md·MOC·프로젝트 노트의 실제 경로를 건넵니다.

경계

사람 전용 기록과 비공개 자료는 접근 범위에서 분리합니다.

AGENTS.md는 작업 규칙을 설명하고, 도구 권한은 실제 접근 범위를 통제합니다.

---

![Agent가 읽고, 실행하고, 실제 변경을 함께 확인한다](/_attachments/jnu-generative-ai-day1-56.jpg)

M04 · 에이전트에게 맥락 넘기기 · Spec → Signpost → Loop

**Agent가 읽고, 실행하고, 실제 변경을 함께 확인한다**

Spec Me.md·선택한 노트·작업 목표·성공 조건·소스를 읽고 가장 작은 작업을 정합니다.

Signpost “이 자료에서 확인 가능한 주장과 근거를 연결해 줘. 모르는 내용은 질문으로 남겨 줘.”

Loop Agent가 승인한 파일을 수정한 뒤, diff·변경 파일·성공 조건을 사람이 확인하고 다음 요청을 정합니다.

Agent reads

Me.md + MOC에서 선택한 노트 + 실제 연구·제작 파일.

사람이 checks

실제 변경 파일·근거·권한·성공 조건을 하나씩 확인합니다.

파일을 언급한 것과 실제로 읽고 바뀐 결과를 구분합니다.

---

![낯선 용어를 쉽게 만든다](/_attachments/jnu-generative-ai-day1-57.jpg)

05

**낯선 용어를 쉽게 만든다**

쪼개고, 정의를 찾고, 연결해 내 말로 요약한다. 용어를 알면 요청이 견고해진다.

---

![낯선 용어는 다섯 단계로 쉽게 만든다](/_attachments/jnu-generative-ai-day1-58.jpg)

M05 · 낯선 용어를 만났을 때 · 강사의 접근

**낯선 용어는 다섯 단계로 쉽게 만든다**

새 자료를 받거나 새 질문을 품을 때마다 모르는 말이 나옵니다. 외우기보다 접근하는 순서를 정해 둡니다.

01 · 쪼갠다 약어·이름·수식어를 나누고 각 조각이 무엇을 가리키는지 묻습니다.

02 · 정의와 전제 용어 노트·원문·공식 문서에서 정의와 그 용어가 전제하는 것을 찾습니다.

03 · 아는 것과 연결 이미 있는 노트·MOC에서 비슷한 개념을 찾아 같은 점과 다른 점을 적습니다.

04 · 내 말로 요약 한 문장으로 다시 쓰고 예시 하나로 확인합니다.

05 · 질문을 남긴다 아직 모르는 부분을 다음 질문으로 노트에 적습니다.

낯선 말은 쪼개고 → 찾고 → 연결하고 → 요약하고 → 질문으로 내 지식이 됩니다.

---

![최근 공동연구에서 낯선 약어를 만났을 때](/_attachments/jnu-generative-ai-day1-59.jpg)

M05 · 사례 1 · 남이 만든 자료의 낯선 용어

**최근 공동연구에서 낯선 약어를 만났을 때**

상황 · 강사 회고

결과표보다 먼저 막힌 것

동료가 보낸 분석 파일에 처음 보는 약어와 모델 이름이 있었습니다.

표를 읽기 전에 그 말들이 무엇을 가리키는지부터 알아야 했습니다.

접근 · 같은 다섯 단계

쪼갠다 · 약어 하나, 모델 이름 하나씩 분리

정의와 전제 · 용어 노트와 원문에서 무엇을 재고 무엇을 가정하는지 확인

연결 · 이미 알던 개념과 같은 점·다른 점

내 말로 · 각 용어를 한 문장으로

질문 · 동료에게 물을 질문 목록

낯선 말을 쪼개어 정의를 찾으면 물어볼 질문이 생깁니다.

강사의 최근 공동연구 회고 · 범위: 낯선 용어에 접근한 과정

---

![정의가 있는 용어와 정의가 없는 질문, 같은 길로 푼다](/_attachments/jnu-generative-ai-day1-60.jpg)

M05 · 두 사례의 공통 구조

**정의가 있는 용어와 정의가 없는 질문, 같은 길로 푼다**

사례 1 · 정의가 있는 용어

남이 만든 자료 속 낯선 말

쪼개고 정의를 찾아 내 말로 요약합니다.

결과: 물어볼 질문 목록

사례 2 · 정의가 없는 질문

내 안의 모호한 문제

대화로 관점을 넓히고 한 문장으로 요약합니다.

결과: 내 판단이 담긴 문장

공통점

둘 다 쪼개기 → 찾기 → 연결 → 요약 → 다음 질문을 거치고, 마지막 판단은 사람이 합니다.

낯선 용어든 모호한 질문이든 같은 접근으로 쉽게 만듭니다.

---

![도메인 용어가 답을 안정시킨다](/_attachments/jnu-generative-ai-day1-61.jpg)

M05 · 도메인 용어의 힘 · ACL 2026 Findings

**도메인 용어가 답을 안정시킨다**

논문 · Xie et al., 2026

안정적인 프롬프트의 두 기둥

Domain-Specific Terminology · 의미의 경계를 고정하는 닻

Explicit Action Directives · 수행 순서를 명시하는 닻

132,000개 프롬프트 변형 분석 · 평균 성능이 높은 프롬프트일수록 변동이 작았습니다(R² 0.70). 코드·글쓰기·수학 지시와 LLM 평가 기준의 결과입니다.

논문의 예시 · 코드 작성

같은 뜻, 다른 안정성

“Check the inputs” → 자료형인지 논리인지 해석이 갈립니다.

“Validate function parameters” → 표준 프로그래밍 맥락으로 고정됩니다.

용어가 모델의 해석 범위를 좁혀 결과를 잠급니다.

그래서 공부합니다

내 분야의 용어로 요청하면 같은 질문에 같은 답이 돌아옵니다. 같은 질문에 매번 답이 다르면 신뢰할 수 없고, 견고하면 시스템이 됩니다. 용어는 AI로 내 전문성을 증폭하는 열쇠입니다.

“만들어 줘”에서 내 분야의 용어와 명시적 지시로 요청을 바꿉니다.

Xie et al., “Beyond Prompt Engineering: A Systematic Analysis of Prompt Lexical Sensitivity and Its Impacts on Quality”, Findings of ACL 2026

---

![정의는 소스에 근거해 묻고, 비교는 열린 도구로 넓힌다](/_attachments/jnu-generative-ai-day1-62.jpg)

M05 · 낯선 용어를 AI에게 물을 때

**정의는 소스에 근거해 묻고, 비교는 열린 도구로 넓힌다**

NOTEBOOKLM

정의와 전제를 소스에서 찾기

용어 노트·원문을 넣고 “이 용어의 정의와 전제는?”을 묻습니다.

인용 번호를 눌러 원문을 확인합니다.

GEMINI

비교와 예시로 넓히기

같은 Notebook 소스와 웹·도구로 비슷한 개념과 예시를 비교합니다.

기존 소스와 추가 근거를 구분합니다.

이름·소스·custom instructions는 문서화된 범위에서 동기화됩니다. 공유 Notebook은 Gemini에 나타나지 않습니다.

AI는 찾고 설명하고 비교하며, 사람은 내 말로 요약하고 질문을 남깁니다.

Google Help · Notebooks in Gemini Apps · Google, 2026-04-08

---

![쉽게 만든 용어는 노트로 남아 다음에 빨리 찾는다](/_attachments/jnu-generative-ai-day1-63.jpg)

M05 · 남길 것 · 낯선 용어 노트 한 장

**쉽게 만든 용어는 노트로 남아 다음에 빨리 찾는다**

```text
# [낯선 용어]

쪼갠 조각:
정의 · 전제 (출처):
이미 아는 것과의 차이:
내 말로 한 문장:
예시 하나:
다음 질문:
돌아갈 목차: [[Home]]
```

오늘 하나만 만든다

오늘 자료에서 낯선 용어 하나를 고릅니다.

Notebook·Gemini에서 정의와 전제를 찾고 내 말로 한 문장을 씁니다.

MOC에 링크해 다음에 같은 말을 만나면 바로 엽니다.

용어 노트가 쌓일수록 새 자료를 읽는 시간이 줄어듭니다.

---

![프롬프트 하나를 다시 쓸 자산으로 만든다](/_attachments/jnu-generative-ai-day1-64.jpg)

M05 · 영상 프롬프트 수집 시연

**프롬프트 하나를 다시 쓸 자산으로 만든다**

2026-09-17에 모은 영상 프롬프트 35개를 Obsidian Bases에서 찾고, 원문과 변형을 연결합니다.

실제 보관 사례

Ghibli Motion Elements Viral

출처: OmidZamani의 GitHub 컬렉션

보관: 원문 · 저자 · URL · 설명

연결: 원형 프롬프트와 단어를 바꾼 변형

목록: Video Generation Prompts.base

다시 찾을 수 있는 구조

원문 → 나의 선택 → 실험

어떤 움직임이 마음에 들었나?

내 영상에서는 무엇을 바꿀까?

실제 결과는 의도와 얼마나 같았나?

출처와 선택 이유를 보관하고, 직접 시험한 결과를 같은 흐름에 덧붙입니다.

OmidZamani · 원본 컬렉션. 수업에서는 움직임·구도 요소를 골라 새 장면에 적용.

---

![같은 프롬프트를 직접 넣고 결과를 비교한다](/_attachments/jnu-generative-ai-day1-65.jpg)

M05 · Gemini 영상 만들기 · 학생 실습

**같은 프롬프트를 직접 넣고 결과를 비교한다**

gemini.google.com 열기 → 사이드바의 동영상 만들기 → 프롬프트 붙여넣기 → 제출/생성 → 결과 비교

```text
Create a cinematic video in Ghibli animation style, adding subtle motion elements like papers flying through the breeze, clothing that appears to ripple slightly in the wind, and the illusion of cinematic camera drift. A young person stands in a sunlit meadow. Enhance it with the hand-drawn, frame-by-frame quality of Ghibli.
```

직접 실행

생성한 뒤 세 가지를 본다

종이와 옷의 움직임

카메라가 흐르는 느낌

손으로 그린 듯한 장면 표현

이 프롬프트의 용어 · cinematic camera drift · ripple · frame-by-frame. 영상 용어가 결과의 범위를 정합니다.

Gemini 열기공식 도움말

개인 Google AI 요금제 또는 지원되는 Workspace 계정 · 만 18세 이상 · 로그인 필요 · 생성 한도는 계정별 확인 · 사용 불가하면 강사 결과로 비교

강사 결과 범위: 앞서 보관한 10초 클립은 2026-09-17의 단어 바꾸기 변형 결과입니다. 이 실습 프롬프트는 직접 입력하고 비교합니다.

---

![한 요소를 바꾸고, 결과를 비교해 남긴다](/_attachments/jnu-generative-ai-day1-66.jpg)

M05 · 영상 실습 · 나의 변형

**한 요소를 바꾸고, 결과를 비교해 남긴다**

```text
장면: 창가의 책상 위에 놓인 종이 풍경
움직임: 바람에 종이 잎이 천천히 흔들린다
카메라: 고정된 중간 거리
빛: 부드러운 아침빛
길이: 도구에서 지원하는 짧은 클립
제약: 인물·로고·문자 없이 구성
비교: A는 고정 카메라, B는 천천히 전진
```

프로젝트 노트에 남길 네 줄

선택 이유: 무엇을 표현하려 했나

입력: 바꾼 요소와 생성 조건

관찰: 실제로 어떻게 움직였나

다음 시도: 유지할 것과 바꿀 것

지원되는 영상 도구에서 직접 실행합니다. 접근이 막히면 스토리보드와 예상 비교 기준을 기록합니다.

---

![딸깍으로 다 되는 세상에서](/_attachments/jnu-generative-ai-day1-67.jpg)

M05 · 능력의 증폭 · 전문가의 판단

**딸깍으로 다 되는 세상에서**

우리는 무엇이 달라야 할까요?

Senior AI Lab의 비전공자 제작 사례와 Ghibli 스타일 영상 실습은 같은 질문으로 이어집니다. AI가 제작을 맡을 때 나는 무엇을 더 잘해야 할까요? 답의 절반은 내 분야의 용어에 있습니다.

DIRECTION

방향을 정한다

누구에게 무엇을 전할지, 어떤 장면과 움직임이 필요한지 정합니다.

GUIDANCE

더 잘 가이드한다

결과를 보고 의도를 더 분명하게 설명하며 다음 시도를 조정합니다.

EXPERT JUDGMENT

전문가로 판단한다

내용·표현·근거·공개 여부를 검토하고 최종 결정을 내립니다.

원하는 방향을 제시하면 AI가 제작을 맡습니다. 나는 증폭된 능력으로 더 잘 가이드하고 더 좋은 의사결정을 하는 전문가가 됩니다.

---

![AI 시대에 사람은 무엇이 다를까요?](/_attachments/jnu-generative-ai-day1-68.jpg)

M05 · AI 시대에 사람이 다른 것

**AI 시대에 사람은 무엇이 다를까요?**

요약하는 힘

긴 것을 한 문장으로 줄인다

자료·대화·결과에서 무엇을 남기고 무엇을 버릴지 정합니다.

사례 2 · 한 시간 가까운 토론이 한 문장으로 남았습니다.

모호한 문제를 푸는 힘

정의가 없는 질문을 물을 수 있는 모양으로 바꾼다

낯선 자료와 막연한 고민을 쪼개어 확인할 질문으로 만듭니다.

사례 1 · 낯선 약어가 물어볼 질문 목록이 되었습니다.

질문을 정했다

무엇을 모르는지, 무엇이 고민인지를 먼저 말로 바꿨습니다.

한 문장으로 줄였다

찾고 토론한 내용을 다시 쓸 수 있는 크기로 만들었습니다.

마지막 판단을 내렸다

AI가 제안한 것 중 무엇을 받아들일지 사람이 결정했습니다.

도구가 답을 빨리 만들수록 무엇을 물을지 정하고 한 문장으로 요약하는 사람이 다릅니다.

---

![오늘의 네 묶음을 목적과 근거로 점검한다](/_attachments/jnu-generative-ai-day1-69.jpg)

WRAP-UP · 산출물 점검

**오늘의 네 묶음을 목적과 근거로 점검한다**

01 · 근거

인용 답변

질문의 변화·인용·확인한 소스·다음 질문.

02 · 나의 맥락

Me.md · MOC

나를 설명하는 기준과 선택한 노트로 가는 경로.

03 · 작업 지시

AGENTS.md · Spec

허용한 일·완료 기준·확인할 변경 파일.

04 · 활용할 지식

낯선 용어 노트

쪼개기·정의·연결·내 말 요약·다음 질문.

빠진 것은 다음 질문으로 표시하고, 결과는 실제 파일과 함께 확인합니다.

---

![내일 검증할 결과 한 건을 가져온다](/_attachments/jnu-generative-ai-day1-70.jpg)

WRAP-UP · 산출물 점검

**내일 검증할 결과 한 건을 가져온다**

완성도보다

검증할 대상이 필요합니다.

그대로 가져올 것

노트북 · 저장한 지식 노트 · 결과 한 건.

지금 적어 둘 것

의미·조건·근거를 가장 먼저 확인할 질문 하나.

질문을 나누고 마칩니다. 2일차에는 검증 → 저장 → MOC 귀환 → 다음 작업을 이어 갑니다.
