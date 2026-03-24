export default function AnnouncementBar({ theme }) {
  return (
    <div
      className={`w-full py-2 text-center font-semibold text-sm md:text-base 
      ${
        theme === "dark"
          ? "bg-gradient-to-r from-yellow-500 to-orange-600 text-black shadow-md"
          : "bg-gradient-to-r from-yellow-400 to-orange-500 text-black"
      }`}
    >
      <span className="animate-pulse">
        🎓 Admission Open for 2026 Batch | Limited Seats Available 🚀
      </span>
    </div>
  );
}