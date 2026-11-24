---
aliases: []
date_created: 2019-03-07
date_modified: 2019-03-11
permalink: til-algorithm-day-2
tags:
  - algorithm
  - sorting
title: "알고리즘 Day-2"
---
## 선택정렬

```c

#include<stido.h>

int main(void){
    int i, j , min, index, temp;
    int array[10] = {1,10,5,8,7,6,4,3,2,9};

    for(i=0; i < 10; i++){
        min = 9999;
        for(j = i; j < 10;j++){
           if(min > array[i]){
               min = array[j];
               index = j;
                }
            }
        }

        temp = array[i];
        array[i] = array[index];
        array[index] = temp;
}
    for(i=0; i < 10; i++){
        pritnf("%d", array[i]);
    }
    return 0;
}

```

* C언어는 순차적으로 진행한다.(위에서 아래, 왼쪽에서 오른쪽)

정렬 프로그램이긴 하지만, 정확히 이야기하자면 가장 작은 수를 앞으로 보내는 코드다.

* 핵심 코드 1 (I thought)

    for(j=i; j<10; j++) ~ index = j;

    for문이 반복되는 동안 가장 작은 값을 뽑는다.

* 핵심 코드 2

    temp = array[i] ~ array[index] = temp;

    temp를 이용해 배열 값 두 개의 위치를 바꿔 준다. temp를 쓰지 않고 바로 대입하면 값이 덮어씌워진다.

## 버블 정렬

```c

#include<stido.h>

int main(void){
    int i, j, temp;
    int array[10] = {1,10,5,8,7,6,4,3,2,9}

    for(i=0; i<10 ; i++){
        for(j=0; j < 10; j++){
            if(array[j]>array[j+1]){
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    return 0;
    }
}
```

---

*2019-03-07에 GitHub TIL 저장소에 쓴 글을 옮겼습니다.*
