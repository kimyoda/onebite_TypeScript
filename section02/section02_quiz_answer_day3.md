📝 TypeScript Playground 코딩 퀴즈 (Quiz 1)

<details> <summary>Quiz 1. 요구사항을 만족하는 4개의 배열 타입 정의하기</summary>

💡 요구사항:

Any 타입은 사용할 수 없습니다.

Nums 타입: 숫자만 담을 수 있는 배열 타입입니다.

Colors 타입: 문자열만 담을 수 있는 배열 타입입니다.

Coords 타입: [숫자, 숫자] 형태의 배열만 허용하는 타입입니다.

Info 타입: [숫자, 문자열] 형태의 배열만 허용하는 타입입니다.

<details> <summary>정답 코드 확인</summary>

요구사항을 만족하는 타입스크립트 코드는 다음과 같습니다.

```ts
type Nums = number[];
type Colors = string[];
type Coords = [number, number];
type Info = [string, number];
```

/\*\*

- [ 정답 체크 ]
- 여기부터는 정답을 체크하기 위한 용도로 직접 수정하실 필요 없습니다.
- 아래의 코드에 오류가 사라지면 정답, 오류가 있으면 오답입니다!
  \*/

```ts
import { Equal, Expect, NotAny } from "@type-challenges/utils";

const numbers: Nums = [1, 2, 3, 4, 5];
const colors: Colors = ["red", "green", "blue"];
const coordinates: Coords = [3, 5];
const info: Info = ["이정환", 27];

type cases = [
  Expect<NotAny<Nums | Colors | Coords | Info>>,
  Expect<Equal<Nums, number[]>>,
  Expect<Equal<Colors, string[]>>,
  Expect<Equal<Coords, [number, number]>>,
  Expect<Equal<Info, [string, number]>>
];
```

</details> </details>

<details> <summary>Quiz 2. 다음 요구사항을 만족하는 <code>Course 타입을 정의하세요</code></summary>

💡 요구사항:

- Any 타입은 사용할 수 없습니다.
- Course 타입은 온라인 강의 정보를 포함하는 객체 타입을 정의합니다.
- 문자열을 저장하는 name 프로퍼티를 가져야 합니다.
- 숫자를 저장하는 price 프로퍼티를 가져야 합니다.
- 숫자를 저장하는 student_cnt 프로퍼티를 가져야 합니다.
- 문자열을 저장하는 author 프로퍼티를 가져야 합니다.
- 문자열 배열을 저장하는 related_courses 프로퍼티를 가져야 합니다.

```ts
/**
 * [ 퀴즈 ]
 * 여기에 코드를 작성해주세요
 * 아래 정답 체크 영역의 오류가 사라져야 합니다!
 */

type Course = {
  name: string;
  price: number;
  student_cnt: number;
  author: string;
  related_courses: string[];
};

/**
 * [ 정답 체크 ]
 * 여기부터는 정답을 체크하기 위한 용도로 직접 수정하실 필요 없습니다.
 * 아래의 코드에 오류가 사라지면 정답, 오류가 있으면 오답입니다!
 */
import { Equal, Expect, NotAny } from "@type-challenges/utils";

const course: Course = {
  name: "한 입 크기로 잘라먹는 타입스크립트",
  price: 55000,
  student_cnt: 1089,
  author: "이정환 | Winterlood",
  related_courses: [
    "한 입 크기로 잘라먹는 리액트",
    "웹 프론트엔드를 위한 자바스크립트 첫 걸음",
  ],
};

type TestCases = [
  Expect<NotAny<Course>>,
  Expect<
    Equal<
      keyof Course,
      "name" | "price" | "student_cnt" | "author" | "related_courses"
    >
  >,
  Expect<Equal<Course["name"], string>>,
  Expect<Equal<Course["price"], number>>,
  Expect<Equal<Course["student_cnt"], number>>,
  Expect<Equal<Course["author"], string>>,
  Expect<Equal<Course["related_courses"], string[]>>
];
```

</details> </details>

<details> <summary>Quiz 3. 다음 요구사항을 만족하는 <code>User</code> 타입을 구현하세요</summary>

💡 요구사항:

- Any 타입은 사용할 수 없습니다.

- 객체 타입이어야 합니다.

- String 타입의 name 프로퍼티가 있어야 합니다.

- String 타입의 email 프로퍼티가 있어야 합니다.

- 그 외의 String 타입의 동적 프로퍼티들도 추가할 수 있어야 합니다.

```ts
/**
 * [ 퀴즈 ]
 * 여기에 코드를 작성해주세요
 * 아래 정답 체크 영역의 오류가 사라져야 합니다!
 */

// 인덱스 시그니쳐
// 객체의 키와 값의 타입을 정의할 때 사용한다. 주로 객체의 키가 동적으로 결정되는 경우에 유용하다.
// 1. 키 타입은 'string 또는 'number'
// 2. 객체의 모든 키는 인덱스 시그니처와 호환한다.
// 3. 특정 속성과 인덱스 시그니처의 혼합 사용(특정 키를 반드시 포함해야할 때 사용한다.)
// 임의의 추가 프로퍼티를 제한 없이 허용해야 합니다. 인덱스 시그니처는 이것을 가능하게 합니다

type User = {
  name: string;
  email: string;
  [key: string]: string;
};

/**
 * [ 정답 체크 ]
 * 여기부터는 정답을 체크하기 위한 용도로 직접 수정하실 필요 없습니다.
 * 아래의 코드에 오류가 사라지면 정답, 오류가 있으면 오답입니다!
 */
const user: User = {
  name: "John",
  email: "john@example.com",
  extra1: "test",
  extra2: "good",
};
```

</details> </details>
