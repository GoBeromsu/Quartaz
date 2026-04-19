---
title: Upstage solar skill creator 만들어보자
permalink: upstage-solar-skill-creator
date_created: 2026-04-19
date_modified: 2026-04-19
description: Upstage API 를 활용하는 학부생용 solar-skill-creator 를 만들며 배운 agent skill 설계 원칙과 시행착오 기록
tags:
  - agent-skill
  - ai
  - upstage
---

## Introduction

2026 JNU x Upstage Skillthon 를 열게 되면서 학부생들이 skill 을 쉽게 만들 수 있도록 skill-creator 를 만들었습니다. Upstage API 를 이용한 skill 을 만들도록 보조하는 것이지요. 오늘은 이 삽질을 하면서 배운 점을 기술하고자 합니다.

최근 에이전트에서 사용하는 skill 이 무엇인지부터 먼저 시작을 하였습니다. 기존의 프롬프트와 다른 것은 무엇일까입니다. 2-3 년 전을 돌아보면 prompt 를 복사해서 ChatGPT 에 붙여넣고 있었는데, skill 은 프롬프트 복사 붙여넣기를 간편하게 만들어주는 도구일까라는 의문이었습니다.

## What is Skill

[Agent Skills 공식 docs](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) 를 읽어보니 핵심은 Lazy Loading 이었습니다. 본질적으로 현행 agent 내부의 LLM 은 context window 의 제약을 받고 있습니다. 따라서 context window 라는 기억 자산을 효과적으로 사용해야 합니다. 이미 충분히 똑똑한 모델이란 가정 아래에서 똑똑한 친구가 일을 잘하게 하려면, 필요할 때 필요한 도구를 탁 가져와서 필요할 때만 알면 됩니다. 이를 위해서 skill standard 는 name 과 description 을 YAML 로 가지고 있습니다. 처음에 모델이 로딩이 되면 컨텍스트 윈도우에 skill 의 이름과 description 이 로딩이 됩니다.

즉 agent 는 필요할 때에만 SKILL.md 의 body 부분을 가지고 와서 읽게 되는 것입니다. 이를 통해서 컨텍스트를 아끼는 것입니다.

또한 name 과 description 을 앞쪽 고정 위치에 배치하는 것은 KV-cache 측면에서도 유리합니다. LLM API 는 프롬프트의 앞부분 (prefix) 이 이전 요청과 동일하면 K/V 벡터 계산을 재사용합니다. Anthropic Claude 기준 [prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching) 이 히트하면 비용이 약 1/10 수준으로 줄어드는데, skill 의 name+description 이 매 turn 마다 같은 위치에 고정되어 있으면 이 prefix 가 안정화되어 캐시 히트율이 높아집니다. 이는 [Manus 팀](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns.html) 이 프로덕션 에이전트의 가장 중요한 단일 메트릭으로 [KV-cache hit rate](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus) 를 꼽은 이유이기도 합니다. 게다가 현행 skill 은 nested folder 아래에 reference, asset 등도 넣을 수 있도록 합니다. 즉 procedural 접근으로 컨텍스트를 아끼는 극한의 기술이라는 생각이 듭니다.

이렇게 보니 lazy loading, caching 을 보면 computer science 철학이 녹아들어가 있습니다.

Skill 은 즉 모델에게 어떤 도구가 있다고 알려주는 하나의 스킬 셋입니다.

그렇다면 좋은 skill 은 무엇일까요? Anthropic 에서는 이를 위한 [best practice](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices) 를 공유하고 있습니다. 좋은 스킬은 우리의 똑똑한 모델이 모를 것을 알려주는 것입니다. 우리 팀만의 절차, 암묵지라 불리는 domain expertise, 아니면 모델이 트레이닝 이후에 나온 최신 데이터, 그리고 이미 알지만 순서가 있고 반복되는 workflow 등이 있겠습니다.

PDF 를 markdown 으로 바꾸기 위해서 "PDF 를 마크다운으로 바꿔줘 " 하면 바꿔줄 것인데, 맘에 안 들 것입니다. 예를 들어 " 마크다운으로 바꿔줘 " 에는 괄호 안의 맥락 (markdown 은 탑다운이니까, 책 구석탱이에 있는 이모지 등은 형식이 바뀌며 의미가 없어지니까 지워야 해) 등이 생략된 채 알려주면 사라지는 것입니다. 책은 종류가 왕 많습니다. 이런 모호함을 skill 이 cover 를 쳐줘야 하는 것입니다.

Anthropic 문서에서 자주 보이는 문장이 있습니다. " 단순하게 시작해라 " 입니다. 스킬도 동일합니다. 처음에 SKILL.md 로 시작해서 절차가 복잡해지기 시작하면, 이제 확장을 하는 것입니다. 레퍼런스를 넣고 form 을 넣는 것이죠.

