# TypeScript section09 Ai 퀴즈, 해설정리

## 1. 조건부 타입 `T extends U ? A : B`에서 `extends`는 무엇을 확인하는?

- A) T가 U와 같은 타입인지

- B) T가 U의 슈퍼타입인지

- C) T가 U의 서브타입인지 ✅

- D) T에 U 타입의 속성이 포함되어 있는지

**해설**

- 조건부 타입에서 `extedns`는 앞의 타입(T)이 뒤의 타입(U)에 할당 가능한 서브타입인지 확인하는 데 사용된다.
- 조건 결과에 따라 A 또는 B타입으로 결정된다.

**추가 설명**

- `extends`는 상속이 아니라, 타입 시스템 관점에서 `T를 U에 할당 가능한지` 보는 검사에 가깝다.
- 조건부 타입은 포함 관계를 기반으로 타입을 갈라주는 도구로 많이 쓴다.

```ts
type IsNumber<T> = T extends number ? "YES" : "NO";
type A = IsNumber<123>; // "YES"
type B = IsNumber<"hi">; // "NO"
```

---

## 2. 함수에서 입력 타입에 따라 다른 반환 타입을 유연하게 정의하면서 타입 안전성을 높이는 방법은 무엇인가?

- A) 타입 단언(Type Assertion) 사용

- B) 함수 오버로딩(Function Overloading) 사용 ✅

- C) 유니온 타입(Union Type)만 사용

- D) any 타입 사용

**해설**

- 타입 스크립트의 타입 시스템 내에서는 괄호 안의 내용은 값이 아닌 특정 위치나 이름을 가리키는 타입으로 사용돼요.

**추가 설명**

- 입력에 따라 반환 타입이 달라지는 함수를 만들 때, 오버로딩은 호출 케이스를 타입 레벨에서 명확히 나열할 수 있다.
- 유니온만 쓰면 반환 타입이 넓어지기 쉬워 호출부에서 붎편해질 수 있다.
- 오버로딩은 호출부 경험을 좋게 만들어주는 장점이 크다.

- 타입단언: 컴파일러가 추론한 타입보다 더 구체적이나 다른 타입으로 직접 지정하는 문법이다.컴파일러에게 알려주는 방식이라 잘못 단언하면 런타임 오류로 이어진다.
- 함수 오버로딩: 하나의 함수 이름에 대해, 여러 개의 호출 시그니쳐(반환 타입 조합)을 타입 레벨에 정의하는 방식이다. 입력 형태에 따라 반환 타입이 더 정확하게 추론된다.
- 유니온 타입: 입력이나 반환을 `A | B`처럼 여러 타입 중 하나로 표현하는 방식이다.
- any 타입: 해당 값 표현식을 무조건 허용하는 타입이다.

```ts
function wrap(value: number): number[];
function wrap(value: string): string[];
function wrap(value: number | string) {
  return [value];
}

const a = wrap(1); // number[]
const b = wrap("hi"); // string[]
```

---

## 3. 조건부 타입이 유니온 타입과 함께 사용될 때 '분산적 조건부 타입'이 된다고 합니다. 이때 유니온 타입은 어떻게 처리될까?

- A) 유니온 타입 전체가 하나의 타입으로 판단돼요.

- B)유니온 타입이 분리되어 각 멤버별로 조건부 타입이 적용돼요. ✅

- C) 유니온 타입 중 첫 번째 멤버만 적용돼요.

- D) 분산적 조건부 타입으로는 유니온을 처리할 수 없어요.

**해설**

- `extends` 키워드를 사용하여 타입 변수 'T'의 타입을 특정 구조나 속성을 가진 타입으로 제한할 수 있다.
- 제네릭 코드 내에서 해당 속성을 안전하게 사용할 수 있다.

**추가설명**

- 분산이 일어나는 조건은 **조건부 타입에서 왼쪽이 그대로의 타입 변수 T일때**
  - `T extends U ? ... : ...` 위 형태
- 유니온이면 T가 각각으로 쪼개져서 계산된 뒤 결과가 다시 유니온으로 합쳐진다.

```ts
type ToString<T> = T extends number ? "NUM" : "OTHER";

type R = ToString<number | boolean>;
// (number extends number ? "NUM" : "OTHER") |
// (boolean extends number ? "NUM" : "OTHER")
// => "NUM" | "OTHER"
```

---

## 4. 유니온 타입이 분산적 조건부 타입으로 처리되는 기본 동작을 막으려면 어떻게 해야 할까?

- A) extends 양쪽을 괄호 ()로 감싸요.

- B) extends 양쪽을 대괄호 []로 감싸요. ✅

- C) 조건부 타입 앞에 특정 키워드를 붙여요.

- D) never 타입을 사용해요.

**해설**

- `[T] extends [U]`와 같이 `extends` 키워등의 양쪽에 타입을 대괄호로 감싸면 조건부 타입의 분산적인 동작이 일어나지 않는다.
- 유니온 타입 전제를 하나로 판단하게 된다.

**추가설명**

- `[T]` 처럼 감싸면 T르 유니온 멤버로 쪼개지 않고, 통째로 하나의 타입으로 봐야한다.
- 유니온 전체가 특정 타입에 들어갈 수 있는지 판단을 하고 싶을 때 사용한다.

```ts
type Dist<T> = T extends number ? "YES" : "NO";
type NoDist<T> = [T] extends [number] ? "YES" : "NO";

type A = Dist<number | boolean>; // "YES" | "NO" (분산됨)
type B = NoDist<number | boolean>; // "NO" (통째로 검사)
```

---

## 5. 조건부 타입 내에서 `infer` 키워드를 사용하는 주된 목적은 무엇일까?

- A) 타입 에러를 무시하기 위해

- B) 특정 위치의 타입을 추론하여 사용하기 위해 ✅

- C) 조건을 만족하지 않을 때 never를 반환하기 위해

- D) 조건부 타입을 더 빠르게 처리하기 위해

**해설**

- `infer`는 조건부 타입의 `extends` 절 패턴 매칭 중 특정 위치의 타입을 '추론'할때 사용된다. 추론된 타입은 조건부 타입의 결과로 활용될 수 있다.

**추가 설명**

- `infer`는 패턴에 맞으면 그 자리에 들어온 타입을 변수처럼 뽑아 쓰는 기능이다.
- 배열/Promise/함수 반환 타입 등에서 안쪽 타입을 꺼낼 때 자주 쓴다.

```ts
type UnwrapPromise<T> = T extends Promise<infer R> ? R : never;

type A = UnwrapPromise<Promise<number>>; // number
type B = UnwrapPromise<string>; // never
```
