// 인터페이스 확장 혹은 상속

// interface가 아니라 객체로 하여도 확장이 가능하다.
type Animal = {
  name: string;
  color: string;
};

// extends는 Animal의 name과 age를 받아온다.
interface Dog extends Animal {
  // 원본타입의 sub타입으로만 재정의가 가능하다. name: number는 에러.
  // name: "hello";
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// Dog와 Cat의 요소를 합쳐서 확장이 가능하다.
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
