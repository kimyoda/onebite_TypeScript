# 🎯 Day 12 미션 안내

Day12 미션 안내드리겠습니다.

오늘의 미션은 바로 바로 코딩 Quiz입니다!
3개의 퀴즈가 준비되어 있습니다!

### Quiz 1. 다음 요구사항을 만족하도록 getSellersFromProducts 함수의 매개변수와 반환값 타입을 정의하세요

💡 **요구사항:**

- getSellersFromProducts 함수는 매개변수로 받은 Product 배열로부터, seller 객체만 추출해 새로운 배열로 반환하는 함수입니다.
- 반환값을 명시적으로 설정해야 합니다 (인덱스드 엑세스 타입)

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
다음 요구사항을 만족하도록 getSellersFromProducts 함수의 매개변수와 반환값 타입을 정의하세요
- getSellersFromProducts 함수는 매개변수로 받은 Product 배열로부터, seller 객체만 추출해 새로운 배열로 반환하는 함수입니다.
- 반환값을 명시적으로 설정해야 합니다 (인덱스드 엑세스 타입)
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

// 인덱스드 엑세스 타입: Product 타입의 "seller"프로퍼티 타입을 뽑아온다.
// roducts에서 seller만 map으로 추출하므로 반환값은 seller들의 "배열" 타입이 된다. (Product["seller"][])
function getSellersFromProducts(products: Product[]): Product["seller"][] {
  return products.map((product) => product.seller);
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect } from "@type-challenges/utils";

type TestCases = [
  Expect<Equal<Parameters<typeof getSellersFromProducts>[0], Product[]>>,
  Expect<Equal<ReturnType<typeof getSellersFromProducts>, Product["seller"][]>>
];
```

</details>

### Quiz 2. 다음 조건을 만족하는 3개의 타입을 추가로 정의하세요

💡 **요구사항:**

- PartialProduct 타입은 Product 타입의 모든 프로퍼티를 다 선택적 프로퍼티로 바꾼 타입입니다.

- ReadonlyProduct 타입은 Product 타입의 모든 프로퍼티를 다 읽기 전용 프로퍼티로 바꾼 타입입니다.

- ReadonlyPartialProduct 타입은 Product 타입의 모든 프로퍼티를 다 선택적, 읽기 전용 프로퍼티로 바꾼 타입입니다.

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
다음 조건을 만족하는 3개의 타입을 추가로 정의하세요
- PartialProduct 타입은 Product 타입의 모든 프로퍼티를 다 선택적 프로퍼티로 바꾼 타입입니다.
- ReadonlyProduct 타입은 Product 타입의 모든 프로퍼티를 다 읽기 전용 프로퍼티로 바꾼 타입입니다.
- ReadonlyPartialProduct 타입은 Product 타입의 모든 프로퍼티를 다 선택적, 읽기 전용 프로퍼티로 바꾼 타입입니다.
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

// [key in key of] : 모든 프로퍼티 이름(id, name, price, seller)를 key로 하나씩 순회한다.
// ?를 통해 각 프로퍼티를 선택적으로 만들어 없어도 되는 프로퍼티로 바꾼다.
// [key] 현재 key에 해당하는 원래 타입을 그대로 가져온다.
type PartialProduct = {
  [key in keyof Product]?: Product[key];
};

// [key in key of] : 모든 프로퍼티 이름(id, name, price, seller)를 key로 하나씩 순회한다.
// readonly를 통해 각 프로퍼티를 읽기 전용으로 만들어 값 변경을 막는다.
// [key] 현재 key에 해당하는 원래 타입을 그대로 가져온다.
type ReadonlyProduct = {
  readonly [key in keyof Product]: Product[key];
};

// readonly + ? : 읽기 전용이면서 선택적인 프로퍼티로 만든다.
//  즉, 있어도 수정 불가 / 없어도 OK.
type ReadonlyPartialProduct = {
  readonly [key in keyof Product]?: Product[key];
};

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect, NotEqual } from "@type-challenges/utils";

type TestCases = [
  Expect<Equal<PartialProduct, Partial<Product>>>,
  Expect<Equal<ReadonlyProduct, Readonly<Product>>>,
  Expect<Equal<ReadonlyPartialProduct, Readonly<Partial<Product>>>>
];
```

</details>

### Quiz 3. 다음 조건을 만족하는 Score 타입을 구현하세요

💡 **요구사항:**

- Score 타입은 점수를 나타내기 위한 문자열 타입으로 '0부터 9 까지의정수 0부터9까지의정수− {0부터 9까지의 정수}'형식을 갖습니다'
  - ex) "1-0", "3-2", "0-4" 이런 형태의 문자열 타입입니다.
  - ex) 어느쪽의 점수에도 두 자리수는 올 수 없습니다.

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
다음 조건을 만족하는 Score 타입을 구현하세요
- Score 타입은 점수를 나타내기 위한 문자열 타입으로 '${0부터 10까지의 정수}-${0부터 10까지의 정수}'형식을 갖습니다'
  - ex) "1-0", "3-2", "0-4" 이런 형태의 문자열 타입입니다.
  - ex) 어느쪽의 점수에도 두 자리수는 올 수 없습니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */
// 0~10 범위 점수 후보를 유니온 타입으로 타입으로 정의해서 조합한다.
type NumberSovle = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
// "왼쪽 점수-오른쪽 점수" 형태의 문자열 타입을 만들기 위해 템플릿 리터럴 타입
// 모든 경우의 문자열 타입을 생성한다.
type Score = `${NumberSovle}-${NumberSovle}`;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import {
  Equal,
  Expect,
  ExpectExtends,
  ExpectFalse,
} from "@type-challenges/utils";

const tc1 = "19-0";
const tc2 = "5-11";
const tc3 = "9-1";
const tc4 = "2-8";
const tc5 = "7-2";

type TestCases = [
  ExpectFalse<ExpectExtends<Score, typeof tc1>>,
  ExpectFalse<ExpectExtends<Score, typeof tc2>>,
  Expect<ExpectExtends<Score, typeof tc3>>,
  Expect<ExpectExtends<Score, typeof tc4>>,
  Expect<ExpectExtends<Score, typeof tc5>>
];
```

</details>
