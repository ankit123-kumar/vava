import {
  LayoutDashboard,
  ClipboardList,
  PlayCircle,
  CalendarClock,
  CheckCircle2,
  Trophy,
  BarChart3,
  User,
  ListChecks,
  PlusSquare,
  Database,
  FileQuestion,
  PlusCircle,
  Upload,
  Users,
  TrendingUp,
  FileBarChart,
  Settings
} from "lucide-react";


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
        icon: ClipboardList,
        path: "/test",
        child: [
            {
                id: "01",
                label: "Available Tests",
                icon: ClipboardList,
                path: "/tests/available",
            },
            {
                id: "02",
                label: "Upcoming Tests",
                icon: CalendarClock,
                path: "/tests/upcoming",
            },
            {
                id: "03",
                label: "Completed Tests",
                icon: CheckCircle2,
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
        icon: BarChart3,
        path: "/analytics",
    },
    {
        id: "05",
        label: "Profile",
        icon: User,
        path: "/Profile",
    }
];

export const ADMIN_MENU_DATA = [
    {
        id: "01",
        label: "Dashboard",
        icon: LayoutDashboard,
        path: "/admin/dashboard",
    },
    {
        id: "02",
        label: "Test Management",
        icon: ClipboardList,
        path: "/admin/tests",
        child: [
            {
                id: "01",
                label: "All Tests",
                icon: ListChecks,
                path: "/admin/tests/all",
            },
            {
                id: "02",
                label: "Create Test",
                icon: PlusSquare,
                path: "/admin/tests/create",
            },
            {
                id: "03",
                label: "Test Schedule",
                icon: CalendarClock,
                path: "/admin/tests/schedule",
            }
        ]
    },
    {
        id: "03",
        label: "Question Bank",
        icon: Database,
        path: "/admin/questions",
        child: [
            {
                id: "01",
                label: "All Questions",
                icon: FileQuestion,
                path: "/admin/questions/all",
            },
            {
                id: "02",
                label: "Add Question",
                icon: PlusCircle,
                path: "/admin/questions/add",
            },
            {
                id: "03",
                label: "Import Questions",
                icon: Upload,
                path: "/admin/questions/import",
            }
        ]
    },
    {
        id: "04",
        label: "Student Management",
        icon: Users,
        path: "/admin/students",
        child: [
            {
                id: "01",
                label: "All Students",
                icon: Users,
                path: "/admin/students/all",
            },
            {
                id: "02",
                label: "Student Performance",
                icon: TrendingUp,
                path: "/admin/students/performance",
            }
        ]
    },
    {
        id: "04",
        label: "Results",
        icon: FileBarChart,
        path: "/admin/results"
    },
    {
        id: "05",
        label: "Leaderboard",
        icon: Trophy,
        path: "/admin/leaderboard"
    },
    {
        id: "06",
        label: "Analytics",
        icon: BarChart3,
        path: "/admin/analytics",
    },
    {
        id: "07",
        label: "Settings",
        icon: Settings,
        path: "/admin/settings",
    },
    {
        id: "08",
        label: "Profile",
        icon: User,
        path: "/admin/profile",
    }
];