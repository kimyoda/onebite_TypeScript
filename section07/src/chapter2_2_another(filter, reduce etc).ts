// 제네릭 filter 및 그 이외에 함수 추가

// 1. filter 메서드
const arrFilter = [1, 2, 3, 4];
const resFilter = arrFilter.filter((number) => number > 2); // [3, 4]

// filter1: Type 한 개로 배열 요소 타입과 predicate의 매개변수를 묶는다
function filter1<T>(arr: T[], func: (arg: T) => boolean): T[] {
  return arr.filter(func);
}

// filter2: 제네릭(Func)를 도입해 predicate의 타입을 더 구체적으로 제한한다.
// 공식 문서에서는 추가 제네릭이 실제 타입 관계를 늘리지 않으면 피하라고 나온다.

function filter2<T, Func extends (arg: T) => boolean>(
  arr: T[],
  func: Func
): T[] {
  return arr.filter(func);
}

// 실제 적용
const nums = [1, 2, 3, 4];
// 숫자인 T를 받아 2보다 큰지 확인
const result1 = filter1(nums, (num) => num > 2);
// [3, 4]
// 문자열 T를 받아 길이가 5보다 큰지 확인한다
const result2 = filter2(["apple", "banana"], (str) => str.length > 5);
// ["banana"]

// reduce 메서드
// js 기본
const arrReduce = [1, 2, 3];
const sumJS = arrReduce.reduce((acc, cur) => acc + cur, 0); // 6

// TS
// reduce1: acc 타입(Result)와 배열 요소 타입(T)를 두 개의 제네릭으로 지정한다.
function reduce1<T, Result>(
  arr: T[],
  func: (acc: Result, cur: T) => Result,
  init: Result
): Result {
  return arr.reduce(func, init);
}

// reduce2: 콜백 타입(Func)를 제한해 acc와 cur를 받아 Result를 반환하도록 명시한다
function reduce2<T, Result, Func extends (acc: Result, cur: T) => Result>(
  arr: T[],
  func: Func,
  init: Result
): Result {
  return arr.reduce(func, init);
}

// 실제 적용 예시
// 숫자 배열을 하나로 합산, 하나의 숫자로 응축한다.
const sumTS = reduce1([1, 2, 3], (acc, cur) => acc + cur, 0); // 6
// 문자열 배열 이어 붙이기
// const joined = reduce2(["a", "b", "c"], (acc, cur) => acc + cur, "" as string); // "abc"
const joined = reduce2<string, string, (acc: string, cur: string) => string>(
  ["a", "b", "c"],
  (acc, cur) => acc + cur,
  ""
); // "abc"

// find

// js
const arrFind = [10, 20, 30];
const foundJS = arrFind.find((value) => value > 15); // 20

// TS
// find1: 찾은 요소가 없을 수 있어 T | undefined를 반환
function find1<T>(arr: T[], func: (arg: T) => boolean): T | undefined {
  return arr.find(func);
}

// find2: 콜백 타입을 제네릭 Func로 제한
function find2<T, Func extends (arg: T) => boolean>(
  arr: T[],
  func: Func
): T | undefined {
  return arr.find(func);
}

// 실제 적용
const users = [{ name: "Kim" }, { name: "Lee" }];
const userFinded = find1(users, (user) => user.name === "Kim"); // {name: "Kim"}

// some, every 조건 만족 여부 확인
const arrCond = [80, 90, 100];
const hasPerfectJS = arrCond.some((score) => score === 100); // true
const isPassJs = arrCond.every((score) => score >= 70); // true

// TS
// some1: 하나라도 조건을 만족하면 true
function some1<T>(arr: T[], func: (arg: T) => boolean): boolean {
  return arr.some(func);
}

// every1: 모든 요소가 만족해야 true
function every1<T>(arr: T[], func: (arg: T) => boolean): boolean {
  return arr.every(func);
}

// 실제 적용
const scores = [80, 90, 100];
const hasPerfect = some1(scores, (score) => score === 100);
const allPass = every1(scores, (score) => score > 70);

// at() & includes() 인덱스로 접근, 포함 여부 확인

// JS
const arrAtInc = ["red", "blue", "green"];
const lastJS = arrAtInc.at(-1); // "green"
const hasRedJS = arrAtInc.includes("red"); // true

// TS
// at1: 주어진 인덱스 요소를 반환 (음수는 뒤에서부터)
function at1<T>(arr: T[], index: number): T | undefined {
  return arr.at(index);
}

// includes1: 특정 값이 배열에 포함되어 있는 지 확인한다
function includes1<T>(arr: T[], value: T): boolean {
  return arr.includes(value);
}

// 실제 적용 예시
const colors = ["red", "blue", "green"];
const lastColor = at1(colors, -1); // "green"
const hasRed = includes1(colors, "red"); // true
