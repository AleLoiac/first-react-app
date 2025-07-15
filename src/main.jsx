import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { Paragraph } from "./Paragraph.jsx";
import Conversion from "./Conversion.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Greeting />
    <Paragraph />
    <Conversion />
  </StrictMode>
);
