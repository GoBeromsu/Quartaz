---
aliases:
  - Agent Driven Development
  - 에이전트 주도 개발
date_created: 2026-04-10
date_modified: 2026-04-10
moc: "[[📚 801 Blog]]"
status: inprogress
tags:
  - artificialintelligence
  - softwareengineering
quartz_url:
tistory_url:
medium_url:
type: article
---

## Agent Driven Development Process

> [!abstract] TL;DR
> 스킬 하나하나는 나의 힘 (내공) 이고, 그 스킬들을 운용하는 것이 시스템이다. 외부 시스템의 패턴을 관찰하고 내면화하여 나만의 스킬을 쌓아가는 고통의 과정이 수련이다. 이 글은 agentic coding 시대에 나는 무엇을 해야 할 것인가에 대한 고찰을 담는다.

이 시대에 무엇을 배워야 할지, 무엇을 남겨야 할지에 대한 고민을 시작으로 작성하게 된 글입니다. 시작은 [[결국 모든 것은 loop]] 라는 것입니다. Harness engineering 과 prompt engineering, context engineering 으로 이어지는 흐름은 에이전트가 자율적으로 문제를 해결해 가는 것에 있습니다. 이를 위한 필연적인 Loop 가 필요해집니다.

## 시대 진단: 실행이 싸진 세상

 [[노정석]] 대표님은 거의 모든 문제를 compute 기반 search problem 으로 전환할 수 있다고 말씀하십니다. 목표를 정하고 evaluation 을 통과할 때까지 Loop 를 돌리는 것입니다. OpenAI 의 harness-engineering 글이 이를 실증했습니다. 소수의 엔지니어가 agent 에게 실행을 맡기고, 인간은 환경 설계와 피드백 루프에 집중하여 다섯 달 만에 백만 줄의 코드를 만들어 낸 것입니다.

[[Ralph Loop]] 의 창시자이자 "automated software factory" 를 주창하는 엔지니어 [[Geoffrey Huntley]] 는 [[Everything is a Ralph Loop]] 에서 "Software is now clay on the pottery wheel." 이라고 말합니다. 더 이상 벽돌을 하나씩 쌓는 시대가 아니라 루프를 프로그래밍하는 시대라는 주장입니다. 최근에 우리는 이 주장에 대한 증거로 [[What you need to learn from claw-code repo|claw code]] 를 보았습니다. 대규모 코드베이스를 몇 시간 만에 컨버팅하는 것이 가능해졌습니다.

결국은 compute 기반의 search problem 으로 전환이 될 것이며, 소프트웨어 개발은 물레를 돌리듯 Loop 를 반복적으로 돌며 깎아져 내려가는 것이 된다고 이해가 됩니다. . Django 의 co-creator 이자 AI 개발 도구 전문 블로거인 [[Simon Willison]] 또한, [[Designing Agentic Loops]] 에서 agentic loop 설계 능력 자체가 이 시대의 핵심 역량이라고 진단했었는데, 이 흐름이 이어지는 것 같습니다.

그러면 어린 저는 무엇을 해야 할까요? Loop 를 만드는 능력이라 생각합니다. [[Software Engineering]] 이 필요 없다는 말도, AI 가 다 해줄 것이니 그때를 편히 기다리라는 말도 아닙니다. 치열하게 경험하고 공부해야 하는 것은 달라진 게 없다고 생각합니다. 문제를 푸는 것보다 문제가 생기는 속도가 빠른 세상이며, 이제는 풀 수 있는 문제들이 많아진 세상에 우리는 문제를 푸는 루프를 구축해야 합니다.

본질적으로 input 을 넣고 output 이 나오는 것, 엔트로피를 낮게 유지하는 것에는 에너지가 들어가고, 그 모듈로서 인간이 동작할 수밖에 없습니다. 욕구는 인간으로부터 나오니까, 문제는 인간으로부터 정의되니까요.

루프 만드는 능력을 더 자세히 정의하면, 어떤 도구를 쥐어주고 어떤 대규칙을 줄 것인지를 정하는 설계도 들어가고, 작게는 delegate 의 개념도 들어간다고 생각합니다.

빅테크 회사의 코드베이스는 모두 비슷한 구조와 아키텍처를 가져갈까요? 그렇지 않습니다. 문제에 따라 구조가 달라지죠. 여기에 갭이 있습니다. 세상은 여전히 복잡하고 풀어야 할 문제는 많고 우리는 연산 능력을 어디에 투여해서 이 문제를 풀 것인가에 집중해야 한다 생각합니다

