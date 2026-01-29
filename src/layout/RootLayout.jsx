import React from "react";
import { Link, Outlet, useLocation } from "react-router";
import {
  LayoutDashboard,
  PhoneCall,
  Calendar,
  Settings,
  Bell,
} from "lucide-react";
import { RxLightningBolt } from "react-icons/rx";

const RootLayout = () => {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname === "/") return "Dashboard Overview";
    if (location.pathname === "/call") return "Call Logs & History";
    if (location.pathname === "/appointments") return "Appointments";
    if (location.pathname === "/settings") return "Settings";
    return "Dashboard";
  };

  return (
    <div className="h-screen flex overflow-hidden bg-[#0B1121]">
      <aside className="w-64 bg-[#0B1121] text-white flex flex-col border-r border-gray-800/50">
        <div className="p-6 mb-4 text-center ml-18">
          <Link to="/">
            <div className="w-10 h-10 rounded-xl text-center flex items-center justify-center bg-gradient-to-tr from-[#00E5FF] to-[#00FFB2] shadow-[0_0_20px_rgba(0,255,178,0.4)]">
              <RxLightningBolt className="text-[#0B1121] w-6 h-6 stroke-[0.5px]" />
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <SidebarItem
            to="/"
            icon={<LayoutDashboard size={20} />}
            label="Dashboard Overview"
            active={location.pathname === "/"}
          />
          <SidebarItem
            to="/call"
            icon={<PhoneCall size={20} />}
            label="Call Logs"
            active={location.pathname === "/call"}
          />
          <SidebarItem
            to="/appointments"
            icon={<Calendar size={20} />}
            label="Appointments"
            active={location.pathname === "/appointments"}
          />
          <SidebarItem
            to="/settings"
            icon={<Settings size={20} />}
            label="Settings"
            active={location.pathname === "/settings"}
          />
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <nav className="h-20 bg-[#0B1121] text-white flex items-center justify-between px-8 border-b border-gray-800/30 flex-shrink-0">
          <h1 className="text-xl font-semibold tracking-wide">
            {getPageTitle()}
          </h1>
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white transition relative">
              <Bell size={22} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-full border-2 border-gray-700 overflow-hidden cursor-pointer">
              <img
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt="profile"
              />
            </div>
          </div>
        </nav>

        <main className="flex-1 overflow-y-auto bg-[#0B1121] p-8 custom-scrollbar">
          <div className="max-w-[1200 px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

// Sidebar Link Component for cleaner code
const SidebarItem = ({ to, icon, label, active }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      active
        ? "bg-blue-600/10 text-blue-400 border border-blue-600/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
        : "text-gray-400 hover:bg-gray-800/50 hover:text-gray-200"
    }`}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

export default RootLayout;
