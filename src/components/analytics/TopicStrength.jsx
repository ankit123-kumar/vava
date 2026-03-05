import React from "react";

function TopicStrength({ weak, strong, theme }) {
  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Topic Analysis
      </h3>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <p className="text-red-500 font-medium mb-2">
            Weak Topics
          </p>

          <ul className={`text-sm ${theme.subText} list-disc ml-4`}>
            {weak.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-green-500 font-medium mb-2">
            Strong Topics
          </p>

          <ul className={`text-sm ${theme.subText} list-disc ml-4`}>
            {strong.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}

export default TopicStrength;