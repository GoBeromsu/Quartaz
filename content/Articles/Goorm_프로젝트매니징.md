---
aliases: []
date_created: 2023-08-15
date_modified: 2023-08-15
permalink: goorm-project-managing
tags:
  - algorithm
  - goorm
title: "Goorm_프로젝트매니징"
---

## 문제

![구름톤 챌린지 프로젝트 매니징 문제 설명](/_attachments/tistory-473-01.png)

## 풀이

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
	public static void main(String[] args){
		try(BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))){
			int t = Integer.parseInt(reader.readLine());
			int[] input = Arrays.stream(reader.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
			int h = input[0];
			int m = input[1];
			for (int i =0; i<t;i++){
				m+=Integer.parseInt(reader.readLine());
			}
			solution(h,m);
		}catch(IOException e){
			e.printStackTrace();
		}
	}

	static void solution(int h, int m) {
		h += m / 60;
		m = m % 60;
		h = h % 24; // 시간이 24를 넘어가면 0부터 다시 시작
		System.out.println(h + " " + m); // 시간과 분을 공백으로 구분하여 출력
	}
}
```

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-08-15에 [Tistory](https://berom.tistory.com/473)에 쓴 글을 옮겼습니다.*
