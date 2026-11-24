---
aliases: []
date_created: 2023-12-12
date_modified: 2023-12-12
permalink: h2-initialization-error-foreign-key-checks
tags:
  - spring
  - testing
  - troubleshooting
title: "initializationError Failed 오류 해결"
---

## 문제 인식

어느 날, 갑자기 `initializationError Failed` 오류가 특정 테스트에서만 발생했다.  
이상하게도 다른 테스트에서는 잘 동작했다. 오류는 테스트 실행 전에 나타났고, 이는 프로젝트 실행 중에 뭔가 문제가 있다는 신호였다.

로그를 자세히 보니, `BeanCreationException`과 `ScriptStatementFailedException` 오류가 발견되었다.

![FindPostUsecaseTest initializationError FAILED와 H2 JdbcSQLSyntaxErrorException 로그](/_attachments/tistory-550-01.png)

일단 `JPATest`가 문제인 것 같아 `@SpringBootTest`로 변경하니 일시적으로는 해결되었다.

하지만, `SpringBootTest`는 맥락을 로딩해야 해서 처리 속도가 느려질 것이라 예상했다  
또한, 문제는 해결했지만, 뭉뚝 그려진 해결 방법을 사용한거 같아 더 깊이 파보기로 했다

![FindPostUsecaseTest 클래스 선언부](/_attachments/tistory-550-02.png)

## 분석

문제의 핵심은 테스트 자체가 아니라 프로젝트를 실행할 때 발생하는 것이었다.  
디버깅을 해보니, 테스트 실행 전에 문제가 발생하더라.

즉 오류 발생 시점이 테스트 코드 이전에 환경 설정이나 초기화 과정이기 때문에 테스트 코드 문제가 아니다!  
이전에 내 해결책은 잘못된 해결 방법이었던거다

![Redis 방문 기록 테스트 코드](/_attachments/tistory-550-03.png)

```text
org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'dataSourceScriptDatabaseInitializer' defined in class path resource [org/springframework/boot/autoconfigure/sql/init/DataSourceInitializationConfiguration.class]: Invocation of init method failed; nested exception is org.springframework.jdbc.datasource.init.ScriptStatementFailedException: Failed to execute SQL script statement #1 of class path resource [db/teardown.sql]: SET foreign_key_checks=0; nested exception is org.h2.jdbc.JdbcSQLSyntaxErrorException: Syntax error in SQL statement "SET [*]foreign_key_checks=0"; expected "@, AUTOCOMMIT, EXCLUSIVE, IGNORECASE, PASSWORD, SALT, MODE, DATABASE, COLLATION, CLUSTER, DATABASE_EVENT_LISTENER, ALLOW_LITERALS, DEFAULT_TABLE_TYPE, SCHEMA, CATALOG, SCHEMA_SEARCH_PATH, JAVA_OBJECT_SERIALIZER, IGNORE_CATALOGS, SESSION, TRANSACTION, TIME, NON_KEYWORDS, DEFAULT_NULL_ORDERING, LOG"; SQL statement: SET foreign_key_checks=0 [42001-214]
```

에러 로그를 보니 `BeanCreationException`과 `ScriptStatementFailedException`있다  
이들은 주로 스프링 부트 프로젝트의 빈 생성 과정이나 SQL 스크립트 실행 중 발생하는 오류이다

또한, 오류 메세지를 보면 h2 구문에서 문법 오류가 발생했음을 알 수 있다

- **오류 메시지**: `Failed to execute SQL script statement #1 of class path resource [db/teardown.sql]: SET foreign_key_checks=0`.
- **해석**
  - `dataSourceScriptDatabaseInitializer` 빈이 초기화되는 과정에서 `db/teardown.sql` 스크립트의 실행이 실패했습니다.
  - 구체적으로는 `SET foreign_key_checks=0` SQL 문이 H2 데이터베이스에서 실행될 때 문법 오류가 발생했습니다.

H2 DB는 MariaDB를 분명히 지원하는 걸로 알고 있는데 문법 오류가 생겼다 이상하다

좀 더 원인 분석을 위해 H2 DB Docs 확인해보니, **우리가 설정한 제약 조건 해제 부분이 명시적으로 적혀있지 않았다.**

![H2 MariaDB 호환 모드 문서 화면](/_attachments/tistory-550-04.png)

## 해결 과정

이 문제를 해결하기 위해 테스트 데이터를 H2 문법에 맞게 제약 조건을 설정하는 것으로 변경했다.

![teardown SQL을 H2 문법 SET REFERENTIAL_INTEGRITY로 바꾼 커밋](/_attachments/tistory-550-05.png)

### 해결 과정 상세

1. **문제 인식**: `JPATest` 관련 문제 추정, `@SpringBootTest`로 변경.
2. **심층 분석**: 코드 분석 및 디버깅을 통해 문제의 본질 파악.
3. **로깅과 오류 추적**: 관련 오류 로그 분석.
4. **DB 설정 분석 및 수정**: H2 DB 설정을 MariaDB 모드로 변경.
5. **구체적 해결 조치**: 테스트 데이터의 SQL 문법 수정.

## 결론

이 사례를 통해, 테스트 환경의 DB 설정이 실제 애플리케이션의 DB 환경과 일치하지 않을 때 발생할 수 있는 문제점을 확인했습니다.

특히, 다양한 DBMS의 특정 문법과 기능을 고려하지 않은 경우, 예기치 않은 오류가 발생할 수 있습니다.  
이를 해결하기 위해서는 설정 파일의 정밀한 검토와 적절한 DB 환경 설정이 필요합니다.

특히나, 쉽지만 이해 되지 않는 방법 보다는 정확한 원인을 파악해서 문제를 한 점은 스스로에게 칭찬을 하고 싶습니다

---

*2023-12-12에 [Tistory](https://berom.tistory.com/550)에 쓴 글을 옮겼습니다.*
