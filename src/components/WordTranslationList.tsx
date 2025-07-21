"use client";
import { useLanguage } from "@/hooks/useLanguage";
import { useDeviceStore } from "@/stores/deviceStore"; 
import { TWord } from "@/types/data";
import { FC, useMemo } from "react";

interface WordTranslationListProps {
  wordList: TWord[];
}

const WordTranslationList: FC<WordTranslationListProps> = ({ wordList }) => {
  const { languageState } = useLanguage();
  const { isDesktop, isMobile, isTablet } = useDeviceStore(); 

  const data = useMemo(() => {
    return wordList.filter((item) => item.language === languageState);
  }, [languageState, wordList]);

  return (
    <div className="container mx-auto px-4 py-8">
      {data.length > 0 ? (
        <div
          className={`
            ${isDesktop ? "grid grid-cols-3 gap-8" : ""} 
            ${isTablet ? "grid grid-cols-2 gap-6" : ""}   
            ${isMobile ? "space-y-4" : ""}              
          `}
        >
          {data.map((item) => (
            <div
              key={item.id || item.key}
              className={`
                bg-white p-4 rounded-lg shadow-md border border-gray-200
                ${isDesktop ? "p-6" : ""}               
                ${isTablet ? "p-5" : ""}                 
                ${isMobile ? "p-4" : ""}               
              `}
            >
              <h2
                className={`
                  font-semibold  mb-2 text-primary
                  ${isDesktop ? "text-2xl" : ""}           
                  ${isTablet ? "text-xl" : ""}           
                  ${isMobile ? "text-lg" : ""}         
                `}
              >
                {item.key}
              </h2>
              {item.translation && (
                <p
                  className={`
                    text-gray-600 leading-relaxed
                    ${isDesktop ? "text-lg" : ""}         
                    ${isTablet ? "text-base" : ""}         
                    ${isMobile ? "text-sm" : ""}           
                  `}
                >
                  {item.translation}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No words available for this language yet.
        </p>
      )}
    </div>
  );
};

export default WordTranslationList;
