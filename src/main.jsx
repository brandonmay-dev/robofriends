import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Card from "./components/Card.jsx";
import "tachyons";
import { StrictMode } from "react";

// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>Hello, world!</h1>
  </StrictMode>
);
