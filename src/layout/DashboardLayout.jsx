import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../dashboard/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="bg-slate-950 min-h-screen flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
