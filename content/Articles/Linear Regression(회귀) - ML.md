---
aliases: []
date_created: 2022-07-31
date_modified: 2022-07-31
permalink: linear-regression-ml
tags:
  - ai
  - machine-learning
title: "Linear Regression(회귀) - ML"
---

선형 예측 함수를 사용해 회귀식을 모델링하여 알려지지 않은 파라미터는 데이터부터 추정한다  
현실 세계의 많은 데이터들은 선형 그래프를 그리고, 선형 그래프는 직관적이다.  
늦게 잘수록 피곤하다. 많이 먹을수록 배부르다 등 대부분의 데이터가 근사하게 선을 그리게 된다

이러한 회귀 모델은 일반적으로 최소 제곱법을 사용해 선형 회귀 모델을 만든다  
- 최소 제곱법을 사용하면 일단 값이 모두 양수가 나오고, 선형 함수 - 실제 값에 가중치를 주는 것을 의미한다

## Linear Hypothesis

선형한 그래프를 예측한다는 것은 어떤 데이터 값의 집합에서 Linear한 선을 찾는다 생각할 수 있다  
이 때 Linear Regression Model이 학습 하는 것은 해당 데이터를 가장 잘 표현하는 선형 그래프를 찾는 것이다.

또한 축이 2개이고, 일반적으로 변수가 2개이므로, H(x) = Wx+b의 그래프를 가진다  
H(x)는 가설이며, Hypothesis를 세우는 것이 선형 회귀의 시작이다.

## Cost (오차/손실)

데이터 분석에서 중요한 것은 오차를 파악하는 것이다.  
실제 데이터와 모델의 값 차이를 오차라고 한다. 이 값 차이가 작을수록 당연히 정밀하다

오차를 Cost라하며 오차를 최소화하는 것이 모델링의 주요한 요점이다.  
그렇다면 이 Cost를 표현해야할텐데 표현하는 방식은 다양하다.  
이러한 방법들을 Cost(Loss) Function이라하며, Cost를 최소화하는 함수를 minimize Cost Function이라고 한다.

### Gradient descent algorithm

## Reference

[선형 회귀](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%98%95_%ED%9A%8C%EA%B7%80)  
[선형 회귀 쉽게 이해하기](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%98%95_%ED%9A%8C%EA%B7%80)

---

*2022-07-31에 [GitHub Pages](https://goberomsu.github.io/2022/07/31/ai-LinearRegression/)에 쓴 글을 옮겼습니다.*
