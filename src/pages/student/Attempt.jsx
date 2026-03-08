import React, { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import TestTimer from "../../components/test-attempt/TestTimer";
import QuestionCard from "../../components/test-attempt/QuestionCard";
import QuestionPalette from "../../components/test-attempt/QuestionPalette";
import AttemptNavigation from "../../components/test-attempt/AttemptNavigation";

import { dashboardTheme } from "../../themes/theme";
import useTheme from "../../hooks/UseTheme";

function TestAttempt() {
  const {theme} = useTheme();
  const t = dashboardTheme[theme];

  const questions = [
    {
      id: 1,
      text: "What is Spring Boot used for?",
      options: [
        "Frontend development",
        "Backend development",
        "Database management",
        "UI design"
      ]
    },
    {
      id: 2,
      text: "Which hook manages state in React?",
      options: [
        "useEffect",
        "useState",
        "useRef",
        "useMemo"
      ]
    }
  ];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const selectAnswer = (index) => {
    setAnswers({
      ...answers,
      [current]: index
    });
  };

  const submitTest = () => {
    console.log("Answers:", answers);
  };

  const timeUp = () => {
    submitTest();
  };

  return (
    <DashboardLayout>

      <div className={`${t.bg} min-h-screen p-6`}>

        {/* Header */}

        <div className="flex justify-between items-center mb-6">

          <h1 className={`text-xl font-semibold ${t.text}`}>
            Java Backend Test
          </h1>

          <TestTimer
            duration={60}
            onTimeUp={timeUp}
            theme={t}
          />

        </div>

        <div className="grid lg:grid-cols-4 gap-6">

          {/* Question Area */}

          <div className="lg:col-span-3">

            <QuestionCard
              question={questions[current]}
              selected={answers[current]}
              onSelect={selectAnswer}
              theme={t}
            />

            <AttemptNavigation
              current={current}
              total={questions.length}
              setCurrent={setCurrent}
              onSubmit={submitTest}
              theme={t}
            />

          </div>

          {/* Question Palette */}

          <div className={`${t.card} ${t.border} border p-4 rounded-xl`}>

            <h3 className={`font-medium mb-3 ${t.text}`}>
              Question Palette
            </h3>

            <QuestionPalette
              questions={questions}
              answers={answers}
              current={current}
              setCurrent={setCurrent}
              t={t}
            />

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default TestAttempt;