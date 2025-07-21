"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { FC } from "react";
import { languageMap } from "@/data/language";
import { FaChevronDown } from "react-icons/fa";

interface LanguageSwitchProps {}

const LanguageSwitch: FC<LanguageSwitchProps> = ({}) => {
  const { languageState, changeLanguage } = useLanguage();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(event.target.value as "En" | "Fa");
  };

  return (
    <div className="relative inline-block text-left">
      <select
        id="language-select"
        value={languageState}
        onChange={handleChange}
        className="block appearance-none w-full bg-background border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-700"
      >
        {Object.entries(languageMap).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <FaChevronDown />
      </div>
    </div>
  );
};

export default LanguageSwitch;
