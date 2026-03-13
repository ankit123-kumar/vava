import React from "react";

function QuestionSelector({ questions, selected, setSelected, theme }) {

  const toggleQuestion = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(q => q !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-5`}
    >
      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Select Questions from Bank
      </h3>

      <div className="space-y-2 max-h-64 overflow-y-auto">

        {questions.map(q => (
          <div
            key={q.id}
            className={`flex items-center gap-3 p-2 rounded ${theme.border} border`}
          >
            <input
              type="checkbox"
              checked={selected.includes(q.id)}
              onChange={() => toggleQuestion(q.id)}
            />

            <p className={`${theme.text}`}>
              {q.text}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default QuestionSelector;