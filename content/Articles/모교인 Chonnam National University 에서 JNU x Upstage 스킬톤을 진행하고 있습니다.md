---
aliases: []
date_created: 2026-04-19
date_modified: 2026-04-19
permalink: jnu-upstage-skillthon-solar-skill-creator
tags:
  - upstage
  - agent-skill
  - ai
title: "모교인 Chonnam National University 에서 JNU x Upstage 스킬톤을 진행하고 있습니다."
---

모교인 Chonnam National University 에서 JNU x Upstage 스킬톤을 진행하고 있습니다.

이번 스킬톤은 Upstage API를 활용해 일상의 문제를 해결하는 스킬을 만드는 행사입니다. 학부생분들이 스킬을 더 쉽게 만들 수 있도록 solar-skill-creator를 만들었고, 그 과정에서 배운 점을 정리해보았습니다.

저는 요즘의 흐름을 prompt engineering → context engineering → harness engineering으로 이해하고 있습니다. 각자만의 스킬을 만들어 사용할 수 있다는 점은, 이 시대의 꽤 큰 축복이라고 느낍니다. 최근 등장하는 여러 K-skill 사례들을 봐도 정말 흥미롭습니다.

2\~3년 전만 해도 우리는 ChatGPT에 프롬프트를 복사해 붙여 넣고, 원하는 형태의 답을 만들어냈습니다. 반면 지금은 Claude Code 같은 환경에서 이를 스킬 형태로 호출합니다. 반복적으로 사용하는 템플릿이라는 점에서는 비슷해 보이기에, 문득 이런 생각이 들었습니다.

프롬프트를 복붙하는 것과 스킬을 호출하는 것의 본질적인 차이는 무엇일까?

이 질문에 대한 답은 Anthropic의 Agent Skills 공식 문서와 Jonas Kim 님의 아티클을 읽으면서 조금 더 선명해졌습니다. 핵심은 컨텍스트 윈도우의 제약에 있었습니다. 현재의 에이전트는 결국 제한된 context window 안에서 작동하기 때문에, 어떤 정보를 언제 넣을지를 효율적으로 관리해야 합니다.

스킬은 이 점에서 잘 설계되어 있습니다. 스킬의 name과 description 정도만 시스템 프롬프트와 함께 유지하다가, 실제로 필요할 때만 해당 스킬의 내용을 불러옵니다. 즉, 평소에는 최소한의 정보만 들고 있다가 필요할 때만 본문을 읽는 lazy loading에 가깝습니다. 필요한 순간에 필요한 도구를 호출할 수 있을 정도의 정보만 유지한다는 점이 인상적이었습니다.

또 이런 식으로 기본 정보가 미리 고정되어 있으면, 스킬 관련 정보가 자주 바뀌지 않기 때문에 KV-cache를 비교적 안정적으로 활용할 수 있고, 그만큼 프롬프트 계산 비용도 줄일 수 있습니다.

실제 스킬 구조도 이 원칙을 따릅니다. 먼저 SKILL.md를 읽고, 필요에 따라 reference나 asset을 추가로 불러옵니다. 캐싱이나 lazy loading 같은 컴퓨터과학의 익숙한 개념들이, 빠르게 변하는 에이전트 시대에서도 여전히 중요한 원리로 작동하고 있다는 점이 흥미로웠습니다.

이후 solar-skill-creator를 만들면서 Upstage API 문서도 더 차분히 읽어보게 되었습니다. 이미 충분히 똑똑한 에이전트에게는, 오히려 에이전트가 모를 수 있는 지식과 실행 맥락을 정확히 넣어주는 일이 중요합니다. 그래서 단순히 API 문서 URL만 주고 “만들어줘”라고 해서 끝나는 문제는 아니었습니다.

문서를 읽으면서 특히 좋았던 점은, Upstage API 문서가 agent-friendly하게 구성되어 있다는 점이었습니다. 또한, 각 API별 팁이나 주의사항이 잘 녹아 있어서, 단순한 레퍼런스를 넘어서 실제 스킬을 만드는 관점에서도 꽤 즐겁게 읽을 수 있었습니다.

자세한 내용은 블로그 글에서 정리하였습니다

https://lnkd.in/gsf3J8Ec

---

*2026-04-19에 [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7451604503692468224/)에 쓴 글을 옮겼습니다.*
