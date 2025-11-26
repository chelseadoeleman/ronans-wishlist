import { renderPages, routesToPages } from "lib/routes";
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.scss";

const App = () => {
  return (
    <>
      <div>{renderPages(routesToPages)}</div>
    </>
  );
};

const root = ReactDOMClient.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
