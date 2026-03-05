import React from "react";

function LeaderboardFilter({ selectedTest, setSelectedTest, theme }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <label className={`text-sm ${theme.text}`}>Select Test</label>

      <select
        className={`${theme.card} ${theme.border} ${theme.text} border px-3 py-2 rounded`}
        value={selectedTest}
        onChange={(e) => setSelectedTest(e.target.value)}
      >
        <option value="global">Global Ranking</option>
        <option value="java">Java Backend Test</option>
        <option value="react">React Advanced Test</option>
        <option value="dsa">DSA Arrays Test</option>
      </select>
    </div>
  );
}

export default LeaderboardFilter;