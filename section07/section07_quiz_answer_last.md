# TypeScript section07 Ai 퀴즈, 해설정리

## 1. 공통 리터럴 속성으로 타입을 좁히는 기능은?

- A) 타입 단언(Type Assertion)
- B) 타입 좁히기(Type Narrowing)
- C) 함수 오버로딩(Function Overloading)
- D) 서로서(구별된) 유니온 타입 (Discriminated/Disjoint Union) ✅

**해설**

- 서로소 유니온 타입은 특정 리터럴 속성을 판별자(discriminant)로 사용하여 유니온 멤버를 구분한다.
- 타입 좁히기를 용이하게 한다. 더 안전하고 명확한 타입 처리가 가능해진다.

**추가 설명**

- 핵심은 공통 리터럴 속성이다.

  - 타입 단언(Type Assertion)

    - 개발자가 값의 타입을 확신할 때, 컴파일러에 강제로 지정하는 문법이다.
    - 컴파일러의 판단을 바꾸는 개념에 가깝다.

  - 타입 좁히기

    - 조건문, 검사 로직을 통해 더 구체적인 타입으로 범위를 줄이는 과정이다.
    - `typeof`, `in`, `instanceof`, `리터럴 비교`, 사용자 정의 타입가드 등

  - 오버로딩
    - 하나의 함수에 대해 호출 가능한 형태(시그니쳐)를 여러 개 선언,
    - 입력 형태에 따라 허용되는 호출 / 반환 타입을 명확하게 표현하는 기능이다.

```ts
type Success = {type: "success"; data: string};
type Fail = { type: "fail"; error: string};
type Result = Success | Fail;

function handle(r: Result) {
  if (r.type === "success) {
  // 여기서는 Success로 좁혀진다
  return r.data.toUpperCase();
  }
  // 여기서는 Fail로 좁혀진다.
  return r.error;
}
```

---

## 2. 타입스크립트에서 함수 타입이 다른 함수 타입과 호환되기 위한 조건은 무엇인가요?

- A) 매개변수 개수와 타입이 반드시 동일해야 한다.

- B) 반환 타입은 달라도 매개변수 타입만 같으면 호환된다.

- C) 할당되는 함수의 매개변수는 할당 대상보다 더 적을 수 있다.

- D) 할당되는 함수의 반환 타입은 할당 대상의 반환 타입에 할당 가능해야 한다. ✅

**해설**

- 함수 타입 호환성에서 할당받는 함수의 반환 타입은 할당하는 함수의 반환 타입에 할당 가능해야 한다.
- 이를 공변성(Convariance)라고 하며, 타입 안전성을 유지하는 중요한 규칙이다.

**추가 설명**

- 함수 타입 호환은 호출자가 안전하가로 확인한다.
- 반환 타입은 기대 타입에 들어갈 수 있어야 호환된다.

```ts
type ExpectString = () => string;
type ReturnOK = () => "OK";

let a: ExpectString;
let b: ReturnOK;

a = b; // ✅ "OK"는 string에 할당 가능
```

---

## 3. 사용자 정의 타입 가드 함수를 정의할 때 필수적으로 사용하는 키워드는 무엇인가요?

- A) `typeof`

- B) `instanceof`

- C) `is` ✅

- D) `as`

**해설**

- 사용자 정의 타입 가드는 함수는 특정 조건이 참일 때 매개변수의 타입을 더 구체적으로 좁힐 수 있도록 `is` 키워드를 사용한다.
- 런타임에서 타입 정보를 제공하여 타입스크립트가 더 정확하게 타입을 추론하게 돕는다.

**추가설명**

- `typeof`

  - 값의 원시 타입을 검사하는 연산자다.
  - 주로 `string`, `number`, `boolean`, `function` 같은 타입 판별에 사용된다.

- `instanceof`

  - 값이 특정 클래스(생성자 함수)의 인스턴스인지 검사하는 연산자다.
  - 클래스 기반 객체 판별에 많이 쓰인다.

- `is`

  - 사용자 정의 타입 가드 함수의 반환 타입 위치에 쓰는 키워드다.

- `as`
  - 타입 단언 문법이다.
  - 실제 런타임 검사를 수행하는 도구는 아니다.

```ts
type Cat = { kind: "cat"; meow(): void };
type Dog = { kind: "dog"; bark(): void };
type Pet = Cat | Dog;

function isCat(p: Pet): p is Cat {
  return p.kind === "cat";
}

function act(p: Pet) {
  if (isCat(p)) p.meow();
  else p.bark();
}
```

---

## 4. 타입스크립트에서 인터페이스의 주요 역할은 무엇이며, 주로 무엇을 정의할까요?

- A) 클래스의 구현 세부 사항을 정의

- B) 변수의 런타임 타입을 강제

- C) 객체의 구조와 타입을 정의 ✅

- D) 함수의 오버로드 시그니처를 선언

**해설**

- 인터페이스는 객체가 가져야 할 속성과 메서드의 형태를 명세하는 계약이다. 코드의 일관성을 유지하고, 협업 시 객체의 사용방식을 명확히 정의할 수 있게 돕는다.

**추가설명**

- 인터페이스는 해당 객체는 필드/메서드를 가져야 한다는 형태(구조)계약서다.
- 구현 방법은 안정하고, 겉모양만 정해 협업에 유리하다.

```ts
interface User {
  id: number;
  name: string;
}
const u: User = { id: 1, name: "yohan" };
```

---

## 5. 타입스크립트에서 제네릭을 사용하는 주요 이점은 무엇일까요?

- A) 런타임 성능 최적화

- B) 동적인 타입 변환을 허용

- C) 다양한 타입에서 재사용 가능한 컴포넌트 생성 ✅

- D) 컴파일 시점 에러를 무시

**해설**

- 제네릭은 타입을 마치 함수의 매개변수처럼 사용, 다양한 타입과 작동하는 재사용 가능한 컴포넌트를 만들 수 있게 한다.
- 이는 코드 중복을 줄이고 타입 안전성을 동시에 높여준다.

**추가 설명**

- 제네릭은 타입을 나중에 결정해서, 같은 로직을 여러 타입에 재사용하게 한다.
- `any`처럼 포기하지 않고, 타입을 유지한 채 재사용한다는게 포인트다.

```ts
function wrap<T>(value: T) {
  return { value };
}
wrap(1).value; // number
wrap("hi").value; // string
```
