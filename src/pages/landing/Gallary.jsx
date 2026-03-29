import React, { useState } from "react";
import useTheme from "../../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

const galleryData = [
  { id: 1, category: "coaching", img: "gallary/1.jpeg", title: "Coaching Session" },
  { id: 2, category: "trip", img: "gallary/2.jpeg", title: "Team Trip" },
  { id: 3, category: "coaching", img: "gallary/3.jpeg", title: "Group Coaching" },
  { id: 4, category: "coaching", img: "gallary/7.jpeg", title: "Group Coaching" },
  { id: 5, category: "coaching", img: "gallary/8.jpeg", title: "Group Coaching" },
  { id: 6, category: "coaching", img: "gallary/10.jpeg", title: "Group Coaching" },
  { id: 7, category: "trip", img: "gallary/5.jpeg", title: "Adventure Trip" },
  { id: 8, category: "trip", img: "gallary/6.jpeg", title: "Team Trip" },
  { id: 9, category: "coaching", img: "gallary/9.jpeg", title: "Group Coaching" },
  { id: 10, category: "trip", img: "gallary/13.jpeg", title: "Team Trip" },
  { id: 11, category: "trip", img: "gallary/15.jpeg", title: "Team Trip" },
  { id: 12, category: "trip", img: "gallary/4.jpeg", title: "Adventure Trip" },
  { id: 13, category: "event", img: "gallary/12.jpeg", title: "Event Celebration" },
];

export default function Gallery() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(null);
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const filtered =
    active === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === active);

  return (
    <div
      className={`min-h-screen py-16 px-4 md:px-20 ${
        isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center mb-10">
        Our <span className="text-indigo-600">Gallery</span>
      </h1>

      {/* Filters */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {["all", "coaching", "trip", "event"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              active === cat
                ? "bg-indigo-600 text-white shadow-md"
                : isDark
                ? "bg-gray-900 text-gray-300 hover:bg-gray-800"
                : "bg-white text-gray-700 hover:bg-gray-100 border"
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
            onClick={() => setSelected(item)}
            className="group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white font-semibold text-lg text-center px-2">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* FIXED IMAGE */}
              <img
                src={selected.img}
                alt={selected.title}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />

              {/* Caption */}
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                {selected.title}
              </div>

              {/* Close */}
              <button
                className="absolute top-3 right-4 text-white text-3xl font-bold"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}