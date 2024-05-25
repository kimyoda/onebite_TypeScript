// 타입 추론

// 타입 넓히기
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "요한",
  profile: {
    nickname: "masteryoda",
  },
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function funce(message = "hello") {
  return "hello";
}

// any 타입의 진화
let d; // 암묵적인 any
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];
