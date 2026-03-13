import React from "react";

function TestHistoryTable({ tests, theme }) {

  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-6 shadow-sm`}
    >

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Test History
      </h3>

      <table className="w-full text-sm">

        <thead>
          <tr className={`${theme.subText} text-left`}>
            <th>Test</th>
            <th>Subject</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>

          {tests.map((t, i) => (
            <tr key={i} className={`border-t ${theme.border}`}>

              <td className={`py-2 ${theme.text}`}>
                {t.test}
              </td>

              <td className={theme.text}>
                {t.subject}
              </td>

              <td className={theme.text}>
                {t.score}%
              </td>

              <td className={theme.text}>
                {t.date}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TestHistoryTable;