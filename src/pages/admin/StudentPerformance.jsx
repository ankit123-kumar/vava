import React from 'react'
import DashboardLayout from "../../layouts/DashboardLayout";
import StudentProfileCard from "../../components/admin-students/StudentProfileCard";
import StudentScoreTrendChart from "../../components/admin-students/StudentScoreTrendChart";
import WeakSubjectsChart from "../../components/admin-students/WeakSubjectsChart";
import TestHistoryTable from "../../components/admin-students/TestHistoryTable";
import useTheme from '../../hooks/useTheme';
import { dashboardTheme } from "../../themes/theme";

function StudentPerformance() {
  const { theme } = useTheme();
  const t = dashboardTheme[theme];

  const student = {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    tests: 18,
    avgScore: 82,
    rank: 24
  };

  const scoreTrend = [
    { test: "Test1", score: 70 },
    { test: "Test2", score: 75 },
    { test: "Test3", score: 80 },
    { test: "Test4", score: 85 }
  ];

  const weakSubjects = [
    { subject: "DSA", score: 60 },
    { subject: "SQL", score: 65 },
    { subject: "React", score: 68 }
  ];

  const history = [
    { test: "Java Mock", subject: "Java", score: 85, date: "10 Mar" },
    { test: "DSA Weekly", subject: "DSA", score: 70, date: "05 Mar" }
  ];

  return (
    <DashboardLayout activeMenu="students">

      <div className={`${t.bg} min-h-screen p-6 space-y-6`}>

        <h1 className={`text-2xl font-semibold ${t.text}`}>
          Student Performance
        </h1>

        <StudentProfileCard student={student} theme={t} />

        <div className="grid lg:grid-cols-2 gap-6">

          <StudentScoreTrendChart
            data={scoreTrend}
            theme={t}
          />

          <WeakSubjectsChart
            data={weakSubjects}
            theme={t}
          />

        </div>

        <TestHistoryTable
          tests={history}
          theme={t}
        />

      </div>

    </DashboardLayout>
  );
}

export default StudentPerformance
