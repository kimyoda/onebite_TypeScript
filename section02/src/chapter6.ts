// any
// 특정 변수의 타입을 우리가 확실히 모를 때
// 런타임 에러가 생길 수 있고, 가능한한 사용하지 않는 편이 좋다?
let anyVar: any = 10;
// anyVar = "hello";

// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUIpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 타입 정제 과정
if (typeof unknownVar === "number") {
  num = unknownVar;
}
