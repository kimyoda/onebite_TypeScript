// 타입 변수 응용하기

// 1. 첫번째 사례

// T가 이미 string으로 할당이 되어 number를 넣으려면 에러가 생김
// 그래서 새로운 타입을 다시 정의하면 된다.
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

// 두번째 사례
// 배열타입과 함께 사용할 수 있다.
// function returnFirstValue<T>(data: T[]) {
//   return data[0];
// }
// 튜플을 적용한 제네릭 사용, 첫번째 요소는 T 그 뒤 타입은 잘 모르기에 unknown을 적용
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, "hello", "mynameis"]);
// "hello"

// 세번째 사례를 이해할 수 있는 예시!(인터페이스로)
interface InterfaceA {
  length: number;
}

interface InterfaceB extends InterfaceA {}

// 세번째 사례
// extends로 length의 값을 확장시켜 타입을 고정시킨다.
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);

let var2 = getLength("12345");

let var3 = getLength({ length: 10 });

// let var4 = getLength(10);
