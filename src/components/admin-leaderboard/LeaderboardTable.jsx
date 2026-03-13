import React from "react";
import LeaderboardRow from "./LeaderboardRow";
import LeaderboardSkeleton from "./LeaderboardSkeleton";

function LeaderboardTable({ players, loading, theme }) {

  if (loading) {
    return <LeaderboardSkeleton theme={theme} />;
  }

  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-5 shadow-sm overflow-x-auto`}
    >

      <table className="w-full text-sm">

        <thead>
          <tr className={`${theme.subText} text-left`}>
            <th className="pb-3">Rank</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Score</th>
            <th>Tests</th>
          </tr>
        </thead>

        <tbody>

          {players.map((p) => (
            <LeaderboardRow
              key={p.rank}
              player={p}
              theme={theme}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default LeaderboardTable;