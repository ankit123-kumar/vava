import React from "react";

function TestRulesSettings({ theme }) {

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Test Rules
      </h3>

      <textarea
        rows="4"
        placeholder="Enter test instructions or rules..."
        className={`w-full px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
      />

    </div>
  );
}

export default TestRulesSettings;