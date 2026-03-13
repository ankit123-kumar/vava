import React, { useState } from "react";

function PasswordChangeForm({ theme }) {

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Change Password
      </h3>

      <div className="grid md:grid-cols-3 gap-4">

        <input
          type="password"
          name="currentPassword"
          placeholder="Current Password"
          value={form.currentPassword}
          onChange={handleChange}
          className={`px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
        />

        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={form.newPassword}
          onChange={handleChange}
          className={`px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className={`px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
        />

      </div>

      <button className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-lg">
        Update Password
      </button>

    </div>
  );
}

export default PasswordChangeForm;