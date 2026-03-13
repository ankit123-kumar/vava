import React from 'react'
import DashboardLayout from "../../layouts/DashboardLayout";
import useTheme from '../../hooks/useTheme';
import { dashboardTheme } from '../../themes/theme';
import LeaderboardFilters from '../../components/admin-leaderboard/LeaderboardFilters';
import LeaderboardTable from '../../components/admin-leaderboard/LeaderboardTable';
import { useEffect, useState } from 'react';

function AdminLeaderboard() {
  const { theme } = useTheme();
  const t = dashboardTheme[theme];

  const [loading, setLoading] = useState(true);

  const players = [
    { rank: 1, name: "Rahul Sharma", subject: "Java", score: 96, tests: 22 },
    { rank: 2, name: "Anita Verma", subject: "React", score: 92, tests: 20 },
    { rank: 3, name: "Karan Singh", subject: "DSA", score: 90, tests: 18 },
    { rank: 4, name: "Priya Gupta", subject: "Java", score: 88, tests: 17 }
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <DashboardLayout activeMenu="leaderboard">

      <div className={`${t.bg} min-h-screen p-6 space-y-6`}>

        <h1 className={`text-2xl font-semibold ${t.text}`}>
          Leaderboard
        </h1>

        <LeaderboardFilters theme={t} />

        <LeaderboardTable
          players={players}
          loading={loading}
          theme={t}
        />

      </div>

    </DashboardLayout>
  );
}

export default AdminLeaderboard
