# 🎯 Day 13 미션 안내

Day13 미션 안내드리겠습니다.

오늘의 미션은 바로 바로 코딩 Quiz입니다!
3개의 퀴즈가 준비되어 있습니다!

### Quiz 1. 다음 요구사항을 만족하는 IsProductKey 타입을 완성하세요

💡 **요구사항:**

- IsProductKey 타입은 조건부 타입으로 다음 조건에 따라 각각 다른 타입으로 결정됩니다.
  - T가 Product의 key(프로퍼티 이름)중 하나일 경우 결과는 true 타입이 됩니다.
  - T가 Product의 key(프로퍼티 이름)중 하나가 아닐 경우 결과는 false 타입이 됩니다.
  - 예를 들면 다음과 같습니다.
    - ex) IsProductKey<"id"> 타입은 true 타입이 됩니다.
    - ex) IsProductKey<"author"> 타입은 false 타입이 됩니다.

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
다음 요구사항을 만족하는 IsProductKey<T> 타입을 완성하세요
- IsProductKey 타입은 조건부 타입으로 다음 조건에 따라 각각 다른 타입으로 결정됩니다.
  - T가 Product의 key(프로퍼티 이름)중 하나일 경우 결과는 true 타입이 됩니다.
  - T가 Product의 key(프로퍼티 이름)중 하나가 아닐 경우 결과는 false 타입이 됩니다.
  - 예를 들면 다음과 같습니다.
    - ex) IsProductKey<"id"> 타입은 true 타입이 됩니다.
    - ex) IsProductKey<"author"> 타입은 false 타입이 됩니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */
interface Product {
  id: number;
  name: string;
  price: number;
  seller: {
    id: number;
    name: string;
    company: string;
  };
}

// 조건부 타입(조건에 따라 결과 타입이 달라짐)
// T가 Product 프로퍼티 이름들 중 하나라면 true 아니면 false
type IsProductKey<T> = T extends keyof Product ? true : false;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect } from "@type-challenges/utils";

type TestCases = [
  Expect<Equal<IsProductKey<"id">, true>>,
  Expect<Equal<IsProductKey<"name">, true>>,
  Expect<Equal<IsProductKey<"author">, false>>,
  Expect<Equal<IsProductKey<"winterlood">, false>>
];
```

</details>

### Quiz 2. 다음 조건을 만족하는 Extract<T, U> 타입을 구현하세요

💡 **요구사항:**

- Extract<T, U> 타입은 T로부터 U만 추출하는 타입입니다.
  - ex) Extract<string | boolean, boolean>은 boolean 타입이 됩니다.
  - ex) Extract<number | string, string>은 string 타입이 됩니다.
    (힌트💡 강의 중 직접 구현하는 Exclude 타입의 반대라고 생각해보세요!)

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
// [분산 조건부 타입 규칙]
// - 조건부 타입에서 좌변이 "타입 변수"로 직접 오면, T가 유니온일 때 자동으로 분리되어 평가된다.
//   형태: T extends U ? X : Y
//   여기서 T 자리에 (A | B)가 들어오면
//   (A extends U ? X : Y) | (B extends U ? X : Y) 로 분산된다.
//
// ----------------------------------------------------------
// 예시) Extract<string | number, string> 이 동작하는 과정
//
// 0단계) 입력
// - T = string | number
// - U = string
//
// 1단계) 분산 발생 (T가 유니온이므로 T가 각각 쪼개져 들어감)
// Extract<string | number, string>
// -> (string extends string ? string : never)
//  | (number extends string ? number : never)
//
// 2단계) 각각 평가
// - (string extends string) 는 true -> string
// - (number extends string) 는 false -> never
//
// 3단계) 결과 합치기
// -> string | never
// -> string  (never는 유니온에서 사라짐)
//
// ----------------------------------------------------------
// 예시) Extract<string | number, number>
// -> (string extends number ? string : never)
//  | (number extends number ? number : never)
// -> never | number
// -> number
//
// 결론) "유니온이 들어오면 분리 평가 → 조건 통과한 것만 남음" 이 Extract의 핵심 동작 방식이다.
/*
[ 문제 소개 ]
다음 조건을 만족하는 Extract<T, U> 타입을 구현하세요
- Extract<T, U> 타입은 T로부터 U만 추출하는 타입입니다.
  - ex) Extract<string | boolean, boolean>은 boolean 타입이 됩니다.
  - ex) Extract<number | string, string>은 string 타입이 됩니다.

(힌트💡 강의 중 직접 구현하는 Exclude 타입의 반대라고 생각해보세요!)
*/

/* [Quiz] 아래의 코드를 수정하세요 */
// Extract<T, U>: T유니온에서 U에 해당하는 타입만 남긴다.
// 조건부 타입 T가 유니온이면 자동으로 분산평가
//   (A | B) extends U ? ... -> (A extends U ? ...) | (B extends U ? ...)
// 조건을 만족하면 T, 아니면 never
type Extract<T, U> = U extends T ? U : never;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect } from "@type-challenges/utils";

type TestCases = [
  Expect<Equal<Extract<string | number, string>, string>>,
  Expect<Equal<Extract<string | number, number>, number>>
];
```

</details>

### Quiz 3. 배열 타입의 요소를 추출하는 InferArrayType 타입을 구현하세요

💡 **요구사항:**

```ts
type InferArrayType<T> = any;
```

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
배열 타입의 요소를 추출하는 InferArrayType<T> 타입을 구현하세요
*/

/* [Quiz] 아래의 코드를 수정하세요 */
// T가 어떤 타입 R의 배열이면 R(요소 타입)을 뽑고, 배열이 아니면 never를 반환한다.
type InferArrayType<T> = T extends (infer R)[] ? R : never;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Expect, Equal } from "@type-challenges/utils";

const arr1 = [1, 2, 3];
const arr2 = ["hello", "myname", "winterlood"];
const arr3 = [1, true, "hi"];

type TestCases = [
  Expect<Equal<InferArrayType<typeof arr1>, number>>,
  Expect<Equal<InferArrayType<typeof arr2>, string>>,
  Expect<Equal<InferArrayType<typeof arr3>, number | string | boolean>>
];
```

</details>
