import { useCallback, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { banners } from "../../../assets/data/banners";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BsArrowDownCircle } from "react-icons/bs";
import arrowright from "../../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  const [swiperRef, setSwiperRef] = useState();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  return (
    <div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={500}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {banners?.map(({ img, heading, subtext, link }, i) => (
          <SwiperSlide key={i}>
            <div className="relative">
              <img src={img} alt="" className="w-full lg:h-full h-[600px] object-cover" />
              <div className="absolute lg:left-20 left-8 bottom-20 text-white">
                <h1 className="lg:text-[64px] text-2xl font-bold">{heading}</h1>
                <div className="flex items-center lg:gap-12 gap-8 lg:mt-6 mt-3">
                  <p className="lg:text-[20px] text-sm text-light">{subtext}</p>
                  <Link to={link}>
                    <img src={arrowright} alt="arrow" className="lg:h-8 h-5" />
                  </Link>
                </div>
              </div>
              <div className="lg:px-20 px-8 w-full flex justify-between absolute top-1/2 -translate-y-1/2 z-10">
                <BsArrowDownCircle
                  onClick={handlePrevious}
                  className="lg:text-[70px] text-2xl text-gray-200 opacity-20 hover:opacity-90 hover:text-red-500 tr rotate-90 cursor-pointer"
                />

                <BsArrowDownCircle
                  onClick={handleNext}
                  className="lg:text-[70px] text-2xl text-gray-200 opacity-20 hover:opacity-90 hover:text-red-500 tr -rotate-90 cursor-pointer"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
