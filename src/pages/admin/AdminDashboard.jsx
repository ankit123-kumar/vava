import React, { useEffect, useState } from "react";
import ParticipationChart from "../../components/admin-dashboard/ParticipationChart";
import ScoreTrendChart from "../../components/admin-dashboard/ScoreTrendChart";
import DifficultSubjectChart from "../../components/admin-dashboard/DifficultSubjectChart";
import useTheme from "../../hooks/useTheme";
import { dashboardTheme } from "../../themes/theme";

import AdminWelcomeCard from "../../components/admin-dashboard/AdminWelcomCard";
import AdminStatCard from "../../components/admin-dashboard/AdminStatCard";
import RecentResultsTable from "../../components/admin-dashboard/RecentResultsTable";
import QuickActionsCard from "../../components/admin-dashboard/QuickActionsCard";
import DashboardLayout from '../../layouts/DashboardLayout'

function AdminDashboard() {

  const { theme } = useTheme();
  const t = dashboardTheme[theme];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const stats = [
    { title: "Total Students", value: "1240" },
    { title: "Total Tests", value: "85" },
    { title: "Tests This Week", value: "12" },
    { title: "Active Sessions", value: "34" }
  ];

  return (
    <DashboardLayout activeMenu="admin-dashboard">

      <div className={`${t.bg} min-h-screen p-6 space-y-6`}>

        <AdminWelcomeCard theme={t} />

        {/* Stats */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((s, i) => (
            <AdminStatCard
              key={i}
              title={s.title}
              value={s.value}
              loading={loading}
              theme={t}
            />
          ))}

        </div>

        {/* Charts */}

        <div className="grid lg:grid-cols-3 gap-6">

          <ParticipationChart
            theme={t}
            loading={loading}
          />

          <ScoreTrendChart
            theme={t}
            loading={loading}
          />

          <DifficultSubjectChart
            theme={t}
            loading={loading}
          />

        </div>

        {/* Bottom Section */}

        <div className="grid lg:grid-cols-2 gap-6">

          <RecentResultsTable
            theme={t}
            loading={loading}
          />

          <QuickActionsCard
            theme={t}
          />

        </div>

      </div>

    </DashboardLayout>
  );
}

export default AdminDashboard;