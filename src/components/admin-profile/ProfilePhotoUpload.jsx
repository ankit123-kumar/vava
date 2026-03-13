import React, { useState } from "react";

function ProfilePhotoUpload({ theme }) {

  const [photo, setPhoto] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className={`${theme.card} ${theme.border} border p-6 rounded-xl`}>

      <h3 className={`font-semibold mb-4 ${theme.text}`}>
        Profile Photo
      </h3>

      <div className="flex items-center gap-6">

        <img
          src={photo || "/default-avatar.png"}
          alt="profile"
          className="w-20 h-20 rounded-full object-cover border"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="text-sm"
        />

      </div>

    </div>
  );
}

export default ProfilePhotoUpload;