---
aliases: []
date_created: 2023-05-08
date_modified: 2023-05-08
permalink: blindtok-entity-service-api
tags:
  - typeorm
  - fastify
  - nodejs
  - backend
title: "BlindTok (4) - Entity와 Service를 너머 API까지"
---

Entity와 Service를 생성하며, 특이 사항들을 기록합니다.  
파일을 어떻게 저장했는지, 친구 관계들을 어떻게 인덱스 하나로 처리했는지 등 제가 겪은 어려움을 기록합니다

## File 기능 구현의 어려움

저희 서비스에서는 user의 이미지와 음악 파일들을 저장해야하기에 기존의 music 테이블을 지우고, file 테이블을 생성하도록 하였습니다.

### File Id에 UUID부여

uudi를 사용한 이유는 uuid를 사용하면 전역적으로 유니크한 아이디를 가지기 때문에 테이블에서 중복 문제를 해결 할 수 있습니다.

또한 pk를 자동으로 증가시키는 것보다 추측이나 예측이 어렵기 때문에 보안이 강화됩니다

```ts
import {v4 as uuidv4} from "uuid";
export const generatedUUID = () => {
const uuid: string = uuidv4();
return uuid.replace(/-/gi, "");
};
```

### Fastify-multipart 처리

multipart는 fastify에서 파일 업로드/다운로드를 구현하기 위한 라이브러리입니다.  
일단은 fastify에 multipart 라이브러리를 다운로드해야 합니다.

```ts
//파일 스토리지를 다루기 위함
fastify.register(fastifyMultipart, {
	attachFieldsToBody: true,
	limits: {
	fileSize: 10 * 1024 * 1024,
	},
});
```

이 때 multipart의 filesize 제한이 있으므로, 미리 풀어두면 좋습니다.  
이미지가 잘려서 파일 크기를 확인했더니 1MB로 고정 되어 있는 것을 보고, 기본 파일 크기 제한이 있음을 알았습니다.

사진과 userid를 post의 body에 담아 보내기 위해, attachFieldToBody 옵션을 활성화 하였습니다  
body에 userid를 넘겼는데, 계속 누락되는 문제가 발생하였습니다.  
알고보니 multipart를 사용하면 part에 field로 userid를 받기 때문에 body에 드러나지 않았습니다

일단 multipart의 body 옵션을 활성화하면, body 내에서 데이터를 추출 할 수 있습니다.  
원래라면 바로 `const {userid} = req.body`로 데이터를 뽑아 낼 수 있습니다.  
하지만, multipart를 사용하고 있기 때문에 multipart의 field value를 가져오는식으로 userid를 얻었습니다

```ts
  fastify.post("/", async (req: FastifyRequest<{Body: {file: any; userid: any}}>, reply: FastifyReply) => {
    const userid = req.body.userid?.value;
    const file = req.body.file;
    if (!file) {
      reply.status(400).send({error: "No file provided"});
      return;
    }
    console.log(file);
    const fileresult = [];
    // const part = part?.file || null; // stream
    const filename = file?.filename || "";
    const filetype = file?.mimetype || "";
    const fileid = await makefile(userid, file, filename, filetype);
    fileresult.push(fileid);
    reply.send({files: fileresult, filetype});
  });
```

### 파일 저장 without 파일 확장자

![날짜별 폴더에 확장자 없이 UUID 이름으로 저장된 파일들](/_attachments/tistory-224-01.png)  
파일의 확장자를 제거하고, 파일을 uuid를 이름으로 저장하면, 여러 장점이 있습니다.

길고 복잡한 시스템에 문제를 일으킬 수 있는 특수 문자가 섞인 이름으로부터 해방이 됩니다  
공격자가 저장중인 파일 유형을 파악하기 어렵게 함으로써 보안 계층을 하나 추가하는 효과를 얻습니다

