import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import calcDates from "./calcDates";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const urlParams = new URLSearchParams(window.location.search);
const start = urlParams.get("start");
const end = urlParams.get("end");
const data = calcDates(start, end);

root.render(
  <StrictMode>
    <App data={data} />
  </StrictMode>
);
