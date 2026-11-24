---
aliases: []
date_created: 2023-07-20
date_modified: 2023-07-20
permalink: mockmvc-get-empty-response
tags:
  - spring
  - testing
  - mockito
  - troubleshooting
title: "MockMVC Get 응답 비어있을 때 해결 방법"
---

## Intro. 난, 손 발 달린 감자인가…?

[🐥 카카오 테크 캠퍼스 - 2단계 4주차 과제 분석](https://berom.tistory.com/428)을 하고 과제를 수행하던 중, 컨트롤러 테스트에서 문제를 직면했다

"음흠, Product Controller에서 fakestore를 사용하니, MockBean을 만들어줘야지 그럼그럼"하면서 개발을 하고 있었는데 말이다,  
![@MockBean으로 FakeStore를 선언한 ProductRestControllerTest](/_attachments/tistory-429-01.png)

분명히 데이터를 넣고, Request 내용을 출력했을 때 분명히 데이터가 출력이 되는데, 테스트 실행 결과에 response가 비어있다  
![Request에는 데이터가 있지만 Response의 response 배열이 비어 있는 테스트 출력](/_attachments/tistory-429-02.png)

기능 명세에 따르면 분명히, Request와 동일하게 데이터가 나와야 하는데 나오지 않는 것이다,

## 삽질

### Get 요청에 Content 담아 전송

```java
ResultActions result = mvc.perform(
	MockMvcRequestBuilders
		.get("/products")
		.content(responseBody)
		.contentType(MediaType.APPLICATION_JSON)
);
```

지금 와서 보니 말이 되지 않는 시도다

**왜 이런 일을 했는가?**

- 응답이라도 제대로 오는지 확인하고 싶었다!
- Post 요청을 보니 Content에 Request Body를 담아서 보내니, 담아 보내면 응답이 오지 않을까 했다

**무엇이 잘못 되었는가?**

1. Request Builder의 content는 Body에 데이터를 담는데 사용 된다
   - 당연히, Get에 쓸 것이 아니다

```java
// when
ResultActions result = mvc.perform(
	MockMvcRequestBuilders
		.post("/login")
		.content(requestBody)
		.contentType(MediaType.APPLICATION_JSON)
);
```

2. 절차지향적인 분석 부족
   - 본래 의도대로라면, Controller 코드를 먼저 수정해서 Body로 데이터를 받게 변경하고, 응답이 오는지 확인해야한다

### Product Controller에서 String 전송

```java
@GetMapping("/products")
    public ResponseEntity < ? > findAll(@RequestParam(defaultValue = "0") int page) {
      // 1. 더미데이터 가져와서 페이징하기
      List < Product > productList = fakeStore.getProductList().stream().skip(page * 9).limit(9).collect(Collectors.toList());

      // 2. DTO 변환
      List < ProductResponse.FindAllDTO > responseDTOs =
        productList.stream().map(ProductResponse.FindAllDTO::new).collect(Collectors.toList());
      System.out.println(responseDTOs);//DTO 내용 출력
      // 3. 공통 응답 DTO 만들기
      return ResponseEntity.ok(ApiUtils.success(responseDTOs));
		// return ResponseEntity.ok("컨트롤러가 날립니다");
    }
```

Controller에서 데이터를 제대로 보내는데, 받지를 못하고 있나란 생각이 들어서, return 을 string으로 받았다  
![컨트롤러가 문자열을 반환하자 응답이 도착한 테스트 출력](/_attachments/tistory-429-03.png)

성공했다. String은 날라온다! 그렇다면, Response에서 데이터를 제대로 받지 못하고 있다는거다  
다시, 원래 코드로 변경하고, 컨트롤러에서 response DTO에 담긴 데이터를 확인해본다

역시나 비어있다…! **하지만, 난 MockBean으로 가짜 객체도 띄워줬는데?**  
문제의 실마리는 여기에 있었다. 5분 후 문제 해결…!

## 문제의 원인

테스트 코드에서 `@MockBean`을 사용하여 `FakeStore`에 대한 가짜 빈을 생성했습니다  
이는 테스트에서 `FakeStore`의 인스턴스가 실제 인스턴스가 아니라 Mockito에 의해 생성된 **모의 객체**라는 것을 의미합니다

모의 객체의 메서드를 호출하면 기본적으로 **아무런 작업도 수행하지 않고 기본값을 반환**합니다(객체의 경우 null, 숫자의 경우 0, 불리언의 경우 false 등).  
이것이 컨트롤러에서 `fakeStore.getProductList()`에서 데이터를 얻지 못하는 이유입니다.(기본 개념인데 하하…)

Mockito가 제공하는 `when` 메서드를 사용하면 특정 메서드가 호출될 때 모의 객체의 동작을 정의할 수 있습니다.

저의 경우 테스트에서 `fakeStore.getProductList()`의 동작을 정의했습니다  
미리 메서드가 호출될 때 모의 객체가 반환하거나 예외를 던지도록 지시하는 것이죠!

```java
when(fakeStore.getProductList()).thenReturn(productList);
```

코드 흐름은 `fakeStore.getProductList()`가 호출될 때 Mockito에게 `productList`를 반환하도록 지시합니다.  
이후 컨트롤러에서 `fakeStore.getProductList()`가 호출되면 테스트에서 정의한 대로 `productList`를 반환합니다.

이러한 원칙은 클래스(예: 컨트롤러)를 단위 테스트할 때 종속성으로부터 격리시키려는 것입니다.  
Mock을 사용하면 **종속성의 동작을 정확하게 정의할 수 있는 제어 환경**을 생성할 수 있으므로, 클래스 자체의 로직을 테스트하는 데 집중할 수 있습니다!

## 해결 방법

### 방법 1. @Import에서 Fake Store [의존성 주입(DI)](https://berom.tistory.com/430)를 사용하는 방법

```java
@Import({
  SecurityConfig. class,
  GlobalExceptionHandler. class,
  FakeStore.class // FakeStore 클래스를 직접 Import 합니다.
})
```

직접 Fake Store를 주입함으로써 의존성 문제를 해결합니다

- 결과  
  ![FakeStore를 Import한 뒤 응답에 상품 목록이 담긴 테스트 출력](/_attachments/tistory-429-04.png)

장점:

- 직접적이고 간단하게 FakeStore를 Import하여 사용할 수 있습니다.

단점:

- 테스트 케이스마다 FakeStore의 동작을 제어할 수 없습니다. 즉, 테스트 케이스에 따라 다른 동작을 하도록 설정할 수 없습니다.

```java
@Import({
  SecurityConfig. class,
  GlobalExceptionHandler. class,
  FakeStore.class // FakeStore 클래스를 직접 Import 합니다.
})
@WebMvcTest(controllers = {
  ProductRestController.class
})
public class ProductRestControllerTest extends DummyEntity {

  @Autowired
  private MockMvc mvc;

  // ErrorLogJPARepository에 대한 모의 객체를 생성합니다.
  @MockBean
  private ErrorLogJPARepository errorLogJPARepository;

  @Autowired
  private ObjectMapper om;

  private List < Product> productList;

  @BeforeEach
  public void setUp() throws Exception {
    productList = productDummyList(); // 더미 데이터를 생성합니다.
  }
  @Test
  public void findAll_test() throws Exception {

    // 더미 데이터를 페이지네이션 합니다.
    List < Product > pagedProductList = productList.stream()
      .skip(0)
      .limit(10)
      .collect(Collectors.toList());

    // DTO로 변환합니다.
    List < ProductResponse.FindAllDTO > responseDTOs = pagedProductList.stream()
      .map(ProductResponse.FindAllDTO::new)
      .collect(Collectors.toList());

    // 응답 바디를 생성합니다.
    String responseBody = om.writeValueAsString(ApiUtils.success(responseDTOs));
    System.out.println("Response : " + responseBody);

    // 요청을 수행하고 결과를 출력합니다.
    ResultActions result = mvc.perform(
      MockMvcRequestBuilders
      .get("/products")
      .contentType(MediaType.APPLICATION_JSON)
    );
    System.out.println("Request result: " + result.andReturn().getResponse().getContentAsString());
  }
```

### 방법 2. When을 사용하는 방법

- 결과  
  ![when으로 getProductList를 스터빙한 뒤 응답에 상품 목록이 담긴 테스트 출력](/_attachments/tistory-429-05.png)

장점:

- Mockito의 when을 사용하여 FakeStore의 동작을 제어할 수 있습니다. 즉, 테스트 케이스에 따라 다른 동작을 하도록 설정할 수 있습니다.

단점:

- 코드가 약간 복잡해질 수 있습니다. 특히, 여러 메서드를 모의화해야 하는 경우 코드가 복잡해질 수 있습니다.

```java
@Import({
  SecurityConfig. class,
  GlobalExceptionHandler. class,
})
@WebMvcTest(controllers = {
  ProductRestController.class
})
public class ProductRestControllerTest extends DummyEntity {

  @Autowired
  private MockMvc mvc;

  // FakeStore에 대한 모의 객체를 생성합니다.
  @MockBean
  private FakeStore fakeStore;

  @MockBean
  private ErrorLogJPARepository errorLogJPARepository;

  @Autowired
  private ObjectMapper om;

  private List < Product > productList;

  @BeforeEach
  public void setUp() throws Exception {
    productList = productDummyList(); // 더미 데이터를 생성합니다.
  }
  @Test
  public void findAll_test() throws Exception {

    // 더미 데이터를 페이지네이션 합니다.
    List < Product > pagedProductList = productList.stream()
      .skip(0)
      .limit(10)
      .collect(Collectors.toList());

    // DTO로 변환합니다.
    List < ProductResponse.FindAllDTO > responseDTOs = pagedProductList.stream()
      .map(ProductResponse.FindAllDTO::new)
      .collect(Collectors.toList());

    // FakeStore의 getProductList 메서드가 호출되면 더미 데이터를 반환하도록 설정합니다.
    when(fakeStore.getProductList()).thenReturn(productList);

    // 응답 바디를 생성합니다.
    String responseBody = om.writeValueAsString(ApiUtils.success(responseDTOs));

    // 요청을 수행합니다.
    ResultActions result = mvc.perform(
      MockMvcRequestBuilders
      .get("/products")
      .contentType(MediaType.APPLICATION_JSON)
    );
  }
```

## 부족한 점이나 잘못 된 점을 알려주시면 시정하겠습니다 :>

---

*2023-07-20에 [Tistory](https://berom.tistory.com/429)에 쓴 글을 옮겼습니다.*
