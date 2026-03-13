import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import ParticipationChart from "../../components/admin-analytics/ParticipationChart";
import ScoreDistributionChart from "../../components/admin-analytics/ScoreDistributionChart";
import DifficultyAnalysisChart from "../../components/admin-analytics/DifficultyAnalysisChart";
import QuestionSuccessChart from "../../components/admin-analytics/QuestionSuccessChart";

import { dashboardTheme } from "../../themes/theme";
import useTheme from "../../hooks/useTheme";

function AdminAnalytics() {

  const { theme } = useTheme();
  const t = dashboardTheme[theme];

  const participationData = [
    { test: "T1", students: 120 },
    { test: "T2", students: 150 },
    { test: "T3", students: 180 },
    { test: "T4", students: 210 },
    { test: "T5", students: 250 }
  ];

  const scoreDistribution = [
    { range: "0-20", students: 10 },
    { range: "20-40", students: 25 },
    { range: "40-60", students: 50 },
    { range: "60-80", students: 80 },
    { range: "80-100", students: 40 }
  ];

  const difficultyData = [
    { level: "Easy", avgScore: 82 },
    { level: "Medium", avgScore: 65 },
    { level: "Hard", avgScore: 45 }
  ];

  const questionSuccess = [
    { question: "Q1", success: 92 },
    { question: "Q2", success: 75 },
    { question: "Q3", success: 48 },
    { question: "Q4", success: 60 }
  ];

  return (
    <DashboardLayout activeMenu="analytics">

      <div className={`${t.bg} min-h-screen p-6`}>

        <h1 className={`text-2xl font-bold mb-6 ${t.text}`}>
          Platform Analytics
        </h1>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">

          <ParticipationChart
            data={participationData}
            theme={t}
          />

          <ScoreDistributionChart
            data={scoreDistribution}
            theme={t}
          />

        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          <DifficultyAnalysisChart
            data={difficultyData}
            theme={t}
          />

          <QuestionSuccessChart
            data={questionSuccess}
            theme={t}
          />

        </div>

      </div>

    </DashboardLayout>
  );
}

export default AdminAnalytics;