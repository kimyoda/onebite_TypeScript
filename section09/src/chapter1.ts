// 분산적인 조건부 타입(Distributive Conditional Types)

// 조건부를 막기 위해선 분산에 []를 씌우면 된다.
type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

// c가 string | number가 돼는 이유는(유니온타입) 유니온타입으로 할당하면 분산적인 조건부타입으로 업그레이드 된다.
// 유니온 타입이 그대로 타입변수에 들어가는게 아니라 2개가 분리되어서 들어간다.
let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number>
// StringNumberSwitch<string> 과 같이 두번에 나눠서 들어간다.

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

// 결과
// number | string

// 실용적인 예제
// 첫번째
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 결과
// number | never(공집합이기 때문에 생략) | boolean
// number | boolean

// 두번째 예시
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never |
// string |
// never

// 결과
// string
