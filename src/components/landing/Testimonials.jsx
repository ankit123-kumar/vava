import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials({ theme }) {
  const reviews = [
    {
      name: "Aman Gupta",
      role: "Class 12 Student",
      feedback:
        "Best coaching in our area. Teachers explain concepts very clearly and doubt sessions helped me a lot.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sneha Verma",
      role: "NEET Aspirant",
      feedback:
        "Regular tests and personal attention made a big difference in my preparation. Highly recommended!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rohit Singh",
      role: "Class 10 Student",
      feedback:
        "Friendly teachers and disciplined environment. My marks improved a lot after joining.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className={`relative py-24 ${
        theme === "dark" ? "bg-slate-950" : "bg-white"
      }`}
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2
          className={`text-4xl md:text-5xl font-extrabold ${
            theme === "dark" ? "text-slate-100" : "text-gray-800"
          }`}
        >
          What Our{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Students Say
          </span>
        </h2>

        <p
          className={`mt-4 max-w-2xl mx-auto ${
            theme === "dark" ? "text-slate-400" : "text-gray-600"
          }`}
        >
          Real feedback from our classroom students.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              <div
                className={`rounded-2xl p-8 backdrop-blur-xl h-full ${
                  theme === "dark"
                    ? "bg-slate-900/80 border border-white/10"
                    : "bg-gray-50"
                }`}
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />

                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-sm text-indigo-500">{review.role}</p>

                <p
                  className={`mt-4 text-sm ${
                    theme === "dark" ? "text-slate-300" : "text-gray-600"
                  }`}
                >
                  “{review.feedback}”
                </p>

                <div className="mt-4 flex justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}