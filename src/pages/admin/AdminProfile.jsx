import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import ProfilePhotoUpload from "../../components/admin-profile/ProfilePhotoUpload";
import ProfileForm from "../../components/admin-profile/ProfileForm";
import PasswordChangeForm from "../../components/admin-profile/PasswordChangeForm";

import { dashboardTheme } from "../../themes/theme";
import useTheme from "../../hooks/useTheme";

function AdminProfile() {

  const { theme } = useTheme();
  const t = dashboardTheme[theme];

  return (
    <DashboardLayout activeMenu="profile">

      <div className={`${t.bg} min-h-screen p-6 space-y-6`}>

        <h1 className={`text-2xl font-semibold ${t.text}`}>
          Admin Profile
        </h1>

        <ProfilePhotoUpload theme={t} />

        <ProfileForm theme={t} />

        <PasswordChangeForm theme={t} />

      </div>

    </DashboardLayout>
  );
}

export default AdminProfile;