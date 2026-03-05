import React from "react";

function TestCard({ test, theme }) {
  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-5 shadow-sm hover:shadow-md transition`}
    >
      <h3 className={`font-semibold text-lg ${theme.text}`}>
        {test.title}
      </h3>

      <p className={`text-sm mt-1 ${theme.subText}`}>
        Subject: {test.subject}
      </p>

      <p className={`text-sm ${theme.subText}`}>
        Difficulty: {test.difficulty}
      </p>

      <p className={`text-sm ${theme.subText}`}>
        Duration: {test.duration} mins
      </p>

      <div className="flex justify-between items-center mt-4">

        <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
          {test.questions} Questions
        </span>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm">
          Start Test
        </button>

      </div>
    </div>
  );
}

export default TestCard;