// 기본 타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

type Animal = {
  name: string;
  color: string;
};

// breed가 Animal 타입에 없으므로 서브타입이다.(구조적 타입 시스템이기 때문에)
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "누렁이",
  color: "brown",
  breed: "진도",
};

// 업캐스트(animal 슈퍼 / dog 서브)
animal = dog;

// 다운캐스트
// dog = animal;

// 슈퍼
type Book = {
  name: string;
  price: number;
};

// 서브
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;

// 다운캐스팅이기 때문에 불가능하다.
// programmingBook =book;

// 초과 프로퍼티 검사
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
};

// 이런 경우 허용
let book3: Book = programmingBook;

// 객체 리터럴을 할당할 때 초과 프로퍼티가 있으면 오류를 발생시킨다.
function func(book: Book) {
  func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs",
  });
}

// 변수로 선언된 객체를 할당할 때는 초과 프로퍼티 검사 적용 X
func(programmingBook);
