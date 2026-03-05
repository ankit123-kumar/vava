import React from "react";

function CompletedTestSkeleton({ theme }) {
  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-6 animate-pulse`}
    >
      <div className={`h-5 w-40 mb-4 rounded ${theme.skeleton}`} />

      <div className="grid grid-cols-3 gap-4 mb-6">

        <div className={`h-8 rounded ${theme.skeleton}`} />
        <div className={`h-8 rounded ${theme.skeleton}`} />
        <div className={`h-8 rounded ${theme.skeleton}`} />

      </div>

      <div className={`h-8 w-full rounded ${theme.skeleton}`} />
    </div>
  );
}

export default CompletedTestSkeleton;