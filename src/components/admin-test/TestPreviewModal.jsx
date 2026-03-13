import React from "react";

function TestPreviewModal({ open, onClose, test, theme }) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div
        className={`${theme.card} p-6 rounded-xl w-[500px]`}
      >
        <h2 className={`text-lg font-semibold ${theme.text}`}>
          Test Preview
        </h2>

        <div className="mt-4 space-y-2">

          <p className={theme.text}>
            Title: {test.title}
          </p>

          <p className={theme.text}>
            Subject: {test.subject}
          </p>

          <p className={theme.text}>
            Duration: {test.duration} minutes
          </p>

          <p className={theme.text}>
            Questions: {test.questions?.length || 0}
          </p>

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

export default TestPreviewModal;