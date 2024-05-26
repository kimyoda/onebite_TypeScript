// 인덱스드 엑세스 타입

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

// Post 옆에 있는 엑세스는 변수(값)이 아니라 타입이다!
// 해당객체 안에 특정 프로퍼티 값만 가져오고 싶으면 [] ["해당객체"]를 쓰면 된다.
function printAuthorInfo(author: Post[`author`]) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "김요한",
    age: 31,
  },
};

printAuthorInfo(post.author);

// type으로 가져오는 예시
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo2(author: PostList[number][`author`]) {
  console.log(`${author.name}-${author.id}`);
}

// 0은 값이 아니라 타입이다.
const post2: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "김요한",
    age: 31,
  },
};

printAuthorInfo2(post.author);

// Tup 튜플 타입
type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// 없는 인덱스를 넣으면 에러가 생긴다.
// type Tup3 = Tup[3];

// 인덱스에 number를 넣으면 즉, 모든 타입 중에 최적의 공동 타입을 뽑는다.
// 세 타입의 유니온 타입으로 추출한다.
type TupNum = Tup[number];
