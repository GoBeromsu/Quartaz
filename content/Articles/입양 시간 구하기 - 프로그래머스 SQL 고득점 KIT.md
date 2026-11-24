---
aliases: []
date_created: 2022-03-10
date_modified: 2022-03-10
permalink: programmers-sql-adoption-time
tags:
  - sql
  - programmers
title: "입양 시간 구하기 - 프로그래머스 SQL 고득점 KIT"
---

<!-- 
튜토리얼, 하우 투 가이드, 설명 ,레퍼런스 
https://documentation.divio.com/tutorials/
-->
## 입양 시간 구하기

### 입양 시간 구하기 -1

문제는 간단한데 함수를 몰라서 좀 헤맸다.

보호소에서는 몇 시에 입양이 가장 활발하게 일어나는지 알아보려 합니다. 09:00부터 19:59까지, 각 시간대별로 입양이 몇 건이나 발생했는지 조회하는 SQL문을 작성해주세요. 이때 결과는 시간대 순으로 정렬해야 합니다.

#### 풀이

1. HOUR(각 시간대), COUNT(입양 건 수)를 출력하라
2. 결과는 시간대 순으로 정렬하라

```SQL
SELECT HOUR(DATETIME) AS HOUR, COUNT(HOUR(DATETIME)) AS COUNT FROM ANIMAL_OUTS GROUP BY HOUR(DATETIME) HAVING HOUR>=9 AND HOUR <= 19 ORDER BY HOUR(DATETIME) ASC
```

시간 함수인 HOUR을 이용하면 시간대 별 속성을 만들 수 있다

### 입양 시간 구하기 -2

정보처리 기사에서 보지 못한 개념들이 나와 새로 배웠다

보호소에서는 몇 시에 입양이 가장 활발하게 일어나는지 알아보려 합니다. 0시부터 23시까지, 각 시간대별로 입양이 몇 건이나 발생했는지 조회하는 SQL문을 작성해주세요. 이때 결과는 시간대 순으로 정렬해야 합니다.

#### 풀이

1. 0 ~ 23시까지의 필드를 만들 것
2. 시간대 별로 입양 건수 출력하라
3. 결과는 시간대 순으로 정렬하라

처음엔 그냥 입양 시간 구하기-1처럼 HAVING을 사용하면 될 줄 알았는데 입양 한 건도 되지 않은 시간은 필드가 아예 없어서 새로 만들어야 했다.

```SQL
SET @hour := -1;
SELECT (@hour := @hour +1) AS HOUR, (SELECT COUNT(*) FROM ANIMAL_OUTS WHERE HOUR(DATETIME)=@hour) AS COUNT FROM ANIMAL_OUTS WHERE @hour <23
```

```SQL
SET @hour := 1
```

* @는 변수를 선언할 때 사용하며 @NAME 형식으로 사용한다.
* :=는 할당한다는 뜻이다.

```SQL
SELECT (@hour := @hour +1) AS HOUR, FROM ANIMAL_OUTS WHERE @hour <23
```

* (@hour := @hour + 1)은 hour에 1을 계속 더하겠다는 말이다.
  * 뒤이은 WHERE @hour <23은 hour을 값을 제한 해준다
  * hour이 22가 되면 멈춰서, 23까지 필드를 만든다.

---

*2022-03-10에 [GitHub Pages](https://goberomsu.github.io/2022/03/10/sql-groupby-4/)에 쓴 글을 옮겼습니다.*
