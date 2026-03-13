import React from 'react'
import DashboardLayout from "../../layouts/DashboardLayout";
import useTheme from '../../hooks/useTheme';
import { dashboardTheme } from '../../themes/theme';
import ImportQuestion from '../../components/admin-question/ImportQuestion';

function ImportQuestions() {
  const { theme } = useTheme();
  const t = dashboardTheme[theme];

  return (
    <DashboardLayout activeMenu="import-questions">

      <div className={`${t.bg} min-h-screen p-6 space-y-6`}>

        {/* Page Header */}

        <div className="flex justify-between items-center">

          <div>
            <h1 className={`text-2xl font-semibold ${t.text}`}>
              Import Questions
            </h1>

            <p className={`text-sm mt-1 ${t.subText}`}>
              Upload CSV or Excel files to bulk import questions into the question bank.
            </p>
          </div>

          {/* Optional Download Sample */}

          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            Download Sample CSV
          </button>

        </div>

        {/* Import Component */}

        <ImportQuestion theme={t} />

      </div>

    </DashboardLayout>
  );
}

export default ImportQuestions
