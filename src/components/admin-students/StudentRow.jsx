import React from "react";
import StudentActions from "./StudentActions";

function StudentRow({ student, theme }) {

  return (
    <tr className={`border-t ${theme.border}`}>

      <td className={`py-3 ${theme.text}`}>
        {student.name}
      </td>

      <td className={theme.text}>
        {student.email}
      </td>

      <td className={theme.text}>
        {student.tests}
      </td>

      <td className={theme.text}>
        {student.score}%
      </td>

      <td>
        <span
          className={`px-2 py-1 text-xs rounded-lg
          ${student.status === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
          }`}
        >
          {student.status}
        </span>
      </td>

      <td>
        <StudentActions />
      </td>

    </tr>
  );
}

export default StudentRow;