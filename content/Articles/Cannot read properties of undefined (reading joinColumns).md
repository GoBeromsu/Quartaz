---
aliases: []
date_created: 2023-05-08
date_modified: 2023-05-08
permalink: typeorm-joincolumns-undefined
tags:
  - typeorm
  - nodejs
  - troubleshooting
title: "Cannot read properties of undefined (reading 'joinColumns')"
---

프로젝트 개발을 하던 도중 Postman으로 User api 테스트를 하는데 아래 에러가 발생하였습니다.

```json
{
	"statusCode": 500,
	"error": "Internal Server Error",
	"message": "Cannot read properties of undefined (reading 'joinColumns')"
}
```

에러가 발생 한 곳은 Entity-Service-API 흐름 중 Entity에서 발생하였습니다.

오늘은 에러 해결 과정과 그 이유를 파악하도록 하겠습니다

## 문제 원인

![inverseSide를 meta.userid로 지정한 User 엔티티](/_attachments/tistory-223-01.png)  
위는 제가 작성한 User 엔티티의 일부분입니다. 유저의 Meta 정보를 UserMeta 엔티티를 참조해서 가져옵니다

이 때 `meta => meta.userid` 부분이 잘못 되었습니다.  
관계를 나타내는 부분에 PK가 등장했기에 에러가 발생한 것입니다  
meta.userid는 엔티티 간의 관계를 나타내는 관계를 나타내는 것이 아니라 UserMeta의 PK입니다.

[TypeORM Docs](https://orkhan.gitbook.io/typeorm/docs/one-to-one-relations)의 join 예시 코드를 보면 정답이 나옵니다  
join을 원하는 엔티티의 속성이 아니라, **테이블 자체를 명시해야 합니다**

**Profile Entity**

```ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gender: string

    @Column()
    photo: string

    @OneToOne(() => User, (user) => user.profile) // specify inverse side as a second parameter
    user: User
}
```

**User Entity**

```ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm"
import { Profile } from "./Profile"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToOne(() => Profile, (profile) => profile.user) // specify inverse side as a second parameter
    @JoinColumn()
    profile: Profile
}
```

## 해결 방법

`meta.user`: `UserMeta` 엔티티의 `user` 속성을 말하며, 관련된 `User` 엔티티에 대한 참조입니다. 이것은 `User`와 `UserMeta` 사이의 일대일 관계의 역방향을 정의하는 올바른 방법입니다.

```ts
@OneToOne(() => User, user => user.meta) meta: UserMeta;
```

```ts
@OneToOne(() => User, user => user.userid) @JoinColumn({name: "userid"}) user: User;
```

`meta.userid`: `UserMeta` 엔터티의 `userid` 속성을 의미하며 관계 속성이 아닌 기본 열입니다. `meta.userid`를 사용하는 것은 `User`와 `UserMeta` 엔티티 간의 관계를 나타내지 않으므로 올바르지 않습니다. 이것이 `joinColumns`와 관련된 500 오류의 원인입니다

이 문제를 해결하려면 `User` 및 `UserMeta` 엔티티 간의 관계를 정의할 때 `meta.userid` 대신 `meta.user`를 사용해야 합니다.  
다음과 같이 `User` 엔터티를 업데이트합니다.

```ts
@OneToOne(() => UserMeta, meta => meta.user) meta: UserMeta;
```

그리고 `UserMeta` 엔티티도 업데이트 합니다

```ts
@OneToOne(() => User, user => user.meta) @JoinColumn({name: "userid"}) user: User;
```

여기까지 했다면 문제 해결!

### 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-05-08에 [Tistory](https://berom.tistory.com/223)에 쓴 글을 옮겼습니다.*
