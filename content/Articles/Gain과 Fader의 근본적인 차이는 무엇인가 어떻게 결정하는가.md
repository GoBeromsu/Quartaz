---
aliases: []
cmds:
  - "[[📚 201 Knowledge]]"
  - "[[📚 305 Concepts]]"
  - "[[📚 905 Sound Engineer]]"
date_created: 2025-05-05
date_modified: 2025-09-25
tags:
  - soundengineering
type:
  - articles
permalink: gain-vs-fader
---

## Gain and Fader — Definition & Difference
#### Gain (Preamp) 정의
- **Gain**은 마이크 (Microphone) 나 악기에서 들어오는 아주 작은 **Mic Level** 신호를, 믹서나 오디오 장비가 다룰 수 있는 **Line Level**로 증폭하는 입력단 (Preamp Stage) 의 조절값임.
- 이 과정에서 신호의 **Signal-to-Noise Ratio (SNR)** 와 **Headroom**이 사실상 결정되므로, Gain 은 단순히 " 볼륨을 키우는 것 " 이 아니라 신호의 건강을 확보하는 기술적 단계임.
- Gain 을 너무 낮게 두면 Noise Floor 가 신호와 섞여서 퍼지고, 너무 높이면 Clip Point 를 넘어 Clipping Distortion 이 생김. 이렇게 손상된 신호는 이후 Fader 에서 아무리 줄여도 복구되지 않음.
#### Fader 정의
- **Fader**는 Preamp 를 거쳐 적정 Line Level 로 확보된 신호를, 믹스 안에서 **상대적 비중 (Mix Balance)** 을 맞추는 도구임.
- Fader 는 **Attenuator(감쇠기)** 역할을 하며, 신호의 SNR 이나 Headroom 에는 영향을 주지 않음. 즉, 이미 확보된 품질을 바탕으로 각 소리를 " 얼마나 앞으로 혹은 뒤로 배치할지 " 만 결정함.
- 보통 채널 Fader 의 "0 dB" 또는 "U(Unité)" 위치가 **Unity Gain** 상태로, 이때는 입력 레벨과 출력 레벨이 같으며, 믹스의 기준점으로 활용됨.
#### Gain Vs Fader — 차이점 핵심
- Gain: **품질 (신호의 건강)** → Pre-Fader Meter 에서 판단 → -18 ~ -12 dBFS 에 맞춰 SNR 확보 + Headroom 보존
- Fader: **비중 (믹스의 균형)** → 귀로 듣고 상대적 밸런스를 결정 → Master Meter/Monitor Output 확인
- Gain 은 **소스 신호 자체를 다루는 기술적이고 객관적인 과정**, Fader 는 **전체 음악을 그림처럼 구성하는 주관적이고 예술적인 과정**임.
## 실제 운용 절차
#### Step 1: Gain 세팅 (품질 확보)
- Fader = 0 dB, Master = 0 dB → PFL 확인 → Gain 조정하여 −18 ~ −12 dBFS 맞춤.
- HPF 적용, EQ Boost 고려, Headroom 확보.
#### Step 2: Fader 세팅 (밸런스 조절)
- 모든 채널은 품질 확보 상태 → 귀로 전체 믹스 듣고 Fader 움직여 보컬, 악기, 드럼 등 비중 결정.
- 대부분 Fader 는 −10 ~ 0 dB 범위에서 운용하는 것이 이상적.
## Gain 과 Fader 의 중요성
- 오디오 신호는 마이크 (Mic Level) → Preamp(Gain) → Fader → Bus → Master → Speaker 로 이어지는 여러 단계를 거치며 처리됨.
- Gain 은 입력 신호를 시스템이 다룰 수 있는 적정 레벨로 증폭해 신호 품질을 보장하고, Fader 는 확보된 신호를 전체 믹스 안에서 얼마나 크게 들리게 할지를 결정함.
- Gain 과 Fader 는 단순히 " 둘 다 소리를 키우는 장치 " 가 아니라, 입력 품질 vs 출력 균형이라는 전혀 다른 목적 때문에 모두 필요함.
## Unity Gain 과 Gain Structure
#### Unity Gain 개념
- Unity Gain: 장치의 입력과 출력 레벨이 동일한 상태를 의미함.
- 채널 Fader 를 0 dB(Unité) 에 두면, Preamp 에서 맞춘 신호가 그대로 출력됨.
- 믹싱 초기에는 모든 Fader 를 Unity 에 두고 PFL 로 Gain 을 조정 → 평균 −18 ~ −12 dBFS, 피크 −10 ~ −6 dBFS 범위.
- 이렇게 해야 Fader 는 순수하게 " 밸런스 조절 " 만 담당하고, 신호의 건강은 이미 Preamp 에서 확보됨.
#### Gain Structure(게인 스트럭처)
- Gain Structure: 오디오 경로 전체에서 Gain, Fader, Dynamics, EQ, Bus Level, Master Output 이 조화를 이루는 레벨 균형을 뜻함.
- 올바른 Gain Structure 를 잡으면 어느 단계에서도 Clipping 없이 깨끗한 출력이 가능하며, Headroom 도 안정적으로 유지됨.
- EQ 에서 특정 대역을 Boost 하면 전체 신호가 올라가므로 Preamp 에서 3~6 dB 여유를 두는 것이 안전함.
## Headroom 과 Dynamic Range
#### Headroom
- Headroom: Nominal Level(평균 동작 레벨) 과 Clip Point(왜곡 시작 지점) 사이의 여유 공간.
- 음악 공연은 보통 15~20 dB, 스피치는 10 dB 정도 확보하는 것이 이상적.
- 충분한 Headroom 은 연주자가 순간적으로 강하게 소리를 내더라도 Distortion 없이 버틸 수 있는 안전 장치임.
#### Dynamic Range
- Dynamic Range: Noise Floor(시스템 바닥 잡음) 와 Clip Point(최대 신호) 사이의 범위.
- Gain 의 역할은 이 Dynamic Range 안에서 신호를 가장 효율적으로 배치하는 것임.
- 신호가 Noise Floor 에 가깝게 세팅되면 잡음이 두드러지고, Clip Point 에 너무 가까우면 왜곡 위험이 커짐.
## Processing 과의 관계
#### Dynamics (Compressor, Gate 등)
- Compressor 와 Gate 는 설정된 Threshold 를 기준으로 동작하는데, 이 기준은 Preamp 에서 결정된 신호 레벨에 의존함.
- Gain 이 너무 낮으면 Compressor 가 거의 작동하지 않고, 너무 높으면 계속 눌려서 의도와 다른 결과가 발생함.
#### EQ
- EQ Boost 는 신호 전체 레벨을 끌어올려 Headroom 을 줄임.
- Boost 가 많을 경우 Preamp 를 낮추거나 EQ 이후 Trim 으로 보정해야 함.
- Cut 중심 EQ 는 Headroom 을 보존하는 안전한 접근임.
#### High-Pass Filter (HPF)
- HPF 는 저역 Rumble, Handling Noise 같은 불필요한 저주파를 제거해 Headroom 을 확보하고 Gain-Before-Feedback(GBF) 을 개선함.
- 보컬·스피치에서는 기본적으로 ON 을 권장.
## Metering 과 판단 기준
#### Pre-Fader Meter (PFL)
- Gain 세팅은 반드시 Pre-Fader Meter 로 확인해야 함.
- 목표는 평균 −18 ~ −12 dBFS, 피크 −10 dBFS 근처.
- Fader 위치와 관계없이 Preamp 신호 자체의 건강을 평가할 수 있음.
#### Post-Fader Meter (Main Output, AFL)
- 믹스 밸런스, 버스, Master 출력 확인용.
- Gain 세팅에는 적합하지 않음.
## 직관적 비유 — "Candy Model"
- Gain: 마이크 안의 " 사탕 원재료 " 를 깨끗하고 충분히 확보하는 것. 너무 적으면 잡음 (Noise) 까지 함께 퍼지고, 너무 많으면 포장지가 찢어져 (Clipping) 망가짐.
- Fader: 확보한 사탕들을 선물세트에 예쁘게 배열하는 과정. 어떤 사탕을 앞에 두고, 어떤 사탕을 뒤로 둘지 정하는 것. 품질은 이미 Gain 에서 결정됐고, Fader 는 배치와 균형만 다룸.
## 결론
- Gain 은 **신호 품질 (SNR, Headroom)** 을 확보하는 기술적 과정이고, Fader 는 **믹스 내 비중 (Mix Balance)** 을 조절하는 음악적 과정임.
- Unity Gain 과 올바른 Gain Structure 를 세팅하면, Fader 는 온전히 밸런스 조절에만 집중할 수 있고, 전체 시스템은 Noise 와 Clipping 없이 안정적으로 동작함.
- Gain 과 Fader 는 " 같이 소리를 키운다 " 는 겉모습 때문에 혼동되지만, 왜 시스템에 둘 다 필요한지는 신호의 건강과 믹스의 균형이라는 역할 차이에서 명확히 드러남.
## Related
- dB(Decibel): 로그 단위, 신호 레벨의 상대적 차이를 표현.
- dBu: 아날로그 오디오 단위 (0 dBu = 0.775 V RMS).
- dBFS (Full Scale): 디지털 오디오 단위. 0 dBFS = 최대 레벨 (Clipping). 일반적으로 −18 dBFS ≈ 아날로그 0 VU.
- Noise Floor: 시스템 고유의 잡음 바닥 레벨. Gain 이 낮으면 SNR 악화.
- SNR (Signal-to-Noise Ratio): 신호 대비 잡음 비율. 높을수록 깨끗한 음질.
- Nominal Level: 시스템이 안정적으로 동작하는 평균 신호 레벨.
- Headroom: Nominal Level 과 Clipping Point 사이의 여유 공간. 순간 피크 안전 확보.