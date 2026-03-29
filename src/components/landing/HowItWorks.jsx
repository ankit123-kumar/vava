import { Users, BookOpen, ClipboardCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks({ theme }) {
  const steps = [
    {
      icon: <Users size={30} />,
      title: "Join Our Institute",
      desc: "Visit our coaching center and enroll in your preferred course.",
    },
    {
      icon: <BookOpen size={30} />,
      title: "Attend Daily Classes",
      desc: "Structured offline classes with expert teachers.",
    },
    {
      icon: <ClipboardCheck size={30} />,
      title: "Tests & Doubt Solving",
      desc: "Weekly tests with performance tracking and doubt sessions.",
    },
    {
      icon: <Award size={30} />,
      title: "Achieve Success",
      desc: "Crack exams confidently and build a strong future.",
    },
  ];

  return (
    <section
      id="how-it-works"
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
          How Our{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Coaching Works
          </span>
        </h2>

        <p
          className={`mt-4 max-w-2xl mx-auto ${
            theme === "dark" ? "text-slate-400" : "text-gray-600"
          }`}
        >
          Simple offline process designed to guide you step-by-step towards success.
        </p>

        {/* Connector Line */}
        <div className="hidden md:block absolute top-[58%] left-0 w-full h-[2px] bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 opacity-30"></div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-10 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              {/* Card */}
              <div
                className={`rounded-2xl p-6 backdrop-blur-xl h-full ${
                  theme === "dark"
                    ? "bg-slate-900/80 border border-white/10"
                    : "bg-white"
                }`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-9 h-9 flex items-center justify-center text-xs font-bold rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="mb-5 text-indigo-500 group-hover:scale-110 transition">
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-slate-100" : "text-gray-800"
                  }`}
                >
                  {step.title}
                </h3>

                {/* Desc */}
                <p
                  className={`mt-2 text-sm ${
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