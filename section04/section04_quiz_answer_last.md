# TypeScript section04 Ai 퀴즈, 해설정리

## 1. 함수 매개변수에 `?`를 붙여 선택적 매개변수로 만들면 타입은 어떻게 추론될까?

- A) 선언된 타입 그대로
- B) `undefined` 타입으로
- C) 선언된 타입 또는 `undefined`의 유니언 타입으로 ✅
- D) `any` 타입으로

**해설**

- 선택적 매개변수는 값을 제공하지 않을 수 있어, 원래 선언된 타입과 `undefined`가 합쳐진
- 즉 `tall?: number`는 `tall: number | undefined`처럼 취급된다.

**추가 설명**

- 선택적 매개변수는 호출 시 생략 가능하여, 함수 내부에서는 해당값이 `undefined`일 수 있다는 전제를 가져야 한다.
- 보통 `if (tall === null)`, `tall ?? 0` 같은 방식으로 안전하게 처리한다.

```ts
function introduce(name: string, tall?: number) {
  // tall은 number | undefined
  const height = tall ?? 0; // undefined면 0
  return `${name} / ${height}`;
}

introduce("A"); // OK
introduce("A", 180); // OK
```

---

## 함수처럼 호출되면서 동시에 객체 속성도 가질 수 있는 '하이브리드 타입'을 정의할 때 쓰는 문법은?

A) 함수 오버로딩

B) 호출 시그니쳐 ✅

C) 사용자 정의 타입 가드

D) 함수 타입 표현식
**해설**

- 호출 시그니쳐는 "객체 타입 문법 안에 함수 호출 형태를 같이 선언"할 수 있게 해준다.
- 함수처럼 호출도 되고 속성도 갖는 타입(하이브리드 타입)을 만들 수 있다.

**추가 설명**

- 함수 타입 표현식은 "호출 가능"만 표현한다.
- 호출 시그니쳐(객체 타입)은 "호출 + 속성/메서드"까지 함께 묶을 수 있다.

```ts
type Hybrid = {
  (msg: string): number; // 호출 시그니쳐
  count: number; // 속성
};

const h: Hybrid = Object.assign((msg: string) => msg.length, { count: 0 });

h("hello"); // 호출 가능
h.count += 1; // 속성 접근 가능
```

- 문법 설명

  - 1. 함수 오버로딩

    - **같은 함수 이름**에 대해 여러 호출(매개변수 / 반환 타입 조합)을 선언하는 기능이다.
    - 호출 가능한 케이스를 타입 레벨에서 나열, 호출마다 타입 추론을 다르게 한다.
    - 오버로딩만으로 "함수 + 속성"을 한 타입에 같이 묶어 표현하는 데 한계가 있다(속성을 묶으려면 객체 타입 문법이 필요하다)

  - 2. 호출 시그니쳐

    - **객체 타입안에 함수 호출 형태**를 선언하는 문멉이다.
    - 호출 가능 + 속성 / 메서드를 한 타입에 같이 담을 수 있어 **하이브리드 타입**을 만들때 정답이다.

  - 3. 사용자 정의 타입 가드

    - `param is Type` 형태로 반환 타입을 선언, 함수가 `true`일 때 **해당 스코프에서 타입을 좁혀주는 기능**이다.
    - 타입 좁히기, 호출 + 속성은 같은 하이브리드 타입 정의 문법과는 역할이 다르다.

  - 4. 함수 타입 표현식
    - `(a: A, b: B) => R` 처럼 **함수의 시그니쳐( 매개변수 / 반환)**만 표현하는 타입 문법이다.
    - 호출 가능한 함수 자체를 나타나는데 좋으나, 여기에 **속성까지 같이 정의**하진 못한다.(필요하다면 호출 시그니쳐 / 객체 타입으로 넘어가야 한다).

---

## 3. 매개변수 개수가 같은 두 함수 타입 호환성 검사에서, 매개변수 타입에 대해 일반적으로 허용되는 할당 방향은?

