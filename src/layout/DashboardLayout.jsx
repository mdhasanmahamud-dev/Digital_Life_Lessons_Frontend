import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../dashboard/Dashboard/Sidebar";
import Mobile from "../dashboard/Dashboard/Mobile";
import { useState } from "react";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Mobile setIsOpen={setIsOpen} isOpen={isOpen}/>
      <div className="bg-slate-950 min-h-screen flex">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="overflow-hidden flex-1  p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
