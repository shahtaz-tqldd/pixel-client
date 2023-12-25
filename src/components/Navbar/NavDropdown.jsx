import React from "react";
import { Link } from "react-router-dom";
import { dropdowncamera } from "../../assets/data/navdata";

const NavDropdown = ({ isOpen }) => {

  return (
    <div
      className="w-full absolute z-30 shadow border bg-light"
      style={{
        opacity: isOpen ? "1" : "0",
        transition: "opacity 0.5s",
        visibility: isOpen ? "visible" : "hidden",
      }}
    >
      <div className="max-w-[1000px] mx-auto p-10">
        <div className="grid grid-cols-3 justify-between gap-8">
          {dropdowncamera?.map(({ stack, links }, i) => (
            <div key={i}>
              <h2 className="uppercase border-b border-black py-1 w-fit font-medium text-lg">{stack}</h2>
              <div className="flex flex-col gap-2 mt-4">
                {links?.map(({ title, link }, i) => (
                  <Link key={i} to={link} className="hover:text-red tr">
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
