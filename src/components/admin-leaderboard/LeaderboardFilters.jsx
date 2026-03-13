import React from "react";

function LeaderboardFilters({ theme }) {

  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-5 flex flex-wrap gap-4`}
    >

      <select
        className={`px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
      >
        <option>Global Leaderboard</option>
        <option>Test Specific</option>
      </select>

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
        <option>Weekly Ranking</option>
        <option>Monthly Ranking</option>
      </select>

    </div>
  );
}

export default LeaderboardFilters;