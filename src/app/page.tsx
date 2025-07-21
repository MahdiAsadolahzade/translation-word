"use client";

import Navigations from "@/components/Navigations";
import { LuView } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";

export default function Home() {

  const routeNavigations = [
    { name: "View", route: "/view", icon: LuView },
    { name: "Dashboard", route: "/dashboard", icon: RxDashboard },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <Navigations navigations={routeNavigations} />
    </div>
  );
}
