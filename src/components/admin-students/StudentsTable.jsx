import React from "react";
import StudentRow from "./StudentRow";
import StudentsTableSkeleton from "./StudentsTableSkeleton";

function StudentsTable({ students, loading, theme }) {

  if (loading) {
    return <StudentsTableSkeleton theme={theme} />;
  }

  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-5 shadow-sm overflow-x-auto`}
    >

      <table className="w-full text-sm">

        <thead>
          <tr className={`${theme.subText} text-left`}>
            <th className="pb-3">Name</th>
            <th>Email</th>
            <th>Tests Attempted</th>
            <th>Avg Score</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              theme={theme}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default StudentsTable;