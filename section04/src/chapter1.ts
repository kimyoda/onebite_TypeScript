// 함수 타입 표현식

// type Add = (a: number, b: number) => number;
type Operation = (a: number, b: number) => number;

// const add = (a: number, b: number): number => a + b; 로 굳이 안해도 타입을 지정하고
// 밑의 방식으로 표현이 가능하다

// 굳이 타입 별칭을 안쓰고 값으로 넣어도 표현이 가능하다.
const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 호출 시그니쳐(콜 시그니쳐), 함수표현식 기능과 똑같이 기능을 한다.
// 자바스크립트의 함수도 객체이기 때문이다.

// 하이브리드 타입
type Operation2 = {
  (a: number, b: number): number;
  name: string;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2.name;
