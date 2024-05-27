// infer(Inference, 추론)

type FunC = () => string;

type FuncB = () => number;

// infer를 활용하여 <>안에 있는 값을 반환받게함.
// infer는 참으로 만드는 것을 추론한다.
type ReturnType<T> = T extends () => infer R ? R : never;

// Func 의 ReturnType의 서브타입인지 물어봄, 두 함수타입이 타입이 같아서 서브타입으로 본다.
// 해당 조건은 참이 되어 string type으로 판명
type A = ReturnType<FunC>;

// T => number / number와 sring은 교집합이 없는 서로소 집합이다.
// false이기 때문에 never로 판명함.
type B = ReturnType<FuncB>;

// T는 number로 들어간다. 근데 R타입을 추론하기에는 해당 타입이 슈퍼타입이 될 수없다.
// 추론할 수 없는 상황이기에 false로 판명하여 never로 추론한다.
type C = ReturnType<number>;

// 다른 예제
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string
