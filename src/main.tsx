import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "@/Providers/ThemeProvider.tsx";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
