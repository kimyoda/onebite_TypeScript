import { ReactElement, useState } from "react";

interface Props {
  onClickAdd: (text: string) => void;
  children: ReactElement;
}

export default function Editor(props: Props) {
  // 제네릭 함수
  const [text, setText] = useState("");

  // 이벤트 핸들러에도 타입을 정해줘야한다.
  const onChangeInput = (e: { target: { value: string } }) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    props.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
