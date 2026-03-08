import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import ProfilePhoto from "../../components/profile/ProfilePhoto";
import ProfileCard from "../../components/profile/ProfileCard";
import ChangePasswordForm from "../../components/profile/ChangePasswordForm";
import TestStats from "../../components/profile/TestStats";

import { dashboardTheme } from "../../themes/theme";
import useTheme from "../../hooks/UseTheme";

function Profile() {
  const {theme} = useTheme();
  const t = dashboardTheme[theme];

  const user = {
    name: "Bhupendra Verma",
    email: "bhupendra@email.com",
    joinDate: "Jan 2026",
    photo: "https://i.pravatar.cc/150"
  };

  const stats = {
    tests: 18,
    avgScore: "82%",
    bestRank: "#12",
    accuracy: "86%"
  };

  return (
    <DashboardLayout activeMenu="profile">

      <div className={`${t.bg} min-h-screen p-6`}>

        <h1 className={`text-2xl font-bold mb-6 ${t.text}`}>
          Profile
        </h1>

        <div className="grid lg:grid-cols-3 gap-6">

          <ProfilePhoto user={user} theme={t} />

          <div className="lg:col-span-2 space-y-6">

            <ProfileCard user={user} theme={t} />

            <TestStats stats={stats} theme={t} />

            <ChangePasswordForm theme={t} />

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Profile;