import React from "react";

function ExplanationEditor({ value, onChange, theme }) {
  return (
    <div>
      <label className={`text-sm ${theme.subText}`}>
        Explanation
      </label>

      <textarea
        rows="4"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full mt-1 px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
      />
    </div>
  );
}

export default ExplanationEditor;