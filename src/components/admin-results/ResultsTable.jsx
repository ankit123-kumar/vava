import React from "react";
import ResultRow from "./ResultRow";
import ResultsTableSkeleton from "./ResultsTableSkeleton";

function ResultsTable({ results, loading, theme }) {

  if (loading) {
    return <ResultsTableSkeleton theme={theme} />;
  }

  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-5 shadow-sm overflow-x-auto`}
    >

      <table className="w-full text-sm">

        <thead>
          <tr className={`${theme.subText} text-left`}>
            <th className="pb-3">Test</th>
            <th>Student</th>
            <th>Score</th>
            <th>Rank</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {results.map((result) => (
            <ResultRow
              key={result.id}
              result={result}
              theme={theme}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ResultsTable;