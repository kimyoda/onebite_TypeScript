`cmd` + `shift` + `v` -> 마크다운 보는방법

<details> <summary>Quiz 1. JS의 단점과 TS의 장점 - 정적 타입시스템과 동적 타입 시스템의 단점들은 보완하고 장점들은 그대로 가져온 TypeScript의 타입 시스템을 뭐라고 부를까요? 
나중에 서칭하기 편하게 영문으로도 적어보아요!</summary>
<details> <summary>답변</summary>
- 점진적 타입 시스템(Gradual Type System)

- 모든 변수에 타입을 일일이 지정할 필요가 없다.(타입이 결정된 건 미리 결정, 타입이 결정된 자동으로 추론할 수 있게 한다.)
- 기존 JavaScript 코드에 점진적으로 타입을 적용할 수 있도록 설계, 필요에 따라 검사 레벨을 조정할 수 있다.
- 실행 전 검사를 통한 타입 안정성을 확보하고 자동으로 변수의 타입을 추론한다.
</details> </details>

---

<details> <summary>Quiz 2. JS의 단점과 TS의 장점 - TypeScript의 타입 시스템이 갖는 특징에는 어떤 점이 있을까요? 
바로 딱 떠오르는 한가지 특징만 적어주세요! 강의 내용에 없었더라도 다른 블로그, 아티클에서 찾은 정보를 적어주셔도 좋아요!</summary>
<details> <summary>답변</summary>

- 코드를 작성하는 시점 즉, 런타임 시점 이전에 컴파일 에러를 통해서 오류를 확인할 수 있다. (컴파일 오류 감지 - 안전성)
- 점진적 타입 시스템이 있어 타입스크립트가 자동으로 타입을 추론하고 정적 타입의 장점도 가져올 수 있다. (코드 유지보수와 리팩토링 - 편의성)
- 코드 유지보수와 리팩토링이 편하다. 타입 정의만 봐도 어떤 데이터를 기대, 무엇을 반환하는 지 알 수 있다. (타입 추론과 생산성 - 유연성)
https://think5838.tistory.com/entry/TypeScript%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EC%82%AC%EC%9A%A9-%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-JavaScript%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%99%80%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90
</details> </details>

---

<details> <summary>Quiz 3. 타입스크립트의 동작 원리 - TypeScript를 컴파일 하면 그 결과로 무엇이 생성되나요? 
(힌트! TypeScript는 다른 언어들과는 달리 컴파일 결과 ByteCode가 생성되지 않아요)</summary>

<details> <summary>답변</summary>
JavaScript 즉 JS파일이 생성된다.
TypeScript는 컴파일러되어 타입검사를 통해 실행할 수 있는 JS파일로 변환한다.
</details> </details>

---

<details> <summary>Quiz 4. 타입스크립트 컴파일러 옵션 설정하기 - 이 파일에서 타입 검사를 매우 엄격하게 하려면 어떤 옵션을 어떤 값으로 설정해야 할까요? 
ex) 옵션이름 : 설정 값</summary>
<details> <summary>답변</summary>

"strict": true
-> 매우 엄격하게
"strict": false
-> 느슨하게

</details> </details>

---

<details> <summary>Quiz 5. 아래 코드처럼 number 타입의 변수에 null 값을 할당하려고 해요 (let numA: number = null; // ❌ 오류 발생!) 
이 코드는 엄격한 타입 검사가 활성화 되어 있을 때에는 오류로 판단되는데요 만약 위 코드를 오류가 아닌 것으로 판단하게 하려면 어떤 옵션을 어떤 값으로 설정해야 할까요? 
ex) 옵션이름 : 설정 값</summary>
<details> <summary>답변</summary>
"strictNullChecks": false
-> 엄격한 null 검사
</details> </details>
