import React from "react";

function Skeleton({ className }) {
  return (
    <div
      className={`animate-pulse rounded-md ${className}`}
    />
  );
}

export default Skeleton;