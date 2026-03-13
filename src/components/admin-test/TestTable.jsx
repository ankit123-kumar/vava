import React from "react";
import TestRow from "./TestRow";

function TestTable({ tests, theme }) {

  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-5 shadow-sm overflow-x-auto`}
    >

      <table className="w-full text-sm">

        <thead>
          <tr className={`${theme.subText} text-left`}>
            <th className="pb-3">Test Name</th>
            <th>Subject</th>
            <th>Duration</th>
            <th>Questions</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {tests.map((test) => (
            <TestRow
              key={test.id}
              test={test}
              theme={theme}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TestTable;