---
aliases: []
date_created: 2023-04-05
date_modified: 2023-04-05
permalink: blindtok-db-connection-table-design
tags:
  - postgresql
  - typeorm
  - fastify
  - backend
title: "BlindTok (3) - DB 연결 및 테이블 설계"
---

서버 인스턴스를 생성했으므로 다음은 테이블을 설계하고 DB를 연결할 차례이다.  
프로젝트의 빠른 진행을 위해 테이블과 기능 명세는 구체적으로 잡고 가야 하기 때문에 오늘은 테이블 설계를 하는 시간을 가졌다.

개발도 해야 하는데, 시험 기간이라 할게 산더미다

## PostgreSQL DB 연결

```typescript
import config from "@config/ormconfig";
import {DataSource, EntityManager} from "typeorm";

const {host, port, username, password, database, synchronize, logging, entities, migrations} = config;
let _datasource: DataSource;

export const initDatasource = async () => {
  if (_datasource == null) {
    const datasource = new DataSource({
      type: "postgres",
      host,
      port,
      username,
      password,
      database,
      synchronize,
      logging,
      entities,
      migrations,
    });

    try {
      const startDate = new Date();
      _datasource = await datasource.initialize();
      const endDate = new Date();
      console.log(`database connected! elapsed time ${endDate.getTime() - startDate.getTime()}ms`);
    } catch (err: any) {
      throw new Error(err);
    }
  }
  return _datasource;
};
```

lib 폴더에 db.ts를 만들어 db를 초기화하고 연결하는 함수를 만들었다  
그 후, 처음 서버 인스턴스를 실행 시킬 때 불러들임으롬써 DB를 연결한다

```ts
const PORT: number = Number(process.env.PORT) || 4000;
const fastify: FastifyInstance<Server, IncomingMessage, ServerResponse> = Fastify();

async function start() {
  try {
    await initDatasource()
    await fastify.listen({port: PORT, host: "0.0.0.0"});
    console.log(`server start! http://127.0.0.1:${PORT}/`);
  } catch (err: any) {
    console.log(`server loading error… ${err}`);
  }
}

start();
```

아래와 같이 잘 연결 된 것을 확인 할 수 있다.  
![database connected!와 server start! 로그](/_attachments/tistory-122-01.png)

## 테이블 설계

우리 프로젝트의 테이블을 구성하는 시간을 가졌다. 이를 정리하면 아래와 같다

- User
  - 기능: 사용자 정보를 저장합니다
  - 설명: 사용자의 기본 정보를 저장하는 테이블로, 회원 가입한 사용자의 이메일, 닉네임 등의 정보가 들어갑니다.
    - 필요한 경우, 비밀번호 필드도 추가할 수 있습니다. 로그인 및 인증에 사용되는 정보가 포함됩니다.
- User_meta
  - 기능 : 사용자의 메타 데이터를 저장합니다
  - 설명 : 사용자의 프로필 사진 URL과 프로필 메시지와 같은 메타 데이터를 저장하는 테이블입니다.
    - User 테이블과 1:1 관계를 맺어 사용자별로 메타 데이터를 저장할 수 있습니다.
- Friends
  - 기능: 사용자 간 친구 관계를 저장합니다
  - 설명: 사용자와 친구의 관계를 저장하는 테이블로, 두 사용자의 ID를 외래키로 사용하여 관계를 표현합니다.
    - 친구 추가 및 삭제 기능을 관리하는데 사용됩니다.
- Audio
  - 기능: 사용자의 오디오 파일 정보를 저장합니다
  - 설명: 사용자가 업로드한 오디오 파일의 정보를 저장하는 테이블입니다.
    - 오디오 파일은 외부 스토리지 서비스에 저장되고, 파일의 URL이 이 테이블에 저장됩니다.
    - 사용자별로 오디오 파일을 관리할 수 있도록 User 테이블과 연결됩니다.
- Chat
  - 기능: 사용자 간의 채팅 데이터를 저장합니다.
  - 설명: 사용자 간의 채팅 데이터를 저장하는 테이블로, 메시지를 보낸 사용자와 받는 사용자의 ID를 외래키로 사용하여 관계를 표현합니다.
    - 메시지 내용과 함께 메시지가 전송된 시간 정보도 저장합니다.
    - 이 테이블을 통해 사용자 간의 채팅 기록을 관리할 수 있습니다

### 테이블의 세부 내용

![User, User_meta, Chat, friends, audio 테이블의 필드별 세부 내용](/_attachments/tistory-122-02.png)

### 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-04-05에 [Tistory](https://berom.tistory.com/122)에 쓴 글을 옮겼습니다.*
