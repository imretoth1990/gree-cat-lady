import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from "../locales/en/translation.json";
import translationsInGerman from "../locales/de/tranlation.json";
import translationsInHungarian from "../locales/hu/translation.json";

const resources = {
  en: {
    translation: translationsInEng,
  },
  de: {
    translation: translationsInGerman,
  },
  hu: {
    translation: translationsInHungarian,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang"), // default language
  debug: true,
  fallbackLng: "de", // use this if selected language is not available
  interpolation: {
    escapevalue: false,
  },
  ns: "translation", // namespaces
  defaultNS: "translation",
});

export default i18n;
