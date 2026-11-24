---
aliases: []
date_created: 2024-01-02
date_modified: 2024-01-02
permalink: docker-layer-cache-stale-jar
tags:
  - docker
  - spring
  - troubleshooting
  - devops
title: "도커 캐싱으로 인한 이전 버전 JAR 파일 지속 사용 문제 해결하기"
---

오늘은 Docker Compose를 이용해 네트워크를 구성하고 이미지 간 통신을 설정하는 과정에서 발생한 흥미로운 문제에 대해 이야기하고자 합니다.  
프로젝트 설정에서 `prod`로 지정했음에도 불구하고, Spring 프로젝트의 변경 사항이 제대로 반영되지 않는 상황이 발생했습니다.

문제의 핵심은 Flask 서버 컨테이너로 요청을 보내는 과정에서, 서버가 계속 `localhost`로 인식되는 것이었습니다.  
이는 도커 이미지를 생성하는 과정에서 발생한 문제라 추측 되었습니다

## 사전 지식

### 도커 캐싱 메커니즘

Docker는 이미지를 '**레이어**’라는 여러 개의 층으로 구성합니다. 각 레이어는 Dockerfile의 한 명령어에 해당하며, 이들이 순차적으로 쌓여 완전한 이미지를 형성합니다.

Dockerfile의 각 명령어가 실행될 때, 해당 명령어의 결과(레이어)가 생성되고 Docker의 로컬 저장소에 저장됩니다. 이 때, 각 레이어의 **해시값**을 계산하여 저장하여, 이후의 빌드에서 해당 레이어가 변경되었는지 판단하는 기준으로 사용합니다.

변경된 레이어가 감지되면, 그 레이어부터 모든 후속 레이어는 새롭게 빌드됩니다. 즉, **변경 사항이 있는 레이어 다음부터는 캐시를 사용할 수 없습니다.**

예를 들어, `COPY . /app` 명령어에서 소스 코드에 변경이 발생하면, 이 명령어가 생성하는 레이어의 해시값이 변경됩니다. 따라서 이 명령어 이후의 모든 레이어는 새롭게 빌드되어야 합니다.

캐시를 사용하면 이미 생성된 레이어를 재사용할 수 있으므로, 전체 빌드 과정이 빨라집니다. 특히, **변경되지 않은 레이어가 많을수록 빌드 시간 절약은 더욱 큽니다.**

### 도커 파일 최적화 어떻게 해야 할까

즉 Dockerfile을 작성할 때, 변경 빈도가 높은 파일이나 명령어를 Dockerfile의 하단에 위치시키는 것이 효율적입니다. 이는 **빈번한 변경으로 인해 발생하는 캐시 무효화의 영향을 최소화하기 위함**입니다.

초기 레이어(예: 기반 이미지 설정, 패키지 설치 등)는 가능한 한 **변경이 적도록 구성**합니다. 이러한 레이어는 대부분의 빌드에서 재사용될 수 있으므로, 빌드 시간을 효과적으로 단축할 수 있습니다.

예를 들어 `FROM node:14` 또는 `RUN apt-get update && apt-get install -y some-package`와 같은 명령어는 Dockerfile의 상단에 위치시키는거죠

또한,`COPY` 명령을 사용하여 소스 코드를 복사할 때, 자주 변경되는 파일과 그렇지 않은 파일을 분리합니다. 예를 들어, 자주 변경되지 않는 설정 파일은 초기 단계에서 복사하고, **자주 변경되는 소스 코드는 나중 단계에서 복사**합니다.

예를 들어 설정 파일(`config.json`)이 자주 변경되지 않는다면, `COPY config.json /app/config.json` 명령어를 Dockerfile의 상단에 위치시키고, 소스 코드가 포함된 디렉토리는 Dockerfile의 하단에 복사합니다.

가능하다면 멀티 스테이지 빌드를 사용하여 빌드 과정을 최적화합니다.  
예를 들어, 첫 번째 스테이지에서 의존성을 설치하고 빌드를 수행하고, 두 번째 스테이지에서는 필요한 산출물만을 복사하여 최종 이미지를 구성합니다.  
이 방법은 **불필요한 캐시 무효화를 방지하고 이미지 크기를 줄이는 데 도움이 됩니다.**

