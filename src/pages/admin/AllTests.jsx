import React from 'react'
import DashboardLayout from "../../layouts/DashboardLayout";
import useTheme from "../../hooks/useTheme";
import { dashboardTheme } from "../../themes/theme";
import TestFilters from "../../components/admin-test/TestFilters";
import TestTable from "../../components/admin-test/TestTable";

function AllTests() {
  const { theme } = useTheme();
  const t = dashboardTheme[theme];

  const tests = [
    {
      id: 1,
      name: "Java Backend Mock",
      subject: "Java",
      duration: 60,
      questions: 30,
      status: "Active"
    },
    {
      id: 2,
      name: "React Fundamentals",
      subject: "React",
      duration: 45,
      questions: 25,
      status: "Draft"
    },
    {
      id: 3,
      name: "DSA Weekly Test",
      subject: "DSA",
      duration: 90,
      questions: 40,
      status: "Active"
    }
  ];

  return (
    <DashboardLayout activeMenu="tests">

      <div className={`${t.bg} min-h-screen p-6 space-y-6`}>

        <h1 className={`text-2xl font-semibold ${t.text}`}>
          All Tests
        </h1>

        <TestFilters theme={t} />

        <TestTable
          tests={tests}
          theme={t}
        />

      </div>

    </DashboardLayout>
  );
}

export default AllTests
