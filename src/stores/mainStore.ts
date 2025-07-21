import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { TWord, TLanguage } from "@/types/data";
import { initialWordRepositoryData } from "@/mock/initialData";

interface MainStoreState {
  wordRepository: TWord[];
  addWord: (word: TWord) => void;
  updateWord: (id: number, updatedWord: Partial<TWord>) => void;
  deleteWord: (id: number) => void;
  language: TLanguage;
  setLanguage: (language: TLanguage) => void;
  reorderWords: (startIndex: number, endIndex: number) => void;
}

export const useMainStore = create<MainStoreState>()(
  persist(
    (set) => ({
      wordRepository: initialWordRepositoryData,
      language: "En",

      addWord: (word) =>
        set((state) => ({
          wordRepository: [...state.wordRepository, word],
        })),

      updateWord: (id, updatedWord) =>
        set((state) => ({
          wordRepository: state.wordRepository.map((word) =>
            word.id === id ? { ...word, ...updatedWord } : word
          ),
        })),

      deleteWord: (id) =>
        set((state) => ({
          wordRepository: state.wordRepository.filter((word) => word.id !== id),
        })),

      setLanguage(language) {
        set({ language: language });
      },

      reorderWords: (startIndex, endIndex) =>
        set((state) => {
          const result = Array.from(state.wordRepository);
          const [removed] = result.splice(startIndex, 1);
          result.splice(endIndex, 0, removed);
          return { wordRepository: result };
        }),
    }),
    {
      name: "word-repository-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
