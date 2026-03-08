import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import InstructionCard from "../../components/test-instructions/InstructionCard";

import { dashboardTheme } from "../../themes/theme";
import useTheme from "../../hooks/UseTheme";

function TestInstructions() {
  const {theme} = useTheme();
  const t = dashboardTheme[theme];

  const test = {
    title: "Java Backend Mock Test",
    duration: 60,
    negativeMarking: "-0.25 per incorrect answer",
  };

  const startTest = () => {
    // navigate to test attempt page
    console.log("Start Test Clicked");
  };

  return (
    <DashboardLayout activeMenu="tests">

      <div className={`${t.bg} min-h-screen p-6`}>

        <div className="max-w-3xl mx-auto">

          <h1 className={`text-2xl font-bold mb-6 ${t.text}`}>
            Test Instructions
          </h1>

          <p className={`mb-6 ${t.subText}`}>
            Please read all the instructions carefully before starting the test.
          </p>

          {/* Duration */}

          <InstructionCard title="Test Duration" theme={t}>
            <p>Total time: <strong>{test.duration} minutes</strong></p>
            <p>The timer will start once you click the Start Test button.</p>
            <p>The test will automatically submit when the timer ends.</p>
          </InstructionCard>

          {/* Negative Marking */}

          <div className="mt-6">
            <InstructionCard title="Negative Marking" theme={t}>
              <p>{test.negativeMarking}</p>
              <p>No marks will be deducted for unanswered questions.</p>
            </InstructionCard>
          </div>

          {/* Rules */}

          <div className="mt-6">
            <InstructionCard title="Rules" theme={t}>
              <ul className="list-disc ml-5 space-y-1">
                <li>Do not refresh the page during the test.</li>
                <li>Each question has only one correct answer.</li>
                <li>You can navigate between questions anytime.</li>
                <li>Make sure you submit the test before leaving.</li>
                <li>Once submitted, answers cannot be changed.</li>
              </ul>
            </InstructionCard>
          </div>

          {/* Confirm Button */}

          <div className="flex justify-end mt-8">

            <button
              onClick={startTest}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Confirm & Start Test
            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default TestInstructions;