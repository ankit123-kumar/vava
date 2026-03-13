import React from "react";

function OptionsEditor({
  options,
  setOptions,
  correct,
  setCorrect,
  multi,
  theme
}) {

  const updateOption = (index, value) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const toggleCorrect = (index) => {
    if (multi) {
      if (correct.includes(index)) {
        setCorrect(correct.filter((i) => i !== index));
      } else {
        setCorrect([...correct, index]);
      }
    } else {
      setCorrect(index);
    }
  };

  return (
    <div className="space-y-3">

      {options.map((opt, i) => (
        <div key={i} className="flex items-center gap-3">

          <input
            type={multi ? "checkbox" : "radio"}
            checked={
              multi ? correct.includes(i) : correct === i
            }
            onChange={() => toggleCorrect(i)}
          />

          <input
            value={opt}
            onChange={(e) =>
              updateOption(i, e.target.value)
            }
            placeholder={`Option ${i + 1}`}
            className={`flex-1 px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
          />

        </div>
      ))}

    </div>
  );
}

export default OptionsEditor;