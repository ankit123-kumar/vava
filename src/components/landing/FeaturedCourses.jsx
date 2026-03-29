import { useEffect, useRef, useState } from "react";
import { courses } from "../../assets/courses";

export default function FeaturedCourses({ theme }) {
  const sliderRef = useRef(null);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;

    const interval = setInterval(() => {
      scrollRight();
    }, 4000);

    return () => clearInterval(interval);
  }, [auto]);

  const scrollRight = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: 360, behavior: "smooth" });
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
      slider.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  return (
    <section
      className={`py-24 overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-slate-950 to-slate-900"
          : "bg-gradient-to-b from-white to-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
  Free Youtube Classes
</h2>

          {/* Clean Buttons */}
          <div className="flex gap-2">
            {[scrollLeft, scrollRight].map((fn, i) => (
              <button
                key={i}
                onClick={fn}
                onMouseEnter={() => setAuto(false)}
                onMouseLeave={() => setAuto(true)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                  theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
              >
                {i === 0 ? "←" : "→"}
              </button>
            ))}
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className={`snap-start w-[340px] shrink-0 rounded-2xl overflow-hidden transition-all duration-500 group ${
                theme === "dark"
                  ? "bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10"
                  : "bg-white border border-gray-200 hover:shadow-xl"
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />

                {/* Badge */}
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  YouTube
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className={`font-semibold text-lg leading-tight ${
                    theme === "dark"
                      ? "text-white group-hover:text-indigo-400"
                      : "text-gray-800 group-hover:text-indigo-600"
                  }`}
                >
                  {course.title}
                </h3>

                <p
                  className={`text-sm mt-2 line-clamp-2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {course.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span
                    className={`text-sm font-medium ${
                      theme === "dark"
                        ? "text-indigo-400"
                        : "text-indigo-600"
                    }`}
                  >
                    {course.level}
                  </span>
                </div>

                <button
                  onClick={() => window.open(course.playlistUrl, "_blank")}
                  className="w-full mt-5 py-2.5 rounded-lg text-white font-medium transition bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 active:scale-95"
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