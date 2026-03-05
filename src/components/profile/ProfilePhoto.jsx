import React from "react";

function ProfilePhoto({ user, theme }) {
  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl text-center`}>
      <img
        src={user.photo}
        alt="profile"
        className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
      />

      <h3 className={`font-semibold ${theme.text}`}>
        {user.name}
      </h3>

      <p className={`text-sm ${theme.subText}`}>
        {user.email}
      </p>

      <button className="mt-4 text-sm bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700">
        Change Photo
      </button>
    </div>
  );
}

export default ProfilePhoto;