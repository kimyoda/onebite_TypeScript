// 객체(object)
// 객체 리터럴 타입
// 객체의 구조를 기준으로 정한다. 구조적 타입 시스템이다.(Property Based TS)
let user: {
  // ?는 있어도 되고 없어도 된다는 표현(선택적 프로퍼티, Optional)
  id?: number;
  name: string;
} = {
  id: 1,
  name: "김요한",
};

let config: {
  // readonly는 해당 속성이 변경할 수 없도록 설정하는데 사용한다.
  readonly apikey: string;
} = {
  apikey: "NY API KET",
};

config.apikey = "hacked";

// user = {
//   name: "김좌진",
// };

// user.id;

// let dog: {
//   name: string;
//   color: string;
// } = {
//   name: " 김요한",
//   color: "brown",
// };
