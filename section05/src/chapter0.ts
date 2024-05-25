// 인터페이스

interface Person {
  // IPerson, 헝가리한 표현법(자바스크립트에선 카멜, 스네이크 표기법을 사용한다.)
  readonly name: string;
  age?: number;
  // 매서드의 오버로딩 표현방법
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

// 타입 별칭 활용 예
type Type1 = number | string | Person;
type Type2 = (number & string) | Person;

// type Func = {
//   (): void;
// };

// const func: Func = () => {};

const person: Person = {
  name: "김요한",
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
