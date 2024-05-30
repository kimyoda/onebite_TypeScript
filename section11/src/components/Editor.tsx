import { useState } from "react";
import { useTodoDispatch } from "../App";

interface Props {}

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();

  // 제네릭 함수
  const [text, setText] = useState("");

  // 이벤트 핸들러에도 타입을 정해줘야한다.
  const onChangeInput = (e: { target: { value: string } }) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch?.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
