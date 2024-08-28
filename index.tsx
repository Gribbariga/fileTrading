import React from "react";
import { Theme } from "@radix-ui/themes";
import { createRoot } from "react-dom/client";
import App from "./src/App/App.tsx";
import "@radix-ui/themes/styles.css";
import { GlobalStyle } from "./src/App/style/globalStyle.ts";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <GlobalStyle />
      <Theme
        appearance="light"
        accentColor="orange"
        grayColor="gray"
        panelBackground="solid"
      >
        <App />
      </Theme>
    </BrowserRouter>
  </>
);
