# TypeScript section10 Ai 퀴즈, 해설정리

## 1. TypeScript 유틸리티 타입의 주된 목적은?

- A) 외부 라이브러리 설치 간소화

- B) 코드 실행 속도 향상

- C) 런타임 오류 자동 감지

- D) 타입 정의 재사용 및 간결화 ✅

**해설**

- 유틸리티 타입은 복잡한 타입 로직을 미리 정의, 타입 코드의 재활용을 높이고 정의를 간결하게 만든다.

**추가 설명**

- 유틸리티 타입은 새로운 기능을 런타임에 추가가 아닌, **타입을 더 쉽게 재사용 / 가공**하게 해주는 도구다.
- **컴파일 타임(타입 체크 단계)**에서 개발 경험과 안전성을 높여준다.

```ts
type User = { id: number; name: string; email: string };

// 기존 타입에서 일부 속성만 쓸 때
type UserPreview = Pick<User, "id" | "name">;
// {id: number; name: string}
```

---

## 2. 객체 타입의 모든 속성을 선택적으로 만들 때 사용하는 유틸리티 타입은?

- A) `Pick`

- B) `Partial` ✅

- C) `Readonly`

- D) `Required`

**해설**

- `Partial`은 모든 속성을 ? 붙여 선택적으로 바꿔준다.
- Required는 반대로 필수, Readonly는 읽기 전용으로 만든다.
- Pick은 특정속성만 선택한다.

**추가 설명**

- `Pick<T, K>`: T에서 K에서 해당하는 속성만 골라서 새 타입을 만든다.
- `Partial<T>`: T의 모든 속성을 선택적(?)으로 바꾼다.
- `Readonly<T>`: T의 모든 속성을 읽기 전용(readonly)로 바꾼다
- `Required<T>`: T의 모든 속성을 필수(선택적 제거)로 바꾼다

```ts
type User = { id: number; name: string; email: string };

type UserPatch = Partial<User>;
// {id?: number; name?: string; email?: string}
const patch1: UserPatch = { name: "kim" };
const patch2: UserPatch = { email: "a@b.com" };
```

---

## 3. 객체 타입에서 Pick과 Omit의 핵심 차이는?

- A) 키 타입/값 타입을 변경

- B) 속성을 선택 / 제외 ✅

- C) 속성을 필수 / 선택

- D) 속성을 추가 / 변경

**해설**

- Pick은 기존 타입에 원하는 속성만 '선택' 해서 새 타입을 만든다.
- Omit은 특정 속성을 '제외'하고 새 타입을 만든다.
- 둘은 속성을 선택하거나 제외하는 반대 기능을 한다.

**추가설명**

- `Pick`은 필요한 것만 가져오기
- `Omit`은 필요없는것만 빼기

```ts
type User = { id: number; name: string; email: string; password: string };

type PublicUser1 = Pick<User, "id" | "name">;
type PublicUser2 = Omit<User, "password">;
```

---

## 4. 특정 키와 값 타입의 유연한 객체 타입(사전 형태) 정의에 적합한 유틸리티 타입은?

- A) ReturnType

- B) Omit

- C) Record ✅

- D) Partial

**해설**

- `Record<K, V>`는 키가 V타입, 값이 V 타입인 객체를 정의할 때 유용하다.
- 인덱스 시그니처와 비슷하나 키 타입을 더 구체적으로 제한할 수 있다.
- 다른 타입은 객체의 형태를 바꾸거나 함수 반환 타입을 추출한다.

**추가설명**

- `ReturnType<F>`: 함수 타입 F의 반환 타입만 뽑아낸다
- `Omit<T, K>`: T에서 K 속성들을 제거한 새타입
- `Record<K, V>`: 키 집합 K에 대해 값 타입 V를 가지는 "사전 형태" 객체 타입
- `Partial<T>`: T의 모든 속성을 선택적으로 바꾼다.

- Record는 키가 정해진 맵을 만들때 유용하다.
- `"A" | "B" | "C"` 같은 유니온으로 제한하면 빠진 키/잘못된 키를 컴파일 타임때 잡을 수 있다.

```ts
type Grade = "bronze" | "silver" | "gold";

type Benefit = Record<Grade, number>;
// { bronze: number; silver: number; gold: number }

const benefits: Benefit = {
  bronze: 1,
  silver: 3,
  gold: 5,
};
```

---

## 5. 유니온 타입 처리에서 Exclude와 Extract유틸리티 타입은 서로 어떤 관계?

- A) 동일한 문법을 사용한다

- B) 하나는 객체, 하나는 함수에만 쓴다.

- C) 조건 검사 결과에 따라 반대 역할을 한다. ✅

- D) 결과 타입이 항상 동일하다.

**해설**

- `Exclude<T,U>`는 T가 U에 확장되면 never, 아니면 T를 반환하고, `Extract<T, U>`는 T가 U에 확장되면 T, 아니면 never를 반환해서 서로 반대 역할을 한다.

**추가 설명**

- 둘다 유니온에서 필터링을 하나 방향이 반대다.
  - `Exclude`: 빼기 (제거)
  - `Extract`: 남기기 (추출)

```ts
type T = "read" | "write" | "delete";

type A = Exclude<T, "delete">; // "read" | "write"
type B = Extract<T, "read" | "write">; // "read" | "write"
```
