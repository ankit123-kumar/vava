import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import useTheme from "../../hooks/useTheme";
import { dashboardTheme } from "../../themes/theme";

import TestCalendar from "../../components/admin-test/TestCalendar";
import TestLegend from "../../components/admin-test/TestLegend";

function TestSchedule() {

  const { theme } = useTheme();
  const t = dashboardTheme[theme];

  return (
    <DashboardLayout activeMenu="test-schedule">

      <div className={`${t.bg} min-h-screen p-6 space-y-6`}>

        <h1 className={`text-2xl font-semibold ${t.text}`}>
          Test Schedule
        </h1>

        <TestLegend theme={t} />

        <TestCalendar theme={t} />

      </div>

    </DashboardLayout>
  );
}

export default TestSchedule;