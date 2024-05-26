// 템플릿 리터럴 타입(Template Literal Type)

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

// 위를 템플릿 리터럴 타입으로 아래와 같이 지정하여 모든 사항에 관련한 것들을 만들 수 있다.
type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal: ColoredAnimal = "green-dog";
