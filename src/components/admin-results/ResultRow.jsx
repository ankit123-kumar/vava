import React from "react";
import ResultActions from "./ResultActions";

function ResultRow({ result, theme }) {

  return (
    <tr className={`border-t ${theme.border}`}>

      <td className={`py-3 ${theme.text}`}>
        {result.test}
      </td>

      <td className={theme.text}>
        {result.student}
      </td>

      <td className={theme.text}>
        {result.score}%
      </td>

      <td className={theme.text}>
        #{result.rank}
      </td>

      <td className={theme.text}>
        {result.time}
      </td>

      <td>
        <ResultActions />
      </td>

    </tr>
  );
}

export default ResultRow;