---
aliases: []
date_created: 2022-03-10
date_modified: 2022-03-10
permalink: programmers-sql-datetime-to-date
tags:
  - sql
  - programmers
title: "DATETIME에서 DATE로 형 변환 - 프로그래머스 SQL 고득점 KIT"
---

<!-- 
튜토리얼, 하우 투 가이드, 설명 ,레퍼런스 
https://documentation.divio.com/tutorials/
-->

# DATETIME에서 DATE로 형 변환

## 문제
ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

ANIMAL_INS 테이블에 등록된 모든 레코드에 대해, 각 동물의 아이디와 이름, 들어온 날짜1를 조회하는 SQL문을 작성해주세요. 이때 결과는 아이디 순으로 조회해야 합니다.

## 풀이

```SQL
SELECT ANIMAL_ID,NAME,DATE_FORMAT(DATETIME,'%Y-%m-%d')AS 날짜 FROM ANIMAL_INS ORDER BY ANIMAL_ID
```
이 문제의 핵심은 날짜 형 변환을 할 수 있는가다
DATE_FORMAT(날짜,변환하고자하는 형)을 사용하면된다.

---

*2022-03-10에 [GitHub Pages](https://goberomsu.github.io/2022/03/10/sql-str-5/)에 쓴 글을 옮겼습니다.*
