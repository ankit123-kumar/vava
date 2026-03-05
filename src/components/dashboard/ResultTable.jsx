import React from "react";
import Skeleton from "../Skeleton";

function ResultTable({ theme, loading }) {

  const results = [
    { test: "React Test", score: "85%", rank: 30 },
    { test: "Java Test", score: "78%", rank: 45 },
    { test: "Spring Boot", score: "91%", rank: 12 }
  ];

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl shadow-sm`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Last Results
      </h3>

      {loading ? (
        <Skeleton className={`h-32 w-full ${theme.skeleton}`} />
      ) : (

        <table className="w-full text-sm">

          <thead>
            <tr className={`${theme.subText} border-b`}>
              <th className="text-left py-2">Test</th>
              <th>Score</th>
              <th>Rank</th>
            </tr>
          </thead>

          <tbody>
            {results.map((r, i) => (
              <tr key={i} className="border-b">

                <td className={`py-2 ${theme.text}`}>
                  {r.test}
                </td>

                <td className={`text-center ${theme.text}`}>
                  {r.score}
                </td>

                <td className={`text-center ${theme.text}`}>
                  #{r.rank}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      )}
    </div>
  );
}

export default ResultTable;