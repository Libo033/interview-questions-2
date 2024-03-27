"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperHome: React.FC<{ size: number }> = ({ size }) => {
  return (
    <div className="h-60 my-auto flex justify-center items-center md:w-2/6 md:h-fit lg:w-3/6">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ disableOnInteraction: false }}
        centeredSlides={true}
      >
        <SwiperSlide>
          <Image
            className="m-auto"
            src={"/img/javascript.svg"}
            alt="javascript"
            width={size}
            height={size}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="m-auto"
            src={"/img/react.svg"}
            alt="react"
            width={size}
            height={size}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="m-auto"
            src={"/img/typescript.svg"}
            alt="typescript"
            width={size}
            height={size}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHome;
