import "@fontsource/league-spartan/400.css";
import "@fontsource/league-spartan/500.css";
import "@fontsource/league-spartan/700.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { router } from "./routes/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
