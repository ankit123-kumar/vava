import React from "react";

function LeaderboardSkeleton({ theme }) {
  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl animate-pulse`}>
      <div className={`h-6 w-40 mb-4 rounded ${theme.skeleton}`} />
      <div className={`h-32 w-full rounded ${theme.skeleton}`} />
    </div>
  );
}

export default LeaderboardSkeleton;