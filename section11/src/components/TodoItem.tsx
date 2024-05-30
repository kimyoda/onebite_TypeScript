import { useTodoDispatch } from "../App";
import { Todo } from "../types";

interface Props extends Todo {}

export default function TodoItem(progs: Props) {
  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch.onClickDelete(progs.id);
  };

  return (
    <div>
      {progs.id}번: {progs.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
