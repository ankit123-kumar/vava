import React, { useState } from "react";

function ChangePasswordForm({ theme }) {

  const [form, setForm] = useState({
    current: "",
    newPass: "",
    confirm: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password change request", form);
  };

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Change Password
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          type="password"
          name="current"
          placeholder="Current Password"
          onChange={handleChange}
          className={`${theme.border} border px-3 py-2 w-full rounded`}
        />

        <input
          type="password"
          name="newPass"
          placeholder="New Password"
          onChange={handleChange}
          className={`${theme.border} border px-3 py-2 w-full rounded`}
        />

        <input
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          onChange={handleChange}
          className={`${theme.border} border px-3 py-2 w-full rounded`}
        />

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
        >
          Update Password
        </button>

      </form>

    </div>
  );
}

export default ChangePasswordForm;