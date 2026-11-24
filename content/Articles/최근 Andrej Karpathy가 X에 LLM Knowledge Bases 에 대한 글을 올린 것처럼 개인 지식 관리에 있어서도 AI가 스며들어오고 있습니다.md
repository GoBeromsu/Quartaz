---
aliases: []
date_created: 2026-04-09
date_modified: 2026-04-09
permalink: open-connections-llm-knowledge-bases
tags:
  - obsidian
  - obsidian-plugin
  - pkm
  - ai
  - upstage
title: "최근 Andrej Karpathy가 X에 LLM Knowledge Bases 에 대한 글을 올린 것처럼 개인 지식 관리에 있어서도 AI가 스며들어오고 있습니다"
---

최근 Andrej Karpathy가 X에 LLM Knowledge Bases 에 대한 글을 올린 것처럼 개인 지식 관리에 있어서도 AI가 스며들어오고 있습니다

이 흐름에 맞춰 저는 Obsidian 플러그인인 Open Connections를 개발하고 있습니다. 노트를 임베딩하여 현재 열려 있는 노트와 관련된 다른 노트들을 추천하거나, 질의 기반으로 연결된 맥락을 탐색할 수 있도록 돕는 도구입니다.

AI가 개인의 고유한 사고를 대체하는 것은 경계해야 하지만, 경험을 증폭하는 도구로서 활용하는 것은 분명 의미가 있습니다. 특히, 빠르게 맥락을 회수하는 방법으로 임베딩은 매우 효과적이라고 판단했습니다. 예를 들어, Andrew Ng 교수님의 강의 노트를 열면, 제가 축적해온 관련 노트들이 함께 떠오르는 식입니다.

이러한 경험을 가능하게 하기 위해 만든 플러그인이며, 현재는 Upstage의 embedding API를 사용하고 있고, 만족스럽게 활용하고 있습니다. (한국어 잘합니다...! 최고)

또한 Upstage ambassador 2기로 활동 중이라,  
레퍼럴 코드 UPWAVE-KOH를 입력하시면 약 70달러 크레딧을 받을 수 있습니다.

관심 있으시면 사용해보셔도 좋을 듯 합니다 :)  
\---  
기존에 Smart Connections라는 플러그인이 있었는데, v4로 넘어가면서 기존에 사용하던 모델을 더 이상 쓸 수 없게 되었습니다. 그래서 MIT 라이선스 레포와 흩어져 있던 의존성들을 모아 재구성하기 시작했고, 그 과정에서 Open Connections가 만들어졌습니다.

이왕 하는 거 제대로 만들어보고 싶어서 이것저것 성능 개선을 시도했습니다. Claude Code랑 하면 금방 끝날 줄 알았는데, 생각보다 삽질을 많이 했습니다. 로컬 모델에서는 transformer v3로 시작해서 WebWorker, WASM, WebGPU까지 건드리며 임베딩 가속을 시도했고, 동시에 UI 프리징을 막기 위해 간단한 heuristic도 직접 구현해봤습니다.

구조적인 고민도 계속 따라왔습니다. file over app, 즉 로컬에 데이터가 남는 구조를 유지하는 게 핵심인데, 임베딩을 Obsidian 플러그인 내부에 두는 게 맞는지, 아니면 외부 CLI로 분리해서 wrapper 형태로 가져가는 게 맞는지 계속 고민했습니다. Shopify의 Tobi가 만든 qmd도 참고했는데, qmd wrapper로 가면 되지 않을까 싶다가도 qmd의 로컬 모델들이 충분히 한국어를 이해하지 못한다 생각했습니다. Obsidian 내부 로직을 우회하면서까지 구현하는 건 아닌 것 같아서, 중간에 한 번 전체를 갈아엎기도 했습니다.

상용 API로 넘어오면서도 문제가 있었습니다. Upstage API로 임베딩을 돌리다가 갑자기 멈춰서 확인해보니, 한 번에 너무 많은 요청을 보내서 rate limit에 걸린 상황이었습니다. 이걸 계기로 에러 확인 로직을 추가했고, 배치로 임베딩을 나눠 처리하는 방식도 적용해봤습니다.

coding agent와 같이 구현하다 보니, 어렵게 만든 embedding pipeline을 쉽게 날리고 싶지 않았습니다. 그래서 Karpathy의 autoresearch 개념을 가져와 Obsidian CLI에 붙이고, runtime에서 바로 디버깅하면서 에러를 수정하는 구조를 만들었습니다. OpenAI의 Harness engineering 글을 보고 방향을 잡았고, Yeachan Heo님의 omx도 같이 사용해봤습니다.

결과적으로 느낀 것은 “재미있다” 그리고 “이게 되네?” 입니다.

임베딩 파이프라인 튜닝을 위해 코드 작성 → 테스트 통과 → runtime 인증을 Obsidian CLI로 진행하도록 구성했고, 실패 시에는 autoresearch처럼 다시 돌아오게 만들었습니다. 그렇게 해두니 Claude Code가 혼자 돌아가면서 pipeline 병목 지점을 탐지하고 해결하는 흐름이 만들어졌습니다.

그 과정에서 자연스럽게 기술적인 트레이드오프가 드러났고, 거기서부터 다시 토론을 시작했습니다. 제 옵시디언 볼트처럼 노트가 15,000개를 넘어가는 상황이 흔한 케이스는 아닐 것 같아 heuristic을 넣지 않는 게 맞는지 고민해보기도 했고, SQLite를 쓰면서도 왜 better-sqlite로 넘어가지 않는지 같은 부분도 계속 논의했습니다. 이 과정을 통해 만들어가는 것이 즐거웠습니다.

![](/_attachments/linkedin-7447675455962529792-01.jpg)

![](/_attachments/linkedin-7447675455962529792-02.jpg)

---

*2026-04-09에 [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7447675455962529792/)에 쓴 글을 옮겼습니다.*

관련: [[Open Connections]] · [[QMD Search]]
