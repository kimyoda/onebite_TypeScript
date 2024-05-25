// 선언 합침

// 똑같은 프로퍼티를 중복정의를 하고싶으면 타입이 같아야한다.
interface Person {
  name: string;
}

interface Person {
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 31,
};

// 모듈 보강
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
