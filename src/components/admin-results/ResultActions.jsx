import React from "react";
import { FileDown, Eye } from "lucide-react";

function ResultActions() {

  const iconStyle =
    "w-4 h-4 hover:scale-110 transition cursor-pointer";

  return (
    <div className="flex items-center gap-3">

      {/* Export */}
      <button title="Export Results">
        <FileDown className={`${iconStyle} text-green-600`} />
      </button>

      {/* View Report */}
      <button title="View Detailed Report">
        <Eye className={`${iconStyle} text-indigo-600`} />
      </button>

    </div>
  );
}

export default ResultActions;