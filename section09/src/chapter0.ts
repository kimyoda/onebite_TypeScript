// 조건부 타입

// 삼항연산자를 활용
// A가 string타입을 확장하는 조건! true면 string false면 number!
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

// ObjB가 슈퍼타입으로 되어 참으로 number 값이 나온다.
type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

// 삼항연산자를 추가하여 string과 undefined 요소 추가

// 함수오버로딩 활용
function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll("", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im yohan");
result.toUpperCase();

let result2 = removeSpaces(undefined);
