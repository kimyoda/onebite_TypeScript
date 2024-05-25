// 클래스

let studentA = {
  name: "김요한",
  grade: "A+",
  age: 31,
  study() {
    console.log("열심히 강의 들어야함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 매서드
  study() {
    console.log("열심히 강의 들어야함");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다!`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스 라고 부른다.
let studentB = new Student("이상혁", "A+", 31);
console.log(studentB);
studentB.study();
studentB.introduce();

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  progrmaing() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("김요한", "B+", 31, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.progrmaing();
