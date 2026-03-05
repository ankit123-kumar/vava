import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function PerformanceTrendChart({ data, theme }) {
  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>
      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Performance Trend
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="test" stroke="#888" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#6366f1"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceTrendChart;