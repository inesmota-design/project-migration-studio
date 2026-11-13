import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type SiteLanguage = "PT" | "EN";

type SiteLanguageContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  isEnglish: boolean;
};

const SiteLanguageContext = createContext<SiteLanguageContextValue | null>(null);

export function SiteLanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SiteLanguage>("PT");
  const isEnglish = language === "EN";

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "pt";
  }, [isEnglish]);

  return (
    <SiteLanguageContext.Provider value={{ language, setLanguage, isEnglish }}>
      {children}
    </SiteLanguageContext.Provider>
  );
}

export function useSiteLanguage() {
  const value = useContext(SiteLanguageContext);
  if (!value) throw new Error("useSiteLanguage must be used inside SiteLanguageProvider");
  return value;
}
