import React from "react";

function InstructionCard({ title, children, theme }) {
  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-6 shadow-sm`}
    >
      <h3 className={`text-lg font-semibold mb-3 ${theme.text}`}>
        {title}
      </h3>

      <div className={`text-sm space-y-2 ${theme.subText}`}>
        {children}
      </div>
    </div>
  );
}

export default InstructionCard;