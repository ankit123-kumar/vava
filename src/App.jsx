import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import LandingPage from "./pages/landing/LandingPage"
import CoursesPage from "./pages/landing/CoursesPage";
import AboutPage from "./pages/landing/AboutPage";
import ContactPage from "./pages/landing/ContactPage";
import Gallery from "./pages/landing/Gallary";
import PublicLayout from "./layouts/PublicLayout";
import AuthCard from "./components/auth/AuthCard";
import StudentDashboard from "./pages/student/StudentDashboard";
import AvailableTest from "./pages/student/AvailableTest";
import Upcoming from "./pages/student/Upcoming";
import Completed from "./pages/student/Completed";
import Instructions from "./pages/student/Instructions";
import Attempt from "./pages/student/Attempt";
import Result from "./pages/student/Result";
import Leaderboard from "./pages/student/Leaderboard";
import Analytics from "./pages/student/Analytics";
import Profile from "./pages/student/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider>

      <Router>
        <div className="min-h-screen bg-white text-gray-900 dark:bg-slate-950 dark:text-gray-100 transition-colors duration-500">

          <Routes>
            {/* Public Pages */}
            <Route
              element={<PublicLayout />}
            >
              <Route path="/" element={<LandingPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/gallery" element={<Gallery />} />
            </Route>

            <Route path="/auth" element={<AuthCard />} />

            <Route element={<ProtectedRoute allowedRole="STUDENT" />}>

              <Route path="dashboard" element={<StudentDashboard />} />
              {/* Tests Section */}
              <Route path="tests/available" element={<AvailableTest />} />
              <Route path="tests/upcoming" element={<Upcoming />} />
              <Route path="tests/completed" element={<Completed />} />

              {/* Test Flow */}
              <Route path="test/:testId/instructions" element={<Instructions />} />
              <Route path="test/:testId/attempt" element={<Attempt />} />
              <Route path="test/:testId/result" element={<Result />} />

              {/* Other Pages */}
              <Route path="leaderboard" element={<Leaderboard />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="profile" element={<Profile />} />

            </Route>


            {/* Student Pages */}
            {/* <Route element={<StudentLayout />}>
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/tests" element={<AllTests />} />
            <Route path="/test/:testId" element={<TestPage />} />
          </Route> */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;