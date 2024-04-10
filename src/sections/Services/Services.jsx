'use client';

import { offers } from '@/data/offers';
import Image from 'next/image';
import styles from './Services.module.scss';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './swiperServices.css';
import Link from 'next/link';

const Services = () => {
  const [textHeight, setTextHeight] = useState(false);
  const swiperRef = useRef(null);

  const handleToggleText = () => {
    setTextHeight(!textHeight);
  };

  const textStyles = !textHeight
    ? styles.servicesTextHidden + ' ' + styles.servicesText
    : styles.activeText + ' ' + styles.servicesText;

  return (
    <section className={styles.container} id="services">
      <Swiper
        ref={swiperRef}
        pagination={{
          dynamicBullets: true,
        }}
        speed={3200}
        autoplay={{
          delay: 5000,
        }}
        effect="slide"
        modules={[Pagination, Autoplay]}
      >
        {offers.map(({ id, img, title, text }) => (
          <SwiperSlide className={styles.servicesItem} key={id}>
            <Image
              src={img}
              fill={true}
              alt="img"
              className={styles.img}
              sizes="100vw"
              // loading="lazy"
              priority="true"
            />
            <div className={styles.servicesContent}>
              <h3 className={styles.servicesSubitle}>{title}</h3>

              <p className={textStyles} onClick={handleToggleText}>
                {text}
              </p>
              <Link href="#form" className={styles.servicesLink}>
                Звяжіться з нами для надання більш детальної інформації
                <svg className={styles.servicesLinkSvg}>
                  <use href="sprite.svg#icon-chevron-down" />
                </svg>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
