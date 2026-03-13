import React from "react";

function QuestionFilters({ theme }) {
  return (
    <div
      className={`${theme.card} ${theme.border} border p-5 rounded-xl shadow-sm flex flex-wrap gap-4`}
    >
      <select className={`px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}>
        <option>All Subjects</option>
        <option>Java</option>
        <option>DSA</option>
        <option>React</option>
      </select>

      <select className={`px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}>
        <option>All Topics</option>
        <option>OOP</option>
        <option>Collections</option>
        <option>Sorting</option>
      </select>

      <select className={`px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}>
        <option>Difficulty</option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <select className={`px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}>
        <option>Question Type</option>
        <option>MCQ</option>
        <option>True/False</option>
        <option>Coding</option>
      </select>
    </div>
  );
}

export default QuestionFilters;