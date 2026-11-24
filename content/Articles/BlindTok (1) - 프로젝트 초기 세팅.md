---
aliases: []
date_created: 2023-03-29
date_modified: 2023-03-29
permalink: blindtok-project-setup
tags:
  - fastify
  - nodejs
  - typescript
  - backend
title: "BlindTok (1) - 프로젝트 초기 세팅"
---

## BlindTok (1) - 프로젝트 init

원활한 협업을 하기 위해서는 프로젝트 초반에 코드 린트나 커밋 규칙 등을 잘 정의하고 가는 것이 중요합니다

졸업 프로젝트인 BlindTok를 만들기에 앞서 프로젝트 초기 설정을 어떻게 하였는지 공유하기 위해 기록합니다

### 1. Code Format 및 Git ignore 파일 설정

#### Prettier : 코드 포맷터

Prettier는 코드 포맷터로, 프로젝트에서 사용하는 코딩 스타일을 일관되게 유지하는 데 도움을 줍니다.  
`.prettierrc` 파일을 사용하여 프로젝트별 Prettier 설정을 지정할 수 있습니다.  
예를 들어, 들여쓰기 크기, 따옴표 스타일, 줄바꿈 방식 등을 설정할 수 있습니다.

```json
{
  "arrowParens": "avoid",
  "bracketSpacing": false,
  "bracketSameLine": true,
  "printWidth": 150,
  "singleQuote": false,
  "trailingComma": "all",
  "semi": true,
  "tabWidth": 2
}
```

#### .gitignore : Git ignore 파일 설정

`.gitignore`: Git에서 무시할 파일과 디렉토리 목록을 포함하는 파일입니다.  
프로젝트를 개발하면서, 버전 관리에 포함시키지 않아야 하는 파일이나 디렉토리가 있습니다.

예를 들어, 빌드 결과물, 로그 파일, 개인적인 설정 파일 등이 해당됩니다.  
`.gitignore` 파일에 이러한 파일과 디렉토리를 목록으로 작성하면, Git은 그것들을 추적하지 않고 무시합니다.  
이를 통해 프로젝트의 불필요한 변경 사항을 제외할 수 있습니다.

### 2. 의존성 관리 툴 및 Typescript 패키지 설치

```bash
yarn init
yarn add fastify
yarn add --save-dev typescript ts-node fastify-plugin @types/node @types/fastify
yarn add tsconfig-paths
yarn add nodemon -g // nodemon은 global로 설치합니다
```

위의 패키지를 설치하고 tsconfig.path.json과 tsconfig.json을 생성합니다.  
tsconfig.path는 추후 프로젝트 경로 제어의 용이성을 위해 사용합니다

### 3. nodemon 설정 및 서버 인스턴스 생성

웹 개발 할 때 필수! 핫로딩을 하기 위한 nodemon을 설치하고, nodemon.json을 생성합니다

```json
{
  "watch": ["src"],
  "ext": "ts,json",
  "ignore": ["src/dev.ts"],
  "exec": "ts-node -r tsconfig-paths/register ./src/index.ts",
  "env": {
    "PORT": "4000"
  }
}
```

nodemon 설정의 간단한 해석은 다음과 같습니다:

- `"watch": ["src"]`
  - src 디렉터리를 감시하고 변화가 있을 때 애플리케이션을 자동으로 다시 시작합니다.
- `"ext" : ts,json"`
  - .ts 및 .json 확장자를 가진 파일의 변경 사항을 감시합니다.
- `"ignore" : ["src/dev.ts"]`
  - src/dev.ts 파일의 변경 사항을 무시합니다.
- `"exec": "ts-node -r tsconfig-paths/register ./src/index.ts"`
  - ts-node를 사용하여 ./src/index.ts 파일을 실행하고, tsconfig-paths/register를 이용해 경로 별칭을 해석합니다.
- `"env": { "PORT": "4000" }"`
  - 환경 변수 PORT를 4000으로 설정합니다.  
    이 설정을 사용하면, nodemon은 src 디렉터리 내의 TypeScript 및 JSON 파일 변경을 감지하고, 변경이 발생하면 애플리케이션을 자동으로 다시 시작합니다.

```ts
import Fastify, {FastifyInstance} from "fastify";
import {Server, IncomingMessage, ServerResponse} from "http";

const PORT: number = Number(process.env.PORT) || 4000;
const fastify: FastifyInstance<Server, IncomingMessage, ServerResponse> = Fastify();

async function start() {
  try {
    await fastify.listen({port: PORT, host: "0.0.0.0"});
    console.log(`server start! http://127.0.0.1:${PORT}/`);
  } catch (err: any) {
    console.log(`server loading error... ${err}`);
  }
}

start();
```

### 4. Cross-env 설치

```bash
yarn add cross-env
```

윈도우와 리눅스 등의 환경에서 동일하게 환경 변수를 가져가기 위해 cross-env를 사용합니다

예시를 하나 들어보겠습니다  
일단 전 프로젝트 세팅 시점에서는 환경에 따라서 서버 URI를 변경하고 싶어서, adam.json(아래 json 코드)에 서버 URI를 저장해두었습니다

```json
{
"server": {
	"prod": "http://localhost:4000",
	"local": "http://localhost:4000",
	"dev": "http://localhost:4000"
	}
}
```

저장된 값을 불러와서, 아래 config.ts에 아래와 같이 입력 합니다. 즉 제가 원하던 대로 어떻게 실행 시키느냐에 따라 다른 URI로 서버를 실행 시킬 수 있는 것입니다

```ts
import adam from "./adam.json";

const isProd = process.env.NODE_ENV === "production";
const isLocal = process.env.NODE_ENV === "local";
const SERVER_URI = isProd ? adam.server.prod : isLocal ? adam.server.local : adam.server.dev;
export {SERVER_URI, adam};
```

이 외에도 DB 세팅 등 환경 변수 등을 설정 할 때 유용하게 사용 할 수 있습니다

### 마치며

이제 프로젝트 기본 설정이 완료 되었습니다

코드 스타일과 무시 할 파일을 규정했고, 의존성 관리와 nodemon 설정을 완료하였습니다  
마지막으로 서버 인스턴스 생성 및 확인까지 했으니 다음 시간 부터는 미들웨어를 붙이고 실 개발을 들어가겠습니다

---

*2023-03-29에 [Tistory](https://berom.tistory.com/90)에 쓴 글을 옮겼습니다.*
