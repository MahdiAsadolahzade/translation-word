import { TLanguage } from "@/types/data";

export const translations = {
  hello: {
    En: "Hello",
    Fa: "سلام",
    Fr: "Bonjour",
    De: "Hallo",
  },
  word_translation: {
    En: "Word Translation",
    Fa: "ترجمه کلمه",
    Fr: "Traduction de mot",
    De: "Wortübersetzung",
  },
  translation_management: {
    En: "Translation Management",
    Fa: "مدیریت ترجمه",
    Fr: "Gestion des traductions",
    De: "Übersetzungsverwaltung",
  },
  add_new_word: {
    En: "Add New Word",
    Fa: "افزودن کلمه جدید",
    Fr: "Ajouter un nouveau mot",
    De: "Neues Wort hinzufügen",
  },
  add_word: {
    En: "Add Word",
    Fa: "افزودن کلمه",
    Fr: "Ajouter un mot",
    De: "Wort hinzufügen",
  },
  translation: {
    En: "Translation",
    Fa: "ترجمه",
    Fr: "Traduction",
    De: "Übersetzung",
  },
  key: {
    En: "Key",
    Fa: "کلید",
    Fr: "Clé",
    De: "Schlüssel",
  },
  search_words: {
    En: "Search Words",
    Fa: "جستجوی کلمات",
    Fr: "Rechercher des mots",
    De: "Wörter suchen",
  },
  edit_word: {
    En: "Edit Word",
    Fa: "ویرایش کلمه",
    Fr: "Modifier le mot",
    De: "Wort bearbeiten",
  },
  update_word: {
    En: "Update Word",
    Fa: "بروزرسانی کلمه",
    Fr: "Mettre à jour le mot",
    De: "Wort aktualisieren",
  },
  cancel: {
    En: "Cancel",
    Fa: "انصراف",
    Fr: "Annuler",
    De: "Abbrechen",
  },
  no_words_found: {
    En: "No words found. Add your first word!",
    Fa: "هیچ کلمه‌ای پیدا نشد. اولین کلمه خود را اضافه کنید!",
    Fr: "Aucun mot trouvé. Ajoutez votre premier mot !",
    De: "Keine Wörter gefunden. Fügen Sie Ihr erstes Wort hinzu!",
  },
  actions: {
    En: "Actions",
    Fa: "اقدامات",
    Fr: "Actions",
    De: "Aktionen",
  },
  confirm_delete_word: {
    En: "Are you sure you want to delete this word?",
    Fa: "آیا مطمئن هستید که می‌خواهید این کلمه را حذف کنید؟",
    Fr: "Êtes-vous sûr de vouloir supprimer ce mot ?",
    De: "Möchten Sie dieses Wort wirklich löschen?",
  },
} satisfies Record<string, Record<TLanguage, string>>;
