import React, { useState } from "react";

import QuestionTypeSelector from "./QuestionTypeSelector";
import OptionsEditor from "./OptionsEditor";
import DifficultySelect from "./DifficultySelect";
import ExplanationEditor from "./ExplanationEditor";

function AddQuestionForm({ theme }) {

  const [type, setType] = useState("mcq");

  const [question, setQuestion] = useState("");
  const [subject, setSubject] = useState("");

  const [difficulty, setDifficulty] = useState("Easy");

  const [options, setOptions] = useState([
    "", "", "", ""
  ]);

  const [correct, setCorrect] = useState(null);

  const [numericAnswer, setNumericAnswer] =
    useState("");

  const [explanation, setExplanation] =
    useState("");

  const handleSubmit = () => {

    const payload = {
      question,
      subject,
      difficulty,
      type,
      options,
      correct,
      numericAnswer,
      explanation
    };

    console.log(payload);
  };

  return (
    <div className="space-y-6">

      {/* Question text */}

      <div>
        <label className={`text-sm ${theme.subText}`}>
          Question Text
        </label>

        <textarea
          rows="3"
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          className={`w-full mt-1 px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
        />
      </div>

      {/* Type */}

      <QuestionTypeSelector
        value={type}
        onChange={setType}
        theme={theme}
      />

      {/* Options */}

      {(type === "mcq" || type === "multi") && (
        <OptionsEditor
          options={options}
          setOptions={setOptions}
          correct={correct || []}
          setCorrect={setCorrect}
          multi={type === "multi"}
          theme={theme}
        />
      )}

      {/* Numeric */}

      {type === "numeric" && (
        <input
          placeholder="Correct Numeric Answer"
          value={numericAnswer}
          onChange={(e) =>
            setNumericAnswer(e.target.value)
          }
          className={`w-full px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
        />
      )}

      {/* Subject */}

      <div>
        <label className={`text-sm ${theme.subText}`}>
          Subject
        </label>

        <input
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
          className={`w-full mt-1 px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
        />
      </div>

      {/* Difficulty */}

      <DifficultySelect
        value={difficulty}
        onChange={setDifficulty}
        theme={theme}
      />

      {/* Explanation */}

      <ExplanationEditor
        value={explanation}
        onChange={setExplanation}
        theme={theme}
      />

      <button
        onClick={handleSubmit}
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
      >
        Add Question
      </button>

    </div>
  );
}

export default AddQuestionForm;