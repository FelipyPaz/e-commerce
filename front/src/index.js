import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./global";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
     <GlobalStyle />
    <App />
  </>
);
