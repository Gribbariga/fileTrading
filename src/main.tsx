import { Theme } from "@radix-ui/themes";
import { createRoot } from "react-dom/client";
import App from "./App/App.tsx";
import "@radix-ui/themes/styles.css";

createRoot(document.getElementById("root")!).render(
  <Theme
    appearance="light"
    accentColor="orange"
    grayColor="gray"
    panelBackground="solid"
  >
    <App />
  </Theme>
);
