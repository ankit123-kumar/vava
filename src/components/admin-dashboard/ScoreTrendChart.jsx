import React from "react";
import Skeleton from "../Skeleton";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function ScoreTrendChart({ theme, loading }) {

  const data = [
    { week: "W1", score: 65 },
    { week: "W2", score: 70 },
    { week: "W3", score: 74 },
    { week: "W4", score: 79 },
    { week: "W5", score: 82 }
  ];

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Average Score Trend
      </h3>

      {loading ? (
        <Skeleton className={`h-62.5 w-full ${theme.skeleton}`} />
      ) : (

        <div className="w-full h-62.5">

          <ResponsiveContainer width="100%" height="100%">

            <AreaChart
              data={data}
              margin={{ top: 10, right: 20, left: -10, bottom: 5 }}
            >

              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />

              <XAxis dataKey="week" stroke="#9ca3af" />

              <YAxis stroke="#9ca3af" />

              <Tooltip cursor={{ fill: "rgba(255,255,255,0.05)" }} />

              <Area
                type="monotone"
                dataKey="score"
                stroke="#10b981"
                fill="#34d399"
                strokeWidth={2}
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      )}

    </div>
  );
}

export default ScoreTrendChart;