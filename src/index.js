import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";

import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
      <a className="link" href="https://github.com/Natasha0611/react-weather">Open-sourced on GIT</a>
    </div>
  </StrictMode>
);