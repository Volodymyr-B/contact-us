import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";

import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { theme } from "./theme/Theme";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// wrappers - router, MUI+Tailwind union, theme

root.render(
  <React.StrictMode>
    <HashRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </HashRouter>
  </React.StrictMode>
);
