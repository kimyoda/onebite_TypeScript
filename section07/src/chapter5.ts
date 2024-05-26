// 프로미스(Promise), 비동기처리 타입 정의

// Promise 옆에 타입을 적어줘서 타입을 정해준다.타입변수를 할당함.
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~ 때문에 실패");
  }, 3000);
});

// resolve나 reject의 결과값을 타입을 추론할 수 있는 기능이 없다.
// 기본적으론 unknown으로 처리한다.
promise.then((response) => {
  console.log(response * 10);
});

// 실패했을 때 타입정의는 할 수 없다.
promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/*프로미스를 반환하는 함수의 타입을 정의한다.
 *
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

// 함수의 반환값 타입을 직접 명시하는걸 추천함.
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
