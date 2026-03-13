import React from 'react'
import DashboardLayout from '../../layouts/DashboardLayout'
import useTheme from '../../hooks/useTheme'
import {dashboardTheme} from '../../themes/theme'
import QuestionFilters from '../../components/admin-question/QuestionFilters'
import QuestionTable from '../../components/admin-question/QuestionTable'
import { useState } from 'react'
import QuestionPreviewModal from '../../components/admin-question/QuestionPreviewModal'

function AllQuestions() {
  const { theme } = useTheme();
  const t = dashboardTheme[theme];

  const [preview, setPreview] = useState(null);

  const questions = [
    {
      id: 1,
      text: "What is JVM?",
      subject: "Java",
      difficulty: "Easy",
      type: "MCQ"
    },
    {
      id: 2,
      text: "Explain React Virtual DOM.",
      subject: "React",
      difficulty: "Medium",
      type: "MCQ"
    },
    {
      id: 3,
      text: "Implement binary search.",
      subject: "DSA",
      difficulty: "Hard",
      type: "Coding"
    }
  ];

  return (
    <DashboardLayout activeMenu="question-bank">

      <div className={`${t.bg} min-h-screen p-6 space-y-6`}>

        <h1 className={`text-2xl font-semibold ${t.text}`}>
          Question Bank
        </h1>

        <QuestionFilters theme={t} />

        <QuestionTable
          questions={questions}
          theme={t}
          onPreview={(q) => setPreview(q)}
        />

        <QuestionPreviewModal
          open={!!preview}
          question={preview}
          onClose={() => setPreview(null)}
          theme={t}
        />

      </div>

    </DashboardLayout>
  );
}

export default AllQuestions
