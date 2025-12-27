# TypeScript section08 Ai 퀴즈, 해설정리

## 1. 타입 스크립트의 타입 조작 기능에 대한 설명 중, 제네릭도 타입 조작의 한 형태인가?

- A) 네, 문맥에 따라 타입이 동적으로 결정되니까요. ✅

- B) 아니요, 제네릭은 추상화 기능일 뿐이에요.

- C) 타입 변환과는 무관한 별개의 기능이에요.

- D) 경우에 따라 다르지만 보통은 포함되지 않아요.

**해설**

- 제네릭은 타입을 변수의 형태로 받아 문맥에 따라 다른 결과 타입을 만든다.
- 이것이 바로 기존 타입을 상황에 맞게 변환하는 타입 조작의 한 형태이다.

**추가 설명**

- 타입 조작을 넓게 보면, **입력 타입에 따라 결과 타입이 달라지는 설계**를 모두 포함해요.
- 제네릭은 `T` 같은 타입 매개변수를 받아서, **호출/사용 시점에 T가 결정**되도록 만들죠.
- 그래서 `T -> 결과 타입`으로 이어지는 구조 자체가 타입을 상황에 맞게 바꾸는(조작하는) 방식으로 볼 수 있다.
  - 예: `func<T>(value: T): T` → 넣은 타입이 그대로 결과 타입이 됨(문맥 기반 타입 결정)

```ts
function identity<T>(value: T): T {
  return value;
}

const n = identity(1); // T = number
const s = identity("hi"); // T = string
```

---

## 2. 객체나 배열 타입에서 `['속성명']` 또는 `[숫자]`와 같이 인덱스를 이용해 특정 요소의 타입에 접근할 때, 괄호 안의 내용('속성명'이나 숫자)은 타입 시스템에서 무엇을 의미하나?

- A) 실제 변수의 값

- B) 런타임 시점의 인덱스

- C) 타입 레벨에서의 위치나 이름 ✅

- D) 함수 호출 시 전달될 인자

**해설**

- 타입 스크립트의 타입 시스템 내에서는 괄호 안의 내용은 값이 아닌 특정 위치나 이름을 가리키는 타입으로 사용돼요.

**추가 설명**

- `T["seller"]` 같은 문법은 실제 객체에서 `"seller"` 값을 꺼내는 게 아니라,  
  **“T라는 타입의 seller 프로퍼티 타입이 뭐야?”** 라고 타입 레벨에서 묻는 거예요.
- 배열도 마찬가지로 `T[number]`는 “배열 요소 타입”을 의미하고,  
  `[0]`, `[1]` 같은 숫자 인덱스는 튜플에서 “그 위치의 타입”을 의미해요.
- 핵심: **괄호 안은 런타임 값이 아니라 ‘타입 키/위치’로 쓰인다.**

```ts
type User = { id: number; name: string };
type IdType = User["id"]; // number

type Arr = string[];
type Elem = Arr[number]; // string
```

---

## 3. `keyof` 연산자는 객체 타입을 대상으로 사용될 때, 어떤 정보를 추출해서 새로운 타입으로 만들어 줄까요?

- A) T의 기본값 설정

- B) T가 특정 조건을 만족하도록 제한 ✅

- C) 타입 추론 성능 향상

- D) 여러 개의 타입 변수 사용

**해설**

- `extends` 키워드를 사용하여 타입 변수 'T'의 타입을 특정 구조나 속성을 가진 타입으로 제한할 수 있다.
- 제네릭 코드 내에서 해당 속성을 안전하게 사용할 수 있다.

**추가설명**

- `keyof Product` -> `"id" | "name" | "price" | "seller"` 처럼 **프로퍼티 이름이 유니온**이 된다.
- `Product[keyof Product]` 같은 조합도 가능하다.
- 실무에서는 `keyof`를 많이 쓴다. (`function get(obj: T, key: keyof T)`)

```ts
type User = { id: number; name: string };
type UserKeys = keyof User; // "id" | "name"

function getValue(obj: User, key: UserKeys) {
  return obj[key];
}
```

---

## 4. 기존 객체 타입을 기반으로 속성들을 순회하며 새로운 속성 구조를 가지는 객체 타입을 효율적으로 생성하거나 변형할 때, 어떤 타입 조작 기능을 활용할 수 있을까요?

- A) Indexed Access Type

- B) Template Literal Type

- C) Mapped Type ✅

- D) Conditional Type

**해설**

- `key in keyof T` 같은 형태로 모든 **프로퍼티 키를 순회**한다,
- 각 키에 대해 "optional로 만들거나, readonly로 만들거나, 타입을 바꾸거나" 하는 식의 새 타입을 만든다.
- `Partial<T>`, `Readonly<T>` 같은 유틸리티 타입도 내부적으로 이 방식과 같다.

**추가설명**

- Indexed Access Type: `T["seller"]` 처럼 **특정 프로퍼티 타입을 뽑아오는 기능** (순회 /변형은 아니다)
- Template Literal Type: `${A}-${B}` 처럼 **문자열 패턴 타입을 조합**하는 기능 (객체 속성 순회하는 목적이 다르다)
- Mapped Type: `key in keyof T`로 **속성들을 순회하여 새 객체 타입을 생성/변형**
- Conditional Type: `T extends U ? X : Y`처럼 **조건에 따라 타입을 분기** (순회보다는 "분기 판단"에 초점)

```ts
type User = { id: number; name: string };

type OptionalUser = {
  [key in keyof User]?: User[key];
}; // id?, name?
```

---

## 5. 여러 문자열 리터럴 타입 또는 유니온 타입을 조합하여 특정 패턴을 가지는 다양한 문자열 타입들의 유니온을 자동으로 만들고 싶을 때 사용하는 타입 조작은 무엇일까요?

- A) keyof 연산자

- B) Mapped Type

- C) Template Literal Type ✅

- D) Indexed Access Type

**해설**

- 템플릿 리터럴 타입은 자바스크립트의 템플릿 리터럴 구문처럼 백틱을 사용해 여러 타입들을 조합한 새로운 문자열 리터럴 유니온 타입을 자동으로 생성해준답니다.

**추가 설명**

- `type Digit = 0 | 1 | 2`와 `type Score = \` `${Digit}-${Digit}\``처럼 작성
- `"0-0" | "0-1" | ...`와 같은 패턴 유니온을 자동 생성할 수 있다.
- 문자열 규칙이 정해진 값들을 타입으로 제한하고 싶을 때 특히 유용하다.

- keyof 연산자: 객채 타입이 **키 이름 유니온**을 뽑는 용도(문자열 패턴 생성 목적이 다르다)
- Mapped Type: 객체 프로퍼티를 **순회/변형**하는 용도 (문자열 조합과 다르다)
- Template Literal Type: **문자열 리터럴 타입을 조합**해서 패턴 유니온을 만든다.
- Indexed Access Type: 객체/배열에서 **특정 요소 타입을 꺼내는 용도**(조합 생성, 목적이 다름)

```ts
type Digit = 0 | 1 | 2;
type Score = `${Digit}-${Digit}`; // "0-0" | "0-1" | ...
```
