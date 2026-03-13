import React from "react";
import { Eye, UserX, KeyRound } from "lucide-react";

function StudentActions() {

  const iconStyle =
    "w-4 h-4 hover:scale-110 transition cursor-pointer";

  return (
    <div className="flex items-center gap-3">

      <button title="View Profile">
        <Eye className={`${iconStyle} text-indigo-600`} />
      </button>

      <button title="Suspend Account">
        <UserX className={`${iconStyle} text-red-600`} />
      </button>

      <button title="Reset Password">
        <KeyRound className={`${iconStyle} text-yellow-600`} />
      </button>

    </div>
  );
}

export default StudentActions;