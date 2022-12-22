import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";

import { handlers } from "./api/handlers";
import { setupWorker } from "msw";

const worker = setupWorker(...handlers);

async function prepare() {
  if (import.meta.env.DEV) {
    return worker.start();
  }
}

prepare().then(() =>
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <App />
  )
);
