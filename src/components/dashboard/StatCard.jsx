import React from "react";
import Skeleton from "../Skeleton";

function StatCard({ title, value, loading, theme }) {

  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-5 shadow-sm transition`}
    >
      <p className={`${theme.subText} text-sm`}>{title}</p>

      {loading ? (
        <Skeleton className={`h-7 w-20 mt-2 ${theme.skeleton}`} />
      ) : (
        <h2 className={`text-2xl font-bold mt-2 ${theme.text}`}>
          {value}
        </h2>
      )}
    </div>
  );
}

export default StatCard;