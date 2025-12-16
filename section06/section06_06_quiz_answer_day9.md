# 🎯 Day 9 미션 안내

Day9 미션 안내드리겠습니다.

오늘의 미션도 코딩 Quiz입니다!
오늘은 단 1개의 퀴즈만 푸시면 됩니다!

### Quiz 1.다음 요구사항을 만족하는 Pokemon 클래스를 완성하세요

💡 **요구사항:**

- 다음 3개의 필드를 갖습니다.
  1. name 필드는 String 타입이며 Public입니다.
  2. skill 필드는 String 타입이며 Public 입니다.
  3. type 필드는 String 타입이며 ReadOnly(읽기 전용)필드 입니다.
- 다음 2개의 메서드를 갖습니다.
  1. getName 메서드는 name 필드의 값을 반환합니다.
  2. setSkill 메서드는 String 타입의 매개변수를 받아 skill 필드의 값을 업데이트 합니다.

<details>
<summary>🏆 정답 코드 확인하기 (클릭)</summary>

```ts
/*
[ 문제 소개 ]
다음 요구사항을 만족하는 Pokemon 클래스를 완성하세요
- 다음 3개의 필드를 갖습니다.
  1. name 필드는 String 타입이며 Public입니다.
  2. skill 필드는 String 타입이며 Public 입니다.
  3. type 필드는 String 타입이며 ReadOnly(읽기 전용)필드 입니다.
- 다음 2개의 메서드를 갖습니다.
  1. getName 메서드는 name 필드의 값을 반환합니다.
  2. setSkill 메서드는 String 타입의 매개변수를 받아 skill 필드의 값을 업데이트 합니다.
*/

/* [Quiz] 구현 시그니쳐를 완성하세요 */
class Pokemon {
  // 필드

  // Public 필드(접근제한자 생략시 기본값)
  name: string;
  skill: string;

  // ReadOnly 필드: 외부에서 수정 불가능, 생성자 초기화 가능
  readonly type: string;

  // 생성자(클래스 인스턴스가 생성될 때 필드를 초기값으로 초기화)
  // constructor 매개변수로 초기값을 받는다.
  constructor(name: string, skill: string, type: string) {
    // 1. 매개변수로 받은 값을 클래스 필드에 할당하여 초기화
    this.name = name;
    this.skill = skill;
    this.type = type; // type은 readonly라도 생성자에 초기화
  }

  // 메서드 정의
  // 1. getName: name 필드의 값을 반환 name 필드의 값 string 타입
  getName(): string {
    return this.name;
  }

  // 2. setSill: skill 필드 값 업데이트, 매개변수를 받아 업데이트, 값을 반환받지 않고 내부 상태 변경으로 void 타입 반환.
  setSkill(skill: string): void {
    this.skill = skill;
  }
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
const pikachu = new Pokemon("피카츄", "백만볼트", "전기");
pikachu.getName();
pikachu.setSkill("천만볼트!");
```

</details>
