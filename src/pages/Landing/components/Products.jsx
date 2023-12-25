import React, { useCallback, useState } from "react";
import { products } from "../../../assets/data/products";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { BsArrowDownCircle } from "react-icons/bs";

const Products = () => {
  const [swiperRef, setSwiperRef] = useState();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  return (
    <>
      <div className="lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-8 mt-16 md:grid hidden">
        {products?.map((data, i) => (
          <ProductCard data={data} key={i} />
        ))}
      </div>
      <div className="md:hidden block py-8">
        <div className="mb-8 flex justify-end gap-6">
          <BsArrowDownCircle
            onClick={handlePrevious}
            className="text-3xl text-red hover:text-black tr rotate-90 cursor-pointer"
          />

          <BsArrowDownCircle
            onClick={handleNext}
            className="text-3xl text-red hover:text-black tr -rotate-90 cursor-pointer"
          />
        </div>

        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          speed={500}
          pagination={{
            clickable: true,
          }}
        >
          {products?.map((data, i) => (
            <SwiperSlide key={i}>
              <ProductCard data={data} key={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Products;
