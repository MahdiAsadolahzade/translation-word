// src/locales/index.ts

import { TLanguage } from "@/types/data";

export const translations = {
  hello: {
    En: "Hello",
    Fa: "سلام",
  },
  word_translation: {
    En: "Word Translation",
    Fa: "ترجمه کلمه",
  },
  translation_management: {
    En: "Translation Management",
    Fa: "مدیریت ترجمه",
  },
  add_new_word: {
    En: "Add New Word",
    Fa: "افزودن کلمه جدید",
  },
  add_word: {
    En: "Add Word",
    Fa: "افزودن کلمه",
  },
  translation: {
    En: "Translation",
    Fa: "ترجمه",
  },
  key: {
    En: "Key",
    Fa: "کلید",
  },
  search_words: {
    En: "Search Words",
    Fa: "جستجوی کلمات",
  },
  edit_word: {
    En: "Edit Word",
    Fa: "ویرایش کلمه",
  },
  update_word: {
    En: "Update Word",
    Fa: "بروزرسانی کلمه",
  },
  cancel: {
    En: "Cancel",
    Fa: "انصراف",
  },
  no_words_found: {
    En: "No words found. Add your first word!",
    Fa: "هیچ کلمه‌ای پیدا نشد. اولین کلمه خود را اضافه کنید!",
  },
  actions: {
    En: "Actions",
    Fa: "اقدامات",
  },
  confirm_delete_word: {
    En: "Are you sure you want to delete this word?",
    Fa: "آیا مطمئن هستید که می‌خواهید این کلمه را حذف کنید؟",
  },
} satisfies Record<string, Record<TLanguage, string>>;
