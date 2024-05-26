// 제네릭(Generic, 포괄적인)

// 제네릭 함수(모든 타입을 두루 사용할 수 있는 함수)
// <T>는 타입변수라고 한다.
function func<T>(value: T): T {
  return value;
}

let num = func(10);
// num.toUpperCase();
num.toFixed();

let bool = func(true);

let str = func("string");

// 튜플로 할당(직접 정의)
let arr = func<[number, number, number]>([1, 2, 3]);
