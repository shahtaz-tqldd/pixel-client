import React, { useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/icons/cart.svg";
import user from "../../assets/icons/user.svg";
import search from "../../assets/icons/search.svg";
import { navdata } from "../../assets/data/navdata";
import { useNavigate } from "react-router-dom";
import MobileMenuNavbar from "./MobileMenuNavbar";
import { HiMenuAlt1 } from "react-icons/hi";
import NavDropdown from "./NavDropdown";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [drawerState, setDrawerState] = useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event?.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState({ ...drawerState, [anchor]: open });
  };
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };
  const handleNaviagte = (link) => {
    navigate(link);
  };

  const handleMouseLeave = () => {
    if (!dropdownRef.current) {
      return;
    }

    const isChildOfDropdown = dropdownRef.current.contains(event.relatedTarget);

    if (!event.relatedTarget || !isChildOfDropdown) {
      setIsDropdownOpen(false);
    }
  };
  return (
    <div className="bg-black pt-4 lg:pb-0 pb-4">
      <div className="flex flex-col gap-4">
        <div className="container flex justify-between items-center">
          <button
            onClick={() => setDrawerState({ left: true })}
            className="md:hidden block text-white"
          >
            <HiMenuAlt1 className="text-lg ml-2" />
          </button>
          <img src={logo} alt="Pixel" className="h-[30px]" />
          <div className="flex lg:gap-7 gap-4">
            {[user, cart, search].map((btnicon, i) => (
              <button key={i}>
                <img src={btnicon} alt="" className="h-5" />
              </button>
            ))}
          </div>
        </div>
        <div className="lg:flex hidden justify-between items-center">
          {navdata?.map(({ title, link }, i) => (
            <button
              onClick={() => handleNaviagte(link)}
              key={i}
              onMouseEnter={title === "Cameras" && handleMouseEnter}
              onMouseLeave={title === "Cameras" && handleMouseLeave}
              className="uppercase text-white hover:bg-red w-full py-4 text-center tr"
            >
              {title}
            </button>
          ))}
        </div>

        <MobileMenuNavbar
          state={drawerState}
          setState={setDrawerState}
          toggleDrawer={toggleDrawer}
          data={navdata}
        />
      </div>
      <div ref={dropdownRef} onMouseLeave={() => setIsDropdownOpen(false)}>
        {isDropdownOpen && <NavDropdown isOpen={isDropdownOpen} />}
      </div>
    </div>
  );
};

export default Navbar;
