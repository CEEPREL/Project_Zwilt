import { useState } from "react";
import logo from "../assets/logo.svg";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <div className="fixed w-[100%] mb-[10px] z-50 h-[40px]">
        <div className="absolute h-full w-full z-30 bg-gradient-to-r from-white via-white to-white bg-pro"></div>
      </div>
      <nav className="fixed top-9 left-0 right-0 mx-auto sm:w-[100%] rounded-[15px] z-50 py-1 bg-nav lg:w-[90%] shadow-lg shadow-gray-400">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-28 mr-2" src={logo} alt="Logo" />
            </div>
            <ul className="hidden text-white lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a href="#" className="py-2 px-3 text-white ">
                Log In
              </a>
              <a
                href="#"
                className="bg-white text-black py-2 px-5 right-0 rounded-[16px]"
              >
                Join Now
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button className=" text-white" onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-12 z-20 bg-white w-1/4 min-w-60  border-nav border p-12 flex flex-col justify-center  lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="p-2 rounded-lg hover:bg-slate-200 m-2"
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center m-4 items-center flex-col space-x-2">
                <a className="m-2 p-2 rounded-lg hover:bg-slate-200" href="#">
                  Log In
                </a>
                <a
                  href="#"
                  className="py-2 px-3 text-white flex items-center justify-center rounded-[16px] w-28 bg-nav hover:bg-indigo-600"
                >
                  Join Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
