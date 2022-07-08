import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

export function SwiperGallery() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="lg:max-w-[970px] max-h-[500px] rounded-md z-[-1] md:max-w-[650px] align-center max-w-[450px] md-flex"
      >
        <SwiperSlide className="flex items-center">
          <img src="./img/gallery1.jpeg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center">
          <img src="./img/gallery2.jpeg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center">
          <img src="./img/gallery3.jpeg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center">
          <img src="./img/gallery4.jpeg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center">
          <img src="./img/gallery5.jpeg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
