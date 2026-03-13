import React from "react";
import Skeleton from "../Skeleton";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function ParticipationChart({ theme, loading }) {

  const data = [
    { day: "Mon", students: 120 },
    { day: "Tue", students: 200 },
    { day: "Wed", students: 150 },
    { day: "Thu", students: 280 },
    { day: "Fri", students: 310 },
    { day: "Sat", students: 250 }
  ];

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Test Participation Trend
      </h3>

      {loading ? (
        <Skeleton className={`h-62.5 w-full ${theme.skeleton}`} />
      ) : (

        <div className="w-full h-62.5">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart
              data={data}
              margin={{ top: 10, right: 20, left: -10, bottom: 5 }}
            >

              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />

              <XAxis dataKey="day" stroke="#9ca3af" />

              <YAxis stroke="#9ca3af" />

              <Tooltip cursor={{ fill: "rgba(255,255,255,0.05)" }} />

              <Line
                type="monotone"
                dataKey="students"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      )}

    </div>
  );
}

export default ParticipationChart;