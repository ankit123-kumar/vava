import React from 'react'
import DashboardLayout from "../../layouts/DashboardLayout";
import useTheme from '../../hooks/useTheme';
import { dashboardTheme } from '../../themes/theme';
import CreateTestForm from "../../components/admin-test/CreateTestForm";

function CreateTest() {
  const { theme } = useTheme();
  const t = dashboardTheme[theme];

  return (
    <DashboardLayout activeMenu="create-test">

      <div className={`${t.bg} min-h-screen p-6 space-y-6`}>

        <h1 className={`text-2xl font-semibold ${t.text}`}>
          Create New Test
        </h1>

        <CreateTestForm theme={t} />

      </div>

    </DashboardLayout>
  );
}

export default CreateTest
