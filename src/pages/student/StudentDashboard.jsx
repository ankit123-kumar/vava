import React, { useState, useEffect } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import WelcomeCard from "../../components/dashboard/WelcomeCard";
import StatCard from "../../components/dashboard/StatCard";
import UpcomingTestCard from "../../components/dashboard/UpcomingTestCard";
import ResultTable from "../../components/dashboard/ResultTable";
import PerformanceChart from "../../components/dashboard/PerformanceChart";
import useTheme from "../../hooks/UseTheme";

import { dashboardTheme } from "../../themes/theme";

function StudentDashboard() {

  const {theme} = useTheme();
  const t = dashboardTheme[theme];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const stats = [
    { title: "Overall Rank", value: "#24" },
    { title: "Tests Attempted", value: "18" },
    { title: "Average Score", value: "82%" }
  ];

  return (
    <DashboardLayout activeMenu="dashboard">

      <div className={`${t.bg} min-h-screen p-6 space-y-6`}>

        <WelcomeCard theme={t} />

        <div className="grid md:grid-cols-3 gap-6">

          {stats.map((s, i) => (
            <StatCard
              key={i}
              title={s.title}
              value={s.value}
              loading={loading}
              theme={t}
            />
          ))}

        </div>

        <UpcomingTestCard
          theme={t}
          loading={loading}
        />

        <div className="grid lg:grid-cols-2 gap-6">

          <PerformanceChart
            theme={t}
            loading={loading}
          />

          <ResultTable
            theme={t}
            loading={loading}
          />

        </div>

      </div>

    </DashboardLayout>
  );
}

export default StudentDashboard;