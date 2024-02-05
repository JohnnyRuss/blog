import ReactDOM from "react-dom/client";

import "react-loading-skeleton/dist/skeleton.css";

import { BrowserRouter } from "react-router-dom";
import AppProvider from "@/Providers/AppProvider.tsx";
import AppUIProvider from "./Providers/AppUIProvider.tsx";
import ThemeProvider from "@/Providers/ThemeProvider.tsx";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider>
      <AppProvider>
        <AppUIProvider>
          <App />
        </AppUIProvider>
      </AppProvider>
    </ThemeProvider>
  </BrowserRouter>
);
