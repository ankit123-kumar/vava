import { BookOpen, UserCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs({ theme }) {
  const steps = [
    {
      icon: <BookOpen size={34} />,
      title: "Choose Course",
      desc: "Pick the course you love and start your learning journey today.",
    },
    {
      icon: <UserCheck size={34} />,
      title: "Learn Anywhere",
      desc: "Access your courses 24/7 from any device, anytime.",
    },
    {
      icon: <Award size={34} />,
      title: "Get Certified",
      desc: "Earn verified certificates upon course completion.",
    },
  ];

  return (
    <section
      id="about"
      className={`relative py-24 overflow-hidden ${
        theme === "dark" ? "bg-slate-950" : "bg-gray-50"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <h2
          className={`text-4xl md:text-5xl font-extrabold ${
            theme === "dark" ? "text-slate-100" : "text-gray-800"
          }`}
        >
          Why Choose{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            CoachingHub
          </span>
        </h2>

        <p
          className={`mt-4 max-w-2xl mx-auto ${
            theme === "dark" ? "text-slate-400" : "text-gray-600"
          }`}
        >
          A smarter way to learn with expert guidance, flexible access, and real results.
        </p>

        {/* Optional Connector Line */}
        <div className="hidden md:block absolute top-[60%] left-0 w-full h-[2px] bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 opacity-30"></div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-10 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              {/* Inner Card */}
              <div
                className={`rounded-2xl p-8 backdrop-blur-xl h-full transition ${
                  theme === "dark"
                    ? "bg-slate-900/80 border border-white/10"
                    : "bg-white"
                }`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center text-sm font-bold rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg">
                  0{idx + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 text-indigo-500 group-hover:scale-110 transition">
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-slate-100" : "text-gray-800"
                  }`}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className={`mt-3 text-sm ${
                    theme === "dark" ? "text-slate-400" : "text-gray-600"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}