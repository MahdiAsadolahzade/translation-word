'use client'
import Header from "@/components/Header";
import React from "react";

import dynamic from 'next/dynamic';
import { useTranslate } from "@/hooks/useTranslate";

const TranslationManagement = dynamic(() => import('@/components/TranslationManagement'), {
  ssr: false,
});


const page = () => {

    const { t } = useTranslate();

  return (
    <div className="relative">
      <Header title={t('translation_management')} />

      <TranslationManagement />
    </div>
  );
};

export default page;
