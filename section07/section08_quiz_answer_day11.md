# 🎯 Day 11 미션 안내

Day11 미션 안내드리겠습니다.

오늘의 미션은 바로 바로 코딩 Quiz입니다!
2개의 퀴즈가 준비되어 있습니다!

### Quiz 1.다음 요구사항을 만족하는 3개의 인터페이스를 정의하세요

💡 **요구사항:**

1. Video Interface

- playTime(Number 타입) 프로퍼티를 갖습니다.

2. Book Interface

- pageNumber(Number 타입) 프로퍼티를 갖습니다.

3. Content Interface

- name(String 타입), info(T 타입) 프로퍼티를 갖습니다.

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
다음 요구사항을 만족하는 3개의 인터페이스를 정의하세요
1. Content Interface
  - name(String 타입), info(T 타입) 프로퍼티를 갖습니다.
2. Video Interface
  - playTime(Number 타입) 프로퍼티를 갖습니다. 
3. Book Interface
  - pageNumber(Number 타입) 프로퍼티를 갖습니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */

interface Video {
  playTime: number;
}

interface Book {
  pageNumber: number;
}

// Content<T>: T를 받아서 info의 타입으로 쓰는 제네릭 인터페이스다.
interface Content<T> {
  name: string;
  // - 제네릭 타입 매개변수 T를 그대로 프로퍼티 타입으로 사용
  info: T;
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
function watchVideo(content: Content<Video>) {
  console.log(`${content.info.playTime}시간의 강의를 시청함`);
}

function readBook(content: Content<Book>) {
  console.log(`${content.info.pageNumber}권의 책을 읽음`);
}

watchVideo({
  name: "한 입 크기로 잘라먹는 타입스크립트",
  info: {
    playTime: 10.5,
  },
});

readBook({
  name: "한 입 크기로 잘라먹는 리액트",
  info: {
    pageNumber: 700,
  },
});
```

</details>

### Quiz 2.getComments 함수의 적절한 반환값 타입을 정의 하세요

💡 **요구사항:**

- getComments 함수는 여러개의 Comment 타입 객체를 담는 배열을 비동기적으로 반환하는 함수입니다.

- 반환값 타입이 Promise이 아닌 좀 더 정확한 타입으로 추론되게 하여도 정답으로 인정합니다.

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
getComments 함수의 적절한 반환값 타입을 정의 하세요
- getComments 함수는 여러개의 Comment 타입 객체를 담는 배열을 비동기적으로 반환하는 함수입니다.
- 반환값 타입이 Promise<unknown>이 아닌 좀 더 정확한 타입으로 추론되게 하여도 정답으로 인정합니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */
interface Comment {
  id: number;
  author: string;
  content: string;
}

// resolve(...)에 전달하는 값이 Comment[] 되어야한다.
// 비동기로 돌려주는 함수다.
function getComments(): Promise<Comment[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          author: "이정환 & 김효빈",
          content: "한입 FE 챌린지! 완강까지 화이팅!",
        },
      ]);
    }, 2000);
  });
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect, NotEqual } from "@type-challenges/utils";

type TestCases = [
  Expect<NotEqual<ReturnType<typeof getComments>, Promise<any>>>,
  Expect<NotEqual<ReturnType<typeof getComments>, Promise<unknown>>>,
  Expect<NotEqual<ReturnType<typeof getComments>, Promise<never>>>,
  Expect<Equal<ReturnType<typeof getComments>, Promise<Comment[]>>>
];
```

</details>
