// 제네릭 클래스

class List<T> {
  // 필드
  // 생성자에서 필드 요소를 만들기 때문에 생략가능
  // 생성자
  constructor(private list: T[]) {}

  // 메서드
  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

// 이때 List의 T는 string으로 인식이 된다.
// List뒤에 <타입>을 생략해도 괜찮다.
const stringList = new List(["1", "2"]);
stringList.push("hello");
