import { useState } from "react";
import { Menu, X, Sun, Moon} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useTheme from "../../hooks/UseTheme";

export default function Navbar() {
  const { theme: currentTheme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    `transition duration-300 hover:text-indigo-500 ${isActive ? "text-indigo-600 font-semibold" : ""
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <img
            src="/logo.png"
            alt="VAVA Logo"
            className="h-12 w-12 object-contain drop-shadow-sm"
          />
          <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-green-400 via-purple-500 to-yellow-400">
            VAVA
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 dark:text-gray-200 font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/courses" className={linkClass}>Courses</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">

          {/* Login Button */}
          <button
            onClick={() => navigate("/auth")}
            className="relative px-6 py-2 font-semibold text-indigo-600 border border-indigo-600 rounded-lg overflow-hidden group transition-all duration-300"
          >
            <span className="absolute inset-0 bg-indigo-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"></span>
            <span className="relative group-hover:text-white transition-colors duration-300">
              Login
            </span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-11 h-10 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
            {currentTheme === "light" ? (
              <Moon size={20} className="text-indigo-500" />
            ) : (
              <Sun size={20} className="text-yellow-400" />
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={handleToggle}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 pb-6 pt-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 space-y-4">

          <nav className="flex flex-col space-y-4 text-gray-700 dark:text-gray-200 font-medium">
            <a href="/" className={linkClass} onClick={() => setIsOpen(false)}>Home</a>
            <a href="/courses" className={linkClass} onClick={() => setIsOpen(false)}>Courses</a>
            <a href="/about" className={linkClass} onClick={() => setIsOpen(false)}>About</a>
            <a href="/contact" className={linkClass} onClick={() => setIsOpen(false)}>Contact</a>
            <a href="/gallery" className={linkClass} onClick={() => setIsOpen(false)}>Gallery</a>
          </nav>

          <hr className="border-gray-200 dark:border-gray-700" />

          {/* Mobile Actions */}
          <div className="flex justify-between items-center gap-2">

            {/* Login */}
            <button
              onClick={() => {
                navigate("/auth");
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 font-semibold text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition"
            >
              Login
            </button>

            {/* Theme Toggle (Same as Desktop) */}
            <button
              onClick={() => {
                toggleTheme();
              }}
              className="w-full h-10 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {currentTheme === "light" ? (
                <Moon size={20} className="text-indigo-500" />
              ) : (
                <Sun size={20} className="text-yellow-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
