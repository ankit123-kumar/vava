import React from "react";

function TestFilters({ filters, setFilters, theme }) {
  return (
    <div className="flex flex-wrap gap-4">

      <select
        className={`${theme.card} ${theme.border} ${theme.text} border px-3 py-2 rounded`}
        value={filters.subject}
        onChange={(e) =>
          setFilters({ ...filters, subject: e.target.value })
        }
      >
        <option value="">All Subjects</option>
        <option value="Java">Java</option>
        <option value="React">React</option>
        <option value="DSA">DSA</option>
      </select>

      <select
        className={`${theme.card} ${theme.border} ${theme.text} border px-3 py-2 rounded`}
        value={filters.difficulty}
        onChange={(e) =>
          setFilters({ ...filters, difficulty: e.target.value })
        }
      >
        <option value="">All Difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

    </div>
  );
}

export default TestFilters;