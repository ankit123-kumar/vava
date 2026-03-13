import React from "react";

function StudentProfileCard({ student, theme }) {

  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-6 shadow-sm`}
    >

      <h2 className={`text-lg font-semibold ${theme.text}`}>
        {student.name}
      </h2>

      <p className={`text-sm ${theme.subText}`}>
        {student.email}
      </p>

      <div className="grid grid-cols-3 gap-6 mt-4 text-center">

        <div>
          <p className={`text-xl font-bold ${theme.text}`}>
            {student.tests}
          </p>
          <p className={`text-xs ${theme.subText}`}>
            Tests Attempted
          </p>
        </div>

        <div>
          <p className={`text-xl font-bold ${theme.text}`}>
            {student.avgScore}%
          </p>
          <p className={`text-xs ${theme.subText}`}>
            Avg Score
          </p>
        </div>

        <div>
          <p className={`text-xl font-bold ${theme.text}`}>
            #{student.rank}
          </p>
          <p className={`text-xs ${theme.subText}`}>
            Rank
          </p>
        </div>

      </div>

    </div>
  );
}

export default StudentProfileCard;