🎯 미션 안내
Day5 미션 안내드리겠습니다.

오늘의 미션은 바로 바로 코딩 Quiz입니다!
딱 2개의 퀴즈만 푸시면 되구 무척이나 쉽습니다!

<details> <summary>Quiz 1. 아래 코드의 변수 a, b, c, d, e의 타입은 각각 어떻게 추론될까요?</summary>

💡 요구사항:

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

<details> <summary>정답 코드 확인</summary>

<details> <summary>Quiz 2. 타입 단언을 이용해 함수 호출에서의 오류를 해결하세요
</summary>

💡 요구사항:
타입 단언을 이용해 함수 호출에서의 오류를 해결하세요
(힌트. const 단언)

<details> <summary>정답 코드 확인</summary>
요구사항을 만족하는 타입스크립트 코드는 다음과 같습니다.

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

</details> </details>

<details> <summary>Quiz 3. 다음 요구사항을 만족하는 코드를 작성하세요</summary>

💡 요구사항:

- CompanyMember 타입을 Boss와 Employee의 서로소 유니온 타입으로 정의하세요

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

</details> </details>
