import React from "react";

function TestSkeleton({ theme }) {
  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-5 animate-pulse`}
    >
      <div className={`h-5 w-40 mb-3 ${theme.skeleton} rounded`} />
      <div className={`h-4 w-32 mb-2 ${theme.skeleton} rounded`} />
      <div className={`h-4 w-24 mb-4 ${theme.skeleton} rounded`} />

      <div className={`h-8 w-full ${theme.skeleton} rounded`} />
    </div>
  );
}

export default TestSkeleton;