import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import es from "./es/index";
import en from "./en/index";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: [
        "localStorage",
        "cookie",
        "navigator",
        "querystring",
        "htmlTag",
        "path",
        "subdomain"
      ],
      caches: ["localStorage", "cookie"],
      excludeCacheFor: ["cimode"],
      cookieMinutes: 10,
      cookieDomain: window.location.hostname
    },
    resources: { en, es },
    whitelist: ["en", "es"],
    ns: ["app"],
    defaultNS: ["app"],
    keySeparator: ".",
    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
