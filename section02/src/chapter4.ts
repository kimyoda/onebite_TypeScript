// 타입 별칭
// 특정 타입에 이름을 붙이는 것, 코드의 가독성을 높이고 반복을 줄인다.
// 타입 별칭을 선언할떄는 같은 스코프내에선 선언하면 안된다.
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// function 안에는 해당 type의 별칭으로 적용한다.
function func() {
  type User = {};
}

let user: User = {
  id: 1,
  name: "김요한",
  nickname: "masteryoday",
  birth: "1992.12.10",
  bio: "안녕하세요",
  location: "서울시",
};

let user2: User = {
  id: 2,
  name: "김예지",
  nickname: "dididi1212",
  birth: "1995.08.30",
  bio: "반가워요",
  location: "서울시",
};

// 인덱스 시그니쳐
// 객체의 키와 값의 타입을 정의할 때 사용한다. 주로 객체의 키가 동적으로 결정되는 경우에 유용하다.
// 1. 키 타입은 'string 또는 'number'
// 2. 객체의 모든 키는 인덱스 시그니처와 호환한다.
// 3. 특정 속성과 인덱스 시그니처의 혼합 사용(특정 키를 반드시 포함해야할 때 사용한다.)
// 규칙에 관하여 정리하기
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
};
