import { Todo } from "../types";

interface Props extends Todo {
  onClickDelete: (id: number) => void;
}

export default function TodoItem(progs: Props) {
  const onClickButton = () => {
    progs.onClickDelete(progs.id);
  };

  return (
    <div>
      {progs.id}번: {progs.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
