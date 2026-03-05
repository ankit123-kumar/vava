import React, { useState } from "react";
import useTheme from "../../hooks/useTheme";

const galleryData = [
  {
    id: 1,
    category: "coaching",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    title: "Coaching Session",
  },
  {
    id: 2,
    category: "coaching",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    title: "Group Coaching",
  },
  {
    id: 3,
    category: "trip",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Adventure Trip",
  },
  {
    id: 4,
    category: "trip",
    img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    title: "Team Trip",
  },
  {
    id: 5,
    category: "event",
    img: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
    title: "Company Event",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(null);
  const [theme] = useTheme();

  const isDark = theme === "dark";

  const filtered =
    active === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === active);
  return (

    <div
      className={`min-h-screen py-10 px-4 md:px-20 transition-colors duration-500 ${isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-800"
        }`}
    >
      {/* Title */}
      <h1
        className={`text-3xl md:text-4xl font-bold text-center mb-6 ${isDark ? "text-white" : "text-gray-800"
          }`}
      >
        Our Gallery
      </h1>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {["all", "coaching", "trip", "event"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full border transition ${active === cat
                ? "bg-indigo-600 text-white border-indigo-600"
                : isDark
                  ? "bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-indigo-50"
              }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => setSelected(item)}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 transition flex items-center justify-center ${isDark
                  ? "bg-black/50 opacity-0 group-hover:opacity-100"
                  : "bg-black/30 opacity-0 group-hover:opacity-100"
                }`}
            >
              <span className="text-white font-semibold text-lg text-center px-2">
                {item.title} ({item.category})
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className={`relative max-w-3xl w-full rounded-xl ${isDark ? "bg-gray-900" : ""
              }`}
          >
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full max-h-[80vh] rounded-xl shadow-lg"
            />

            <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
              {selected.title} ({selected.category})
            </div>

            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}