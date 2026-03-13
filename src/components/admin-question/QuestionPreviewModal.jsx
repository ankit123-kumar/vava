import React from "react";

function QuestionPreviewModal({ open, onClose, question, theme }) {
  if (!open || !question) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className={`${theme.card} p-6 rounded-xl w-[500px]`}>

        <h2 className={`text-lg font-semibold ${theme.text}`}>
          Question Preview
        </h2>

        <p className={`mt-4 ${theme.text}`}>
          {question.text}
        </p>

        <div className="mt-3 text-sm space-y-1">
          <p className={theme.text}>Subject: {question.subject}</p>
          <p className={theme.text}>Difficulty: {question.difficulty}</p>
          <p className={theme.text}>Type: {question.type}</p>
        </div>

        <button
          onClick={onClose}
          className="mt-5 bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default QuestionPreviewModal;