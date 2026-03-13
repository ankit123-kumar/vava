import React from "react";

function DifficultySelect({ value, onChange, theme }) {
  return (
    <div>
      <label className={`text-sm ${theme.subText}`}>
        Difficulty
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full mt-1 px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
    </div>
  );
}

export default DifficultySelect;