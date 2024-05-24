// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입을 말한다

// 관리자 타입
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

// 멤버 타입
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

// 가입자 타입
type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

// 서로소 유니온 타입
type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명을 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  // switch 문이나 if 문으로 작성이 가능하다.
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}명 강퇴했습니다.`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}명 강퇴했습니다.`);
      break;
    }
  }

  if (user.tag === "ADMIN") {
    // admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    // member 타입
    console.log(`${user.name}님 현재까지 ${user.point}명 강퇴했습니다.`);
  } else {
    // guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}명 강퇴했습니다.`);
  }
}

// 비동기 작업의 결과를 처리하는 객체

type LodingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LodingTask | FailedTask | SuccessTask;
// {
// state: "LOADING" | "FAILED" | "SUCCESS";
// error?: {
//   message: string;
// };
// response?: {
//   data: string;
// };
// }
// 로딩 중 -> 콘솔에 로딩 중 출력
// 실패 -> 실패: 에러메세지를 출력
// 성공 -> 성공 : 데이터를 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩중");
      break;
    }
    case "FAILED": {
      // 옵셔넬 체이닝(정확한 명칭으로 변경)
      console.log(`에러 발생: ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
}

const loding: AsyncTask = {
  state: "LOADING",
};

const falied: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터~",
  },
};
