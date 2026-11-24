---
aliases: []
date_created: 2025-04-05
date_modified: 2025-04-05
permalink: fixing-korean-book-info-plugin
tags:
  - obsidian
  - obsidian-plugin
  - open-source
  - reverse-engineering
title: "Obsidian 플러그인 Korean book info 수리 과정"
---

## 문제 정의

어느 날 갑자기 잘 사용하고 있던 **Korean Book Info 플러그인**이 작동하지 않았다. 무한 로딩 상태만 반복되고 아무런 결과도 출력되지 않는 상황이었다.

![개발자 도구 콘솔의 getAttribute 에러](/_attachments/tistory-600-01.png)

일단 급한 대로 브라우저의 개발자 도구를 열고 콘솔을 확인했다.  
getAttribute 메서드로 DOM의 속성을 가져오려 했는데, 특정 속성을 찾을 수 없다는 에러 메시지가 나왔다. 즉, DOM Element 자체를 제대로 찾지 못하고 있는 상태였다.

기존 플러그인은 YES24 페이지에 직접 HTTP 요청을 보내 HTML 응답을 받은 뒤, JavaScript의 내장 클래스인 DOMParser를 이용하여 HTML 문자열을 DOM 객체로 변환해 CSS Selector를 통해 데이터를 추출하는 방식이었다.

기존 플러그인의 실제 동작 구조는 다음과 같았다:

```typescript
// 책 이름을 받아 YES24 검색결과 첫 번째 항목의 URL을 가져오는 함수
const searchBookUrl = async (bookName: string): Promise<searchUrlOutput> => {
    bookName = encodeURI(bookName);
    try {
        const response = await requestUrl({
            url:
                "http://www.yes24.com/Product/Search?domain=BOOK&query=" +
                bookName,
        });
        const parser = new DOMParser();
        const html = parser.parseFromString(response.text, "text/html");

        const bookUrl = html
            .querySelector(
                "#yesSchList > li:nth-child(1) > div > div.item_info > div.info_row.info_name > a.gd_name"
            )
            .getAttribute("href");

        return { ok: true, url: bookUrl };
    } catch (err) {
        console.log(err);
        return { ok: false };
    }
};
```

실제 받아온 HTML 내용을 console.log로 확인해보니, 내가 기대했던 DOM 구조나 책 데이터는 존재하지 않았다.

즉, 받아온 HTML은 내용이 비어 있는 **깡통 페이지**였다. 이런 현상은 주로 웹사이트가 클라이언트 사이드 렌더링(CSR, Client-Side Rendering)을 할 때 나타나는 현상이다.

![데이터가 비어 있는 YES24 응답 HTML](/_attachments/tistory-600-02.png)

YES24 웹사이트를 브라우저에서 열어보면 정상적으로 로딩되지만, 플러그인의 HTTP 요청으로 받아온 응답에는 데이터가 없었다.  
처음엔 요청 헤더(Request Header)에 브라우저처럼 User-Agent 정보를 추가하여 브라우저를 흉내 내면 정상적으로 응답받을 수 있을 것으로 예상했으나, 이 방법은 전혀 효과가 없었다.

결국 브라우저 개발자 도구의 네트워크 탭을 이용해 YES24의 로딩 메커니즘을 분석하기 시작했다. 분석 결과, YES24는 서버에서 이미 데이터를 채운 HTML을 최초에 보내주는 구조였고, 내 플러그인의 요청은 서버가 데이터를 넣기 전의 초기 상태만을 보내는 현상이었다. 즉, 서버가 브라우저의 요청인지 판단하고 데이터를 동적으로 주는 방식이었다.

![네트워크 탭에서 본 YES24 검색 응답](/_attachments/tistory-600-03.png)

그렇다면 데이터를 채워주는 JavaScript 로직이 어딘가에 있을 거라고 생각했다. Sources 탭에서 YES24가 로드하는 JavaScript 파일을 찾아봤고, 운 좋게도 Search.js라는 파일을 발견했다. 심지어 한국어 주석까지 있었다. 하지만 파일이 무려 957줄이나 돼서 다 읽는 건 비효율적이라 일단 다른 접근을 먼저 시도하기로 했다.

