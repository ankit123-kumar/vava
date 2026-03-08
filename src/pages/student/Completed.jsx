import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import CompletedTestCard from "../../components/completed-tests/CompletedTestCard";
import CompletedTestSkeleton from "../../components/completed-tests/CompletedTestSkeleton";

import { dashboardTheme } from "../../themes/theme";
import useTheme from "../../hooks/useTheme";

function CompletedTests() {
  const {theme} = useTheme();
  const t = dashboardTheme[theme];

  const [loading, setLoading] = useState(true);
  const [tests, setTests] = useState([]);

  useEffect(() => {

    setTimeout(() => {

      setTests([
        {
          id: 1,
          title: "Java Backend Mock Test",
          date: "3 March 2026",
          score: "82%",
          rank: 24,
          percentile: 91
        },
        {
          id: 2,
          title: "React Advanced Test",
          date: "28 Feb 2026",
          score: "76%",
          rank: 42,
          percentile: 84
        },
        {
          id: 3,
          title: "DSA Arrays Test",
          date: "24 Feb 2026",
          score: "88%",
          rank: 16,
          percentile: 95
        }
      ]);

      setLoading(false);

    }, 1200);

  }, []);

  return (
    <DashboardLayout activeMenu="completed-tests">

      <div className={`${t.bg} min-h-screen p-6`}>

        <h1 className={`text-2xl font-bold mb-6 ${t.text}`}>
          Completed Tests
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {loading
            ? Array(6)
                .fill(0)
                .map((_, i) => (
                  <CompletedTestSkeleton key={i} theme={t} />
                ))

            : tests.map((test) => (
                <CompletedTestCard
                  key={test.id}
                  test={test}
                  theme={t}
                />
              ))}

        </div>

      </div>

    </DashboardLayout>
  );
}

export default CompletedTests;