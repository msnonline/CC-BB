import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Make sure i18n is properly set up
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider } from './contexts/LanguageContext.jsx'; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </I18nextProvider>
  </StrictMode>
);
