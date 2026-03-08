import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import ResultSummaryCard from "../../components/test-result/ResultSummaryCard";
import QuestionReview from "../../components/test-result/QuestionReview";
import ResultSkeleton from "../../components/test-result/ResultSkeleton";

import { dashboardTheme } from "../../themes/theme";
import useTheme from "../../hooks/UseTheme";

function Result() {
  const {theme} = useTheme();
  const t = dashboardTheme[theme];

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {

    setTimeout(() => {

      setResult({
        score: "82%",
        rank: 24,
        accuracy: "85%",
        questions: [
          {
            id: 1,
            text: "What is Spring Boot used for?",
            options: [
              "Frontend development",
              "Backend development",
              "Database management",
              "UI design"
            ],
            selected: 0,
            correct: 1,
            explanation:
              "Spring Boot is a backend framework used to build REST APIs and microservices."
          },
          {
            id: 2,
            text: "Which hook manages state in React?",
            options: [
              "useEffect",
              "useState",
              "useRef",
              "useMemo"
            ],
            selected: 1,
            correct: 1,
            explanation:
              "useState is used to manage state inside functional components."
          }
        ]
      });

      setLoading(false);

    }, 1200);

  }, []);

  return (
    <DashboardLayout activeMenu="results">

      <div className={`${t.bg} min-h-screen p-6`}>

        <h1 className={`text-2xl font-bold mb-6 ${t.text}`}>
          Test Result
        </h1>

        {/* Summary */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          {loading ? (
            <>
              <ResultSkeleton theme={t} />
              <ResultSkeleton theme={t} />
              <ResultSkeleton theme={t} />
            </>
          ) : (
            <>
              <ResultSummaryCard
                title="Score"
                value={result.score}
                theme={t}
              />

              <ResultSummaryCard
                title="Rank"
                value={`#${result.rank}`}
                theme={t}
              />

              <ResultSummaryCard
                title="Accuracy"
                value={result.accuracy}
                theme={t}
              />
            </>
          )}

        </div>

        {/* Question Review */}

        <h2 className={`text-xl font-semibold mb-4 ${t.text}`}>
          Question Review
        </h2>

        <div className="space-y-6">

          {loading
            ? Array(3)
                .fill(0)
                .map((_, i) => (
                  <ResultSkeleton key={i} theme={t} />
                ))
            : result.questions.map((q) => (
                <QuestionReview
                  key={q.id}
                  question={q}
                  theme={t}
                />
              ))}

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Result;