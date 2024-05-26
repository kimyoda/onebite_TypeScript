// 맵드 타입(Mapped Type)

interface User {
  id: number;
  name: string;
  age: number;
}

// in 연산자와 유니온을 활용하여 만든다.
// 객체 프로퍼티 키가 무엇인지 정의하는게 in이고 그 바깥 :이후부터는 value를 뜻한다.
// key = in("" | "" | "") : value[];
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ...기능
  return {
    id: 1,
    name: "김요한",
    age: 31,
  };
}

const user = fetchUser();

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
  // ... 수정하는 기능
}

updateUser({
  id: 1,
  name: "김요한",
  age: 30,
});
