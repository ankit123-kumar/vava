import React from "react";

function LeaderboardTable({ data, currentUserId, theme }) {
  return (
    <div className={`${theme.card} ${theme.border} border rounded-xl p-4`}>

      <table className="w-full text-sm">

        <thead>
          <tr className={`border-b ${theme.subText}`}>
            <th className="text-left py-2">Rank</th>
            <th className="text-left">User</th>
            <th>Score</th>
            <th>Percentile</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user) => {

            const isCurrent = user.id === currentUserId;

            return (
              <tr
                key={user.id}
                className={`border-b ${theme.border} ${theme.text} ${
                  isCurrent ? "bg-indigo-100 font-medium" : ""
                }`}
              >
                <td className="py-2">#{user.rank}</td>
                <td>{user.name}</td>
                <td className="text-center">{user.score}</td>
                <td className="text-center">{user.percentile}%</td>
              </tr>
            );
          })}
        </tbody>

      </table>

    </div>
  );
}

export default LeaderboardTable;