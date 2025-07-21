'use client'
import { useMainStore } from "@/stores/mainStore";
import { TWord } from "@/types/data";

export const useWordCRUD = () => {
  const addState = useMainStore((s) => s.addWord);
  const updateState = useMainStore((s) => s.updateWord);
  const deleteState = useMainStore((s) => s.deleteWord);
  const wordState = useMainStore((s) => s.wordRepository);
  const reorderState = useMainStore((s) => s.reorderWords);


  const addWord = (word: TWord) => {
    let addLength =  Date.now();

    addState({ ...word, id: addLength });
  };

  const updateWord = (id: number, updatedWord: Partial<TWord>) => {
    updateState(id, updatedWord);
  };

  const deleteWord = (id: number) => {
    deleteState(id);
  };

  const getWords = () => {
    return [...wordState];
  };


  const reorderWords = (startIndex: number, endIndex: number) => {
    reorderState(startIndex, endIndex);
  };


  return { addWord, updateWord, deleteWord, getWords , reorderWords  };
};
