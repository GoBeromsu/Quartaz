---
aliases: []
date_created: 2025-02-01
date_modified: 2025-02-01
permalink: understanding-the-flow-of-llms
tags:
  - llm
title: "LLM 이해를 위한 흐름 파악"
---

![](/_attachments/medium-f4e48a096178-01.jpg)

*Photo by [🇸🇮 Janko Ferlič](https://unsplash.com/@itfeelslikefilm?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

생성형 AI 관련해서 졸업 논문 주제가 선정이 되어서, 먼저 생성형 AI 전반에 대한 핵심 개념을 탑다운 방식으로 정리하고자 합니다. 구체적으로는 [Deep Learning](https://medium.com/Deep%20Learning)에서 출발해 [Transformer](https://medium.com/Transformer) 기반 구조를 살펴보고, 나아가 [Large Language Model](https://medium.com/Large%20Language%20Model)로 이어지는 주요 기술사와 그 이면의 핵심 아이디어를 체계적으로 검토할 것입니다. 이를 통해 생성형 AI에 대한 이론적 토대를 다지고, 앞으로 진행할 연구 과정에서 보다 구체적인 주제를 효율적으로 선정하고자 합니다.

## Intro

![](/_attachments/medium-f4e48a096178-02.jpg)

*Photo by [Kenny Eliason](https://unsplash.com/@neonbrand?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

인간의 언어 능력은 유아기부터 발달하고 일생 동안 끊임없이 진화합니다. 하지만 기계에게 이와 동일한 수준의 언어 이해와 생성 능력을 부여하는 것은 인공지능(AI) 연구에서 오랜 숙제였습니다. 이를 위해 다양한 기법이 제안되어 왔는데, 그중 핵심 방법론은 바로 언어 모델링(Language Modeling, LM)입니다.

언어 모델링의 목표는 단어 시퀀스(문장, 문단 등)에서 다음에 올 단어나 누락된 단어를 확률적으로 예측하는 것이며, 이를 통해 기계가 자연어를 ‘이해’하고 생성할 수 있도록 돕습니다.

LM의 연구는 크게 네 단계, 즉 통계적 언어 모델(SLM), 신경 언어 모델(NLM), 사전 학습된 언어 모델(PLM), 그리고 대규모 언어 모델(LLM)의 흐름을 거치며 발전해왔습니다.

초기에는 통계적 접근이 사용되었지만, ‘차원의 저주’(차원 증가에 따른 매개변수 폭발 및 데이터 희소성) 문제가 빈번히 발생했습니다. 이어서 순환 신경망(RNN), LSTM 등을 기반으로 한 신경 언어 모델이 등장하여 시퀀스 데이터를 더욱 유연하게 처리하게 되었고, 분산 표현 기법을 통해 단어나 문장의 풍부한 의미 정보를 모델링할 수 있게 되었습니다. 이후 사전 학습된 언어 모델(PLM)은 ‘사전 학습(pretraining) → 미세 조정(Fine-tuning)’이라는 새로운 학습 패러다임을 제시하였고, 이로써 자연어 처리(NLP) 전반의 성능이 획기적으로 향상되었습니다.

더 나아가 연구자들은 모델 규모와 학습 데이터의 크기를 크게 확장함으로써, 기존 소규모 PLM과는 다른 ‘이머전트(창발) 능력(emergent capability)’을 보이는 대규모 언어 모델(LLM)을 탄생시켰습니다.

이들 LLM은 방대한 파라미터(예: 175B 파라미터 GPT-3, 540B 파라미터 PaLM)를 통해 **복잡한 추론 및 생성 능력**을 발휘하는 한편, 상황학습(In-context Learning)과 같은 새로운 사용 방식을 보여주면서 인공지능 연구 커뮤니티 전반에 큰 파장을 일으키고 있습니다.

이러한 흐름에서 **생성형 AI를 제대로 이해**하려면, ‘딥러닝(Deep Learning) → 트랜스포머(Transformer) → 대규모 언어 모델(LLM)’로 이어지는 기술적 발전 과정을 종합적으로 파악할 필요가 있다고 생각하였습니다.

특히 LLM은 기존 소규모 모델과 달리 프롬프트 기반의 상호작용, 거대 데이터 처리 인프라, 인간 가치관 및 선호도와의 정렬(Alignment) 등 새로운 도전 과제를 안고 있어, 차세대 AI 연구 및 애플리케이션의 핵심 영역으로 부상하고 있습니다. 또한 ChatGPT를 비롯한 대화형 LLM이 등장하며, 검색 엔진이나 문서 작성 도구 등 실제 산업 생태계와의 접점도 크게 늘어나고 있습니다. 이는 곧 AI 기술이 기존의 ‘특정 작업 전용’ 방식에서, **범용 언어 과제 해결사**로 발전하는 전환점에 놓였음을 시사합니다.

## [Deep Learning](https://medium.com/Deep%20Learning) 과 [Large Language Model](https://medium.com/Large%20Language%20Model)

![](/_attachments/medium-f4e48a096178-03.jpg)

*Photo by [Alex Knight](https://unsplash.com/@agk42?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

[Deep Learning](https://medium.com/Deep%20Learning)은 인공신경망을 다층 구조로 쌓아 복잡한 패턴을 학습하는 [Machine Learning](https://medium.com/Machine%20Learning) 기법입니다. 현대적인 [Deep Learning](https://medium.com/Deep%20Learning) 은 인공신경망을 다층으로 쌓아 복잡한 패턴을 자동으로 학습하는 대표적 기법입니다. 초기 머신러닝 모델들은 제한된 수의 계층과 상대적으로 단순한 구조 탓에 대규모·복잡 데이터에서 한계를 보였지만, 컴퓨팅 파워의 획기적 발전과 방대한 데이터 축적에 힘입어 점차 깊고 복잡한 네트워크 구조의 탐구가 가능해졌습니다. 그 결과 사물 인식, 음성 처리, 자연어 처리 등 다양한 분야에서 딥러닝 기반 모델이 뛰어난 성능을 거두고 있습니다.

딥러닝의 핵심은 계층적 특징 추출입니다. 예를 들어, 이미지 인식에서 \[Conventional Neural Network\] 은 초기 계층에서는 가장자리·색상 같은 저수준 특징을, 깊은 계층으로 갈수록 형태·객체 등 고수준 특징을 학습합니다. 이런 방식을 자연어 처리(NLP) 에도 적용하면, 방대한 텍스트 데이터 속 언어의 구조·문법·의미·문맥 등 복합적인 정보를 점진적으로 학습해낼 수 있습니다.

초기에 자연어 처리를 위해서는 통계 모델(SLM) 을 많이 활용했습니다. 예컨대, n-그램(빅그램·트라이그램 등)을 통해 ‘가장 최근 문맥’만 보고 다음 단어를 예측하는 접근인데, 이 방식은 데이터 희소성과 ‘차원의 저주’ 문제에 부딪혔습니다. 이를 극복하고자 제안된 것이 신경 언어 모델(NLM) 이며, 순환신경망([RNN](https://medium.com/RNN))과 [LSTM](https://medium.com/LSTM) 등을 활용해 시퀀스(문장) 구조를 보다 유연하게 학습할 수 있게 되었습니다. 나아가 Word2Vec과 같은 분산 표현 기법을 통해 단어·문장을 저 차원 벡터로 표현하고 이를 통해, 단어 간 유사도나 문맥적 의미를 정교하게 파악하는 길이 열렸습니다.

하지만 RNN 기반 모델조차 장기 의존성(long-range dependency) 문제와 병렬 처리 한계가 남아있었습니다. 이를 근본적으로 개선한 구조가 [Transformer](https://medium.com/Transformer) 이며, 자기 주의 메커니즘([Self-Attention Mechanism](https://medium.com/Self-Attention%20Mechanism)) 을 통해 시퀀스 내 모든 위치를 한 번에 고려할 수 있어 병렬 연산이 용이하고 장거리 문맥 정보도 효율적으로 학습합니다. 이후 사전 학습된 언어 모델(PLM) 인 [BERT](https://medium.com/BERT), [GPT-2](https://medium.com/GPT-2), [T5](https://medium.com/T5), [BART](https://medium.com/BART) 등이 등장하면서 NLP 전반에 걸쳐 새로운 패러다임(‘사전 학습 + 미세 조정’)이 자리잡았습니다.

그리고 연구자들은 모델 크기·데이터 크기를 거대하게 스케일링하면 예상보다 훨씬 더 뛰어난 생성·추론 능력이 나타난다는 사실을 확인했습니다. 이렇게 거대 규모로 확장된 PLM을 [Large Language Model](https://medium.com/Large%20Language%20Model)(LLM) 이라 부릅니다. 대표적인 예로 GPT-3나 PaLM, 최근의 ChatGPT, GPT-4 등이 손꼽히며, 이머전트(창발) 능력이라 불리는 놀라운 특성을 보입니다. 예컨대, [GPT-2](https://medium.com/GPT-2)로는 잘 안 되던 상황 내 학습(in-context learning)이나 복잡한 추론 능력이, 수천억~수조 개 파라미터 규모의 모델에서는 자연스럽게 드러납니다.

즉, LLM은 단순히 과거의 모델보다 파라미터가 많은 “큰 언어 모델”이 아니라, 크기를 넘어선 새로운 능력(emergent capability)을 발현한다는 점에서 주목받습니다. 더불어 사람처럼 지시(Instruction)를 이해하고, 여러 예시를 입력받아 새로운 작업에도 곧바로 적용하는 [few-shot learning](https://medium.com/few-shot%20learning) , [Zero-Shot Prompting](https://medium.com/Zero-Shot%20Prompting) ) 러닝이 가능해졌습니다. 이는 기존 “다운스트림 데이터로 미세 조정”하는 방식보다 훨씬 유연하며, 실제 활용 범위를 크게 넓힙니다.

## [Transformer](https://medium.com/Transformer) 기반의 [Large Language Model](https://medium.com/Large%20Language%20Model)

[Transformer](https://medium.com/Transformer)는 Self-Attention 메커니즘을 활용하여 시퀀스 내 모든 위치를 한 번에 고려하며, 이를 통해 RNN 기반 모델들의 병목 현상을 극복하고 대규모 병렬 연산을 가능하게하였습니다. 이를 기반으로 대규모 텍스트 코퍼스에 대해 오토회귀 (autoregressive) 방식으로 학습한 [Generative Pretrained Transformer](https://medium.com/Generative%20Pretrained%20Transformer) 시리즈가 [Natural Language Processing](https://medium.com/Natural%20Language%20Processing) 의 판도를 바꾸었습니다.

최근에는 [GPT](https://medium.com/Generative%20Pretrained%20Transformer) 계열뿐만 아니라 [LLaMa](https://medium.com/LLaMa), [Claude](https://medium.com/Claude), [PaLM](https://medium.com/PaLM) 등 다양한 Decoder Only 모델이 등장해 자연어 생성(문장 생성, 요약, 번역, 질의응답 등)에 탁월한 성능을 보입니다. 즉, Transformer 기반 LLM은 크게 아래 세 가지 구조로 정리할 수 있습니다.

[Encoder Only](https://medium.com/Encoder%20Only) 모델

- 예: [BERT](https://medium.com/BERT)
- 문서 분류, 개체명 인식(NER), 자연어 추론(NLI) 등 분석 중심의 태스크에 최적화
- 텍스트 입력을 깊이 이해하여 활용

[Encoder-Decoder](https://medium.com/Encoder-Decoder) 모델

- 예: [T5](https://medium.com/T5), [BART](https://medium.com/BART)
- 인코더로 입력을 맥락 벡터로 변환하고, 디코더로 새로운 출력을 생성
- 기계 번역, 요약, 문서 재작성 등 이해와 생성이 동시에 필요한 작업에 활용

[Decoder Only](https://medium.com/Decoder%20Only) 모델 (Autoregressive)

- 예: [GPT](https://medium.com/GPT) 시리즈, [LLaMa](https://medium.com/LLaMa), [Claude](https://medium.com/Claude), [PaLM](https://medium.com/PaLM) 등
- 이전 토큰을 기반으로 다음 토큰을 순차 예측하는 방식
- 생성 능력(텍스트 생성, 대화형 응답 등)에서 강점 발휘

특히 ‘Decoder Only’ 모델은 조건부 확률 p(다음 토큰\|이전 토큰들) 을 직접 학습하기 때문에, “시퀀스 연속 예측” 형태로 다양한 과제를 풀 수 있습니다. 예를 들어, 질의응답도 “\[질문\]→\[답변\]” 형태의 텍스트 완성으로 간주해 해결합니다.  
이처럼 Transformer 기반 LLM은 상황 내 학습(In-context Learning), 명령어 튜닝(Instruction Tuning) 등 새로운 가능성을 열어 NLP를 넘어 다양한 산업 응용까지 확장되고 있습니다.

### 마치며

더 자세한 내용은 LLM 관련 리뷰 논문(예: [2303.18223](https://arxiv.org/abs/2303.18223)) 등을 참고하시길 권합니다. LLM의 최근 동향은 GPT-4, ChatGPT 플러그인 생태계 등으로 빠르게 발전 중이며, **환각(hallucination), 유해성(toxicity), 편향(bias)** 등 새로운 문제도 제기되고 있습니다. 향후 인공지능의 안전한 활용을 위해 **인간 정렬(Human Alignment)**, **RLHF(인간 피드백 기반 강화 학습)** 같은 기술이 한층 중요해질 전망입니다.

---

*2025-02-01에 [Medium](https://beromkoh.medium.com/llm-%EC%9D%B4%ED%95%B4%EB%A5%BC-%EC%9C%84%ED%95%9C-%ED%9D%90%EB%A6%84-%ED%8C%8C%EC%95%84-f4e48a096178)에 쓴 글을 옮겼습니다.*
