import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Animals from "./Conditional";
import { Cars } from "./Conditional";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Animals />
    <Cars />
  </StrictMode>
);
