import React from "react";

function ResultSummaryCard({ title, value, theme }) {
  return (
    <div className={`${theme.card} ${theme.border} border p-5 rounded-xl text-center shadow-sm`}>
      <p className={`text-sm ${theme.subText}`}>{title}</p>
      <h2 className={`text-2xl font-bold mt-2 ${theme.text}`}>
        {value}
      </h2>
    </div>
  );
}

export default ResultSummaryCard;