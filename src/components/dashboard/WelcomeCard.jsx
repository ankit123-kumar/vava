import React from "react";

function WelcomeCard({ theme }) {

  return (
    <div
      className={`bg-linear-to-r ${theme.highlight} text-white p-7 rounded-2xl shadow-lg`}
    >
      <h2 className="text-2xl font-semibold">
        Welcome Back 👋
      </h2>

      <p className="opacity-90 mt-2">
        Track your performance, attempt tests, and improve your rank.
      </p>
    </div>
  );
}

export default WelcomeCard;