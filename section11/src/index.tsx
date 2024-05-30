import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import _ from "lodash";

// 1. 타입선언  npm i @types/node @types/react @types/react-dom @types/jest 로다운
// 2. tsconfig.json 설정
// 3. 모든 JS -> JSX -> TSX로 변환
// 4. 개별들을 하나씩 TSX로 에러를 잡으면서 변경
// 다른 라이브러리를 다운을 받을 때 ts버젼을 꼭 확인하고 받아야 한다.
// @types로 시작하는 타입들을 Definitely Types 라고 한다.

const root = ReactDOM.createRoot(
  // 초기세팅
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
