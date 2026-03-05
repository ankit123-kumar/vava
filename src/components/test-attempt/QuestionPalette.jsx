import React from "react";

function QuestionPalette({ questions, answers, current, setCurrent , t}) {

  return (
    <div className="grid grid-cols-5 gap-2">

      {questions.map((q, index) => {

        const attempted = answers[index] !== undefined;

        return (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-10 rounded text-sm font-medium
              ${current === index ? "bg-indigo-600 text-whi te"
              : attempted ? "bg-green-500 text-white"
              : `${t.text} ${t.bg}`}`}
          >
            {index + 1}
          </button>
        );

      })}

    </div>
  );
}

export default QuestionPalette;