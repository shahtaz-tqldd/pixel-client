import React from "react";
import { products } from "../../../assets/data/products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-8 mt-16">
      {products?.map((data, i) => (
        <ProductCard data={data} key={i} />
      ))}
    </div>
  );
};

export default Products;
