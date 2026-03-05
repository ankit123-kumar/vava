import React from "react";
import Skeleton from "../Skeleton";

function UpcomingTestCard({ theme, loading }) {

  const test = {
    title: "Java Backend Mock Test",
    date: "12 March",
    time: "7:00 PM"
  };

  return (
    <div
      className={`${theme.card} ${theme.border} border p-6 rounded-xl shadow-sm`}
    >
      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Next Upcoming Test
      </h3>

      {loading ? (
        <Skeleton className={`h-12 w-full ${theme.skeleton}`} />
      ) : (
        <div className="flex justify-between items-center">

          <div>
            <p className={`${theme.text} font-medium`}>
              {test.title}
            </p>

            <p className={`text-sm ${theme.subText}`}>
              {test.date} • {test.time}
            </p>
          </div>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
            Start
          </button>

        </div>
      )}
    </div>
  );
}

export default UpcomingTestCard;