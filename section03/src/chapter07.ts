// 타입좁히기
// 조건문 등을 이용해 넓은타입에서 좁은타입으로
// 타입을 상황에 따라 좁히는 방법을 이해하기

type Person = {
  name: string;
  age: number;
};

// 내장객체들의 타입도 제공이된다.
// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  // 아래와 같이 표기하는 것을 '타입가드'라고 한다.
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
    // instance 오른쪽의 instance인지 물어보고 true or false라고 판별한다.
    // 왼쪽의 값이 오른쪽이 값인지 물어보는 것이다.
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
