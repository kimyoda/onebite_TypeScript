// 제네릭 인터페이스와 제네릭 타입 별칭

// 제네릭 인터페이스
// 타입변수는 타입 파라미터, 제네릭 타입변수, 제네릭 타입 파라미터 등 똑같은 의미를 담은 단어이다.
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 반드시 타입으로 정의할 때 타입변수에 할당할 타입을 반드시 사용해야 한다.
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// 인덱스 시그니쳐

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -123,
  key2: 123456,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

// 제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

/* 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}
// 각 인터페이스는 type등이 같아서 리터럴 string으로 서로소 유니온 타입으로 분류할 수 있다.

interface User<T> {
  name: string;
  profile: T;
}

function goToSchol(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "김요한",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "김기좌",
  profile: {
    type: "student",
    school: "서울신학대학교",
  },
};
