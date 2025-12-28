# TypeScript section09 Ai 퀴즈, 해설정리

## 1. 제네릭 클래스를 사용하는 주된 이유는 무엇일까요?

- A) 런타임 오류 방지

- B) 타입 안정성과 코드 재사용성 ✅

- C) 클래스 상속 구조 단순화

- D) 동적 타입 선언 허용

**해설**

- 제네릭은 다양한 타입에 대해 동일한 로직을 적용, 타입 안전성을 유지하고 코드를 재사용하게 돕는 기능이다.

**추가 설명**

- 같은 클래스 로직을 쓰되, 내부 데이터 타입만 바꾸고 쓰고 싶을 때 제네릭이 좋다.
- 넣읕 아입이 그대로 유지, 타입 안전성이 올라간다.

```ts
class Box<T> {
  constructor(public value: T) {}
}

const nBox = new Box(1); // Box<number>
const sBox = new Box("hi"); // Box<string>
```

---

## 2. 객체 타입의 모든 키를 유니온 타입으로 얻는 연산자는 무엇인가요?

- A) `typeof`

- B) `keyof` ✅

- C) `as const`

- D) `in`

**해설**

- `keyof`는 객체 타입의 모든 프로퍼티 이름을 문자열 리터럴 유니온 타입으로 가져와 타입 안전한키 접근을 가능하게 한다.

**추가 설명**

- `keyof Product(예시)` -> `"id" | "name" | "price" | "seller"` 처럼 키들의 유니온이 된다.
- 잘못된 키를 넣는 실수를 컴파일 타입에 잡을 수 있다.

- `typeof`: 값에서 타입을 뽑아오는 연산자다.(typeof arr)
- `keyof`: 객체 타입에서 프로퍼티 이름들을 유니온으로 뽑는다.
- `as const`: 값을 리터럴 타입 + readonly로 고정 더 좁은 타입으로 만든다.
- `in`: 주로 `key inf keyof T` 형태로 키를 순회할 떄 문법 요소다.

```ts
type User = { id: number; name: string };
type UserKeys = keyof User; // "id" | "name"

function get(obj: User, key: UserKeys) {
  return obj[key];
}
```

---

## 3. 기존 타입의 속성을 변환하여 새로운 객체 타입을 생성하는 기법은?

- A) 인덱스드 엑세스 타입

- B) 조건부 타입

- C) 맵드 타입 ✅

- D) 템플릿 리터럴 타입

**해설**

- 맵드 타입은 기존 타입의 각 속성을 순회하여 새로운 속성으로 변환한다.
- 새로운 객체 타입을 편리하게 만들어주는 강력한 기능이다.

**추가설명**

- `key in keyof T`로 모든 프로퍼티를 대상으로 잡는다.
- `?(선택적)`, `readonly(읽기 전용)` 등을 붙이거나 타입을 바꾸는 식으로 새 타입을 만든다.

- 인덱스드 액세스 타입: `T["seller"]` 처럼 특정 프로퍼티 타입을 꺼낸다.
- 조건부 타입: `T extends U ? A : B` 처럼 조건에 따라 타입을 분기하는 기능이다.
- 맵드 타입: `key in keyof T`로 모든 키를 돌며 프로퍼티를 생성 / 변형하는 기능이다.
- 템플릿 리터럴 타입: `${A}-${B}`처럼 문자열 타입 패턴을 조합하는 기능이다.

```ts
type User = { id: number; name: string };

type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};
```

---

## 4. 조건부 타입에서 infer 키워드의 역할은 무엇일까요?

- A) 타입 제약 추가

- B) 타입 추론을 통한 새타입 정의 ✅

- C) 타입 검사 비활성화

- D) 여러 타입을 하나로 합치기

**해설**

- `infer` 키워드는 조건부 타입 내 특정 위치의 타입을 '추론'하여 새로운 타입 변수로 사용할 수 있게 해준다.

**추가설명**

- `infer R`은 패턴에 맞으면 그 자리에 들어온 타입을 R로 뽑는다.
- 배열 요소 타입, Promise 결과 타입, 함수 반환 타입 등 안쪽 타입을 꺼낼 때 자주 쓴다.

```ts
type Elem<T> = T extends (infer R)[] ? R : never;

type A = Elem<number[]>; // number
```

---

## 5. 조건부 타입 내에서 `infer` 키워드를 사용하는 주된 목적은 무엇일까?

- A) Partial

- B) Pick

- C) Exclude

- D) ReturnType ✅

**해설**

- `ReturnType`은 특정 함수의 반환 타입만 추루하여 새로운 타입으로 만들어주는 유틸리티 타입이다.

**추가 설명**

- 함수 구현을 직접 하지 않아도, 함수의 결과 타입이 뭔지를 타입으로 뽑아 낼 수 있다.
- 리팩토링 중 함수 반환 타입이 바뀌어도 `ReturnType<typeof fn>`을 쓰면 연쇄 수정이 줄어든다.

- `Partial<T>`: T의 모든 프로퍼티를 선택적(?)으로 바꾼 타입
- `Pick<T, K>`: T에서 K(키들)만 골라서 만든 타입
- `Exclude<T, U>`: T에서 U에 해당하는 타입을 제거한 타입
- `ReturnType<F>`: 함수 타입 F의 반환 타입만 뽑아낸 타입

```ts
function makeUser() {
  return { id: 1, name: "kim" };
}

type User = ReturnType<typeof makeUser>; // { id: number; name: string }
```
