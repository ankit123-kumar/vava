import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import PerformanceTrendChart from "../../components/analytics/PerformanceTrendChart";
import SubjectAccuracyChart from "../../components/analytics/SubjectAccuracyChart";
import RankTrendChart from "../../components/analytics/RankTrendChart";
import TopicStrength from "../../components/analytics/TopicStrength";

import { dashboardTheme } from "../../themes/theme";
import useTheme from "../../hooks/useTheme";

function Analytics() {
  const {theme} = useTheme();
  const t = dashboardTheme[theme];

  const performanceData = [
    { test: "T1", score: 60 },
    { test: "T2", score: 72 },
    { test: "T3", score: 68 },
    { test: "T4", score: 80 },
    { test: "T5", score: 90 }
  ];

  const subjectData = [
    { subject: "Java", accuracy: 85 },
    { subject: "React", accuracy: 78 },
    { subject: "DSA", accuracy: 70 }
  ];

  const rankData = [
    { test: "T1", rank: 120 },
    { test: "T2", rank: 98 },
    { test: "T3", rank: 76 },
    { test: "T4", rank: 52 },
    { test: "T5", rank: 30 }
  ];

  const weakTopics = [
    "Dynamic Programming",
    "Spring Security",
    "Graph Algorithms"
  ];

  const strongTopics = [
    "Arrays",
    "React Hooks",
    "REST APIs"
  ];

  return (
    <DashboardLayout activeMenu="analytics">

      <div className={`${t.bg} min-h-screen p-6`}>

        <h1 className={`text-2xl font-bold mb-6 ${t.text}`}>
          Performance Analytics
        </h1>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">

          <PerformanceTrendChart
            data={performanceData}
            theme={t}
          />

          <RankTrendChart
            data={rankData}
            theme={t}
          />

        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          <SubjectAccuracyChart
            data={subjectData}
            theme={t}
          />

          <TopicStrength
            weak={weakTopics}
            strong={strongTopics}
            theme={t}
          />

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Analytics;