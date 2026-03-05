import React from "react";

function CompletedTestCard({ test, theme }) {
  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-6 shadow-sm hover:shadow-md transition`}
    >
      <div className="flex justify-between items-start">

        <div>
          <h3 className={`text-lg font-semibold ${theme.text}`}>
            {test.title}
          </h3>

          <p className={`text-sm mt-1 ${theme.subText}`}>
            Attempted on {test.date}
          </p>
        </div>

        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
          Completed
        </span>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-3 gap-4 mt-5 text-center">

        <div>
          <p className={`text-xl font-bold ${theme.text}`}>
            {test.score}
          </p>
          <span className={`text-xs ${theme.subText}`}>Score</span>
        </div>

        <div>
          <p className={`text-xl font-bold ${theme.text}`}>
            #{test.rank}
          </p>
          <span className={`text-xs ${theme.subText}`}>Rank</span>
        </div>

        <div>
          <p className={`text-xl font-bold ${theme.text}`}>
            {test.percentile}%
          </p>
          <span className={`text-xs ${theme.subText}`}>Percentile</span>
        </div>

      </div>

      {/* Buttons */}

      <div className="flex gap-3 mt-6">

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm">
          View Result
        </button>

        <button
          className={`${theme.border} border px-4 py-2 rounded-lg text-sm ${theme.text}`}
        >
          Review Answers
        </button>

      </div>
    </div>
  );
}

export default CompletedTestCard;