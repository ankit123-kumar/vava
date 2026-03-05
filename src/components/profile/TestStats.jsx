import React from "react";

function TestStats({ stats, theme }) {

  const items = [
    { label: "Tests Attempted", value: stats.tests },
    { label: "Average Score", value: stats.avgScore },
    { label: "Best Rank", value: stats.bestRank },
    { label: "Accuracy", value: stats.accuracy }
  ];

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Test Statistics
      </h3>

      <div className="grid grid-cols-2 gap-4">

        {items.map((item, i) => (
          <div key={i} className="text-center">

            <p className={`text-xl font-bold ${theme.text}`}>
              {item.value}
            </p>

            <span className={`text-xs ${theme.subText}`}>
              {item.label}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default TestStats;