마지막으로 feedback loop 를 넣는 것입니다. input → processing → output 에서 기대하는 결과물이 무엇인지 적는 것이죠.

## How I Made Skill

처음에는 Anthropic 의 질 좋은 skill-creator 를 가져다가 Upstage API 를 얹으면 될 것이라고 생각했습니다. 좋은 skill-creator 에 API 를 알려주면 잘해주지 않을까. 그럴 수 있겠지만 문제는 제가 skill-creator 를 만든 사람이 아니라는 것입니다. 또한 Anthropic 의 스킬은 Claude 에 최적화되어 있는데, 만약 Codex 를 쓰는 학부생이 이 스킬을 가져다가 사용하면 cowork 가 무엇인지도 모르는데 스킬에 불필요한 컨텍스트를 넣어야 하는 문제 등이 생기게 되는 것이죠.

Skill-creator 를 시작으로 하나씩 읽으면서 프롬프트를 걷어내려갔습니다. 원본 skill-creator 는 " 작성 → 평가 → 개선 " 루프를 돌리며 skill 을 점진적으로 강화하기 위해 evaluation 로직을 크게 가지고 있습니다. 그런데 제가 이번에 만들려는 solar-skill-creator 의 스코프는 " 학부생이 Upstage API 로 동작하는 skill 을 일단 만들 수 있게 " 까지입니다. 점진적 강화는 사용자의 몫으로 남겨두기로 했습니다.

대신 결과물이 올바른지는 skill format (folder 구조, SKILL.md frontmatter 형식, reference/asset 배치 규칙) 을 skill 안에 녹여두는 것으로 대체했습니다. 포맷 자체가 " 이 결과물이 valid 한 skill 인가 " 를 검증하는 verification 역할을 하는 셈이죠. 그래서 evaluation 로직은 걷어내고 create 부터 시작하고, asset 과 script 는 날려버렸습니다. Claude 를 agent 로 바꾸어서 예시로 (Codex, Claude) 등으로 바꾸었습니다.

또한 Upstage API docs 를 하나씩 읽어보았습니다. 읽다보니 각 API 를 쓸 때 어떤 format 을 지원하는지, PDF 를 처리할 때 DPI 는 어느 정도여야 하는지, sync 와 async 의 차이가 무엇인지, 그리고 tip 은 무엇인지 등이 적혀있었습니다. API format 그리고 PDF 크기가 클 때는 자르는 게 좋다 등의 정보들 말이죠.

Docs 를 읽고 나니 chat, parse, extract, classify, embed 등의 멘탈 모델이 보여서, 이를 기준으로 reference 에 API 별 reference 를 넣었습니다.

API 를 사용하는 skill 인 만큼 env 를 둬서 hard code 된 script 를 사용하지 않고 환경 변수를 사용하게 하고 말이죠.

결과적으로 나온 solar-skill-creator 초안은 best practice 처럼 제 의도가 담기게 됩니다.

- Security 를 위한 환경 변수로 API key 를 넣고
- API format example 을 code block 으로 제시함으로써 어떻게 API 요청을 해야 할지를 알려주고
- 각 API 단위로 reference 를 분리해서 모델이 필요한 API 정보만 로딩해서 사용하도록 하라
- 각 API 별 지원하는 format 과 제약 등을 알려준다
- 현행 agent skill format 을 따라서 스킬을 생성하도록 하라
- Skill creator 의 레퍼런스 노트가 outdated 될 수 있으니, 에러가 발생하면 machine readable Upstage API docs 를 읽어라

## 마치며

결과적으로 JNU 해커톤에 사용될 solar-skill-creator 를 만들었습니다. Dogfooding 중이어서 쓰다보니 여러 문제가 발생함을 봅니다. 가지고 있는 책을 PDF 로 변환을 하는데 이모지를 이미지로 추출해서 추가해버리는데, markdown 특성상 이모지 자체로는 의미가 없어져 지워야 한다는 제 개인의 맥락이 추가됨을 봅니다. 이를 해결하고, 처리된 PDF 의 markdown 은 줄바꿈이 끊겨있는데, Upstage 에서 자체 제공하는 Solar 를 사용해서 줄바꿈 교정과 불필요한 이미지들을 정리하도록 하고 말이죠.

이를 토대로 225 페이지의 책을 markdown 으로 단시간 내에 처리할 수 있었습니다. Skill-creator 를 토대로 PDF 를 청킹해서 쪼개고 이대로 배치를 돌려서 마크다운으로 만들어내더라구요.

해커톤이 진행 중이어서 앞으로 고려하고 수정해야 할 점이 많을 것이라 예상이 되지만 즐겁습니다. 감사합니다.
## References
- [Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [Agent Skills best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)
- [Anthropic prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching)
- [Context Engineering for AI Agents: Lessons from Building Manus](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)
- [프롬프트에서 하네스까지 — AI 에이전틱 패턴 4년의 기록](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns.html)