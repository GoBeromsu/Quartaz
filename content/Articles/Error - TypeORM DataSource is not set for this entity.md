---
aliases: []
date_created: 2023-02-14
date_modified: 2023-02-14
permalink: typeorm-datasource-not-set-yarn-lock
tags:
  - typeorm
  - nodejs
  - yarn
  - troubleshooting
title: "Error - TypeORM DataSource is not set for this entity"
---

# TypeORM DataSource is Not Set for This Entity Feat yarn.lock

팀원들의 코드를 머지하고 났더니, 일부 팀원들에게서 DataSource is not set for this entity 에러가 발생했다.

## 접근 방식

### 프론트에서 날린 Axios?

```ts
const handleLoginSuccess = async (code: string) => {
    const {data} = await axios.post("http://localhost:4000/auth/google/callback", {code});
    //FIXME: 유저가 등록되어 있지 않은 경우 미리 데이터 저장하면, user id가 누락 됨
    setStoredUser(data);
    const {status} = data;
    const {ssoid, userid} = data;
```

에러를 처음 발견한 것은 정확한 URI를 입력했는데 undefined post 뱉어서였다  
우린 서비스를 프론트와 백엔드를 분리하고, 둘 사이의 데이터는 axios를 사용했다.

콘솔에서 찍힌 위치를 보니 login 페이지에서 SSO에서 토큰을 받아오는 부분이었다.

### API가 잘못 된 것인가?

URI에 문제가 없으므로, API를 점검했다. 백엔드에서는 fastify-typeORM로 서버를 만들고 있다.  
API 호출하는 부분에서 다른 모듈을 호출하는 console.log()를 찍어 봤는데, 여전히 500에러가 발생했다.

```ts
fastify.post("/callback", async (req: FastifyRequest<{Body: {code: any}}>, reply: FastifyReply) => {
    const {tokens} = await oAuth2Client.getToken(req.body.code);
    console.log("tokens : ",tokens)
    const {id_token}: any = tokens;
    const profile = parseJWT(id_token);
    const ssoid = profile?.sub;
    const email = profile?.email;
    const nickname = profile?.name;
    console.log("Parsed jwt >> ", profile);
    const login = await checkSSO(LOGIN_TYPE.GOOGLE, ssoid, {email, nickname});
    console.log("login data : ", login )
    console.log("login ", login);
    reply.send(login);
});
```

API의 다른 부분은 작동하나 싶어 postman으로 현재 유저들을 전부 출력하도록 했다. 여기서도 500 에러가 동일하게 발생했다.  
대신 처음으로 DataSource is Not Set for This Entity를 페이지에 확인했다.

```ts
fastify.get("/", async (req: FastifyRequest, reply: FastifyReply) => {
	const users = await getUserList();
	reply.send(users);
});
```

### TypeORM 문제이지 않을까?

TypeORM Entity 부분이나 초기 설정이 잘못 되었을거라 생각했다. 정확히 Entity를 호출하는 부분에서 발생했음을 확인했고, 데이터베이스 커넥트는 로그를 통해 확인했기 때문이다.  
하지만, Entity 부분에서 더 파고 들어갈 부분이 없었다. 더 이상은 내가 짠 코드가 아닌 라이브러리에서 호출하는 것들이었기 때문이다.

대신 설정 문제지 않을까 의심이 들었다. 우리 팀은 config 폴더 하위에 josn으로 서버와 데이터베이스의 민감한 정보를 저장하고, gitignore로 숨겨둔다.  
즉, 각자 개발을 할 때 충분히 변수가 생길 수 있을거라 생각이 들었다.

```ts
import localConfig from "./ormconfig.local.json";
import devConfig from "./ormconfig.dev.json";
import prodConfig from "./ormconfig.prod.json";

const isProd = process.env.NODE_ENV === "production";
const isLocal = process.env.NODE_ENV === "local";

export default isProd ? prodConfig : isLocal ? localConfig : devConfig;
```

### 도대체, 뭐가 문제냐

하지만, 설정 값을 동일하게 해도 문제가 해결 되지 않았다. 이 때 다른 팀원이 typeORM 버전이 다른게 아니냐는 의문을 던졌다.  
Package.json으로 의존성 관리를 하고 있는데, 그런 일이 일어날까 싶었다. 근데 마지막 의심 되는 부분은 의존성 밖에 없어 다시 확인했다

혹시나 싶어 확인한 package.json은 모두가 동일하게 가지고 있다. 이 때 들어온 것은 yarn.lock이다.  
최근 혼자 사이드 프로젝트를 하던 중 yarn.lock 때문에 에러가 발생한 적이 있었기 때문에 불현듯 저거 아닌가 싶었다

## 해결 방법 : 범인은, yarn.lock

```text
typeorm@^0.3.6:
  version "0.3.12"
```

yarn.lock을 확인했는데 찾았다!! 문제가 발생한 팀원들은 나와 yarn.lock의 typeorm 버전이 달랐다…  
**내 yarn.lock 파일을 공유했더니 문제는 해결 되었다**

### 왜 yarn.lock을 쓰는가?

결론 내가 yarn.lock의 용도를 잘 몰라 발생한 휴먼에러였다

node.js 진영에서 패키지 관리는 package.json에서 한다.  
npm 또는 yarn을 하면 package.json에 포함된 의존성 패키지들이 다운 받아 설치 되고, node_modules에 저장된다.

이 때 발생하는 문제는 의존성 패키지 다운로드를 받는 그 시점의 latest 버전을 가져오는게 문제다.  
즉 팀으로 개발을 할 때, 각자 다른 버전의 라이브러리를 다운로드 받을 수 있다는거다 (신입 사원이나 새로운 팀원이 들어왔을 때? )

lock 파일은 말 그대로 프로젝트 처음 생성 할 때의 버전으로 라이브러리들을 고정해버린다  
즉 lock을 가지고 모두가 동일한 버전으로 개발을 하게 되는거다

---

*2023-02-14에 [Tistory](https://berom.tistory.com/37)에 쓴 글을 옮겼습니다.*
