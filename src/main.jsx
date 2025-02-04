import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Furniro-e-commerce-project">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);
