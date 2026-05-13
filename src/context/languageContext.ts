import { createContext, useContext } from "react";
import { translations } from "../i18n/translations";
import type { Language, Translation } from "../i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: Translation;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: translations.en,
});

export const useLanguage = () => useContext(LanguageContext);
