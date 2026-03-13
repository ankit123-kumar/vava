import React from "react";
import Skeleton from "../Skeleton";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function DifficultSubjectChart({ theme, loading }) {

  const data = [
    { subject: "DSA", score: 55 },
    { subject: "Java", score: 65 },
    { subject: "SQL", score: 70 },
    { subject: "React", score: 74 }
  ];

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl shadow-sm`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Most Difficult Subjects
      </h3>

      {loading ? (
        <Skeleton className={`h-48 w-full ${theme.skeleton}`} />
      ) : (

        <ResponsiveContainer width="100%" height={220}>

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="subject" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="score"
              fill="#ef4444"
              radius={[6, 6, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      )}

    </div>
  );
}

export default DifficultSubjectChart;