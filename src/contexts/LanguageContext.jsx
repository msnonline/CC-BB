// src/LanguageContext.js
import React, { createContext, useState, useEffect, useCallback } from "react";
import i18n from "i18next";

// Create Context
const LanguageContext = createContext();

// LanguageProvider Component to wrap the app and provide language context
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const getUserLocation = useCallback(async () => {
    try {
      // Fetch the user's location using ip-api service
      const response = await fetch("http://ip-api.com/json/");
      const data = await response.json();
      const countryCode = data.countryCode.toLowerCase(); // Adjusted key for ip-api

      // Set the language based on country
      const detectedLanguage = countryCode === "de" ? "de" : "en";
      setLanguage(detectedLanguage);
      i18n.changeLanguage(detectedLanguage); // Update the i18n language
    } catch (error) {
      console.error("Location detection failed:", error);
      // Default to English if error occurs
      setLanguage("en");
      i18n.changeLanguage("en");
    }
  }, []);

  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]); // Re-run if dependencies change, like user settings

  // Change language manually when state changes
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]); // Change language every time `language` state updates

  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
