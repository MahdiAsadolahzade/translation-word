// src/hooks/useTranslate.ts
'use client'

import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/locales";

type TranslationKeys = keyof typeof translations;

export const useTranslate = () => {
  const { languageState } = useLanguage();

  const t = (key: TranslationKeys): string => {
    const entry = translations[key];
    if (!entry) return key; 
    return entry[languageState] || key; 
  };

  return { t, lang: languageState };
};
