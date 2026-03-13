import React from "react";
import QuestionActions from "./QuestionActions";

function QuestionRow({ question, theme, onPreview }) {
  return (
    <tr className={`${theme.text} border-t ${theme.border}`}>

      <td className="py-3 max-w-xs truncate">
        {question.text}
      </td>

      <td>{question.subject}</td>

      <td>
        <span className={`px-2 py-1 text-xs rounded-lg
        ${question.difficulty === "Easy" ? "bg-green-100 text-green-700"
        : question.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700"}`}>
          {question.difficulty}
        </span>
      </td>

      <td>{question.type}</td>

      <td>
        <QuestionActions onPreview={() => onPreview(question)} />
      </td>

    </tr>
  );
}

export default QuestionRow;