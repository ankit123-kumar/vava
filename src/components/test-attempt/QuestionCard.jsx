import React from "react";

function QuestionCard({ question, selected, onSelect, theme }) {

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>

      <h3 className={`font-medium mb-5 ${theme.text}`}>
        {question.text}
      </h3>

      <div className="space-y-3">

        {question.options.map((opt, index) => (

          <label
            key={index}
            className={`flex items-center gap-3 ${theme.text} p-3 rounded cursor-pointer border ${
              selected === index
                ? theme.highlight
                : theme.border
            }`}
          >

            <input
              type="radio"
              name={`question-${question.id}`}
              checked={selected === index}
              onChange={() => onSelect(index)}
              className={`border ${theme.border}`}
            />

            {opt}

          </label>

        ))}

      </div>

    </div>
  );
}

export default QuestionCard;