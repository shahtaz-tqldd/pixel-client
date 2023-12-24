import React from "react";
import blogleft from "../../../assets/images/blogleft.png";
import search from "../../../assets/icons/search.svg";
import { blogs } from "../../../assets/data/blogs";
import arrowright from "../../../assets/icons/arrow-right.svg";

const Blogs = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-16">
      <img src={blogleft} alt="" className="h-full object-cover lg:flex hidden" />
      <div>
        <h2 className="lg:text-2xl text-xl font-bold text-black">
          New to photography? Let us help!
        </h2>
        <p className="text-[15px]">
          We offer a variety of written & recorded guides for all aspects of
          photography, ranging from equipment handling to artistic theory.
        </p>
        <div className="relative mt-4">
          <input className="py-2 pl-9 focus:outline-none w-full" type="text" />
          <img
            src={search}
            alt=""
            className="h-4 absolute top-1/2 -translate-y-1/2 left-3"
          />
        </div>
        <div className="flex flex-col gap-3 mt-4">
          {blogs?.map(({ img, title, body, link }, i) => (
            <div key={i} className="flex lg:flex-row flex-col gap-3">
              <img src={img} alt="" className="lg:w-[40%] w-full object-cover" />
              <div className="lg:w-[60%] w-full flex flex-col justify-between py-1">
                <div>
                  <h1 className="text-lg font-bold">{title}</h1>
                  <p className="text-sm">{body}</p>
                </div>
                <div className="flex items-center gap-3 border-b-2 pb-2 w-fit mt-3 cursor-pointer group hover:border-black tr">
                  <p className="text-sm text-[#B4B4B4] group-hover:text-black tr">Read More</p>
                  <img src={arrowright} alt="arrow" className="h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
