import { SwipeableDrawer } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const MobileMenuNavbar = ({ state, setState, toggleDrawer, data }) => {
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
    setState({ left: false });
  };

  return (
    <div className="w-full absolute">
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        <div className="md:w-[400px] w-[60vw] py-5 px-8 h-full relative bg-black">
          <Link to={"/"} className="flex justify-center">
            <img src={logo} alt="Pixel" className="h-[20px] mt-4" />
          </Link>
          <div className="flex flex-col items-start text-light gap-2 mt-12">
            {data?.map((d, i) => (
              <button
                onClick={() => handleNavigate(d.link)}
                key={i}
                className="group"
              >
                <div className="fl gap-1.5">
                  {/* <d.icon /> */}
                  {d.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default MobileMenuNavbar;
