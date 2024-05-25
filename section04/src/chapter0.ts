// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는 지 이야기한다.
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기 해줘야 한다.
function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number) => a + b;

// 함수의 매개변수
// 필수매개변수는 선택적 매개변수 반드시 앞에 있어야한다.
function introduce(name = "김요한", age: number, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}

introduce("김요한", 173);
// 선택적 매개변수(해당 타입 그리고 undefined로 정의)
introduce("김요한", 31);

// ...rest는 배열로 만들어주는 것이다
function getsume(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

//  ...rest는 배열로 만들어주는 것이다
// function getsume(...rest: [number, number, number]) {
//   let sum = 0;
//   rest.forEach((it) => (sum += it));
//   return sum;
// }
getsume(1, 2, 3); // 6
getsume(1, 2, 3, 4, 5); // 6
