import React from "react";
import TestActions from "./TestActions";

function TestRow({ test, theme }) {

  return (
    <tr className={`${theme.text} border-t ${theme.border}`}>

      <td className="py-3">{test.name}</td>
      <td>{test.subject}</td>
      <td>{test.duration} min</td>
      <td>{test.questions}</td>

      <td>
        <span
          className={`px-2 py-1 text-xs rounded-lg ${
            test.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {test.status}
        </span>
      </td>

      <td>
        <TestActions />
      </td>

    </tr>
  );
}

export default TestRow;