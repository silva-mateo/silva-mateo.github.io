import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { LanguageContext } from "./languageContext";
import { translations } from "../i18n/translations";
import type { Language } from "../i18n/translations";

const isLanguage = (value: string | null): value is Language =>
  value === "en" || value === "es";

const getInitialLanguage = (): Language => {
  const savedLanguage = localStorage.getItem("language");
  if (isLanguage(savedLanguage)) return savedLanguage;

  const browserLanguages =
    navigator.languages.length > 0 ? navigator.languages : [navigator.language];

  const prefersSpanish = browserLanguages.some((language) =>
    language.toLowerCase().startsWith("es"),
  );

  return prefersSpanish ? "es" : "en";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "es" : "en"));

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
