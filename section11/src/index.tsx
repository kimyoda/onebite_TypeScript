import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 1. 타입선언  npm i @types/node @types/react @types/react-dom @types/jest 로다운
// 2. tsconfig.json 설정
// 3. 모든 JS -> JSX -> TSX로 변환
// 4. 개별들을 하나씩 TSX로 에러를 잡으면서 변경

const root = ReactDOM.createRoot(
  // 초기세팅
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
