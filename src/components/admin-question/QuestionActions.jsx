import React from "react";
import { Pencil, Trash2, Eye } from "lucide-react";

function QuestionActions({ onPreview }) {
  const icon = "w-4 h-4 hover:scale-110 transition cursor-pointer";

  return (
    <div className="flex items-center gap-3">

      <button title="Edit">
        <Pencil className={`${icon} text-blue-600`} />
      </button>

      <button title="Preview" onClick={onPreview}>
        <Eye className={`${icon} text-indigo-600`} />
      </button>

      <button title="Delete">
        <Trash2 className={`${icon} text-red-600`} />
      </button>

    </div>
  );
}

export default QuestionActions;