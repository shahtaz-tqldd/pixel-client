import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/icons/cart.svg";
import user from "../../assets/icons/user.svg";
import search from "../../assets/icons/search.svg";
import { navdata } from "../../assets/data/navdata";
import { Link } from "react-router-dom";
import MobileMenuNavbar from "./MobileMenuNavbar";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
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
  return (
    <div className="bg-black py-4">
      <div className="container flex flex-col gap-8">
        <div className="flex justify-between items-center">
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
            <Link
              to={link}
              key={i}
              className="uppercase text-white hover:text-red tr"
            >
              {title}
            </Link>
          ))}
        </div>
        <MobileMenuNavbar
          state={drawerState}
          setState={setDrawerState}
          toggleDrawer={toggleDrawer}
          data={navdata}
        />
      </div>
    </div>
  );
};

export default Navbar;