## 내공과 무술 : 스킬과 시스템의 구분

무협지에서 수련자는 외부의 무공 비급을 관찰하고, 그 원리를 체화하여 자신의 내공으로 만듭니다. 내공이 깊은 사람은 어떤 무기를 쥐어도 위력이 다르게 나타납니다. 최근에 스킬이라 불리는 것이 무공과 크게 다를 바가 없다는 생각이 듭니다. 이미 웹툰에서도 비슷한 plot 이 쓰이기도 합니다. 스킬로 딸깍 등록해서 누구나 스킬을 사용할 수 있지만, 고생고생해서 무공을 수련하는 사람들이 있죠.

OpenClaw, Claude Code, Codex 에 쥐어지는 스킬은 게임에서의 스킬, 무공과 다르지 않다고 생각합니다.

내가 만든 개별 도구와 능력, 하나하나가 힘이 됩니다. 내 스킬을 만들어서 배포를 하면 누구나 쓸 수 있습니다. 하지만, 왜 이렇게 만들었는지 설명할 수 있는 사람은 본인뿐입니다. 무협지에서는 무공이 쌓이면 문이 열리고, 각 스킬이 연동되어서 하나의 고유한 흐름을 보이고, 이 흐름이 뭉치면 문파가 됩니다.

내가 만든 고유한 스킬들이 쌓여서 나만의 흐름을 보이는 것은 본인의 성장과 가치를 부여해 줄 것입니다. 그렇다면 우리는 문파의 장로가 되는 것이고, 에이전트는 제자가 되는 것이죠.

> 에잉 쯧 그렇게 하는 것이 아닐텐데 어여 줘봐 이렇게 하는거여 ~

루프를 문파로 바꿔봅시다. 세상의 많은 문제들을 해결하는 우리는 각 문파의 창시자입니다. 우리의 수련은 내재화된 역량을 스킬로 만들고 제자들에게 주는 것, 깨달음을 전달하고 이 무공 (Loop) 을 문하생 (에이전트) 에게 주는 것입니다.

우리는 ralph, autopilot, autoresearch 등의 개념을 제시한 거인들의 어깨에 올라타서 수련이 필요하고 체화가 필요합니다. 딸깍으로만 풀 수 없는 문제를 어느 층위에서 해결할 수 있는지 — 스킬인지 루프인지 배치인지, benchmark 가 잘못되었는지를 검증할 수밖에 없습니다.

나의 맥락에서 내면화하는 과정이 필요합니다. 그리고 참 고통스럽습니다. 뇌가 비명을 지르죠. 여러 스킬들을 사용해보고 " 이거 참 좋다, 왜 좋을까?" 를 고민하고, 이 문제를 나의 문제에 번역하는 데서 진짜 내공이 쌓인다고 생각합니다.

모든 스킬을 직접 맨땅에 혼자 만드는 것이 아닙니다. 앞선 거인들, 날아가는 신성들의 궤적을 보고, 사용해보고, 내재화해 가는 것입니다.

## 5 대 원칙

### 1. 모든 문제를 검색의 문제로, 모든 검색을 루프로 만들어라

문제가 있으면 그것을 탐색 가능한 구조로 바꾸고, 그 탐색을 반복 가능한 루프로 만듭니다. [[Harness Engineering]] 이 말하는 것도 같습니다 — goal-setting, evaluation loop, routing, fallback 같은 deterministic workflow primitives 로 non-deterministic model behavior 를 감싸는 것입니다.

실천에서 이것은: spec 을 쓰고, agent 에게 루프를 돌리게 하고, evaluation 이 통과할 때까지 반복하는 것입니다. " 어떻게든 잘 해봐 " 가 아니라 " 무엇을 목표로 두고 어떻게 통과시킬 것인가 " 의 문제로 재정의하는 것입니다.

### 2. 나만의 스킬을 쌓아라 — 스킬이 곧 내공이다

이 시대에 필요한 것은 여러 도구를 쓰면서 나만의 도구를 쌓아가는 것이라고 생각합니다. 저 사람은 저것을 썼네, 하면서 나만의 것을 레벨업해가는 것. 무협지에서 자신의 스킬을 쌓아 올리는 것처럼 말입니다.

누구나 같은 모델을 쓸 수 있고, 같은 CLI 를 쓸 수 있습니다. 차이는 그 위에 쌓은 스킬의 깊이에서 옵니다. OpenAI 가 [[Harness engineering leveraging Codex in an agent-first world]] 에서 보여준 것처럼, 차별화의 원천은 더 센 모델 자체가 아니라 rails, verification, routing 같은 surrounding process 에 있다고 생각합니다.

