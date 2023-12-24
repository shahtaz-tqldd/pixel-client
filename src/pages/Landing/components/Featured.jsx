import React from "react";
import featureleft from "../../../assets/images/featureleft.png";
import { seller } from "../../../assets/data/seller";
import { FaCheck } from "react-icons/fa";
import HtmlParsed from "../../../utiles/htmlparser";

const Featured = () => {
  return (
    <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 mt-16">
      <div className="col-span-2">
        <div className="lg:hidden block mb-6">
          <h2 className="text-xl font-bold text-black">
            Turn used gear into new possibilities
          </h2>
          <p className="text-[12px] mt-2">
            We offer a reliable platform for buying and selling used photography
            gear.
          </p>
        </div>
        <img src={featureleft} alt="" className=" lg:h-full h-[200px] w-full object-cover" />
      </div>
      <div className="lg:col-span-3 col-span-2">
        <div className="lg:block hidden">
          <h2 className="text-2xl font-bold text-black">
            Turn used gear into new possibilities
          </h2>
          <p className="text-[14px] mt-2">
            We offer a reliable platform for buying and selling used photography
            gear. Whether you're a beginner looking for affordable equipment or
            a professional photographer in search of high-end gear at a
            discounted price, we've got you covered. photography, ranging from
            equipment handling to artistic theory.
          </p>
        </div>
        <h2 className="mt-6 text-xl mb-2 font-medium">
          Top sellers this month
        </h2>

        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-6">
          {seller?.map(({ img, name, product, description }, i) => (
            <div key={i}>
              <div className="flex gap-3">
                <img
                  src={img}
                  alt=""
                  className="h-[60px] w-[60px] object-cover"
                />
                <div className="">
                  <h1 className="font-medium">{name}</h1>
                  <h1 className="text-xs">{product}</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <FaCheck className="text-red" />
                    <p className="text-xs text-gray-500">Pixel Verified</p>
                  </div>
                </div>
              </div>
              <div className="text-sm mt-4 -ml-2">
                <HtmlParsed content={description} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-5">
          <button className="py-2 w-32 bg-red hover:opacity-80 tr border-2 border-red text-white">
            Buy
          </button>
          <button className="py-2 w-32 border-gray-400 border-2 hover:bg-red hover:border-red hover:text-white tr text-gray-500 font-medium">
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
