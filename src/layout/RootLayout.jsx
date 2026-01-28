import React from "react";
import { Link, Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar (25%) */}
      <aside className="w-1/4 bg-slate-900 text-white p-4">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">
            <Link to="/">Dashboard Overview</Link>
          </li>
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">
            <Link to="/call">Call Logs</Link>
          </li>
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">
            <Link to="/appointments">Appointments</Link>
          </li>
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </aside>

      {/* Right Content (75%) */}
      <div className="w-3/4 flex flex-col">
        {/* Top Navbar */}
        <nav className="h-16 bg-slate-800 text-white flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold">Dashboard Overview</h1>
          <div className="flex items-center gap-4">
            <span>🔔</span>
            <div className="w-8 h-8 bg-slate-600 rounded-full"></div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-slate-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
