---
aliases: []
date_created: 2022-03-28
date_modified: 2022-04-01
permalink: til-format-string-attack
tags:
  - security
title: "Format String"
---
## What is Format String Attack

### Format String

- 일반적으로 사용자로부터 입력을 받아들이거나 결과를 출력하기 위하여 사용하는 방식
- format string을 사용하는 함수에 대해 형식이나 형태를 지정해주는 문자열

```c
printf("This is our %d th presentation ")
```

위의 printf() 안의 문자열과 같은 형식을 format string이라 한다.

### 함수 호출 규약

함수를 선언하게 되면 아래 순서대로 스택에 쌓인다.

1. 인자
2. 다시 돌아갈 주소 (RET)
3. 다시 돌아갈 EBP 주소
4. 그 함수 안에 있는 버퍼들

## 취약점

```cpp
#include <stdio.h>
int main()
{

    char str[15] = "Hello, World!\n";
    printf("%s", str); // 문자열 인식
    printf(str);       // 형식 지시자를 포함한 포맷 스트링
    return 0;
}
```

위의 함수를 실행하면 두 줄 모두 같은 문자열을 출력하는 것처럼 보인다. 하지만 실제로는 형식 지정을 하지 않은 문자열 str의 경우 printf 함수에서 사용할 형식 지시자를 포함한 Format String으로 인식하게 된다.

또한 함수가 실행되면 그 함수 정보를 저장할 스택 프레임이 메모리에 생긴다. CPU가 32 bit냐 64 bit냐에 따라 다르지만, 32bit cdecl 함수 호출 규약 방식을 사용하는 PC는 높은 주소부터 차례대로 환경 변수, 리턴 주소, SFP(stack Frame Pointer), 지역 변수 순으로 데이터가 저장된다.

printf를 실행할 때 형식이 지정되어 있으면 지정된 형식 크기만큼을 뒤이어 바로 출력한다. (스택 구조이니까! 그 크기만큼 pop 한다고 생각하자)

형식이 지정되어 있지 않다면 어떻게 될까? 그대로 출력한다. 하지만 형식이 지정되어 있지 않았을 때 입력으로 format string을 넣게 된다면? 프로그램이 실행될 때 형식 지정자를 읽고, '아, 이 정도 크기를 또 pop 해야 되는구나?' 하고 오해해서 pop 해버리는 것이다.

## Reference

- [함수 호출 규약](https://s1m0hya.tistory.com/19)
- [c/c++ 함수 호츌 규약](https://over-stack.tistory.com/23)
- FSB
- [ftz set up](https://mandu-mandu.tistory.com/23)

---

*2022-03-28에 [GitHub SW-Mentoring](https://github.com/GoBeromsu/SW-Mentoring/blob/main/berom/secureCoding/formatstring.md)에 쓴 글을 옮겼습니다.*
