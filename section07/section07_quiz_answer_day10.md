# 🎯 Day 10 미션 안내

Day10 미션 안내드리겠습니다.

오늘의 미션은 바로 바로 코딩 Quiz입니다!
3개의 퀴즈가 준비되어 있습니다!

### Quiz 1.다음 요구사항을 만족하는 func 함수의 타입을 정의하세요

💡 **요구사항:**

- func 함수는 매개변수를 그대로 반환하는 함수입니다.
- 매개변수 value에는 모든 타입의 값이 들어올 수 있습니다.
- 반환값의 타입은 매개변수로 전달된 값의 타입과 같습니다.
  - ex) value의 값이 1일 경우 반환값은 number 타입입니다.
  - ex) value의 값이 'hi'일 경우 반환값은 string 타입입니다.
  - ex) value의 값이 [1,2]일 경우 반환값은 number[] 타입입니다.

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
다음 요구사항을 만족하는 func 함수의 타입을 정의하세요
- func 함수는 매개변수를 그대로 반환하는 함수입니다.
- 매개변수 value에는 모든 타입의 값이 들어올 수 있습니다.
- 반환값의 타입은 매개변수로 전달된 값의 타입과 같습니다.
  - ex) value의 값이 1일 경우 반환값은 number 타입입니다.
  - ex) value의 값이 'hi'일 경우 반환값은 string 타입입니다.
  - ex) value의 값이 [1,2]일 경우 반환값은 number[] 타입입니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */
/* <T>는 정해지지 않는 타입을 나타내는 제네릭 타입 변수다.
- value: T는 어떤 타입이든 받을 수 있고, 호출 시 전달된 값으로 T가 자동추론된다.
- 반환 타입이 T이므로 입력 타입 그대로 반환된다(타입 유지)
- func(1)      → T = number   → 반환 number
- func("hi")   → T = string   → 반환 string
- func([1, 2]) → T = number[] → 반환 number[]
*/
function func<T>(value: T): T {
  return value;
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */

import { Equal, Expect, NotAny } from "@type-challenges/utils";

const tc1: number = func(1);
const tc2: string = func("hello");
const tc3: boolean = func(true as boolean);
const tc4: number[] = func([1, 2, 3]);

type TestCases = [
  Expect<NotAny<Parameters<typeof func>[0]>>, // 첫번째 파라미터가 any 타입이 아닐 것
  Expect<Equal<typeof tc1, number>>,
  Expect<Equal<typeof tc2, string>>,
  Expect<Equal<typeof tc3, boolean>>,
  Expect<Equal<typeof tc4, number[]>>
];
```

</details>

### Quiz 2.다음 요구사항을 만족하는 getLastValue 함수의 타입을 정의하세요

💡 **요구사항:**

- getLastValue 함수는 매개변수로 배열을 받아 배열의 마지막 값을 반환하는 함수입니다.
- 매개변수 data에는 빈 배열을 제외한 모든 배열이 들어올 수 있습니다.
- 반환값의 타입은 매개변수 data 배열의 마지막 요소의 타입이어야 합니다.
  - ex) data 배열의 값이 [1, "hello"] 일 경우 반환값은 string 타입입니다.
  - ex) data 배열의 값이 ["hello", 1] 일 경우 반환값은 number 타입입니다.

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
다음 요구사항을 만족하는 getLastValue 함수의 타입을 정의하세요
- getLastValue 함수는 매개변수로 배열을 받아 배열의 마지막 값을 반환하는 함수입니다.
- 매개변수 data에는 빈 배열을 제외한 모든 배열이 들어올 수 있습니다.
- 반환값의 타입은 매개변수 data 배열의 마지막 요소의 타입이어야 합니다.
  - ex) data 배열의 값이 [1, "hello"] 일 경우 반환값은 string 타입입니다.
  - ex) data 배열의 값이 ["hello", 1] 일 경우 반환값은 number 타입입니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */
/*
- 배열의 마지막 요소 타입을 반환해야 한다.
- 제네릭으로 선언한 뒤 튜플 전개로 빈 배열이 불가능하게 하고, 마지막 요소 타입을 T로 고정한다.
- 호출 시점에 마지막 값이 T로 추론되고, 반환 타입 그대로 반환하는 요구사항을 만족한다.
*/
function getLastValue<T>(data: [...any, T]): T {
  return data[data.length - 1];
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
const a: string = getLastValue([1, 2, "3"]);
const b: boolean = getLastValue([1, 2, true]);

import { Equal, Expect, NotAny } from "@type-challenges/utils";

const tc1 = getLastValue([1, 1]);
const tc2 = getLastValue([1, "2"]);
const tc3 = getLastValue([1, true]);
const tc4 = getLastValue([1, undefined]);

type TestCases = [
  Expect<NotAny<Parameters<typeof getLastValue>[0]>>, // 첫번째 파라미터가 any 타입이 아닐 것
  Expect<Equal<typeof tc1, number>>,
  Expect<Equal<typeof tc2, string>>,
  Expect<Equal<typeof tc3, boolean>>,
  Expect<Equal<typeof tc4, undefined>>
];
```

</details>

### Quiz 3.다음 요구사항을 만족하는 map 함수의 타입을 구현하세요

💡 **요구사항:**

- map 함수는 자바스크립트 배열 메서드 map을 본따 만든 함수입니다.
- 2개의 매개변수 arr과 callback을 받습니다.
- arr 배열의 모든 요소에 callback 함수를 수행한 결과를 배열로 모아 반환합니다.

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
다음 요구사항을 만족하는 map 함수의 타입을 구현하세요
- map 함수는 자바스크립트 배열 메서드 map을 본따 만든 함수입니다.
- 2개의 매개변수 arr과 callback을 받습니다.
- arr 배열의 모든 요소에 callback 함수를 수행한 결과를 배열로 모아 반환합니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */
/*
- T: 입력 배열 요소, U: callback 실행 결과
- arr: T[] callback item T로 고정, U를 반환하므로 결과 배열은 U[]가 된다.
*/
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect, NotAny } from "@type-challenges/utils";
const tc1: number[] = map([1, 2, 3], (item) => item);
const tc2: string[] = map([1, 2, 3], (item) => item.toString());

type TestCases = [
  Expect<NotAny<Parameters<typeof map>[0]>>,
  Expect<NotAny<Parameters<typeof map>[1]>>,
  Expect<Equal<typeof tc1, number[]>>,
  Expect<Equal<typeof tc2, string[]>>
];
```

</details>
