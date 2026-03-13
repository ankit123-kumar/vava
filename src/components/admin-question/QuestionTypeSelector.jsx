import React from "react";

function QuestionTypeSelector({ value, onChange, theme }) {
  return (
    <div>
      <label className={`text-sm ${theme.subText}`}>
        Question Type
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full mt-1 px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
      >
        <option value="mcq">MCQ</option>
        <option value="multi">Multiple Answer</option>
        <option value="numeric">Numeric</option>
        <option value="written">Written</option>
      </select>
    </div>
  );
}

export default QuestionTypeSelector;