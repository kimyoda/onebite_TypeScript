// Unknown 타입
// 슈퍼타입
// 업캐스팅은 모두가 가능하기 때문에, 모든 값을 집어넣을 수 있다.
function unkownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

// Never 타입(공집합)
// 다운캐스팅은 불가

function neverExam() {
  // 아무 의미가 없다
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
}

// void 타입
// undefined 타입의 super 타입이다.
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

// any 타입
// never 타입의 변수는 불가하다.
//  any 타입은 모든 타입의 super 타입으로 위치한다. 모든 타입의 sub타입으로 있을 수 있다.
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 이런식으로 unknown이 any타입으로 다운캐스팅이 가능하다
  anyVar = unknownVar;

  // any -> undefined는 다운 캐스팅이 가능하다.
  undefinedVar = anyVar;

  // neverVar = anyVar; never타입은 순수한 공집합이기 때문에 any타입도 불가능하다.
}
