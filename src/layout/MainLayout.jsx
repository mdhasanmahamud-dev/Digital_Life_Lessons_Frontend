import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div
      className="
        flex flex-col min-h-screen
        bg-gray-100 text-gray-900
        dark:bg-slate-900 dark:text-gray-100
        transition-colors duration-300
      "
    >
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
