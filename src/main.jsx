import React from "react";
import { FaFacebook } from "react-icons/fa";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import initGame from "./reactcomponents/initGame";
import ReactUI from "./reactcomponents/ReactUI";
import { Provider } from "jotai";
import { store } from "./reactcomponents/store";

const ui = document.getElementById("ui");
const root = createRoot(ui);
root.render(
  <StrictMode>
    <Provider store={store}>
      <ReactUI />
    </Provider>
  </StrictMode>
);

initGame();
