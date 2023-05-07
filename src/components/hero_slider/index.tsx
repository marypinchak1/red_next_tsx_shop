import React, { useEffect } from 'react';
import s from "./index.module.scss";
import Swiper from 'swiper';
import Image from 'next/image';
import Slide1 from '../../assets/images/hero-slide1.png';

const HeroSlider = () => {

    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            // Swiper options here
        });
    }, []);

    return (
        <>

            <div className={`swiper-container ${s.hero_slider}`}>
                <div className={`swiper-wrapper ${s.hero_slider__wrapper}`}>
                    <div className={`swiper-slide ${s.hero_slider__slide}`}>
                        <div className={s.hero_slider__image_container}>
                            <Image
                                src={Slide1}
                                alt="Picture of the author"
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            />

                            <div className={s.hero_slider__circle}>
                                <div className={s.hero_slider__circle_text}>
                                    Text <span className={s.hero_slider__middle_dot}>&middot;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </>
    );
};

export default HeroSlider;
