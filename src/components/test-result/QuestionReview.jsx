import React from "react";

function QuestionReview({ question, theme }) {

  const isCorrect = question.selected === question.correct;

  return (
    <div className={`${theme.card} ${theme.border} border rounded-xl p-6`}>

      <h3 className={`font-medium mb-4 ${theme.text}`}>
        {question.text}
      </h3>

      <div className="space-y-2">

        {question.options.map((opt, index) => {

          let style = `${theme.border} ${theme.text} border`;

          if (index === question.correct)
            style = `${theme.border} ${theme.text} border-green-500 bg-green-500`;

          if (index === question.selected && !isCorrect)
            style = `${theme.border} ${theme.text} border-red-500 bg-red-500`;

          return (
            <div
              key={index}
              className={`p-3 rounded ${style}`}
            >
              {opt}
            </div>
          );
        })}
      </div>

      {/* Explanation */}

      <div className="mt-4">

        <p className={`text-sm font-medium ${theme.text}`}>
          Explanation
        </p>

        <p className={`text-sm mt-1 ${theme.subText}`}>
          {question.explanation}
        </p>

      </div>

    </div>
  );
}

export default QuestionReview;