// Void 타입
// 함수가 아무것도 반환하지 않을 때 사용한다. 함수의 반환타입으로 사용, 명시적으로 값을 반환하지 않을경우
// 함수가 반환 값을 갖지 않는 경우
// 장점은 명확성과 타입 안전성을 가질 수 있고, 단점으로는 제한적인 사용에 있다.
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// let a: void;
// a = undefined;

// never
// 절대로 발생하지 않는 값의 타입. 함수가 예외를 던지거나 무한 루프에 빠져서 정상적으로 종료되지 않을 때 사용한다.
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let a: never;
