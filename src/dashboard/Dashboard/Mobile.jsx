import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import NavLogo from "../../assets/NavLogo.png";
import { NavLink } from "react-router";
const Mobile = ({ setIsOpen, isOpen }) => {
  return (
    <div className="bg-slate-900 px-10 py-2 border-b border-gray-600 md:hidden sticky top-0 z-50">
      <nav className="flex items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl font-bold text-indigo-600"
        >
          <img className="h-12" src={NavLogo} alt="" />
        </NavLink>

        {isOpen ? (
          <RxCross2
            className="text-white cursor-pointer"
            size={22}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <CiMenuFries
            className="text-white cursor-pointer"
            size={22}
            onClick={() => setIsOpen(true)}
          />
        )}
      </nav>
    </div>
  );
};

export default Mobile;
