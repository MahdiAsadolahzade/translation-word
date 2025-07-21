'use client'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TWord } from "@/types/data";
import { FiEdit, FiTrash2} from "react-icons/fi";
import { RiDragMove2Fill } from "react-icons/ri";

interface SortableItemProps {
  id: number;
  word: TWord;
  onEdit: (word: TWord) => void;
  onDelete: (id: number) => void;
}


export const SortableItem = ({ id, word, onEdit, onDelete }: SortableItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    backgroundColor: isDragging ? 'var(--color-primary)' : 'transparent',
  };

  return (
    <tr 
      ref={setNodeRef}
      style={style}
      className={`hover:bg-gray-50 ${isDragging ? 'shadow-lg' : ''}`}
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <div className="flex items-center">
          <button
            {...attributes}
            {...listeners}
            className="mr-2 text-gray-400 hover:text-gray-600 cursor-move touch-none"
            aria-label="Drag handle"
          >
            <RiDragMove2Fill size={18} />
          </button>
          {word.key}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {word.translation || "-"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => onEdit(word)}
            className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
            title="Edit"
          >
            <FiEdit size={18} />
          </button>
          <button
            onClick={() => word.id && onDelete(word.id)}
            className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
            title="Delete"
          >
            <FiTrash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};