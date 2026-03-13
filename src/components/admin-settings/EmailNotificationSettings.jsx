import React, { useState } from "react";

function EmailNotificationSettings({ theme }) {

  const [enabled, setEnabled] = useState(true);

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Email Notifications
      </h3>

      <label className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        />

        <span className={theme.text}>
          Send email after test completion
        </span>

      </label>

    </div>
  );
}

export default EmailNotificationSettings;