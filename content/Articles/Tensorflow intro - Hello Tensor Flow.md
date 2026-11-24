---
aliases: []
date_created: 2022-07-27
date_modified: 2022-07-27
permalink: tensorflow-intro-hello
tags:
  - ai
  - tensorflow
title: "Tensorflow intro - Hello Tensor Flow"
---

# TensorFlow 입문

TensorFlow는 graph로 연산을 나타내는 프로그래밍 시스템이다.
그래서 당연히 노드 단위로 일을 하고 graph에 있는 노드는 op(작업)(operation)이라고 부른다.
보통 op는 0 이상의 Tensor를 가질 수 있다. Tensor는 정형화된 다차원 배열이다

TensorFlow에서 Graph는 연산을 표현해 놓은 것이라서 연산을 하려면 graph가 session 상에 실행되어야 한다. Session은 graph의 작업을 CPU/GPU 같은 Device에 배정하고 실행을 위한 메서들을 제공한다.
이러한 메서드들이 작업을 실행해서 Tensor를 만들어 낸다.(Tensorflow 2.x.x 이상 부터는 Session을 만드는 과정이 사라졌다)

보통 Tensro는 파이썬에서 numpy ndarry 형식으로 출력된다ㅓ.

## 설치 방법

```bash
pip install tensorflow-gpu
```


## Error && Tip

### 코드 실행 시 Warning 뜨지 않게 하는 방법

- 아래 코드를 입력하면된다
- 코드 내용은 메세지 코드 중 Warning을 뜨지 않게 하겠다란 의미이다
  - 2 번이 Warning이다.

```python
import os

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
```

### Could not load dynamic library 'cudart64_110.dll'

```bash
2022-07-27 15:00:14.017560: W tensorflow/stream_executor/platform/default/dso_loader.cc:64] Could not load dynamic library 'cudart64_110.dll'; dlerror: cudart64_110.dll not found
2022-07-27 15:00:14.026248: I tensorflow/stream_executor/cuda/cudart_stub.cc:29] Ignore above cudart dlerror if you do not have a GPU set up on your machine.
```

CUDA는 GPU에서 수행하는 병렬처리 알고리즘을 프로그래밍언어로 사용가능하게 하는 기술이다.
NVIDIA에서 개발한 GPU 개발 툴인데 딥러닝에 사용할 수 있도록 오픈 되었다
AI, 채굴, 딥러닝 분야에서 많은 양의 연산을 동시처리하는 것이 목표이다보니 자연스레 사용하게 된다

보통은 CPU로 프로그램을 돌리니까 설치가 안되었거나 버전 낮은 경우가 있는데 나도 그런 케이스라 다시 설치하게 되었다

- CUDA 64bit 11 Version을 재설치 후 재부팅하면 된다

### AttributeError: module 'tensorflow' has no attribute 'Session'

```python
import tensorflow as tf

hello = tf.constant("hello world!")

sess =tf.Session()
print(sess.run(hello))
sess.close()
```

- Session을 사용하는 경우는 텐서플로우 1.x.x 버전 식 표현이다.
- 텐서플로우 2.0 버전부터는 session을 정의하고 run 해주는 과정이 생략 된다.

```python
import tensorflow as tf

hello = tf.constant("hello world!")

tf.print(hello)
```

- 새로운 version은 위와 같이 간단하게 쓰면 된다!

## Reference

- [TensorFlow 문서 번역](https://tensorflowkorea.gitbooks.io/tensorflow-kr/content/g3doc/get_started/basic_usage.html)

---

*2022-07-27에 [GitHub Pages](https://goberomsu.github.io/2022/07/27/ai-hello/)에 쓴 글을 옮겼습니다.*
