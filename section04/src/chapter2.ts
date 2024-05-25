// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것
// 1. 반환값의 타입이 호환되는 가
// 2. 매개변수의 타입이 호환되는가

// 기준 1. 반환값이 호환되는 가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// 위는 number의 반환값이기 때문에 가능하다. 아래는 a의 반환값이 더 크기에 다운캐스팅이 안된다.
// b = a;

// 기준 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c(변수) = d(변수)를 한다면 C(number) <- D(number 리터럴) 업캐스팅일 때는 호환이 안된다.(매개변수)
// c = d;
d = c;

// animal 조건이 더 적기 때문에 슈퍼타입
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// 업캐스팅 되는 상황이기 때문에 불가능하다.
// animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};
// 매개변수를 기준으로 할때 A(animal 슈퍼타입) <- B(Dog, 서브타입)일때 업캐스팅은 안되고 다운캐스팅은 가능하다.

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func1의 매개변수가 할당하려는 갯수의 더 많고 func2가 더 적을때만 할당이 가능하다.
// func2 = func1;
