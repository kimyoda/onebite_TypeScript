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

// push & pop 요소 추가 및 제거 (원본 배열을 변경한다)

// JS 사용
const stackJS = [1, 2];
stackJS.push(3); // [1, 2, 3]
const poppedJS = stackJS.pop(); // 3, stackJS는 [1, 2]

// TS 함수
// push1: 새로운 요소를 추가하고 변경 후 길이를 반환
function push1<T>(arr: T[], item: T): number {
  return arr.push(item);
}

// pop1: 마지막 요소를 제거하고 그 값을 반환
function pop1<T>(arr: T[]): T | undefined {
  return arr.pop();
}

// 실제 적용
const stack = [1, 2];
push1(stack, 3); // [1, 2, 3]
const popped = pop1(stack); // [1, 2]

// reverse & slice - 배열 반전 및 구간 복사

// JS 사용
const arrRevSlice = ["a", "b", "c", "d"];
const reversedJS = [...arrRevSlice].reverse(); // ["d", "c", "b", "a"]
const slicedJS = arrRevSlice.slice(1, 3); // ["b", "c"]

// TS
// reverse1: 배열의 순서를 거꾸로 뒤집는다.(원본 변경때문 스프레드 연산자 사용)
function reverse1<T>(arr: T[]): T[] {
  return [...arr].reverse();
}

// slice1: 배열의 특정 구간을 잘라 새 배열을 반환
function slice1<T>(arr: T[], start: number, end: number): T[] {
  return arr.slice(start, end);
}

// 실제 적용 예시
const original1 = ["a", "b", "c", "d"];
const reversed = reverse1(original1); // ["d", "c", "b," "a"]
const sliced = slice1(original1, 1, 3); // ["b", "c"]
