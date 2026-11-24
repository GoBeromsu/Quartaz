---
aliases: []
date_created: 2022-08-14
date_modified: 2022-08-14
permalink: how-to-use-docker
tags:
  - docker
title: "Docker 사용법"
---

- 모든 이미지 제거

```shell
docker rm $(docker ps -a -q)
```

- 이미지 직접 접근

```shell
docker exec -it [container_id] bash
```

- 이미지 조회

```shell
docker images -a
```

## Docker 설치

```shell
// apt 인덱스 업데이트
$ sudo apt-get update

// repository over HTTPS를 사용하기 위한 패키지 설치
$ sudo apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common

// GPG Key를 추가하고 확인
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo apt-key fingerprint 0EBFCD88

pub   rsa4096 2017-02-22 [SCEA]
      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
sub   rsa4096 2017-02-22 [S]

// 저장소 추가하고 apt 인덱스 업데이트
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ sudo apt-get update

// Docker 설치
$ sudo apt-get install docker-ce docker-ce-cli containerd.io

// Docker 서비스 시작
$ sudo systemctl start docker
```

## Error

socket 파일이 없는 경우

- Docker를 설치하고 재부팅하면 된다!

---

*2022-08-14에 [GitHub Pages](https://goberomsu.github.io/2022/08/14/howToUseDocker/)에 쓴 글을 옮겼습니다.*
