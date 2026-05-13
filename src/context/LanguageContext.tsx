"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  translations,
  type Language,
  type Translations,
} from "@/src/lib/translations";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "yl-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  // Carrega idioma salvo (ou detecta do browser)
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored === "pt" || stored === "en") {
      setLanguageState(stored);
    } else {
      const browserLang = navigator.language.toLowerCase();
      setLanguageState(browserLang.startsWith("pt") ? "pt" : "en");
    }
    setMounted(true);
  }, []);

  // Atualiza <html lang="..."> e persiste
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    localStorage.setItem(STORAGE_KEY, language);
  }, [language, mounted]);

  const setLanguage = (lang: Language) => setLanguageState(lang);
  const toggleLanguage = () =>
    setLanguageState((prev) => (prev === "pt" ? "en" : "pt"));

  const value: LanguageContextValue = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return ctx;
}
