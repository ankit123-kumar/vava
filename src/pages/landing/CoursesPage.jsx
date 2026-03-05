import { useState } from "react";
import useTheme from "../../hooks/useTheme";

export default function CoursesPage() {
  const [theme] = useTheme();
  const [courses] = useState([
    {
      id: 1,
      title: "Current Affairs 2026",
      description: "Daily current affairs for competitive exams by Vimal Sir.",
      image:
        "/current_affair.jpg",
      price: 0,
      isFree: true,
      level: "Beginner",
      playlistUrl:
        "https://www.youtube.com/playlist?list=PL_LOtQ_WWCphGOBPDixyoCm1nE_Hr3Jtv",
    },
    {
      id: 2,
      title: "Foundation Course",
      description: "A comprehensive foundation course designed to strengthen your basic mathematics concepts from scratch.",
      image:
        "/foundation_course.jpg",
      price: 0,
      isFree: true,
      level: "Beginner to Intermediate",
      playlistUrl:
        "https://www.youtube.com/playlist?list=PL_LOtQ_WWCpgLRpvj3_-DimaTYufwRezo",
    },
    {
      id: 3,
      title: "SSC MTS, CHSL, CGL",
      description: "A complete preparation course covering Maths, Reasoning, and important topics to help you crack SSC exams like MTS, CHSL, and CGL with strong concepts and practice.",
      image:
        "/ssc_cgl.jpg",
      price: 0,
      isFree: true,
      level: "Beginner to Intermediate",
      playlistUrl:
        "https://www.youtube.com/playlist?list=PL_LOtQ_WWCpjoJ25GOhocVtM7se3LI-jp",
    },
    {
      id: 4,
      title: "C-TET",
      description: "A complete preparation course C-TET exam.",
      image:
        "/c_tet.jpg",
      price: 0,
      isFree: true,
      level: "Beginner to Intermediate",
      playlistUrl:
        "https://www.youtube.com/playlist?list=PL_LOtQ_WWCph2D6N7TSHDuOeu45DqzrrM",
    },
    {
      id: 5,
      title: "Class 11th Maths",
      description: "Class 11 Maths series by vimal sir",
      image:
        "/class11.jpg",
      price: 0,
      isFree: true,
      level: "Beginner to Intermediate",
      playlistUrl:
        "https://www.youtube.com/playlist?list=PL_LOtQ_WWCpjfJwj29cmg2Ac7ca9hSGvl",
    },
    {
      id: 6,
      title: "Class 12th Maths",
      description: "Class 12 Maths series by vimal sir",
      image:
        "/class12.jpg",
      price: 0,
      isFree: true,
      level: "Beginner to Intermediate",
      playlistUrl:
        "https://www.youtube.com/playlist?list=PL_LOtQ_WWCpgbYL7hxR-ub5T_2EDH4Y5i",
    },
    {
      id: 7,
      title: "Class 10th Maths",
      description: "Class 10 Maths series by vimal sir",
      image:
        "/class10.jpg",
      price: 0,
      isFree: true,
      level: "Beginner to Intermediate",
      playlistUrl:
        "https://www.youtube.com/playlist?list=PL_LOtQ_WWCphc7yVXVcSyrAnVv3ENjsJr",
    },
    {
      id: 8,
      title: "Class 9th Maths",
      description: "Class 9th Maths series by vimal sir",
      image:
        "/class_9.jpg",
      price: 0,
      isFree: true,
      level: "Beginner to Intermediate",
      playlistUrl:
        "https://www.youtube.com/playlist?list=PL_LOtQ_WWCpjMLYDGLSmzFLOa4e7V5a6m",
    },
    {
      id: 9,
      title: "UP-TET",
      description: "UP-TET exam series by vimal sir",
      image:
        "/up-tet.avif",
      price: 0,
      isFree: true,
      level: "Beginner to Intermediate",
      playlistUrl:
        "https://www.youtube.com/playlist?list=PL_LOtQ_WWCpiYfaCzwiDojZ4qraBBWiGP",
    },
    {
      id: 10,
      title: "SSC-CGL,CHSL,MTS,RRB,NTPC",
      description: "All SSC exam series by vimal sir",
      image:
        "/ssc2.jpg",
      price: 0,
      isFree: true,
      level: "Beginner to Intermediate",
      playlistUrl:
        "https://www.youtube.com/playlist?list=PL_LOtQ_WWCph0KCEQWL5nn8cR9bSQ_buO",
    },
    {
      id: 11,
      title: "Polytechnic 2nd Semester",
      description: "polytechnic second semester series by vimal sir",
      image:
        "/poly.jpg",
      price: 0,
      isFree: true,
      level: "Beginner to Intermediate",
      playlistUrl:
        "https://www.youtube.com/playlist?list=PL_LOtQ_WWCphhcc_qzQU0mkYYsbOKYIy5",
    },
  ]);

  const [tab, setTab] = useState("all");

  const filtered = courses.filter((c) => {
    if (tab === "free") return c.isFree;
    if (tab === "premium") return !c.isFree;
    return true;
  });

  // 🔥 Watch Now function
  const handleWatch = (url) => {
    window.open(url, "_blank");
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
        }`}
    >
      {/* Header */}
      <div className="text-center py-12">
        <h1
          className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-800"
            }`}
        >
          Our Courses
        </h1>

        <p className={`mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Learn programming with high-quality, practical tutorials.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-10">
        {["all", "free", "premium"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2 rounded-full font-medium transition ${tab === t
                ? isDark
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-indigo-600 text-white shadow-md"
                : isDark
                  ? "bg-gray-900 border border-gray-700 text-gray-300 hover:bg-gray-800"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
          >
            {t === "all"
              ? "All Courses"
              : t === "free"
                ? "Free Courses"
                : "Premium Courses"}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <div
            key={course.id}
            className={`group rounded-xl border overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col ${isDark
                ? "bg-gray-900 border-gray-800 shadow-lg"
                : "bg-white border-gray-200 shadow-md"
              }`}
          >
            {/* Image */}
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
              />

              <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full shadow-md bg-emerald-500 text-white">
                Free
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h2
                className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-800"
                  }`}
              >
                {course.title}
              </h2>

              <p
                className={`text-sm mt-2 ${isDark ? "text-gray-400" : "text-gray-600"
                  }`}
              >
                {course.description}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-indigo-600 font-bold text-lg">
                  Free
                </span>

                <span
                  className={`text-sm italic ${isDark ? "text-gray-500" : "text-gray-500"
                    }`}
                >
                  {course.level}
                </span>
              </div>

              {/* Button */}
              <button
                onClick={() => handleWatch(course.playlistUrl)}
                className={`w-full mt-5 py-2 rounded-md font-medium shadow-md transition-all duration-300 ${isDark
                    ? "bg-linear-to-r from-indigo-700 to-purple-700 text-white hover:from-indigo-600 hover:to-purple-600"
                    : "bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                  }`}
              >
                Watch Full Playlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}