import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function SubjectAccuracyChart({ data, theme }) {
  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>
      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Subject Accuracy
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="subject" stroke="#888" />
          <Tooltip />
          <Bar dataKey="accuracy" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SubjectAccuracyChart;