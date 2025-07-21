"use client";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useLanguage } from "@/hooks/useLanguage";
import { useWordCRUD } from "@/hooks/useWordCRUD";
import { useDeviceStore } from "@/stores/deviceStore";
import { TWord } from "@/types/data";
import { FC, useState, useMemo } from "react";
import { FiEdit, FiTrash2, FiPlus, FiSearch } from "react-icons/fi";
import { SortableItem } from "@/components/SortableItem";
import { useTranslate } from "@/hooks/useTranslate";

interface TranslationManagementProps {}

const TranslationManagement: FC<TranslationManagementProps> = ({}) => {
  const { t } = useTranslate();
  const { languageState } = useLanguage();
  const { isDesktop } = useDeviceStore();
  const { addWord, deleteWord, getWords, updateWord, reorderWords } =
    useWordCRUD();
  const [searchTerm, setSearchTerm] = useState("");
  const [editingWord, setEditingWord] = useState<TWord | null>(null);
  const [newWord, setNewWord] = useState<Omit<TWord, "id">>({
    key: "",
    translation: "",
    language: languageState,
  });

 
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const data = useMemo(() => {
    let rawData = getWords();
    return rawData
      .filter((item) => item.language === languageState)
      .filter(
        (item) =>
          item.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.translation?.toLowerCase().includes(searchTerm.toLowerCase()) ??
            false)
      );
  }, [languageState, getWords, searchTerm]);

  const handleAddWord = () => {
    if (!newWord.key.trim()) return;
    addWord({ ...newWord, id: Date.now(), language: languageState });
    setNewWord({ key: "", translation: "", language: languageState });
  };

  const handleUpdateWord = () => {
    if (!editingWord?.key.trim() || !editingWord.id) return;
    updateWord(editingWord.id, editingWord);
    setEditingWord(null);
  };

  const handleDeleteWord = (id: number) => {
    if (confirm(t("confirm_delete_word"))) {
      deleteWord(id);
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {

      const allWords = getWords();


      const activeWord = allWords.find((w) => w.id === active.id);
      const overWord = allWords.find((w) => w.id === over.id);

      if (!activeWord || !overWord) return;

 
      const oldIndex = allWords.findIndex((w) => w.id === active.id);
      const newIndex = allWords.findIndex((w) => w.id === over.id);

      reorderWords(oldIndex, newIndex);
    }
  };

  const renderTable = () => (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={data.map((item) => ({ id: item.id || "" }))}
        strategy={verticalListSortingStrategy}
      >
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("key")}
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("translation")}
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("actions")}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                  {t("no_words_found")}
                </td>
              </tr>
            ) : (
              data.map((word) => (
                <SortableItem
                  key={word.id}
                  id={word.id || 0}
                  word={word}
                  onEdit={setEditingWord}
                  onDelete={handleDeleteWord}
                />
              ))
            )}
          </tbody>
        </table>
      </SortableContext>
    </DndContext>
  );

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-sm">
      {/* Header and Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {t("translation_management")} ({languageState})
        </h1>

        <div className="relative w-full md:w-64">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={t("search_words").concat(" ...")}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Add/Edit Form */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          {editingWord ? t("edit_word") : t("add_new_word")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("key")}
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={editingWord ? editingWord.key : newWord.key}
              onChange={(e) =>
                editingWord
                  ? setEditingWord({ ...editingWord, key: e.target.value })
                  : setNewWord({ ...newWord, key: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("translation")}
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={
                editingWord
                  ? editingWord.translation || ""
                  : newWord.translation || ""
              }
              onChange={(e) =>
                editingWord
                  ? setEditingWord({
                      ...editingWord,
                      translation: e.target.value,
                    })
                  : setNewWord({ ...newWord, translation: e.target.value })
              }
            />
          </div>

          <div className="flex items-end">
            <button
              className={`w-full py-2 px-4 rounded-lg font-medium text-white ${
                editingWord
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-primary hover:bg-teal-700"
              } transition-colors`}
              onClick={editingWord ? handleUpdateWord : handleAddWord}
            >
              {editingWord ? t("update_word") : t("add_word")}
            </button>

            {editingWord && (
              <button
                className="mx-2 py-2 px-4 rounded-lg font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors"
                onClick={() => setEditingWord(null)}
              >
                {t("cancel")}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Words Table */}
      <div className="overflow-x-auto max-h-80 overflow-y-auto">
        {renderTable()}
      </div>
    </div>
  );
};

export default TranslationManagement;
