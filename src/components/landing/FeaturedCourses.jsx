import { useEffect, useRef, useState } from "react";
import { courses } from "../../assets/courses";

export default function FeaturedCourses({ theme }) {
  const sliderRef = useRef(null);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;

    const interval = setInterval(() => {
      scrollRight();
    }, 3500);

    return () => clearInterval(interval);
  }, [auto]);

  const scrollRight = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (slider.scrollLeft <= 0) {
      slider.scrollTo({
        left: slider.scrollWidth,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  return (
    <section
      className={`py-20 overflow-hidden ${theme === "dark"
          ? "bg-slate-950"
          : "bg-linear-to-b from-white to-gray-100"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2
            className={`text-3xl font-bold ${theme === "dark" ? "text-slate-100" : "text-gray-800"
              }`}
          >
            Featured Courses
          </h2>

          {/* Buttons */}
          <div className="flex gap-3">
            {/* Left */}
            <button
              onClick={scrollLeft}
              onMouseEnter={() => setAuto(false)}
              onMouseLeave={() => setAuto(true)}
              className={`group relative w-11 h-11 rounded-full backdrop-blur-md border shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden ${theme === "dark"
                  ? "bg-slate-800/70 border-slate-700"
                  : "bg-white/80 border-gray-200"
                }`}
            >
              <span
                className={`absolute inset-0 bg-linear-to-r opacity-0 group-hover:opacity-100 transition ${theme === "dark"
                    ? "from-indigo-500 via-violet-600 to-purple-600"
                    : "from-indigo-500 to-purple-600"
                  }`}
              ></span>

              <svg
                className={`relative z-10 w-5 h-5 transition ${theme === "dark"
                    ? "text-slate-300 group-hover:text-white"
                    : "text-gray-700 group-hover:text-white"
                  }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right */}
            <button
              onClick={scrollRight}
              onMouseEnter={() => setAuto(false)}
              onMouseLeave={() => setAuto(true)}
              className={`group relative w-11 h-11 rounded-full backdrop-blur-md border shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden ${theme === "dark"
                  ? "bg-slate-800/70 border-slate-700"
                  : "bg-white/80 border-gray-200"
                }`}
            >
              <span
                className={`absolute inset-0 bg-linear-to-r opacity-0 group-hover:opacity-100 transition ${theme === "dark"
                    ? "from-indigo-500 via-violet-600 to-purple-600"
                    : "from-indigo-500 to-purple-600"
                  }`}
              ></span>

              <svg
                className={`relative z-10 w-5 h-5 transition ${theme === "dark"
                    ? "text-slate-300 group-hover:text-white"
                    : "text-gray-700 group-hover:text-white"
                  }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className={`w-[320px] shrink-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group ${theme === "dark"
                  ? "bg-slate-900 border border-slate-800"
                  : "bg-white"
                }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-44 w-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Badge */}
                <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  Free
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className={`font-bold text-lg transition ${theme === "dark"
                      ? "text-slate-100 group-hover:text-indigo-400"
                      : "text-gray-800 group-hover:text-indigo-600"
                    }`}
                >
                  {course.title}
                </h3>

                <p
                  className={`text-sm mt-2 line-clamp-2 ${theme === "dark" ? "text-slate-400" : "text-gray-500"
                    }`}
                >
                  {course.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span
                    className={`font-semibold ${theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                      }`}
                  >
                    {course.level}
                  </span>
                </div>

                <button
                  onClick={() => window.open(course.playlistUrl, "_blank")}
                  className={`w-full mt-5 py-2 rounded-md text-white font-medium shadow transition bg-linear-to-r ${theme === "dark"
                      ? "from-indigo-500 via-violet-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                      : "from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                    }`}
                >
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}