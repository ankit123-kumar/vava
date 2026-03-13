import React, { useState } from "react";

function AntiCheatSettings({ theme }) {

  const [tabSwitch, setTabSwitch] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Anti-Cheating Settings
      </h3>

      <div className="space-y-3">

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={tabSwitch}
            onChange={() => setTabSwitch(!tabSwitch)}
          />
          <span className={theme.text}>
            Prevent Tab Switching
          </span>
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={fullscreen}
            onChange={() => setFullscreen(!fullscreen)}
          />
          <span className={theme.text}>
            Force Fullscreen Mode
          </span>
        </label>

      </div>

    </div>
  );
}

export default AntiCheatSettings;