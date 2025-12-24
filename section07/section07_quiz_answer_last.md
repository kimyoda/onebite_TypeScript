# TypeScript section07 Ai 퀴즈, 해설정리

## 1. TypeScript에서 제네릭을 사용하는 주된 목적은?

- A) 코드 실행 속도 향상

- B) 런타임 오류 감소

- C) 컴파일 시 타입 안전성 확보와 유연성 제공 ✅

- D) 자바스크립트 라이브러리 호환성 개선

**해설**

- 제네릭은 다양한 타입을 다루는 코드를 작성할 때, 컴파일 시 타입 오류를 잡아 내고 유연함을 유지하게 해준다.
- any나 unknown보다 안전하다.

**추가 설명**

- 제네릭은 타입 매개변수(Type Parameter)의 개념이다. 일반 함수가 값을 매개변수로 받듯이, 제네릭은 타입 자체를 매개변수로 받아 처리한다.
- 제니릭은 컴파일 타임에만 존재하여 실행 속도나 번들 크기에 영향을 주지 않는다.
- 타입 변수 명명 규칙은 대부분 T는 Type의 약자로 가장 흔하게 사용되나, 의미있는 이름을 사용하는 것이 좋다.
- 여러 타입 변수를 사용할 때 T, U, V 순서로 사용한다.

```ts
// ✅ 제네릭 사용 - 타입 안전 + 유연성
function echo<T>(value: T): T {
  return value;
}

const num = echo(42); // num은 number 타입
const str = echo("hi"); // str은 string 타입
// num.toUpperCase(); // 컴파일 에러 발생!
```

---

## 2. 제네릭 함수의 타입 변수 'T'는 주로 무엇으로 타입이 결정되나?

- A) 함수의 반환 타입.

- B) 함수 호출 시 전달되는 인자값. ✅

- C) 개발자의 명시적 지정.

- D) TypeScript 컴파일러 설정.

**해설**

- 제네릭 함수는 호출할 떄 전달된 인자의 타입을 보고 TypeScript 컴파일러가 자동으로 타입 변수 T의 타입을 추론한다. 명시적 지적도 가능하나 주로 추론된다.

**추가 설명**

- 타입을 명시할 필요가 없으나, 빈 배열이나 null같은 값을 다룰 때는 명시적으로 타입을 지정해주는게 좋다.

```ts
function wrap<T>(value: T) {
  return { data: value };
}

const a = wrap(100); // T는 number로 추론
const b = wrap("hello"); // T는 string으로 추론

// 명시적으로 타입 지정
const c = wrap<boolean>(true);

// 빈 배열 초기화 시 유용
const empty = wrap<number[]>([]);
```

---

## 3. 제네릭 타입 변수 'T'에 extends SomeType'와 같은 제약을 거는 이유는?

- A) T의 기본값 설정

- B) T가 특정 조건을 만족하도록 제한 ✅

- C) 타입 추론 성능 향상

- D) 여러 개의 타입 변수 사용

**해설**

- `extends` 키워드를 사용하여 타입 변수 'T'의 타입을 특정 구조나 속성을 가진 타입으로 제한할 수 있다.
- 제네릭 코드 내에서 해당 속성을 안전하게 사용할 수 있다.

**추가설명**

- extends는 의 부분 집합 혹은 ~을 만족하는 것으로 이해하면 된다.
- `T extends string`은 T는 string이거나 string의 부분 타입이다.
- `keyof`는 객체의 모든 키를 유니온 타입으로 추출해준다.

```ts
// length 속성을 가진 타입만 허용
function getLength<T extends { length: number }>(item: T): number {
  return item.length; // 이제 안전하게 사용 가능!
}

getLength("hello"); // OK
getLength([1, 2, 3]); // OK
```

---

## 4. TypeScript에서 Promise 객체에 제네릭 `<T>`를 사용하는 주된 목적은?

- A) 비동기 작업 속도 향상

- B) 성공 시 결과값 타입 정의 ✅

- C) 실패 시 에러 타입 정의

- D) 코드량 자동 감소

**해설**

- `Promise<T>`에서 `<T>`는 Promise가 성공적으로 완료될 때, `.then()` 메서드로 넘겨받을 값의 타입을 명확히 정의해준다.
- 이를 통해 비동기 결과의 타입 안전성을 확보한다.

**추가설명**

- `Promise<T>` 에서 T는 resolve될 때 값 타입이다.
- 에러 처리는 try-catch, .catch()를 사용하고, 에러 객체는 기본적으로 `unknown`으로 처리된다.

```ts
// Promise<User>는 성공 시 User 타입 반환
async function getUser(): Promise<{ name: string; age: number }> {
  return { name: "Alice", age: 30 };
}

// then의 콜백에서 타입이 정확히 추론됨
getUser().then((user) => {
  console.log(user.name); // OK
  // console.log(user.email); // 에러!
});

async function main() {
  const user = await getUser();
  // user는 { name: string; age: number } 타입
  console.log(user.age);
}
```

---

## 5. 제네릭 인터페이스 또는 제네릭 타입 별칭 사용 시, 제네릭 함수와 다른 점은 무엇인가?

- A) 선언 시 `<T>` 문법

- B) 타입 변수 기본값 불가

- C) 사용 시 타입 명시가 흔함 ✅

- D) 제약(extends) 사용 불가

**해설**

- 제네릭 함수는 호출 시 인자로 타입을 추론하는 경우가 많으나, 제네릭 인터페이스나 타입 별칭은 사용할 때 `<MyType>`처럼 명시적으로 타입을 지정해주는 방식이 일반적이다.

**추가 설명**

- 제네릭 인터페이스나 타입은 틀이다.
- 인터페이스는 선언할 때 타입을 직접 지정해줘야 한다.

```ts
// 함수: 인자로 타입 자동 추론
function identity<T>(value: T): T {
  return value;
}
const num = identity(42); // T는 자동으로 number

// 인터페이스: 사용 시 타입 명시 필요
interface Box<T> {
  value: T;
}
const box: Box<number> = { value: 42 }; // 명시 필요!
```
