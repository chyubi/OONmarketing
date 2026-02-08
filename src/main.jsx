// src/main.jsx (또는 index.js)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App"; // Home 대신 App을 불러옵니다

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App /> {/* Home을 App으로 교체 */}
  </StrictMode>,
);
