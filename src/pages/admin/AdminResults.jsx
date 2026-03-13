import React from 'react'
import DashboardLayout from "../../layouts/DashboardLayout";
import useTheme from '../../hooks/useTheme';
import { useEffect, useState } from "react";
import {dashboardTheme} from "../../themes/theme";
import ResultsTable from "../../components/admin-results/ResultsTable";

function AdminResults() {
  const { theme } = useTheme();
  const t = dashboardTheme[theme];

  const [loading, setLoading] = useState(true);

  const results = [
    {
      id: 1,
      test: "Java Backend Mock",
      student: "Rahul Sharma",
      score: 85,
      rank: 3,
      time: "42 min"
    },
    {
      id: 2,
      test: "React Fundamentals",
      student: "Anita Verma",
      score: 78,
      rank: 7,
      time: "39 min"
    },
    {
      id: 3,
      test: "DSA Weekly Test",
      student: "Karan Singh",
      score: 91,
      rank: 1,
      time: "37 min"
    }
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <DashboardLayout activeMenu="results">

      <div className={`${t.bg} min-h-screen p-6 space-y-6`}>

        <h1 className={`text-2xl font-semibold ${t.text}`}>
          Test Results
        </h1>

        <ResultsTable
          results={results}
          loading={loading}
          theme={t}
        />

      </div>

    </DashboardLayout>
  );
}

export default AdminResults
