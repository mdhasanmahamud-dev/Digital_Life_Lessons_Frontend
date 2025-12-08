import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="bg-slate-900">
        <Outlet/>
      </main>
    </div>
  );
};

export default MainLayout;
