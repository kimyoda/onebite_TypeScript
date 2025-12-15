# 🎯 Day 5 미션 안내

오늘의 미션은 바로 바로 코딩 Quiz입니다!
딱 3개의 퀴즈만 푸시면 되구 무척이나 쉽습니다!

### Quiz 1. 타입 단언을 이용해 빈 객체 할당하기

💡 **요구사항:**
타입 단언을 이용해 `person` 변수에 빈 객체를 할당하세요. (힌트: 초과 프로퍼티 검사 방지를 위한 타입 단언)

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
타입 단언을 이용해 person 변수에 빈 객체를 할당하세요
(힌트. 초과 프로퍼티 검사 방지를 위한 타입 단언)
*/

type Person = {
  name: string;
  age: number;
};
// 'as' 키워드를 사용하여 빈 객체({})를 Person 타입으로 '타입 단언' 을 했다.
let person: Person = {} as Person;
```

</details>

---

### Quiz 2. const 단언을 이용해 함수 호출 오류 해결하기

💡 **요구사항:**
타입 단언을 이용해 함수 호출에서의 오류를 해결하세요. (힌트: const 단언)

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
타입 단언을 이용해 함수 호출에서의 오류를 해결하세요
(힌트. const 단언)
*/

// 'as const'를 사용해 이 변수의 타입을 일반 number가 아닌, 리터럴 타입 10으로 단언한다.
let value = 10 as const;
giveMe10(value);

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
function giveMe10(value: 10) {
  return value;
}
```

</details>

---

### Quiz 3. 서로소 유니온 타입 정의하기

💡 **요구사항:**
`CompanyMember` 타입을 `Boss`와 `Employee`의 서로소 유니온 타입으로 정의하세요.

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
다음 요구사항을 만족하는 코드를 작성하세요
- CompanyMember 타입을 Boss와 Employee의 서로소 유니온 타입으로 정의하세요
*/

/* [Quiz] 아래의 코드를 완성해 오류를 제거하세요 */
type Boss = {
  // 고유한 리터럴 타입 추가
  type: "Boss";
  car: string;
};

type Employee = {
  // 고유한 리터럴 타입 추가
  type: "Employee";
  salary: number;
};

type CompanyMember = Employee | Boss;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
function test(companyMember: CompanyMember) {
  if (companyMember.type === "Boss") {
    console.log("사장님 또 차 바꿨다 : ", companyMember.car);
  } else if (companyMember.type === "Employee") {
    console.log("아직도 월급은 : ", companyMember.salary);
  }
}
```

</details>
