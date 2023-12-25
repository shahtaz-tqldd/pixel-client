import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { IoTriangleSharp } from "react-icons/io5";

const Main = () => {
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-white">
      <Navbar />
      <Outlet />
      <Footer />
      <div
        onClick={handleTop}
        className="fixed lg:bottom-16 bottom-8 lg:right-16 right-8 h-12 w-12 bg-red grid place-items-center cursor-pointer hover:opacity-80 tr"
      >
        <IoTriangleSharp className="text-white h-8 w-8" />
      </div>
    </div>
  );
};

export default Main;
