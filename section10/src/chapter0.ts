// 맵드 타입 기반의 유틸리티 타입들
// Partial<T>, Required<T>, Readonly<T>

/*
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Partial 타입 쓰는 법
type Partial<T> = {
  [key in keyof T]?: T[key];
};

// draft변수의 타입을 Partial<>로 정의해준다. 모든 프로퍼티를 선택적 타입으로 만드는 유틸리티 타입이다.
const draft: Partial<Post> = {
  title: "제목",
  content: "초안!",
};

/**
 * Required<T>
 * -> 필수적, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
  // -?는 ?를 빼겠다는 의미이다.
  [key in keyof T]-?: T[key];
};

// 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 유틸리티 타입이다.
const withThumbnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

/**
 * Readonly<T>
 * -> 읽기전용 수정불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};

// 읽기 전용이기 때문에 수정이 불가능하다.
// readonlyPost.content = "";
