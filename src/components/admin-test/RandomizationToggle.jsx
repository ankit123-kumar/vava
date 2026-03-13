import React from "react";

function RandomizationToggle({ enabled, setEnabled, theme }) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg border ${theme.border}`}
    >
      <div>
        <p className={`${theme.text} font-medium`}>
          Auto Question Randomization
        </p>

        <p className={`text-sm ${theme.subText}`}>
          Shuffle question order for each student
        </p>
      </div>

      <input
        type="checkbox"
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
        className="w-5 h-5"
      />
    </div>
  );
}

export default RandomizationToggle;