// 타입은 집합이다
// number Type, -20 / 1 / 2 / 3 / 4 / Infinity / 0.123
// 집합을 number Type이라고 한다.(동일한 속성과 특징을 가진)
// number Type 슈퍼타입(부모타입) <- 서브타입(자식타입) number literal Type

// 타입호환성
// 어떤 타입을 다른 타입으로 취급해도 괜찮은 지 판단하는 것, 직사각형 / 정사각형 예시
// number type <- number literal type o
// number type -> number literal type x

let num1: number = 10;
let num2: 10 = 10;

// 업 캐스팅
// 서브타입 -> 슈퍼타입은 모든 상황에 가능(Up Cast)
num1 = num2;
// 다운 캐스팅
// 슈퍼타입 -> 서브타입은 대부분의 상황에서 불가능(Down Cast)
// num2 = num1 은 안됨.
