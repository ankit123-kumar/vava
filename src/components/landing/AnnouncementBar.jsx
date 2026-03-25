import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar({ theme }) {
  const [visible, setVisible] = useState(true);

  
  if (!visible) return null;

  return (
    <div
      className={`w-full overflow-hidden py-2 border-y relative
      ${
        theme === "dark"
          ? "bg-slate-900 text-yellow-400 border-slate-700"
          : "bg-indigo-600 text-white border-indigo-500"
      }`}
    >
      {/* 🔁 Marquee */}
      <div className="flex animate-marquee whitespace-nowrap font-medium text-sm md:text-base">
        <span className="mx-6">
          🎓 Admission Open for 2026 Batch | Limited Seats Available 🚀
        </span>
        <span className="mx-6">
          🎓 Admission Open for 2026 Batch | Limited Seats Available 🚀
        </span>
        <span className="mx-6">
          🎓 Admission Open for 2026 Batch | Limited Seats Available 🚀
        </span>
      </div>

      {/* ❌ Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
      >
        <X size={18} />
      </button>
    </div>
    
  );
}