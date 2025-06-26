// @lib/constant.ts

// Icons
import {
  BarChart,
  Home,
  Inbox,
  Laptop,
  LineChart,
  PlusSquare,
  Settings,
  UserPlus,
} from "lucide-react";

// Navigation items for the sidebar
export const NavigationItems = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Analysis",
    url: "/analysis",
    icon: LineChart,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

// Home Navigation Item
export const HomeNavigationItem = [
  { title: "All PCs", icon: Laptop },
  { title: "PC Status", icon: BarChart },
  { title: "Add New User", icon: UserPlus },
  { title: "Add New PC", icon: PlusSquare },
  { title: "Pending Requests", icon: Inbox },
];
