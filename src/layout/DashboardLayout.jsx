import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../dashboard/Dashboard/Sidebar";
import Mobile from "../dashboard/Dashboard/Mobile";
import { useState } from "react";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen flex flex-col overflow-hidden"> 
      {/* Mobile Navbar বা Header */}
      <Mobile setIsOpen={setIsOpen} isOpen={isOpen}/>
      
      <div className="flex flex-1 overflow-hidden bg-gray-100 dark:bg-slate-950">
        {/* Sidebar এখানে তার জায়গায় স্থির থাকবে */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        
        {/* Main Content অংশটি স্ক্রল হবে */}
        <main className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-700">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default DashboardLayout;
