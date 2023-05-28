import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.scss";

const rootElement =
  document.getElementById("root") ?? document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
