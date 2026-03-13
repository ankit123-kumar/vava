import React, { useState } from "react";

function ProfileForm({ theme }) {

  const [form, setForm] = useState({
    name: "Admin User",
    email: "admin@example.com"
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
        Profile Information
      </h3>

      <div className="grid md:grid-cols-2 gap-4">

        <div>
          <label className={`text-sm ${theme.subText}`}>
            Name
          </label>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
          />
        </div>

        <div>
          <label className={`text-sm ${theme.subText}`}>
            Email
          </label>

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full mt-1 px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
          />
        </div>

      </div>

      <button className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-lg">
        Save Profile
      </button>

    </div>
  );
}

export default ProfileForm;