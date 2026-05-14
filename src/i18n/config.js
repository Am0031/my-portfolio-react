import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translations.json";
import fr from "./locales/fr/translations.json";
import de from "./locales/de/translations.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: { translations: en },
    fr: { translations: fr },
    de: { translations: de },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "fr", "de"];

export default i18n;
