import { useEffect, useRef, useState } from "react";
import "./App.css";
import { todo } from "node:test";
import Editor from "./components/Editor";

interface Todo {
  id: number;
  content: string;
}

function App() {
  // 상태에 타입추가
  const [todos, setTodos] = useState<Todo[]>([]);

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd}>
        <div>child</div>
      </Editor>
    </div>
  );
}

export default App;
