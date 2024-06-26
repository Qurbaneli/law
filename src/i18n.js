import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import azJSON from './locale/az.json'
import enJSON from './locale/en.json'
i18n.use(initReactI18next).init({
  resources: {
    az: { ...azJSON },
    en: { ...enJSON },
  },
  lng: "az",
});