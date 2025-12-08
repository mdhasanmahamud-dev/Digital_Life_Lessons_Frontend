import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 ">
      <Navbar />

      <main className="flex-1">
        <Outlet/>
      </main>

      <Footer/>
    </div>
  );
};

export default MainLayout;
