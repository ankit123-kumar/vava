import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function WeakSubjectsChart({ data, theme }) {

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Weak Subjects
      </h3>

      <div className="w-full h-62.5">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: -10, bottom: 5 }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
            />

            <XAxis
              dataKey="subject"
              stroke="#9ca3af"
            />

            <YAxis
              stroke="#9ca3af"
            />

            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.05)" }}
            />

            <Bar
              dataKey="score"
              fill="#ef4444"
              radius={[6,6,0,0]}
              barSize={40}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default WeakSubjectsChart;