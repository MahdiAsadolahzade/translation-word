'use client'
import { useMainStore } from "@/stores/mainStore";
import { TLanguage } from "@/types/data";

export const useLanguage = () => {
  const setLanguage = useMainStore((s) => s.setLanguage);
  const languageState = useMainStore((s)=>s.language)

  const changeLanguage = (language: TLanguage) => {
    setLanguage(language);
  };

  return {changeLanguage,languageState};
};
