// 접근 제어자(Access Modifier)
// -> public private proteced
class Employee {
  // 필드

  // 생성자
  constructor(
    // 생성자에 달면 자동으로 타입으로 단다. 즉, 생성자에 접근제어자를 달면 해당 이름을 가지고 필드를 자동으로 만들기 때문이다.
    private name: string,
    protected age: number,
    public position: string
  ) {
    // 접근제어자를 쓰면 자동으로 값이 할당한다.
  }

  // 메서드
  work() {
    console.log(`${this.name}일함`);
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

  // 메서드
  func() {
    // private로 설정된 건 파생된 클래스에서도 접근이 불가능하다.
    // this.name;
    // 파생 class에까진 허용하고 싶다면 protected를 쓰면 된다.
    this.age;
  }
}

const employee = new Employee("김요한", 31, "developer");
// employee.name = "김요한";
// employee.age = 30;
employee.position = "개발자";

console.log(employee);
