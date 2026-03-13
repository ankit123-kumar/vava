import React from "react";

function QuestionPreviewTable({ questions, theme }) {

  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-5 overflow-x-auto`}
    >

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Preview Questions
      </h3>

      <table className="w-full text-sm">

        <thead>
          <tr className={`${theme.subText}`}>
            <th>Question</th>
            <th>Subject</th>
            <th>Difficulty</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>

          {questions.map((q, i) => (
            <tr key={i} className={`border-t ${theme.border}`}>
              <td className={`${theme.text} py-2`}>
                {q.Question}
              </td>

              <td className={theme.text}>
                {q.Subject}
              </td>

              <td className={theme.text}>
                {q.Difficulty}
              </td>

              <td className={theme.text}>
                {q.Type}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default QuestionPreviewTable;