import { Theme } from "@radix-ui/themes";
import { createRoot } from "react-dom/client";
import App from "./App/App.tsx";
import "@radix-ui/themes/styles.css";
import { GlobalStyle } from "./App/style/globalStyle.ts";

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <Theme
      appearance="light"
      accentColor="orange"
      grayColor="gray"
      panelBackground="solid"
    >
      <App />
    </Theme>
  </>
);
