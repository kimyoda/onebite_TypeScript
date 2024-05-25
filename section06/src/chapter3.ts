// 인터페이스와 클래스

interface CharacterInterface {
  // interface로 정의하는 필드들은 무조건 public이다.
  name: string;
  moveSpeed: number;
  move(): void;
}

// CharacterInterfcae를 구현한다.(Character 클래스가)
class Character implements CharacterInterface {
  // 필드

  // 생성자

  constructor(
    public name: string,
    public moveSpeed: number,
    // private로 표현해야 할 시 아래와 같이 표현하면 된다.
    private extra: string
  ) {}

  // 메서드
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
