import React from "react";

function TopTenCard({ user, rank, theme }) {

  const bg =
    rank === 1
      ? "bg-yellow-400"
      : rank === 2
      ? "bg-gray-300"
      : rank === 3
      ? "bg-orange-400"
      : "bg-indigo-500";

  return (
    <div className={`${bg} text-white p-4 rounded-lg text-center`}>
      <p className="text-sm">Rank #{rank}</p>
      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-sm">Score: {user.score}</p>
    </div>
  );
}

export default TopTenCard;