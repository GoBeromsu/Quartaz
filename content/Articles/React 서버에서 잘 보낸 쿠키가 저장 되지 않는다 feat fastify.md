---
aliases: []
date_created: 2023-02-09
date_modified: 2023-02-09
permalink: react-fastify-cookie-not-saved
tags:
  - react
  - fastify
  - cookie
  - cors
  - troubleshooting
title: "React 서버에서 잘 보낸 쿠키가 저장 되지 않는다 feat fastify"
---

## Intro. 왜 쿠키가 저장 되지 않는가?

개발자 도구의 애플리케이션에 서버에서 보낸 쿠키가 저장되지 않는 문제가 발생했다

처음에는 쿠키를 서버에서 보내지 않는건가 싶어 개발자 도구의 네트워크를 켜서 쿠키가 같이 오는 것을 확인했다. 서버에서는 쿠키를 잘 보내주고 있었다

나의 경우 fastify 백엔드 서버와 react가 별도로 구동 되고 있었다.  
두 애플리케이션 간의 연결은 axios를 사용하였다.  
이번 게시물에서는 무엇이 문제였는지 해결하는 과정을 기록한다

## SameSite=None 및 Secure 속성 설정

![SameSite 속성이 없어 Lax로 처리되어 쿠키가 차단되었다는 브라우저 경고](/_attachments/tistory-33-01.png)

개발자 도구의 네트워크 부분을 보는데 노란색 경고가 뜨고 있었다.  
cookie의 SameSite 속성을 default 값인 lax로 설정했다는 것이다

`SameSite`는 웹 애플리케이션에서 CSRF(교차 사이트 요청 위조) 공격을 방지하기 위해 HTTP 쿠키에서 설정할 수 있는 속성이다.  
**Lax**로 옵션이 설정된 경우 쿠키는 동일한 사이트 내의 요청 및 다른 사이트의 GET 요청으로 전송된다.  
즉 URI가 같아도 포트가 다르면 다른 사이트로 인식 되는데,axio post로 토큰을 받아오니 발생한 경고였다

해결 방법은 sameSite의 속성을 none으로 두면 된다. 대신 none의 경우 secure 속성도 설정해야 한다.  
![SameSite=None에 Secure 속성이 없어 쿠키가 차단되었다는 브라우저 경고](/_attachments/tistory-33-02.png)

cookie를 보내주는 서버에서 쿠키의 속성을 변경 시켜주자

```ts
fastify.register(cookie, {
	parseOptions: {httpOnly: true, sameSite: "none", secure: true},
});
```

express를 사용하는 사람도 똑같이 express에 미들웨어를 붙이듯이 cookie 추가하고, 속성을 정의하면 된다.

- cookie의 SameSite 세부 속성
  - 서로 다른 도메인에서의 쿠키전송에 관한 보안을 목적으로 사용된다
  - none
    - 도메인이 다른 경우(cross-origin)에도 브라우저가 쿠키를 포함해서 요청을 보낼 수 있음.
    - cross-origin이라면 none 만이 유일하게 동작
  - strict
    - 도메인이 다른 경우(cross-origin) 브라우저가 쿠키를 포함하지 않음.
  - lax
    - strict과 비슷하지만, 다른 도메인 내에서 same-origin의 도메인 주소를 가리키는 링크를 클릭한 경우, 해당 요청에 대해서만 쿠키를 포함해줌.

## withCredentials : True

해답은 withCredentials 설정에 있었다 `withCredentials` 옵션은 일종의 인증서이다.  
**서로 다른 도메인**(크로스 도메인)에 요청을 보낼 때 요청에 `credential` 정보를 담아서 보낼 지를 결정한다

서로 다른 서버에서 데이터가 오가는 CORS에서는 양측 서버에 credentials 설정을 true로 바꿔줘야 한다.

- React

```ts
const result = await axios.post(
	"http://localhost:4000/auth/token",
	{userid: userid, ssoid: ssoid,},
	{ withCredentials: true }
);
```

- fastify

```ts
/* CORS */
fastify.register(cors, (_: any) => {
	return (_: any, callback: (error: Error | null, options: FastifyCorsOptions) => void) => {
		let corsOption: FastifyCorsOptions = {origin: true, credentials: true};
		return callback(null, corsOption);
	};
});
```

## 마치며

사실 설정을 했는데도 쿠키에 받아온 토큰이 저장되지 않은적이 있는데, 쿠키 모두 지우고 다시 서버를 부팅하니까 해결 되었다  
axios 등을 자주 쓰게 되는데, 리액트에 대한 이해 부족으로 코드가 지저분 함을 느낀다 공부하자

---

*2023-02-09에 [Tistory](https://berom.tistory.com/33)에 쓴 글을 옮겼습니다.*
