import React, { useState } from "react";
import star from "../../../assets/icons/star.svg";
import { FaRegClock } from "react-icons/fa";
import HtmlParsed from "../../../utiles/htmlparser";

const ProductCard = ({ data }) => {
  const [selected, setSelected] = useState("1len");
  const [quantity, setQuantity] = useState(1);
  const { img, name, category, rating, price, prevPrice, time, description } =
    data;
  return (
    <div className="group">
      <img src={img} alt="" className="w-full h-52 object-cover" />
      <div className="flex justify-between mt-5">
        <div>
          <h1 className="text-lg font-medium">{name}</h1>
          <p className="text-sm text-black">{category}</p>
        </div>
        <div className="flex items-center text-sm gap-2">
          <img src={star} alt="arrow" className="h-4 -mt-1" />
          <p>{rating}</p>
        </div>
      </div>
      <div className="h-28 overflow-hidden my-4">
        <div className="group-hover:-translate-y-28 transition duration-500">
          <div className="h-28 text-sm -ml-2 flex flex-col justify-between">
            <HtmlParsed content={description} />
            <div className="flex justify-end text-gray-500 line-through">
              ${prevPrice}
            </div>
          </div>
          <div className="h-28 py-3">
            <div className="rounded-full w-full border border-gray-500">
              <button
                onClick={() => setSelected("1len")}
                className={`w-1/2 py-1.5 rounded-full ${
                  selected === "1len" ? "bg-red text-white" : ""
                }`}
              >
                1 Len
              </button>
              <button
                onClick={() => setSelected("2len")}
                className={`w-1/2 py-1.5 rounded-full ${
                  selected === "2len" ? "bg-red text-white" : ""
                }`}
              >
                1 Lens Kit
              </button>
            </div>
            <div className="rounded-full w-full flex justify-between items-center border border-gray-500 mt-4">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className={`w-12 py-1.5 bg-red text-white text-xl rounded-l-full`}
              >
                -
              </button>
              {quantity}
              <button
                onClick={() => setQuantity(quantity + 1)}
                className={`w-12 py-1.5 bg-red text-white text-xl rounded-r-full`}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2 text-sm">
          <FaRegClock className="text-red" />
          {time}
        </div>
        <div className="flex items-center gap-2 text-md font-bold">
          ${price*quantity}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
