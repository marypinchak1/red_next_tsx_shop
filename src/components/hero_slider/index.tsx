"use client";
import React from "react";
import "swiper/swiper-bundle.min.css";
import s from "./index.module.scss";
import Image from "next/image";
import Slide1 from "@/assets/images/hero-slide1.png";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSlider = () => {
  return (
    <section className={s.hero}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        // pagination dots
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
      >
        <SwiperSlide>
          <div className={s.hero__slider_image_container}>
            <Image
              src={Slide1}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              quality={100}
            />

            <div className={s.hero__slider_circle}>
              <div className={s.hero__slider_circle_text}>
                <p className={s.hero__slider_circle_text_first}>SHOP</p>
                <p className={s.hero__slider_circle_text_second}>
                  CLOTHING <span></span>
                </p>
                <p className={s.hero__slider_circle_text_third}>HERE</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.hero__slider_image_container}>
            <Image
              src={Slide1}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              quality={100}
            />

            <div className={s.hero__slider_circle}>
              <div className={s.hero__slider_circle_text}>
                <p className={s.hero__slider_circle_text_first}>SHOP</p>
                <p className={s.hero__slider_circle_text_second}>
                  CLOTHING <span></span>
                </p>
                <p className={s.hero__slider_circle_text_third}>HERE</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
