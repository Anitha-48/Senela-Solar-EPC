import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation";
import ta from "./locales/ta/translation";

const supportedLanguages = ["en", "ta"];

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ta: { translation: ta },
    },
    supportedLngs: supportedLanguages,
    fallbackLng: "en",
    defaultNS: "translation",
    fallbackNS: "translation",
    load: "languageOnly",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "solarEpcLanguage",
      caches: ["localStorage"],
    },
  });

export { supportedLanguages };
export default i18n;
