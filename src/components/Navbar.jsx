
import { Menu, Share2, X, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import useTheme from "../hooks/useTheme";
import { dashboardTheme } from "../themes/theme";
const SideMenu = Sidebar;

const Navbar = ({ activeMenu }) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const btnRef = useRef(null);
    const menuRef = useRef(null);
    const { theme, toggleTheme } = useTheme();
    const t = dashboardTheme[theme];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                btnRef.current &&
                !btnRef.current.contains(event.target)
            ) {
                setOpenSideMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className={`flex items-center justify-between gap-5 ${theme === 'dark' ? 'dark:bg-gray-900/70 dark:border-gray-800' : 'bg-white'} border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-4 sm:px-7 sticky top-0 z-30`}>
                {/* Left */}
                <div className="flex items-center gap-5">
                    <button
                        ref={btnRef}
                        className={`block lg:hidden ${t.bg} ${t.text} ${t.border} ${theme == 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} p-1 rounded`}
                        onClick={() => setOpenSideMenu(prev => !prev)}
                    >
                        {openSideMenu ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
                    </button>

                    <div className="flex items-center">
                        <div className="flex items-center space-x-3 cursor-pointer">
                            <img
                                src="/logo.png"
                                alt="VAVA Logo"
                                className="h-9 w-9 object-contain drop-shadow-sm"
                            />
                            <h3 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-green-400 via-purple-500 to-yellow-400">
                                VAVA
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className={`w-11 h-10 flex items-center justify-center border border-gray-300 rounded-lg bg-gray-100 hover:bg-gray-200 ${theme === 'dark' ? "dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700" : ""} transition-all duration-300`}
                    >
                        {theme === "light" ? (
                            <Moon size={20} className="text-indigo-500" />
                        ) : (
                            <Sun size={20} className="text-yellow-400" />
                        )}
                    </button>
                    <Link
                        to="/profile"
                        className={`text-sm font-medium ${theme === 'dark' ? "text-gray-50 hover:text-gray-300" : "text-gray-700 hover:text-gray-900"} transition-colors duration-300`}
                    >
                        Profile
                    </Link>
                </div>
            </div>

            {/* Mobile Side Menu – OUTSIDE navbar */}
            {openSideMenu && (
                <div className={`fixed top-16.75 left-0 right-0 bottom-0 ${t.bg} lg:hidden z-40 overflow-y-auto`}>
                    <SideMenu ref={menuRef} activeMenu={activeMenu} />
                </div>
            )}
        </>
    )
}

export default Navbar;