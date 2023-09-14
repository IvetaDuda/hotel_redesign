"use client";

import React from "react";
import styles from "./About.module.scss";
import { fasilities } from "../../data/facilities";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
console.log(fasilities);

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectCoverflow,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./swiper.css";

const About = () => {
  return (
    <section className={styles.about}>
      <h2>Вас чекає:</h2>
      <Swiper
        // cssMode={true}
        // loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
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
        modules={[
          Navigation,
          Pagination,
          Mousewheel,
          Keyboard,
          EffectCoverflow,
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

{
  /* <SwiperSlide>Slide 1</SwiperSlide>
<SwiperSlide>Slide 2</SwiperSlide>
<SwiperSlide>Slide 3</SwiperSlide>
<SwiperSlide>Slide 4</SwiperSlide>
<SwiperSlide>Slide 5</SwiperSlide>
<SwiperSlide>Slide 6</SwiperSlide>
<SwiperSlide>Slide 7</SwiperSlide>
<SwiperSlide>Slide 8</SwiperSlide>
<SwiperSlide>Slide 9</SwiperSlide> */
}