```ts
  async function makefile(userid: any, part: any, filename: string, filetype: string) {
    const mimetype = part.mimetype;
    const fileid = generatedUUID();
    const img_root = "public/temp";
    const filepath = img_root + "/" + format(new Date(), "yyyy/MM/dd/HH");
    if (!fs.existsSync(filepath)) {
      fs.mkdirSync(filepath, {recursive: true});
    }
    const filesize = part.file.bytesRead;
    await addFile({userid: userid, fileid: fileid, filename, filepath, filesize, mimetype, filetype});
    // 확장자 없이 저장 + 파일 중복을 피하기 위해 fileid로 저장
    const newfilepath = filepath + "/" + fileid;

    const buffer = await part.toBuffer();
    await pump(Readable.from(buffer), fs.createWriteStream(newfilepath));

    return {fileid, filename, filepath: newfilepath};
  }
```

날려버린 파일 확장자는 db에 저장해뒀다가, 파일을 클라이언트가 요청하면, 확장자와 fileid로 data를 불러와서 클라이언트에게 전달한다

```ts
fastify.get("/:fileid", async (req: FastifyRequest<{Params: {fileid: string}}>, reply: FastifyReply) => {
	const {fileid} = req.params;
	const result = await getFileInfo(fileid);
	if (result) {
		const ext = result.mimetype.split("/")[1];
		const filepath = `${result?.filepath}/${fileid}`;
		const absolutepath = path.join(__dirname, "../../../../") + filepath;
		const filename = encodeURI(result.filename);
		const file = fs.readFileSync(absolutepath);
		reply.headers({
		"Content-Disposition": `attachment; filename=${filename}`,
		"Content-Transfer-Encoding": `binary`,
		"Content-Type": `application/octet-stream`,
		});
		reply.send(file);
	} else {
		reply.send(result);
}
```

## 친구 기능 구현의 어려움 Feat 그냥 친구 없는거도 좋을지도…?

### 관계 담당 UserRelation 테이블 생성

친구 관계는 UserRelation으로 생성하는데, User를 SelfJoin 하고, status로 친구 관계를 생성하였다.  
status는 추후 친구 차단 등의 기능으로 확장할 것을 염두하고 만들었다

```ts
export default class UserRelation extends BaseEntity {
	@PrimaryGeneratedColumn({type: COLUMN_TYPE_BIGINT})
	relationid: number;

	@Column()
	userid: number;
	@Column()
	friendid: number;

	@ManyToOne(() => User, user => user.userid)
	@JoinColumn({name: "userid"})
	user: User;

	@ManyToOne(() => User, user => user.friends)
	@JoinColumn({name: "friendid"})
	friend: User[];

	@Column({type: "enum", enum: ["normal", "ban"], default: "normal"})
	status: string;

}
```

### 친구 만들 때마다 Table Index를 2개 차지하는 문제 해결

위의 테이블을 보면 알 수 있다시피, userid와 friendid를 만들어서, 한 user에게 친구를 여러명 추가하는 구조의 테이블이다.

내가 원한 건, userid만 주면 friendid로 내가 등록 되어 있는 user들도 출력 되길 원했다  
처음엔 친구를 추가 할 때 쿼리를 2개 날려서 (userid,friendid),(friendid,userid) 식으로 index를 2개 차지해서 만들까 싶었다

하지만, 테이블 낭비인거 같아서 query를 수정해서 해결하였다  
현재 user의 친구와 현재 user를 친구로 두고 있는 user까지 조회 하도록 하였다

```ts
export async function getFriendInfo(userid: number) {
	return await UserRelation.find({where: [{userid: userid}, {friend: {userid: userid}}]});
}
```

그 결과, 2번 user의 모든 친구를 불러오는 쿼리가 잘 작동함을 알 수 있다.  
![2번 유저의 친구 관계를 모두 불러온 조회 결과](/_attachments/tistory-224-02.png)

## SSO 로그인 구현의 어려움

테이블 구현은 간단하다.  
User 엔티티와 join하고, email과 type(goole, naver 등) 그리고 ssoid를 입력 받도록 한다

JWT 토큰으로 로그인하는 구조라서 자세한 내용은 다른 게시물에 추가로 기술 하겠다

