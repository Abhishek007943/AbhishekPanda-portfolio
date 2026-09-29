import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { PortfolioProvider } from "./context/PortfolioContext";

import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <PortfolioProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PortfolioProvider>
  </HelmetProvider>,
);
