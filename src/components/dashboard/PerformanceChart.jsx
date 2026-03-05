import React from "react";
import Skeleton from "../Skeleton";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function PerformanceChart({ theme, loading }) {

  const data = [
    { test: "T1", score: 60 },
    { test: "T2", score: 72 },
    { test: "T3", score: 68 },
    { test: "T4", score: 80 },
    { test: "T5", score: 90 }
  ];

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl shadow-sm`}>

      <h3 className={`${theme.text} font-semibold mb-4`}>
        Performance
      </h3>

      {loading ? (
        <Skeleton className={`h-[220px] w-full ${theme.skeleton}`} />
      ) : (

        <ResponsiveContainer width="100%" height={220}>

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
      )}
    </div>
  );
}

export default PerformanceChart;