![Sources 탭의 YES24 search.js](/_attachments/tistory-600-04.png)

## 실제 접근과 문제 해결 (API 엔드포인트 발견)

그러던 중 우연히 YES24 웹사이트의 검색창에서 책 제목을 입력할 때마다 자동 완성 형태로 책 정보가 실시간으로 JSON 데이터로 반환되는 걸 확인했다. AJAX 요청을 이용해 JSON 형태로 미리보기 데이터를 받아오는 방식이었다. 중요한 것은 이 JSON 데이터 안에 책의 고유한 <strong>ID(GOODS_NO)</strong>가 들어있다는 것이었다. 우리가 필요했던 정보는 이 고유한 ID 하나뿐이었고, ID만 있으면 쉽게 URL을 구성할 수 있었다.

YES24의 책 URL은 다음과 같은 형태였다:  
`https://www.yes24.com/product/goods/{GOODS_NO}`

![자동 완성 요청의 JSON 응답](/_attachments/tistory-600-05.png)

이 AJAX 요청이 사용하는 실제 JSON 응답 구조는 다음과 같았다:

```json
{
  "lstSearchKeywordResult": [
    {
      "iGoodsTotalCount": 0,
      "GOODDS_INDEXES": {
        "GOODS_NO": 105526047,
        "GOODS_NM": "<strong class=\"keyword\">물고기는</strong> <strong class=\"keyword\">존재하지</strong> <strong class=\"keyword\">않는다</strong>",
        "SUB_TTL": "상실, 사랑 그리고 숨어 있는 삶의 질서에 관한 이야기",
        "DOMAIN": "01",
        "SPRICE": "15300",
        "COMPANY2": "곰출판",
        "AUTH_INFO": "<룰루 밀러> 저/<정지인> 역`,정지인,룰루 밀러,Lulu Miller (Louisa Elizabeth Miller),"
      }
    },
    …
  ],
  "iGoodsTotalCount": 4
}
```

결국, 이 JSON 데이터를 제공하는 **API 엔드포인트**를 발견했다: `https://www.yes24.com/Product/searchapi/bulletsearch/goods?query={query}`

이제 HTML 파싱 없이 독립적으로 JSON 데이터만 처리하는 방식으로 전환할 수 있었다.

새롭게 작성한 최종 플러그인 코드다:

```typescript
// YES24 API를 통해 HTML 독립적으로 책 URL을 가져오는 함수
const searchBookUrl = async (bookName: string): Promise<searchUrlOutput> => {
    bookName = encodeURI(bookName);
    try {
        const response = await requestUrl({
            url:
                "http://www.yes24.com/Product/searchapi/bulletsearch/goods?query=" +
                bookName,
        });
        const data = JSON.parse(response.text);
        const lstSearchKeywordResult = data?.lstSearchKeywordResult;
        const bookInfo = lstSearchKeywordResult[0].GOODDS_INDEXES.GOODS_NO;
        const bookUrl = `/Product/Goods/${bookInfo}`;
        return { ok: true, url: bookUrl };
    } catch (err) {
        console.log(err);
        return { ok: false };
    }
};
```

최종적으로 수정된 플러그인을 다시 실행해보자. 결과는 성공적이었다!

![수정 후 정상적으로 채워진 책 정보](/_attachments/tistory-600-06.png)

이번 문제 해결에서 가장 핵심적인 기술적 포인트는 **Reverse Engineering**이었다. 단순히 HTML을 받아와 DOM에서 데이터를 추출하는 방법은 사이트의 구조가 조금만 변경되어도 쉽게 깨지는 한계가 있다. AJAX 요청을 분석하여 실제 데이터를 반환하는 API를 찾아내고  JSON 데이터를 활용한 덕분에 HTML 구조에 전혀 의존하지 않고 안정적으로 데이터를 가져올 수 있게 되었다.

![YES24 API 엔드포인트 PR](/_attachments/tistory-600-07.png)

마지막으로 PR을 요청으로 이번 사건은 일단락한다! [feat: use direct YES24 API endpoint for book search](https://github.com/kmsk99/kr-book-info-plugin/pull/15)

---

*2025-04-05에 [Tistory](https://berom.tistory.com/600)에 쓴 글을 옮겼습니다.*
