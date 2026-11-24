---
aliases: []
date_created: 2022-07-28
date_modified: 2022-07-28
permalink: kurento-docker-setup-windows
tags:
  - docker
  - kurento
  - webrtc
title: "Kurento Docker로 설치하는 방법 feat Window"
---

## 현재 상황

- Window Docker Client가 있긴 하지만, 프로젝트 초기기도 하구 이참에 그냥 WSL에서 쓰는게 더 편할거라 생각했다

## 준비 사항

- WSL2
- ~~Kali Linux~~
  - Kali도 데비안 계열이라 상관 없을거라 생각했는데 패키지 저장소 관련 에러가 막 터져서 우분투로 갔다
  - 22.07.30 기준 Ubuntu가 정신 건강에 매우 좋다
- Ubuntu 18.0.5
- Docker

## WSL2에 Docker 설치

1.  Docker 설치

    - [Docker 홈페이지](https://www.docker.com/products/docker-desktop/)에 들어가서 윈도우용 클라이언트를 설치한다  
      ![image](/_attachments/ghio-kurento-docker-setup-windows-01.png)

    - 설치가 완료되면 Docker를 열어서 Setting - Resource에서 WSL2와 연동 시키고, Restart 하면 된다.

    - 이제 docker images 커맨드를 입력하면 아래와 같이 실행되는 것을 알 수 있다

    ![Docker 설치 완료!](/_attachments/ghio-kurento-docker-setup-windows-02.png)

2.  Docker 저장소에서 Kurento Server 가져오자

    ``` shell
    docker pull kurento/kurento-media-server:latest
    ```

3.  Kurento Media Server 실행

```shell
docker run -d --name kms --network host \kurento/kurento-media-server:latest
```

- Docker 옵션의 의미는 아래와 같다

  - -d : 백그라운드 실행을 하겠다
  - –name : 현재 실행 시킬 이미지의 이름(별칭)을 정한다
  - –network: 컨테이너의 네트워크 설정
    - host : 컨테이너를 호스트 컴퓨터와 동일한 네트워크에서 돌리겠다는 의미이다.

- host 적고 한 칸 띄고 \kurento/kurento-media-server:latest로 적어야한다

  ``` shell
  docker run --rm \-p 8888:8888/tcp \-p 5000-5050:5000-5050/udp \-e KMS_MIN_PORT=5000 \-e KMS_MAX_PORT=5050 \kurento/kurento-media-server:latest
  ```

- 마지막으로 실행 중인 미디어 서버의 포트 설정을 해준다

## Error

### Hardware assisted virtualization and data execution protection must be enabled in the BIOS

- 제어판 설정에서 Hypervisor, 가상 머신이 켜져 있었고 혹시 몰라 컨테이너도 켰음에도 에러가 발생하였다. 보통 나의 경우에는 윈도우에서 Docker의 경우 Hypervisor를 거쳐서 실행되는데 자동 실행 등을 꺼놓아서 에러를 겪었다

1.  Hyper-v 재활성화

Powershell을 관리자 권한으로 실행 한다. 아래 커맨드를 입력 후 재부팅한다

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

2.  Hyper-v 자동실행 설정

Powershell을 관리자 권한으로 실행 후 아래 명령어 입력하고 재부팅한다.

```powershell
bcdedit /set hypervisorlaunchtype auto
```

### gnupg, gnupg2 and gnupg1 do not seem to be installed, but one of them is required for this operation

- apt-key adv –keyserver keyserver.ubuntu.com:80 –recv-keys 5AFA7A83 커맨드 입력시 에러 발생

  - 쿠렌토 저장소를 추가하려는 상황이었다

  ``` shell
  apt-get update
  apt-get install gnupg
  ```

### The following signatures couldn’t be verified because the public key is not available: NO_PUBKEY 7EA0A9C3F273FCD8

- 패키지를 다운로드 받으려는데 공개키가 없다고 하는 상황이다

- 그냥 없는 공키를 아래 커맨드에 넣어 추가하면 된다

  ``` shell
  sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys <PUBKEY>
  ```

### The repository ‘<https://download.docker.com/linux/ubuntu> kali-rolling Release’ does not have a Release file

- 칼리 리눅스와 우분투에서 별 차이 없이 Set up이 될 줄 알았는데 아니다

  - 데비안 계열 커맨드를 사용해서 저장소를 다시 설정해 주어야한다.

  ``` shell
  printf "%s\n" "deb [arch=amd64] https://download.docker.com/linux/debian buster stable" |\
  sudo tee /etc/apt/sources.list.d/docker-ce.list
  curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
  sudo apt-get update
  sudo apt-get install docker-ce docker-ce-cli containerd.io
  ```

## Reference

[쿠렌토 서버 Docker로 실행시켜보기](https://gh402.tistory.com/44?category=935378)  
[칼리 리눅스에 도커설치하는 방법](https://unix.stackexchange.com/questions/630643/how-to-install-docker-ce-in-kali-linux)

---

*2022-07-28에 [GitHub Pages](https://goberomsu.github.io/2022/07/28/kurentoSetUp/)에 쓴 글을 옮겼습니다.*
