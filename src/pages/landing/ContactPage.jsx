// src/pages/ContactPage.jsx
import { MapPin, Phone, Mail } from "lucide-react";
import useTheme from "../../hooks/useTheme";

export default function ContactPage() {
  const [theme] = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-800"
        }`}
    >
      {/* Hero Section */}
      <section
        className={`py-24 text-white ${isDark
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-black"
            : "bg-gradient-to-r from-indigo-600 to-purple-600"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-white"
            }`}>
            We’d love to hear from you! Reach out to us for any queries,
            support, or collaboration opportunities.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <MapPin className={`h-8 w-8 ${isDark ? "text-indigo-400" : "text-indigo-600"}`} />,
            title: "Our Location",
            text: "123 A Pradeep Ramvihar Colony Agra 282006, India",
          },
          {
            icon: <Phone className={`h-8 w-8 ${isDark ? "text-indigo-400" : "text-indigo-600"}`} />,
            title: "Call Us",
            text: "+91 9808885514",
          },
          {
            icon: <Mail className={`h-8 w-8 ${isDark ? "text-indigo-400" : "text-indigo-600"}`} />,
            title: "Email",
            text: "vimal251294gupta@gmail.com",
          },
        ].map((item) => (
          <div
            key={item.title}
            className={`rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center gap-4 ${isDark
                ? "bg-gray-900 border border-gray-800"
                : "bg-white"
              }`}
          >
            {item.icon}

            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>

            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"
              }`}>
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* Contact Form */}
      <section
        className={`py-16 ${isDark ? "bg-gray-900" : "bg-white"
          }`}
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Your Name"
                className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none transition ${isDark
                    ? "bg-gray-950 border-gray-700 text-white"
                    : "bg-white border-gray-300 text-gray-800"
                  }`}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none transition ${isDark
                    ? "bg-gray-950 border-gray-700 text-white"
                    : "bg-white border-gray-300 text-gray-800"
                  }`}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                placeholder="Write your message..."
                className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none h-32 resize-none transition ${isDark
                    ? "bg-gray-950 border-gray-700 text-white"
                    : "bg-white border-gray-300 text-gray-800"
                  }`}
              />
            </div>

            <button
              type="submit"
              className={`px-6 py-3 font-semibold rounded-lg shadow transition ${isDark
                  ? "bg-indigo-600 text-white hover:bg-indigo-500"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Find Us Here
          </h2>

          <div
            className={`w-full h-64 rounded-xl overflow-hidden ${isDark ? "shadow-lg border border-gray-800" : "shadow-inner"
              }`}
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14192.864053960277!2d78.04122655541995!3d27.212367000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397471e2d9f33aa7%3A0x8e8b417e4784c9c8!2s123%20A!5e0!3m2!1sen!2sin!4v1771856161045!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
