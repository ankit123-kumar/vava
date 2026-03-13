import React from "react";

function QuickActionsCard({ theme }) {

  const actions = [
    "Create Test",
    "Add Question",
    "View Results"
  ];

  return (
    <div
      className={`${theme.card} ${theme.border} border p-6 rounded-xl shadow-sm`}
    >
      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Quick Actions
      </h3>

      <div className="flex flex-wrap gap-3">

        {actions.map((a, i) => (
          <button
            key={i}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            {a}
          </button>
        ))}

      </div>
    </div>
  );
}

export default QuickActionsCard;