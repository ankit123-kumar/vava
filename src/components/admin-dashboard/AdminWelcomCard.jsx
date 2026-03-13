import React from "react";

function AdminWelcomeCard({ theme }) {
  return (
    <div
      className={`bg-linear-to-r ${theme.highlight} text-white p-7 rounded-2xl shadow-lg`}
    >
      <h2 className="text-2xl font-semibold">
        Admin Dashboard ⚡
      </h2>

      <p className="opacity-90 mt-2">
        Monitor platform activity, manage tests, and track performance.
      </p>
    </div>
  );
}

export default AdminWelcomeCard;