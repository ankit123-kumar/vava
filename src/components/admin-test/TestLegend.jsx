import React from "react";

function TestLegend({ theme }) {
  const items = [
    { label: "Upcoming Tests", color: "bg-blue-500" },
    { label: "Active Tests", color: "bg-green-500" },
    { label: "Completed Tests", color: "bg-gray-500" }
  ];

  return (
    <div className="flex gap-6 flex-wrap">

      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${item.color}`} />
          <span className={`text-sm ${theme.text}`}>
            {item.label}
          </span>
        </div>
      ))}

    </div>
  );
}

export default TestLegend;