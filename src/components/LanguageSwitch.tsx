"use client";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { languageMap } from "@/data/language";
import { useLanguage } from "@/hooks/useLanguage";
import { FaLanguage } from "react-icons/fa6";

export default function CustomLanguageSwitch() {
  const { languageState, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block text-left w-40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-white border space-x-1 border-gray-300 rounded px-3 py-2 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {languageMap[languageState]}
        <FaLanguage className="text-lg" />
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow max-h-60 overflow-auto">
          {Object.entries(languageMap).map(([key, value]) => (
            <li
              key={key}
              onClick={() => {
                changeLanguage(key as any);
                setOpen(false);
              }}
              className={`cursor-pointer px-4 py-2 hover:bg-gray-100 hover:text-primary ${
                languageState === key ? "font-bold bg-primary text-white" : ""
              }`}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
