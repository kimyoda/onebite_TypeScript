// keyof 연산자

// interface Person {
//   name: string;
//   age: number;
// }

// typeof에도 사용할 수 있다.
type Person = typeof person;

// "name" | "age"로 keyof로 추출할 수 있다. 추후에 새로운 프로퍼티를 추가해도 keyof를 추가하면 유니온타입으로 추출이 가능하다.
// keyof는 무조건 타입에만 사용이 가능하다. 뒤에 타입이 와야한다.
// keyof로 Person을 사용하거나 typeof person으로도 사용이 가능하다.
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "김요한",
  age: 31,
};

getPropertyKey(person, "name"); // 김요한
