import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useTheme from "../hooks/UseTheme";
const SideMenu = Sidebar;

const DashboardLayout = ({ children, activeMenu }) => {
    const { user } = {
        user: {
            fullName: "John Doe",
            imageUrl: "https://randomuser.me/api/portraits/men/75.jpg",
        },
    }
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={`h-screen overflow-hidden flex flex-col ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            {/* Navbar */}
            <Navbar activeMenu={activeMenu} />

            {user && (
                <div className="flex flex-1 min-h-0">
                    {/* Side Menu */}
                    <div className="hidden min-[1080px]:block">
                        <SideMenu activeMenu={activeMenu} />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 min-w-0 overflow-y-auto px-3 sm:px-5 md:px-8">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};



export default DashboardLayout;