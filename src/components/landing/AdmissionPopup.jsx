import { useEffect, useState } from "react";

export default function AdmissionPopup({theme}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("seenPopup");

    if (!hasSeen) {
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem("seenPopup", "true");
      }, 1200); // smooth delay

      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-md w-full text-center relative shadow-2xl animate-scaleIn">
        
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-black dark:hover:text-white text-xl"
        >
          ✕
        </button>

        {/* Content */}
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          🎓 Admission Open
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Play Group to 12th | Limited Seats Available
        </p>

        {/* CTA */}
        <button className="px-5 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition">
          Enroll Now
        </button>

      </div>
    </div>
  );
}