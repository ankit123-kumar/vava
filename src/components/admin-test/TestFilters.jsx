import React from "react";

function TestFilters({ theme }) {
  return (
    <div
      className={`${theme.card} ${theme.border} border p-5 rounded-xl shadow-sm flex flex-wrap gap-4`}
    >
      <select
        className={`px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
      >
        <option>All Subjects</option>
        <option>Java</option>
        <option>DSA</option>
        <option>React</option>
      </select>

      <select
        className={`px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
      >
        <option>All Difficulty</option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <input
        type="date"
        className={`px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
      />
    </div>
  );
}

export default TestFilters;