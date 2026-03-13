import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import TestRulesSettings from "../../components/admin-settings/TestRulesSettings";
import NegativeMarkingSettings from "../../components/admin-settings/NegativeMarkingSettings";
import TimeLimitSettings from "../../components/admin-settings/TimeLimitSettings";
import AntiCheatSettings from "../../components/admin-settings/AntiCheatSettings";
import EmailNotificationSettings from "../../components/admin-settings/EmailNotificationSettings";

import { dashboardTheme } from "../../themes/theme";
import useTheme from "../../hooks/useTheme";

function Settings() {

  const { theme } = useTheme();
  const t = dashboardTheme[theme];

  return (
    <DashboardLayout activeMenu="settings">

      <div className={`${t.bg} min-h-screen p-6 space-y-6`}>

        <h1 className={`text-2xl font-semibold ${t.text}`}>
          Portal Settings
        </h1>

        <TestRulesSettings theme={t} />

        <NegativeMarkingSettings theme={t} />

        <TimeLimitSettings theme={t} />

        <AntiCheatSettings theme={t} />

        <EmailNotificationSettings theme={t} />

        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg">
          Save Settings
        </button>

      </div>

    </DashboardLayout>
  );
}

export default Settings;