// 대수 타입
// -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
// -> 합집합 타입과 교집합 타입이 존재한다.

// 1. 합집합 - Union 타입
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

// Dog
let union1: Union1 = {
  name: "",
  color: "",
};

// Person
let union2: Union1 = {
  name: "",
  language: "",
};

// Dog | Person의 교집합
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// Person에도 없고 Person에도 없기에 오류가 생김
// let union4: Union1 = {
//   name: "",
// };

// 2. 교집합 타입 - Intersection 타입

// 겹치지 않는 타입을 교집합하면 never로 인식한다.
let variable: number & string;

type Intersection = Dog & Person;

// Dog 타입과 Person 타입에 연관된 객체들이 모두 포함된다.
let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
