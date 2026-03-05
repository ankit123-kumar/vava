import React from "react";

function UpcomingTestSkeleton({ theme }) {

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl animate-pulse`}>

      <div className={`h-5 w-40 mb-4 rounded ${theme.skeleton}`} />

      <div className={`h-4 w-60 mb-6 rounded ${theme.skeleton}`} />

      <div className={`h-10 w-full mb-6 rounded ${theme.skeleton}`} />

      <div className={`h-20 w-full rounded ${theme.skeleton}`} />

    </div>
  );
}

export default UpcomingTestSkeleton;