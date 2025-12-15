🎯 미션 안내
Day6 미션 안내드리겠습니다.

오늘의 미션도 바로 바로 코딩 Quiz입니다!
오늘은 총 3개의 퀴즈가 준비되어 있습니다!

<details> <summary>Quiz 1. </summary>

💡 요구사항:

- 타입 단언을 이용해 person 변수에 빈 객체를 할당하세요. (힌트. 초과 프로퍼티 검사 방지를 위한 타입 단언)

```ts

```

<details> <summary>정답 코드 확인</summary>

요구사항을 만족하는 타입스크립트 코드는 다음과 같습니다.

```ts
/*
[ 문제 소개 ]
아래 코드의 4개의 변수 a,b,c,d의 타입은 각각 어떻게 추론될까요?  
- 변수 a의 추론 결과를 A 타입에 정의해주세요
- 변수 b의 추론 결과를 B 타입에 정의해주세요
- 변수 c의 추론 결과를 C 타입에 정의해주세요
- 변수 d의 추론 결과를 D 타입에 정의해주세요
- 변수 e의 추론 결과를 E 타입에 정의해주세요
*/

let a = 10;
const b = 20;
const c = [1, 2];
const d = [1, "hello", true];
const e = [1, 2, 3] as const;

/* [Quiz] 변수 a의 타입은 무엇으로 추론될까요? */
// 'let'으로 선언되어 재할당이 가능하므로, 가장 넓은 원시 타입인 number로 추론된다.
type A = number;

/* [Quiz] 변수 b의 타입은 무엇으로 추론될까요? */
// 'const'로 선언되었고 원시 타입(숫자)이므로, 값이 변경될 수 없는 가장 좁은 리터럴 타입 20으로 추론된다.
type B = 20;

/* [Quiz] 변수 c의 타입은 무엇으로 추론될까요? */
// 'const'로 선언되었으나 배열 리터럴이므로, 요소 타입인 number의 배열인 number[]로 추론됩니다.
type C = number[];

/* [Quiz] 변수 d의 타입은 무엇으로 추론될까요? */
// 'const' 배열이지만, 요소들의 타입(number, string, boolean)을 모두 포함하는 유니온 타입의 배열로 추론됩니다.
type D = (number | string | boolean)[];

/* [Quiz] 변수 e의 타입은 무엇으로 추론될까요? */
// 'as const'가 적용되어 배열이 '읽기 전용 튜플'로 추론됩니다. 즉, 길이와 요소의 순서 및 타입이 고정된다.
type E = [1, 2, 3];

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect, NotAny } from "@type-challenges/utils";

type TestCases = [
  Expect<Equal<A, number>>,
  Expect<Equal<B, 20>>,
  Expect<Equal<C, number[]>>,
  Expect<Equal<D, (number | string | boolean)[]>>,
  Expect<Equal<E, [1, 2, 3]>>
];
```

</details> </details>

<details> <summary>Quiz 2. 다음 요구사항을 만족하는 Animal, DogCat(개냥이) 타입을 완성하세요</summary>

💡 요구사항:

- Animal 타입은 Dog 타입일 수도 Cat 타입일 수도 있습니다.
- DogCat 타입은 Dog이자 Cat입니다.

```ts
/*
[ 문제 소개 ]
다음 요구사항을 만족하는 Animal, DogCat(개냥이) 타입을 완성하세요
- Animal 타입은 Dog 타입일 수도 Cat 타입일 수도 있습니다.
- DogCat 타입은 Dog이자 Cat입니다.
*/

/* [Quiz] 아래의 코드를 완성해 오류를 제거하세요 */
type Dog = {
  name: string;
  color: string;
};

type Cat = {
  name: string;
  age: number;
};

// Animal 타입은 Dog 또는 Cat을 허용하는 '합집합 (유니온 타입)'으로 정의한다.
type Animal = Dog | Cat;

// DogCat 타입은 Dog이면서 Cat의 속성을 모두 가져야 하는 '교집합 (교차 타입)'으로 정의된다.
type DogCat = Dog & Cat;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
const animals: Animal[] = [
  {
    name: "토뭉이",
    color: "brown",
  },
  {
    name: "쨔미",
    age: 10,
  },
];

const dogCat: DogCat = {
  name: "개냥이",
  age: 2,
  color: "치즈색",
};
```

</details> </details>
