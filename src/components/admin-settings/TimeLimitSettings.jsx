import React from "react";

function TimeLimitSettings({ theme }) {

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Default Time Limit
      </h3>

      <input
        type="number"
        placeholder="Time in minutes"
        className={`px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
      />

    </div>
  );
}

export default TimeLimitSettings;