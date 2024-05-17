// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum은 =를 사용하지 않는다.
// 값을 지정하지 않아도 순서대로 0 ~ 해당 인덱스에 해당하는 값을 가진다.
// 중간에 값을 할당하면 처음은 인덱스 0부터 시작한다.
// 해당 enum은 숫자형 enum이라고 한다.
enum Role {
  ADMIN,
  USER = 10,
  GUEST,
}

// 문자형
enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "김요한",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean,
};
const user2 = {
  name: "케리아",
  role: Role.USER, // 1 <- 일반 유저
};
const user3 = {
  name: "쵸비",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);
