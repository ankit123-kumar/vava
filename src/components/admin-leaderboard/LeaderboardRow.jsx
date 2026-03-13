import React from "react";

function LeaderboardRow({ player, theme }) {

  const rankStyle =
    player.rank === 1
      ? "text-yellow-500 font-bold"
      : player.rank === 2
      ? "text-gray-400 font-bold"
      : player.rank === 3
      ? "text-orange-500 font-bold"
      : theme.text;

  return (
    <tr className={`border-t ${theme.border}`}>

      <td className={`py-3 ${rankStyle}`}>
        #{player.rank}
      </td>

      <td className={theme.text}>
        {player.name}
      </td>

      <td className={theme.text}>
        {player.subject}
      </td>

      <td className={theme.text}>
        {player.score}%
      </td>

      <td className={theme.text}>
        {player.tests}
      </td>

    </tr>
  );
}

export default LeaderboardRow;