import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection({ theme }) {
  const subjects = ["Mathematics", "Chemistry", "Physics", "English"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = subjects[index];
    let timeout;

    if (!isDeleting && displayText.length < currentWord.length) {
      // typing
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, 150);
    } else if (!isDeleting && displayText.length === currentWord.length) {
      // full word typed, pause 1s then delete
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText.length > 0) {
      // deleting
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, 80);
    } else if (isDeleting && displayText.length === 0) {
      // move to next word
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % subjects.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section
      id="home"
      className={`relative w-full min-h-[70vh] md:min-h-screen bg-linear-to-r ${theme === 'dark' ? 'from-blue-400 via-violet-300 to-fuchsia-400' : 'from-indigo-100 via-pink-100 to-purple-100'} text-gray-900 overflow-hidden flex items-center pt-16 md:pt-24`}
    >
      {/* Background Floating Shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-pink-300/30 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-28 right-12 w-64 h-64 bg-indigo-300/30 rounded-full blur-2xl animate-float"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center px-6 md:px-20">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">
            Master{" "}
            <span
              className={`bg-clip-text text-transparent bg-linear-to-r ${theme === "dark"
                  ? "from-amber-400 via-fuchsia-500 to-orange-400"
                  : "from-yellow-500 via-pink-500 to-orange-500"
                }`}
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
            <br />
            Build Your{" "}
            <span
              className={`bg-clip-text text-transparent bg-linear-to-r animate-text-shimmer ${theme === "dark"
                ? "from-cyan-400 via-sky-500 to-indigo-500"
                : "from-cyan-500 via-blue-500 to-indigo-500"
                }`}
            >
              Future
            </span>
          </h1>

          <p className="max-w-xl mx-auto md:mx-0 mt-3 text-base md:text-lg text-gray-700 leading-relaxed">
            Learn from top instructors, access 24/7 mentorship, and explore
            industry-ready courses to boost your career with{" "}
            <span className="font-semibold text-indigo-600">VAVA</span>.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 gap-3 justify-center md:justify-start">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform flex items-center gap-2">
              Get Started <ArrowRight size={18} />
            </button>

            <button className="px-6 py-3 border-2 border-indigo-600 font-semibold rounded-xl hover:bg-indigo-600 hover:text-white transition-colors flex items-center gap-2">
              <PlayCircle size={20} /> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Illustration with Landing Effect */}
        <motion.div
          initial={{ y: -100, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-1 h-full flex justify-center md:justify-end mt-10 md:mt-0 relative"
        >
          <img
            src="/herobackNew.png"
            alt="Learning Illustration"
            className="h-[60%] md:h-[80%] w-auto object-contain drop-shadow-2xl"

            
          />

          {/* Floating Icons
<motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
  className="absolute top-10 left-10 text-yellow-400"
>
  📚
</motion.div>

<motion.div
  animate={{ y: [0, 20, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
  className="absolute bottom-10 right-10 text-pink-400"
>
  ✏️
</motion.div>

<motion.div
  animate={{ x: [0, 20, 0] }}
  transition={{ duration: 6, repeat: Infinity }}
  className="absolute top-1/2 left-0 text-indigo-400"
>
  🎓
</motion.div> */}
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce text-xl">
  ↓
</div>
    </section>
  );
}