Obsidian CLI 하나를 써도 저는 디버깅할 때 쓰지만, 또 다른 사람은 다른 철학으로 쓸 수 있는 것이죠. 하나의 CLI 에서 여러 스킬이 파생할 수도 있습니다.

### 3. Spec 이 루프의 질을 결정한다

루프를 돌리는 데는 자세한 spec 이 중요함을 배웁니다. [[Ralph Loop]] 이든 autopilot 이든, 들어가는 spec 의 질이 나오는 결과의 질을 결정합니다. [[Harness Engineering]] 이 강조하는 것도 이것입니다 — 목표가 안정화되면 loop 가 혼돈을 제거하고 결과를 정제하게 됩니다.

좋은 spec 을 만들기 위해서 Google 에서 DESIGN.md 를 만들고, OpenAI 에서 docs/ 아래에 대규칙들을 모아둔 것이라 이해합니다. 자신의 철학을 기록하고 반복 참조시키는 것이죠. Spec 은 일회성 문서가 아니라 축적된 판단의 결정체입니다.

### 4. 대원칙을 체화하되, 위반의 이유를 설명할 수 있어야 한다

대원칙이 있습니다. 하지만 세상은 복잡합니다. 대원칙을 위반하는 상황이 올 때, **왜 위반할 수 있는지도 설명할 수 있어야 합니다.** 이것이 원칙을 " 아는 것 " 과 " 체화한 것 " 의 차이입니다.

OpenAI 는 "enforce boundaries centrally, allow autonomy locally" 라고 표현했습니다. 경계를 중앙에서 강제하되, 그 안에서는 자유를 허용합니다. 원칙은 감옥이 아니라 지도입니다. 지도를 읽을 줄 아는 사람만이 지도에 없는 길도 갈 수 있습니다.

### 5. Dogfooding 이 유일한 Antifragile 경로다

하지만, 우리가 고생해서 만든 스킬은 fragile 합니다. 세상은 복잡하고, 한 번 만들어서 영원히 작동하는 것은 없습니다. [[Entropy]] 는 높아지기 마련이기 때문입니다. Antifragile 속성을 얻는 방법은 **내가 계속 dogfooding 을 하는 것**뿐입니다.

Huntley 가 말한 것처럼: "watch the loop — that is where your personal development and learning will come from." 루프를 지켜보는 것, failure domain 을 발견하고 다시는 발생하지 않도록 해결하는 것. 이 반복이 스킬을 fragile 에서 antifragile 하게 만듭니다.

## 수련의 과정

수련은 세 단계로 이루어집니다:

1. **관찰 (觀)**: 외부 시스템과 패턴을 봅니다. OpenAI 가 어떻게 harness 를 설계했는지, Huntley 가 왜 monolithic single-process loop 를 고집하는지, 노정석 대표님이 왜 모든 것을 search problem 으로 바꾸라고 하시는지. 좋은 harness 들을 써봅니다.
2. **내면화 (化)**: 관찰한 패턴을 나의 문제에 번역합니다. 인지적으로 원리를 이해하고 나의 맥락에 맞게 변환합니다. 이것이 고통의 과정입니다.
3. **축적 (積)**: 내면화된 것을 스킬로 만들고, 스킬을 반복 사용하며 dogfooding 합니다. 시간이 지나면 스킬들이 자연스럽게 시스템으로 엮입니다.

이 과정에서 중요한 것은 속도가 아니라 방향입니다. 실행은 이미 싸졌습니다. 비싼 것은 **어떤 문제에 compute 와 시간을 넣어야 하는지 가려내는 평가 기준** — 즉, 수련자의 안목입니다.
## References

- [[Harness Engineering]]
- [[Everything is a Ralph Loop]]
- [[Harness engineering leveraging Codex in an agent-first world]]
- [[Designing Agentic Loops]]
- [[EP 91. 26.1Q 비즈니스 관점에서의 AI]]
- [[EP 74. 비즈니스 관점에서 오늘의 AI - 도망자 연합 발족 선언]]
- [[2026-03-31 Google Summer of Code]]
- [[노정석]]
- [[AI Agent]]
- [[Agentic AI]]
- [[Geoffrey Huntley]]
- [[Simon Willison]]
## Next Step
- [[Agent Skill Deploy]] 로 나만의 skill 을 구성하고 관리한다
## Thinking
> 💭 [[2026-04-10]] 14:39
> 이 관점이 강화학습 측면에서 왔을까

---
