import React from 'react'
import DashboardLayout from '../../layouts/DashboardLayout'
import useTheme from '../../hooks/useTheme';
import {dashboardTheme} from '../../themes/theme';
import AddQuestionForm from '../../components/admin-question/AddQuestionForm';

function AddQuestion() {
  const { theme } = useTheme();
  const t = dashboardTheme[theme];

  return (
    <DashboardLayout activeMenu="add-question">

      <div className={`${t.bg} min-h-screen p-6 space-y-6`}>

        <h1 className={`text-2xl font-semibold ${t.text}`}>
          Add Question
        </h1>

        <AddQuestionForm theme={t} />

      </div>

    </DashboardLayout>
  );
}

export default AddQuestion
