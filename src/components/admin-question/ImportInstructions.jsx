import React from "react";

function ImportInstructions({ theme }) {
  return (
    <div className={`${theme.card} ${theme.border} border p-5 rounded-xl`}>

      <h3 className={`font-semibold mb-2 ${theme.text}`}>
        File Format
      </h3>

      <p className={`${theme.subText} text-sm`}>
        Upload CSV or Excel with the following columns:
      </p>

      <div className="mt-3 text-sm">
        Question | Option1 | Option2 | Option3 | Option4 | Correct | Difficulty | Subject | Type | Explanation
      </div>

    </div>
  );
}

export default ImportInstructions;