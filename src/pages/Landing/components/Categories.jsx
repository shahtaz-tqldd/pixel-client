import React from "react";
import { categories } from "../../../assets/data/categories";
import arrowright from "../../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 mt-16">
      {categories?.map(({ img, heading, subtext, link }, i) => (
        <div key={i} className="relative group">
          <img src={img} alt="" className="w-full object-cover" />
          <div className="absolute bottom-5 left-4 right-4 text-white">
            <h1 className="lg:text-[32px] text-sm font-bold">{heading}</h1>
            <div className="lg:flex items-center justify-between hidden">
              <p className="text-sm text-[#B4B4B4] mt-4 group-hover:text-white tr">{subtext}</p>
              <Link to={link} className="group-hover:translate-x-2 tr">
              <img src={arrowright} alt="arrow" className="h-8" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
