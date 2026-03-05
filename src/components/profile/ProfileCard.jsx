import React from "react";

function ProfileCard({ user, theme }) {
  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Personal Information
      </h3>

      <div className="space-y-2 text-sm">

        <p className={theme.subText}>
          <strong>Name:</strong> {user.name}
        </p>

        <p className={theme.subText}>
          <strong>Email:</strong> {user.email}
        </p>

        <p className={theme.subText}>
          <strong>Joined:</strong> {user.joinDate}
        </p>

        <p className={theme.subText}>
          <strong>Role:</strong> Student
        </p>

      </div>

    </div>
  );
}

export default ProfileCard;