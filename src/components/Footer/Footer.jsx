import React, { useState } from "react";
import map from "../../assets/images/map.png";
import {
  FaClock,
  FaFacebookSquare,
  FaInstagramSquare,
  FaSign,
  FaTwitterSquare,
} from "react-icons/fa";
import { IoMail, IoCallSharp } from "react-icons/io5";
import logo from "../../assets/images/logo.svg";
import { navdata } from "../../assets/data/navdata";
import { Link } from "react-router-dom";
import card1 from "../../assets/icons/card1.svg";
import card2 from "../../assets/icons/card2.svg";
import card3 from "../../assets/icons/card3.svg";
import card4 from "../../assets/icons/card4.svg";
import card5 from "../../assets/icons/card5.svg";

const Footer = () => {
  const [currecny, setCurrency] = useState("usd");
  return (
    <div className="bg-black py-8 mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
          <Link to={"/"} className="lg:hidden block">
            <img
              src={logo}
              alt="Pixel"
              className="h-[25px] mx-auto mb-4"
            />
          </Link>
          <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
            <img
              src={map}
              alt=""
              className="h-32 lg:w-[200px] w-full object-cover"
            />
            <div>
              <h2 className="text-white text-xl font-medium mb-4">
                Come visit us!
              </h2>
              <div className="flex lg:flex-col flex-row gap-4 text-sm">
                <div className="flex gap-2 lg:items-center items-start">
                  <FaSign className="text-red" />
                  <p className="text-grey">
                    71 Park Lane, London
                    <br /> SW43 2LW
                  </p>
                </div>
                <div className="flex gap-2 lg:items-center items-start">
                  <FaClock className="text-red" />
                  <p className="text-grey">
                    Sunday to Friday <br />
                    8:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link to={"/"} className="lg:block hidden">
            <img
              src={logo}
              alt="Pixel"
              className="h-[30px] mx-auto mt-8"
            />
          </Link>
          <div>
            <h2 className="text-white text-xl mb-2">
              Join our newsletter for exclusive offers!
            </h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
              <input
                placeholder="Name"
                className="py-2 px-3 focus:outline-none bg-white"
              />
              <input
                placeholder="Email"
                className="py-2 px-3 focus:outline-none bg-white"
              />
            </div>
            <div className="flex gap-5 text-red text-2xl mt-5">
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                <FaInstagramSquare />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                <FaFacebookSquare />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <FaTwitterSquare />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="grid grid-cols-6 gap-5 lg:text-md text-sm">
          <div className="lg:col-span-3 col-span-6 grid lg:grid-cols-4 grid-cols-3 gap-2">
            <div className="lg:col-span-2 cols-span-1">
              <h2 className="text-white text-xl mb-2">Shop</h2>
              <div className="grid lg:grid-cols-2 grid-col-span-1 text-grey gap-2">
                {navdata?.slice(0, 6)?.map(({ title, link }, i) => (
                  <Link className="hover:text-red tr" key={i} to={link}>
                    {title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-span-1">
              <h2 className="text-white text-xl mb-2">Used</h2>
              <div className="flex flex-col gap-2 text-grey">
                <Link className="hover:text-red tr" to="/buy-and-sell">
                  Buy & Sell
                </Link>
                <Link className="hover:text-red tr" to="/policy">
                  Policy
                </Link>
                <Link className="hover:text-red tr" to="/report-faud">
                  Report Fraud
                </Link>
              </div>
            </div>
            <div className="col-span-1">
              <h2 className="text-white text-xl mb-2">About</h2>
              <div className="flex flex-col gap-2 text-grey">
                <Link className="hover:text-red tr" to="/contact">
                  Contact
                </Link>
                <Link className="hover:text-red tr" to="/our-story">
                  Our Story
                </Link>
                <Link className="hover:text-red tr" to="/blog">
                  Blog
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 col-span-6">
            <div className="flex lg:justify-start justify-center gap-2 mt-5">
              <button
                onClick={() => setCurrency("usd")}
                className={`py-1 w-16 text-sm border-2  text-black font-semibold ${
                  currecny === "usd"
                    ? "border-red bg-red "
                    : "border-gray-400 text-gray-500"
                }`}
              >
                USD $
              </button>
              <button
                onClick={() => setCurrency("eur")}
                className={`py-1 w-16 text-sm  border-2  font-semibold ${
                  currecny === "eur"
                    ? "border-red bg-red "
                    : "border-gray-400 text-gray-500"
                }`}
              >
                EUR €
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 col-span-6 lg:mx-0 mx-auto">
            <h2 className="text-white text-xl mb-2 lg:text-start text-center">Contact Information</h2>
            <div className="flex items-center gap-2 lg:justify-start justify-center">
              <IoCallSharp className="text-red" />
              <span className="text-grey">+972 123-456-78</span>
            </div>
            <div className="flex items-center gap-2 lg:justify-start justify-center">
              <IoMail className="text-red" />
              <span className="text-grey">name@camera.com</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex lg:flex-row flex-col-reverse gap-5 reverse items-end">
          <div className="lg:w-1/3 w-full text-grey lg:text-sm text-xs lg:block hidden">
            <p>
              &copy;2023 PIXEL
              <br />
              All Right Reserved
            </p>
          </div>
          <div className="lg:w-1/3 w-full text-grey lg:text-sm text-xs text-center block lg:hidden">
            <p>&copy;2023 PIXEL All Right Reserved</p>
          </div>

          <div className="lg:w-1/3 w-full flex gap-2 justify-center">
            <img src={card1} className="h-8" />
            <img src={card2} className="h-8" />
            <img src={card3} className="h-8" />
            <img src={card4} className="h-8" />
            <img src={card5} className="h-8" />
          </div>

          <div className="lg:w-1/3 w-full text-grey flex justify-between lg:gap-4 lg:text-sm text-xs">
            <Link className="hover:text-red tr" to="/return-policy">
              Return Policy
            </Link>
            <Link className="hover:text-red tr" to="/accessibility">
              Accessibility
            </Link>
            <Link className="hover:text-red tr" to="/terms-of-use">
              Terms of Use
            </Link>
            <Link className="hover:text-red tr" to="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
