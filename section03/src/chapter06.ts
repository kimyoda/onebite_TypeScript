// 타입 단언(Type assertion)

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "김요한";
person.age = 31;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "강아지",
  color: "brown",
  breed: "진도",
} as Dog;

/*타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */
let num1 = 10 as never;
let num2 = 10 as unknown;

// number / string은 교집합이 없다 즉, a나 b나 둘다 슈퍼타입이 아니여서 타입 단언이 안됨
// 다중단언은 단언을 unknown 즉 전체의 서브타입으로 바꾸면 단언이 가능하다.
let num3 = 10 as unknown as string;

// const 단언
// let으로 선언하였으나 const처럼 활용할 수 있도록 하는 것이다.
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// cat.name = ""; const를 사용해서 수정이 불가능하다.

// Non Null 단언

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "김요한",
};

// 옵셔널 체이닝를 !로 바꾸면 인식이 가능하다.
// !는 Non Null 단언이다. Null이거니 Undefined가 아니더라 믿도록 컴파일 한다.
const len: number = post.author!.length;
