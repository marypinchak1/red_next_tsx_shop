import React, { useEffect } from "react";

import Swiper from "swiper";
import "swiper/swiper-bundle.min.css"; 
import s from "./index.module.scss";
import Image from "next/image";
import Slide1 from "../../assets/images/hero-slide1.png";

const HeroSlider = () => {
    useEffect(() => {
        const swiper = new Swiper(".swiper", {
            loop: true,
            slidesPerView: 1,
            pagination: {
                el: ".swiper-pagination, .swiper_pagination",
                bulletClass: "swiper-pagination-bullet swiper_pagination_bullet",
                clickable: true,
            },
        });
    }, []);

    return (
        <section className={s.hero}>
            <div className={`swiper ${s.hero__slider}`}>
                <div className={`swiper-wrapper ${s.hero__slider_wrapper}`}>
                    <div className={`swiper-slide ${s.hero__slider_slide}`}>
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
                    </div>
                    <div className={`swiper-slide ${s.hero__slider_slide}`}>
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
                                    <p className={s.hero__slider_circle_text_third}>HERE+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`swiper-pagination ${s.swiper_pagination}`}>
                    <span className={`swiper-pagination-bullet ${s.swiper_pagination_bullet}`}></span>
                    <span className={`swiper-pagination-bullet swiper-pagination-bullet-active ${s.swiper_pagination_bullet} ${s.swiper_pagination_bullet_active}`}></span>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
