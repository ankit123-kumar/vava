import { LayoutDashboard, BookOpenText, PersonStanding, CalendarPlus2, SquareCheck, ChartColumnIncreasing, UserPen, Trophy} from "lucide-react";

export const SIDE_MENU_DATA = [
    {
        id: "01",
        label: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
    },
    {
        id: "02",
        label: "Test",
        icon: BookOpenText,
        path: "/test",
        child: [
            {
                id: "01",
                label: "Available Tests",
                icon: PersonStanding,
                path: "/tests/available",
            },
            {
                id: "02",
                label: "Upcoming Tests",
                icon: CalendarPlus2,
                path: "/tests/upcoming",
            },
            {
                id: "03",
                label: "Completed Tests",
                icon: SquareCheck,
                path: "/tests/completed",
            }
        ]
    },
    {
        id: "03",
        label: "Leaderboard",
        icon: Trophy,
        path: "/leaderboard"
    },
    {
        id: "04",
        label: "Analytics",
        icon: ChartColumnIncreasing,
        path: "/analytics",
    },
    {
        id: "05",
        label: "Profile",
        icon: UserPen,
        path: "/Profile",
    }
];