import React from "react";
import QuestionRow from "./QuestionRow";

function QuestionTable({ questions, theme, onPreview }) {
  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-5 shadow-sm overflow-x-auto`}
    >
      <table className="w-full text-sm">

        <thead>
          <tr className={`${theme.subText} text-left`}>
            <th className="pb-3">Question</th>
            <th>Subject</th>
            <th>Difficulty</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {questions.map((q) => (
            <QuestionRow
              key={q.id}
              question={q}
              theme={theme}
              onPreview={onPreview}
            />
          ))}

        </tbody>

      </table>
    </div>
  );
}

export default QuestionTable;