```dockerfile
# 첫 번째 스테이지: 의존성 설치 및 빌드
FROM node:14 as builder
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# 두 번째 스테이지: 필요한 산출물 복사
FROM node:14
COPY --from=builder /app/build /app/build
```

- **`COPY` 명령어**
  - 로컬 파일 또는 디렉토리를 Docker 이미지 내부로 복사합니다.
  - 이 명령어가 실행될 때, 변경된 파일이 포함되어 있다면 캐시가 무효화되고 이후 레이어는 새로 빌드됩니다.
- **`RUN` 명령어**
  - Docker 이미지 빌드 과정에서 명령어를 실행합니다.
  - 예를 들어, `RUN ./gradlew clean build -x test`는 Gradle을 사용하여 애플리케이션을 빌드합니다.
  - 이 명령어는 이전 `COPY` 레이어의 결과에 의존적입니다.

## 문제 인지

```dockerfile
FROM openjdk:17

WORKDIR /app
COPY . /app

RUN ./gradlew clean build -x test
COPY build/libs/wifi6-0.0.1-SNAPSHOT.jar /app/app.jar

ENV SPRING_PROFILES_ACTIVE=prod
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
```

위의 Dockerfile에서 발생한 주요 문제는 `COPY . /app` 명령과 관련이 있습니다.  
이 명령은 로컬 환경에서 빌드된 JAR 파일을 포함하여 모든 파일을 Docker 이미지 내 `/app` 디렉토리로 복사합니다.

로컬에서 빌드된 JAR 파일이 Docker 이미지에 포함되어, 이후 `RUN ./gradlew clean build -x test` 명령으로 새로운 JAR 파일을 빌드하더라도, 실제로는 이전에 복사된 JAR 파일이 사용되었던 것입니다

Docker 캐싱 메커니즘 때문에, 이미 복사된 파일(특히 JAR 파일)에 대한 새로운 변경 사항이 반영되지 않습니다. `COPY . /app` 명령에서 로컬의 변경사항이 이미지에 반영되지 않으면, 이후 빌드 과정에서도 이전 버전의 파일이 그대로 사용되기 때문이죠

### 해결 방법

```dockerfile
FROM openjdk:17

# 필요한 패키지 설치
RUN microdnf install findutils

WORKDIR /app

COPY . /app

# Gradle을 사용하여 빌드
RUN ./gradlew clean build -x test

ENV SPRING_PROFILES_ACTIVE=prod
ENTRYPOINT ["java", "-jar", "build/libs/wifi6-0.0.1-SNAPSHOT.jar"]
```

위와 같이 도커 파일을 변경해서 최신 빌드를 사용하도록 함으로써 문제를 해결하였습니다

로컬에서 빌드된 JAR 파일 대신 Docker 이미지 내에서 직접 JAR 파일을 빌드하고 사용하도록했습니다  
이를 통해 환경에 의존적인 문제를 최소화하고, 항상 최신 코드를 반영한 JAR 파일을 사용했습니다

#### 참고: JAR 파일 관리 전략

- **로컬 vs. Docker 환경의 차이**
  - 로컬에서 빌드된 JAR 파일은 개발 환경에 의존적입니다.
  - 반면, Docker 이미지 내에서 빌드된 JAR 파일은 독립적인 환경에서 생성되어, 환경에 따른 동작 차이를 최소화합니다.
- **관리 방법**
  - 불필요한 JAR 파일의 복사를 피하고, `RUN` 명령을 사용하여 이미지 내에서 직접 JAR 파일을 빌드함으로써, 환경에 의존적인 문제를 해결하고 항상 최신 코드로 빌드된 JAR 파일을 사용할 수 있도록 합니다.

\#DockerCaching \#DockerBuild \#Containerization \#BuildOptimization \#MultiStageBuild

## Thinking

- 2024-01-05 23:25 도커 캐시 레이어의 개념을 알 수 있게 되었구나! 재밌다!

---

*2024-01-02에 [Tistory](https://berom.tistory.com/554)에 쓴 글을 옮겼습니다.*
