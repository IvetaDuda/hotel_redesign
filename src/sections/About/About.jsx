"use client";

import React from "react";
import styles from "./About.module.scss";
import { fasilities } from "../../data/facilities";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
// console.log(fasilities);

import {
  Navigation,
  Pagination,
  // Mousewheel,
  Keyboard,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./swiper.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>Вас чекає:</h2>
      <Swiper
        // cssMode={true}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        // mousewheel={true}
        keyboard={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4.5,
          slideShadows: true,
        }}
        spaceBetween={30}
        speed={1000}
        autoplay={{
          delay: 3000,
          // speed: 6000,
          disableOnInteraction: false,
        }}
        modules={[
          Navigation,
          Pagination,
          // Mousewheel,
          Keyboard,
          EffectCoverflow,
          Autoplay,
        ]}
        className={styles.mySwiper}
      >
        {fasilities.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              <div className="img-wrapper">
                <Image src={el.img} fill={true} alt="el.title" />
              </div>
              <h3>{el.title}</h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default About;
