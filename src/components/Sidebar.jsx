import { useState, forwardRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { User, ChevronDown } from "lucide-react";
import { SIDE_MENU_DATA, ADMIN_MENU_DATA } from "../assets/data.js";
import useTheme from "../hooks/useTheme.js";
import { dashboardTheme } from "../themes/theme";

const SideMenu = forwardRef((props, ref) => {
  const user = {
    fullName: "John Doe",
    imageUrl: "https://randomuser.me/api/portraits/men/75.jpg",
  }
  const { theme } = useTheme();
  const t = dashboardTheme[theme];
  const navigate = useNavigate();
  const location = useLocation();
  const userRole = localStorage.getItem("userroll");
  const [sidebarData, setSidebarData] = useState([]);
  const [openMenu, setOpenMenu] = useState("Test");

  const handleNavigation = (path, label, hasChildren) => {
    if (hasChildren) {
      setOpenMenu(openMenu === label ? null : label);
    } else {
      navigate(path);
    }
  };

  useEffect(() => {
    if (userRole === "ADMIN") {
      setSidebarData(ADMIN_MENU_DATA);
      setOpenMenu("Dashboard");
    } else {
      setSidebarData(SIDE_MENU_DATA);
      setOpenMenu("Test");
    }
  }, [userRole]);

  const isActive = (path) => location.pathname.includes(path);

  return (
    <aside
      ref={ref}
      className={`w-72 h-screen flex flex-col
  ${theme === 'dark' ? 'bg-gray-900/70 border-gray-800' : 'bg-white'}
  border-r border-gray-200 p-6 shadow-sm`}
    >

      {/* Profile Section (fixed) */}
      <div className="flex flex-col items-center text-center gap-3 mb-5">
        {user?.imageUrl ? (
          <img
            src={user.imageUrl}
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-purple-100 shadow-md"
          />
        ) : (
          <User className="w-20 h-20 text-gray-400" />
        )}

        <div>
          <h4 className={`font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
            {user?.fullName || "Student"}
          </h4>
          <p className="text-sm text-gray-500">Student Panel</p>
        </div>
      </div>

      {/* Scrollable Navigation */}
      <nav className="flex-1 overflow-y-auto scrollbar pb-16 space-y-2">
        {sidebarData.map((item) => {
          const activeParent =
            isActive(item.path) ||
            item.child?.some((c) => isActive(c.path));

          return (
            <div key={item.id}>
              {/* Parent */}
              <button
                onClick={() =>
                  handleNavigation(
                    item.path,
                    item.label,
                    item.child?.length
                  )
                }
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition
              ${activeParent
                    ? "bg-linear-to-r from-purple-500 to-indigo-500 text-white shadow-md"
                    : `${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`
                  }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>

                {item.child && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openMenu === item.label ? "rotate-180" : ""
                      }`}
                  />
                )}
              </button>

              {/* Children */}
              {item.child && openMenu === item.label && (
                <div className="ml-6 mt-2 space-y-1 border-l border-gray-200 pl-4">
                  {item.child.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => navigate(sub.path)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                    ${isActive(sub.path)
                          ? `${t.text} ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} font-medium`
                          : `${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`
                        }`}
                    >
                      <sub.icon className="w-4 h-4" />
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
});

export default SideMenu;