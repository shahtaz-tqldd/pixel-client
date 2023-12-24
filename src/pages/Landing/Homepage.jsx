import React from "react";
import Categories from "./components/Categories";
import HeroBanner from "./components/HeroBanner";
import Blogs from "./components/Blogs";
import Products from "./components/Products";
import Featured from "./components/Featured";

const Homepage = () => {
  return (
    <React.Fragment>
      <HeroBanner />
      <div className="container">
        <Categories />
        <Blogs/>
        <Products/>
        <Featured/>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
