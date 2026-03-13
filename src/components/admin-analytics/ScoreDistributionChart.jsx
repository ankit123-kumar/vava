import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function ScoreDistributionChart({ data, theme }) {

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Score Distribution
      </h3>

      <ResponsiveContainer width="100%" height={250}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>

          <XAxis dataKey="range" stroke="#9ca3af"/>

          <YAxis stroke="#9ca3af"/>

          <Tooltip />

          <Bar
            dataKey="students"
            fill="#10b981"
            radius={[6,6,0,0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ScoreDistributionChart;