// 타입스크립트의 클래스

const employee = {
  name: "김요한",
  age: 31,
  position: "developer",
  work() {
    console.log("일하는 중");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일하는 중");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    // 타입스크립트에서는 super를 반드시 포함해야한다.
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("김요한", 31, "개발자");
console.log(employeeB);

// 타입스크립트의 클래스의 구조를 보고 해당 타입으로 사용할 수 도 있다.
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
