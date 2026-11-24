---
aliases: []
date_created: 2023-12-10
date_modified: 2023-12-10
permalink: krampoline-nginx-413
tags:
  - nginx
  - kubernetes
  - troubleshooting
  - devops
title: "크램폴린 IDE - NGINX 문제 해결"
---

# 크램폴린 IDE - ⚙️ Nginx 문제 해결

2023년은 🐥 카카오 테크 캠퍼스에서 교육을 받았습니다  
오늘은 카카오의 클라우드 기반 학습 관리 시스템인 크램폴린 환경에 배포하며 겪은 문제를 나누려고 합니다

## Intro. 무슨 일인가

🐥 카카오 테크 캠퍼스 3단계 프로젝트의 주제는 축팅(네 컷 사진을 통해 축제에서 자연스러운 만남을 주선하는 서비스)이었습니다

사진 업로드 기능을 배포 환경에서 테스트하니, ⚙️ Nginx 413 Request Entity Too Large 에러가 발생하였습니다

찾아보니 기본 body size가 1M인 것을 해제하면 되는거라 금방 다시 배포를 하였습니다  
하지만, 문제는 해결 되지 않았죠

> - Nginx 413 에러란?
>   - 의미 : 요청 엔티티의 크기가 너무 크다
>   - 파일 용량이 너무 커서 디스크가 가득 차 사이트가 다운 되는 것을 방지하기 위해 설정되어있다

## 원인 파악

![크램폴린 IDE 배포 플로우와 시스템 연동기능 관계도](/_attachments/tistory-546-01.png)

원인을 파악하기 위해서 크램폴린 배포 플로우를 다시 상기 할 필요가 있었습니다  
왜냐하면, 크램폴린 IDE에서 배포는 쿠버네티스 환경에서 진행 되기 때문입니다

Kargo를 사용하여 DKOS 클러스터에 애플리케이션을 배포하는 것을 보면 알 수 있죠

