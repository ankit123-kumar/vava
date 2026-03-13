import React from "react";

function NegativeMarkingSettings({ theme }) {

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Default Negative Marking
      </h3>

      <input
        type="number"
        step="0.25"
        placeholder="Example: 0.25"
        className={`px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
      />

    </div>
  );
}

export default NegativeMarkingSettings;