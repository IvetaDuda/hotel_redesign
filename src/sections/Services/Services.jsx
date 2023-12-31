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

  // const handleButtonClick = () => {
  //   if (swiperRef.current && swiperRef.current.swiper) {
  //     swiperRef.current.swiper.autoplay.stop();
  //   }
  // };

  // const handleButtonBlur = () => {
  //   if (swiperRef.current && swiperRef.current.swiper) {
  //     swiperRef.current.swiper.autoplay.start();
  //   }
  // };

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
        // className="mySwiper"
      >
        {offers.map(({ id, img, title, text }) => (
          <SwiperSlide className={styles.servicesItem} key={id}>
            <Image
              src={img}
              fill={true}
              alt="img"
              className={styles.img}
              sizes="100vw"
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
              {/* <button
                type="button"
                className={styles.servicesBtn}
                onClick={() => handleButtonClick()}
                onBlur={handleButtonBlur}
              >
                Детальніше
              </button> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;

// import { offers } from '@/data/offers';
// import Image from 'next/image';
// import styles from './Services.module.scss';

// const Services = () => {
//   return (
//     <section className={styles.container} id="services">
//       <h2 className={styles.servicesTitle}>Наші послуги</h2>
//       <ul className={styles.servicesContainer}>
//         {offers.map(({ id, img, title, text }) => (
//           <li className={styles.servicesItem} key={id}>
//             {/* <div className={styles.imgContainer}> */}
//             <Image src={img} fill={true} alt="img" className={styles.img} />
//             {/* </div> */}
//             <div className={styles.servicesContent}>
//               <h3 className={styles.servicesSubitle}>{title}</h3>
//               <p className={styles.servicesText}>{text}</p>
//               <button type="button" className={styles.servicesBtn}>
//                 Детальніше
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Services;