> - Kargo
>   - 쿠버네티스 클러스터에 애플리케이션을 배포하는 도구
>   - [지금은 Kubespray로 프로젝트 이름이 변경 되었다고 한다](https://somaz.tistory.com/72)

### 1. 쿠버네티스 환경에서 Nginx 설정이 잘못 되었는가?

쿠버네티스 환경에서 Nginx 설정을 할 수 있는 경로는 2가지입니다

1. **인그레스 컨트롤러(ingress controller) 설정**
   - NGINX 인그레스 컨트롤러에서 어노테이션(annotation)을 통해 Nginx 설정을 적용
2. **NGINX 설정 커스터마이징**:
   - NGINX의 설정 파일인 `nginx.conf`를 직접 수정한 Pod을 생성

#### **인그레스 컨트롤러(ingress controller) 설정** 조절

쿠버네티스의 인그레스 컨트롤러는 외부 요청을 클러스터 내부 서비스로 라우팅하는 역할을 합니다.

먼저 카카오 크램폴린에서 기본으로 제공하는 Nginx 를 사용하고, 기존의 제가 설정한 관련 Pod들을 제거하였습니다

그 후 body size를 조정하였습니다

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
  annotations:
    nginx.ingress.kubernetes.io/proxy-body-size: "64m"
spec:
  rules:
  - http:
      paths:
      - path: /example-path
        pathType: Prefix
        backend:
          service:
            name: example-service
            port:
              number: 80
```

하지만, 여전히 문제는 해결 되지 않았습니다

#### 2. **NGINX 설정 커스터마이징**

NGINX 설정을 직접 수정하는 경우, `nginx.conf` 파일을 수정하여 Pod에 적용할 수 있습니다

```nginx
http {
    …

    client_max_body_size 64M;

    …
}
```

ConfigMap으로 설정을 주입하고, 직접 Nginx 이미지 패키징 할 때 설정 파일을 넣어 봤지만 여전히 문제는 해결 되지 않았습니다

### 2. 로그 확인 : Hint 발견

Nginx Pod을 띄우고, 1M 이하의 이미지는 받아지지만, 용량을 초과하는 경우에 Postman에 에러를 뱉고 있으니, 이미지 크기 제한 문제가 확실했습니다

Pod 로그를 확인해보니, 다른 API 엔드 포인트에 대한 요청은 로그로 남고 있는데 413 에러가 누락 되는 것을 확인하였습니다

Nginx Pod에 사용 된 이미지의 경우, 바디 사이즈만 조절 되었기 때문에 로그가 누락 될리가 없는데 수상했습니다

Nginx 기본 Docker 이미지를 사용했다면, Nginx 에러 로그가 기록 되어야 하기 때문입니다  
왜냐하면, Nginx 이미지의 기본 로그 레벨은 error이고, 413 에러는 기본 error 레벨에서 기록 되어야하기 때문이죠

먼가 제가 구성한 인프라의 문제가 아닐거라는 의심이 들었습니다

### 3. 로컬에서 동일한 환경 구성 후 테스트

의심되는 이미지(바디 사이즈 조절 된 기본 Nginx 이미지)를 로컬에서 테스해보았습니다

- 재현 방법
  - 기존의 NGINX 이미지 생성 후 로컬 BE 프로젝트에 연결
  - 80881로 NGINX 연결하고, Postman으로 큰 이미지 전송
  - NGINX 통과 후 BE 프로젝트 예외 반환 확인!

![로컬 NGINX 컨테이너 로그: 큰 이미지 요청이 NGINX를 통과해 백엔드에서 401을 반환](/_attachments/tistory-546-02.png)

큰 이미지가 결국 Nginx 이미지를 통과했으니, 제가 만든 이미지의 문제가 아닌거죠

## 해결

결론적으로 쿠버네티스 환경 관리자 분께 문의 드렸습니다

확인 결과 저희 서비스 앞 단의 크램폴린에서 설정한 Nginx 문제라 판단이 되었습니다

![이미지 제한 이슈 해결을 알린 카카오톡 대화](/_attachments/tistory-546-03.png)

그 결과 문제 해결!

이미지 퀄리티가 중요한 서비스에서 1M가 제한은 치명적이었고,  
팀 내에서 제가 배포를 맡고 있었어서 제 파트 문제라 스트레스를 많이 받았습니다

이미지 제한 문제 해결하며 개발 일정이 밀리기도 했구요  
그래도 해결하니까 매우 뿌듯했습니다

- 깨달은 점
  - 인프라 등 당연한 것들도 합리적인 의심을 할 필요가 있다
  - 협업 상황에서는 문제 진행 상황 공유와 적절한 시기에 시니어에게 도움을 요청하자
    - 될 때까지 잡고 늘어지다 개발 일정 밀리는 것은 일을 잘한다 할 수 없다

![휴대폰 화면 속 인생네컷 사진](/_attachments/tistory-546-04.png)
![휴대폰 화면 속 여러 장의 네컷 사진](/_attachments/tistory-546-05.png)

### TMI

그리고, 저희 팀 🐥 카카오 테크 캠퍼스 3단계 우수조로 뽑혔습니다 올 한해 제일 짜릿한 순간이었어요  
![카카오 테크 캠퍼스 수료식 카춘상 표지](/_attachments/tistory-546-06.jpg)

## 궁금했던 점

### proxy_body_size와 client_max_body_size의 차이

`client_max_body_size`와 `proxy_body_size`는 NGINX 설정에서 비슷한 역할을 하지만, 적용되는 컨텍스트(context)에 따라 다릅니다

1. **client_max_body_size**:

   - 이 설정은 클라이언트로부터 직접 받은 요청의 본문 크기를 제한합니다.
   - NGINX가 직접적으로 클라이언트의 요청을 처리할 때 사용됩니다.
   - 예를 들어, 클라이언트가 서버에 파일을 업로드하는 경우, `client_max_body_size`는 업로드할 수 있는 파일의 최대 크기를 제한합니다.
2. **proxy_body_size** (어노테이션: `nginx.ingress.kubernetes.io/proxy-body-size`):

   - 이 설정은 NGINX가 프록시 서버로 동작할 때, 업스트림 서버로 전송되는 요청 본문의 크기를 제한합니다.
   - 주로 인그레스 컨트롤러와 같이 NGINX가 프록시 역할을 하는 경우에 사용됩니다.
   - 예를 들어, 인그레스 컨트롤러를 통해 내부 서비스로 요청을 전달하는 경우, 이 설정은 프록시를 통해 전달되는 요청 본문의 최대 크기를 제한합니다.

#### 결론

- **직접 운영하는 NGINX 서버의 경우**

  - `client_max_body_size`를 `nginx.conf` 파일에서 설정합니다. 이는 NGINX가 클라이언트로부터 직접 요청을 받을 때 적용됩니다.
- **쿠버네티스 인그레스 컨트롤러 사용 시**

  - `nginx.ingress.kubernetes.io/proxy-body-size` 어노테이션을 사용하여 `proxy_body_size`를 설정합니다.
  - 이는 인그레스 컨트롤러를 통해 들어오는 요청에 대해 적용됩니다.

---

*2023-12-10에 [Tistory](https://berom.tistory.com/546)에 쓴 글을 옮겼습니다.*