```ts
export default class UserLogin extends BaseEntity {
	@Column({type: COLUMN_TYPE_BIGINT})
	userid: number;

	@PrimaryColumn({length: 100})
	ssoid: string;

	@ManyToOne(() => User, user => user.userid)
	@JoinColumn({name: "userid"})
	user: User;

	@Column({nullable: true})
	email: string;

	@Column({type: COLUMN_TYPE_ENUM, enum: LOGIN_TYPE})
	type: string;
	}
```

### Oauth Client 생성

fastify에서는 다양한 플랫폼의 SSO 기능 구현을 지원하는 라이브러리가 존재한다.  
난 `@fastify/oauth2`를 사용하였다.

구글 SSO 로그인을 위해서 Oauth Client를 구현한다  
유출되면 위험한 데이터들은 json 파일로 은닉한다

```ts
const googleAuth = {
	name: "googleOAuth2",
	scope: ["email", "profile"],
	credentials: {
		client: {id: _google.clientId, secret: _google.clientSecret},
		auth: oauth2.GOOGLE_CONFIGURATION,
	},
	startRedirectPath: _google.redirectPath,
	callbackUri: _google.callbackUri,
	callbackUriParams: {
		access_type: "offline",
	},
};
export {googleAuth};
```

미들웨어에 생성된 oauth client를 등록한다

```ts
fastify.register(oauth2, googleAuth);
```

구글 SSO 로그인을 위해서는 [구글 OAuth 등록과 webservice 등록을 해야 한다](https://berom.tistory.com/30).  
이 때 테스트 사용자와 callback URI 등을 설정하고, client id와 secret을 받는다

sso 로그인 흐름을 보면, 바로 로그인 후 토큰을 주는 것이 아니라, 중간 과정이 있다  
어떤 데이터(email, storage)를 원하는지 확인하는 과정인데, 이 과정이 끝나고 토큰을 발행 할 때 callback URI가 필요하다

**callback uri 등의 경로 지정에 꼭꼭 유의하자!** 경로 설정이 잘못 되서 삽질하는 경우가 잦다

```ts
fastify.get("/callback", async (req: FastifyRequest, reply: FastifyReply) => {
	console.log(req);
	const {token} = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(req);
	const {id_token}: any = token;
	const data = parseJWT(id_token);
	const ssoid = data?.sub;
	const email = data?.email;
	const nickname = data?.name;
	const login = await checkSSO(LOGIN_TYPE.GOOGLE, ssoid, {email, nickname});
	reply.send(login);
});
```

- SSO 관련 레퍼런스
  - [카카오 sso 로그인 구현](https://berom.tistory.com/35)
  - [구글 sso 로그인 구현 방법 with 리액트](https://berom.tistory.com/30)

### Token을 쿠기에 저장

로그인 할 때 마다 토큰을 발급 받는 것은 매우 번거롭다.  
이 때를 위해 access token 뿐만 아니라 refresh 토큰도 존재한다.

앞선 과정을 거치면 token을 발급 받는데, 발급 받은 쿠키에 저장한다.  
대신 보안을 위해 아래와 같이 유효기간을 설정한다

```ts
reply.cookie("refresh_token", refreshToken, {path: "/", signed: true});
reply.cookie("access_token", accessToken, {path: "/", signed: true});
```

로그아웃을 할 때는 반대로, 토큰들의 유효기간은 0으로 설정함으로써 세션이 탈취 되는 것을 방어 할수도 있다

## 레퍼런스

- [BlindTok (1) - 프로젝트 초기 세팅](https://berom.tistory.com/90)
- [BlindTok (2) - 프로젝트 CI 구성](https://berom.tistory.com/97)
- [BlindTok (2) - 프로젝트 CI 구성](https://berom.tistory.com/97)
- [BlindTok (3) - DB 연결 및 테이블 설계](https://berom.tistory.com/122)

### 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-05-08에 [Tistory](https://berom.tistory.com/224)에 쓴 글을 옮겼습니다.*
