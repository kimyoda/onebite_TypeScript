# 🎯 Day 8 미션 안내

오늘의 미션은 바로 바로 코딩 Quiz입니다!
딱 2개의 퀴즈만 푸시면 되구 무척이나 쉽습니다!

### Quiz 1.다음 요구사항을 만족하는 구현 시그니쳐를 완성하세요(매개변수 타입만 정의하면 됩니다)

💡 **요구사항:**

- 이미 작성되어 있는 3개의 오버로드 시그니쳐를 모두 만족해야 합니다.
- a, b, c의 값을 모두 더한 값을 반환합니다.
- 만약 매개변수의 값이 undefined일 경우 모두 0으로 취급합니다.

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
다음 요구사항을 만족하는 구현 시그니쳐를 완성하세요(매개변수 타입만 정의하면 됩니다)
- 이미 작성되어 있는 3개의 오버로드 시그니쳐를 모두 만족해야 합니다.
- a, b, c의 값을 모두 더한 값을 반환합니다.
- 만약 매개변수의 값이 undefined일 경우 모두 0으로 취급합니다.
  - a가 없을 경우 : 0
  - b가 없을 경우 : 0
  - c가 없을 경우 : 0
*/

// 오버로드 시그니쳐, 호출 가능한 형태를 타입 레벨에서 선언
function add(): number;
function add(a: number): number;
function add(a: number, b: number, c: number): number;

/* [Quiz] 구현 시그니쳐를 완성하세요 */
// 오버로드된 호출 형태를 모두 수용하기 위해 선택적 매개변수?로 받아 처리한다.
function add(a?: number, b?: number, c?: number) {
  return (a ?? 0) + (b ?? 0) + (c ?? 0);
}
```

</details>

---

### Quiz 2. 다음 요구사항을 만족하도록 사용자 정의 타입 가드를 완성하세요

💡 **요구사항:**

- isGuest 함수가 true를 반환하면 매개변수로 전달된 user는 Guest 타입임이 보장됩니다.
- isMember 함수가 true를 반환하면 매개변수로 전달된 user는 Member 타입임이 보장됩니다.

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
다음 요구사항을 만족하도록 사용자 정의 타입 가드를 완성하세요
- isGuest 함수가 true를 반환하면 매개변수로 전달된 user는 Guest 타입임이 보장됩니다.
- isMember 함수가 true를 반환하면 매개변수로 전달된 user는 Member 타입임이 보장됩니다.
*/

/* [Quiz] 사용자 정의 타입가드를 완성하세요(타입 수정 X) */
type Guest = {
  visitCount: number;
  isVisitor: boolean;
};

type Member = {
  id: string;
  isSubscribed: boolean;
};

type User = Guest | Member;

// 사용자 정의 타입 가드: true면 user를 Guest로 좁혀준다.
// Guest에만 있는 구분 필드(isVisitor)의 존재 여부로 Guest인지 판별한다.
function isGuest(user: User): user is Guest {
  return (user as Guest).isVisitor !== undefined;
}

// 사용자 정의 타입 가드: true면 user를 Member로 좁혀준다.
// Member에만 있는 구분 필드(isSubscribed)의 존재 여부로 Member인지 판별한다
function isMember(user: User): user is Member {
  return (user as Member).isSubscribed !== undefined;
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */

function inviteUser(user: User) {
  if (isGuest(user)) {
    console.log(`${user.visitCount}번째 방문입니다`);
  } else if (isMember(user)) {
    console.log(`${user.id}님 안녕하세요!`);
  }
}
```

</details>

---

### Quiz 3. 다음 조건을 만족하는 3가지 인터페이스를 추가로 구현하세요

💡 **요구사항:**

- 모든 인터페이스는 Person 인터페이스를 확장합니다(extends).
  1. Student 인터페이스는 grade 프로퍼티를 갖는다.
  2. grade 프로퍼티에는 "A", "B", "C"만 저장할 수 있다.
  3. Developer 인터페이스는 skills 프로퍼티를 갖는다.
  4. skills 프로퍼티에는 문자열 배열을 저장할 수 있다.
  5. Boss 인터페이스는 company 프로퍼티를 갖는다.
  6. company 프로퍼티에는 문자열을 저장할 수 있다.

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
함수 타입 표현식을 이용해 다음 요구사항을 만족하는 타입 Func를 정의하세요
- 2개의 매개변수 a와 b를 받습니다.
- 매개변수 a는 Number, b는 String 타입입니다.
- 반환값 타입은 boolean 입니다.
*/

/* [Quiz] 아래의 코드를 완성해 오류를 제거하세요 */
// 1. 함수 타입 표현식으로 a, b에 각각 타입을 설정하고 리턴값을 요구 사항에 맞게 boolean 시그니처를 정의한다.
type Func = (a: number, b: string) => boolean;
// 2. 호출 시그니처 방식
// type Func = {
//   (a: number, b: string): boolean;
// };

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
const func: Func = (a, b) => {
  console.log(a.toFixed());
  console.log(b.toLocaleLowerCase());
  return true;
};

import { Equal, Expect, NotAny } from "@type-challenges/utils";

type TestCases = [
  Expect<NotAny<Func>>,
  Expect<Equal<Parameters<Func>[0], number>>,
  Expect<Equal<Parameters<Func>[1], string>>
];
```

</details>