- A) 할당하는 쪽 매개변수 타입이 더 좁을 때

- B) 할당하는 쪽 매개변수 타입이 더 넓을 때 ✅

- C) 두 매개변수 타입이 정확히 같을 때만

- D) 타입에 관계없이 항상 허용

**해설**

- 함수 타입 호환성에서 매개변수 타입은 일반적으로 반공변(contravariant)성질을 가진다.
- 대상이 요구하는 것보다 할당하는쪽에서 더 넓은 타입을 받을 수 있으면 안전하다고 본다.

**추가설명**

- 대상이 `Dog`만 넣어준다고 하면,
- 할당하는 쪽은 `Animal`을 받아도 문제가 없다
- 반대로 대상이 `Animal`을 넣을 수 있으나, 할당하는 쪽이 `Dog`만 받으면 위험하다.

```ts
type Animal = { name: string };
type Dog = Animal & { bark(): void };

type FnDog = (d: Dog) => void;
type FnAnimal = (a: Animal) => void;

// 보통 안전한 방향: 더 넓게 받는 함수(FnAnimal)를 Dog만 주는 자리(FnDog)에 넣는 느낌
let fDog: FnDog;
let fAnimal: FnAnimal;

fDog = fAnimal; // (개념적으로) 더 넓게 받는 쪽이 안전한 방향
```

---

## 4. 함수 오버로딩에서 구현부 없이 여러 버전의 함수 시그니쳐를 선언하는 '오버로드 시그니쳐'의 주된 역할은?

- A) 함수의 셀제 동작 구현
- B) 함수가 호출될 때 받을 수 있는 매개변수의 다양한 형태 선언 ✅
- C) 함수의 최종 반환 타입 결정
- D) 런타임 시 타입 오류 방지

**해설**

- 오버로드 시그니쳐는 구현부 없이, 함수는 이런형태로 호출될 수 있다를 타입 레벨에서 선언한다.
- 컴파일러는 이 선언을 기준으로 호출이 유효한지 검사한다.

**추가설명**

- 오버로드 시그니쳐는 "호출 가능한 경우의 수를 제한" 하거나 "호출별 반환 타입을 다르게" 표현할 때 유용하다.
- 구현 시그니쳐(실제 함수 구현)은 모든 케이스를 처리할 수 있게 넓게 받아야 한다.

```ts
function add(): number;
function add(a: number): number;
function add(a: number, b: number): number;

function add(a?: number, b?: number) {
  return (a ?? 0) + (b ?? 0);
}

add();
add(1);
add(1, 2);
// add("1"); // 에러
```

---

## 5. 반환 타입으로 `매개변수명 is 타입`을 쓰면 함수는 어떤 기능 하나?

- A) 반환 값을 특정 타입으로 강제

- B) 호출된 스코프 내에서 매개변수 타입을 좁힘 ✅

- C) 매개변수를 선택적으로 만듦

- D) 실행 속도 최적화

**해설**

- `매개변수명 is 타입`은 사용자 정의 타입 가드 문법이다.
- 이 함수가 `true`를 반환하면 TypeScript는 "그 순간부터"해당 매개변수를 지정한 타입으로 타입 좁히기한다.

**추가 설명**

- `if(isGuest(user))` 같은 분기안에 `user`가 Guest로 확정되면, 그 타입에서 가능한 속성 접근이 안전하게 열린다.
- 타입 단언(`as`)가 아니라 "검증 함수로 좁히는 방식"이라 더 안전하다.

```ts
type Guest = { visitCount: number; isVisitor: boolean };
type Member = { id: string; isSubscribed: boolean };
type User = Guest | Member;

function isGuest(user: User): user is Guest {
  return (user as Guest).isVisitor !== undefined;
}

function greet(user: User) {
  if (isGuest(user)) {
    // 여기서는 user가 Guest로 좁혀짐
    return `${user.visitCount}번째 방문입니다`;
  }
  // 여기서는 Member일 가능성이 남아있음
  return "안녕하세요!";
}
```
