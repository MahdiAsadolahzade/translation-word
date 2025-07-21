"use client";
import Header from "@/components/Header";
import WordTranslationList from "@/components/WordTranslationList";
import { useTranslate } from "@/hooks/useTranslate";
import { useWordCRUD } from "@/hooks/useWordCRUD";
import React from "react";

const page = () => {
  const { getWords } = useWordCRUD();
  const { t } = useTranslate();
  return (
    <div className="relative">
      <Header title={t("word_translation")} />

      <WordTranslationList wordList={getWords()} />
    </div>
  );
};

export default page;
