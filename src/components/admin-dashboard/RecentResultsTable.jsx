import React from "react";
import Skeleton from "../Skeleton";

function RecentResultsTable({ theme, loading }) {

  const results = [
    { student: "Rahul", test: "Java Mock", score: "85%" },
    { student: "Anita", test: "React Test", score: "78%" },
    { student: "Karan", test: "DSA Test", score: "91%" }
  ];

  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-6 shadow-sm`}
    >
      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Recent Results
      </h3>

      <table className="w-full text-sm">

        <thead>
          <tr className={`${theme.subText}`}>
            <th className="text-left pb-2">Student</th>
            <th className="text-left pb-2">Test</th>
            <th className="text-left pb-2">Score</th>
          </tr>
        </thead>

        <tbody>

          {loading
            ? [...Array(3)].map((_, i) => (
                <tr key={i}>
                  <td className="py-2">
                    <Skeleton className={`h-4 w-24 ${theme.skeleton}`} />
                  </td>
                  <td>
                    <Skeleton className={`h-4 w-24 ${theme.skeleton}`} />
                  </td>
                  <td>
                    <Skeleton className={`h-4 w-16 ${theme.skeleton}`} />
                  </td>
                </tr>
              ))
            : results.map((r, i) => (
                <tr key={i} className={`${theme.text}`}>
                  <td className="py-2">{r.student}</td>
                  <td>{r.test}</td>
                  <td>{r.score}</td>
                </tr>
              ))}

        </tbody>

      </table>
    </div>
  );
}

export default RecentResultsTable;