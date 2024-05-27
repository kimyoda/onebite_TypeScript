// 맵드 타입 기반의 유틸리티 타입들 2

/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Pick은 해당 값의 서브타입을 사용하기 위해 extends keyof {}로 해야한다.
type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' |'cotent' | 'thumbnailURL'
  //'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title>>
// Pick<Post, Exclude<'title | 'content' | 'tags' | 'thumbnailURL', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

// K 프로퍼티를 빼라
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<T, K>
 * 객체 타입을 만들어주는 유틸리티 타입
 */

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

// 프로퍼티의 키는 값, value는 객체로 타입을 정의해준다.
type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string }
>;
