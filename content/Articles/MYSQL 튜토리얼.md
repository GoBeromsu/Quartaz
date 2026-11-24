---
aliases: []
date_created: 2022-03-29
date_modified: 2022-03-31
permalink: til-mysql-tutorial
tags:
  - database
  - sql
title: "MYSQL 튜토리얼"
---
## mySql 실행

1. cd C:\Program Files\MySQL\MySQL Server 8.0\bin
   - 자신의 mysql 서버의 bin 폴더로 들어간다.
2. mySql -hlocalhost -uroot -p
   - 로컬 호스트에 접근하는 명령어

## Database 생성

하나의 데이터베이스 안에 여러 테이블이 있는 형태이다.

- 데이터베이스 생성

```sql
CREATE DATABASE [Database Name] CHARACTER SET utf8 COLLATE utf8_general_ci;
```

- 데이터베이스 사용

```sql
USE [Database Name]
```

- 데이터베이스 확인

```sql
show [Database Name]
```

- 테이블 개별적 확인

```sql
desc [테이블 명]
```

---

*2022-03-29에 [GitHub SW-Mentoring](https://github.com/GoBeromsu/SW-Mentoring/blob/main/berom/database/mysql_tutorial.md)에 쓴 글을 옮겼습니다.*
