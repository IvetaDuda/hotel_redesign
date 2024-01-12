'use client';

import { handleScroll } from '@/helpers/handleScroll';
import Link from 'next/link';
import React from 'react';
import styles from './Hero.module.scss';
const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <h1 className={styles.heroTitle}>MAGIC PLACE</h1>
      {/* <p className={styles.description}>
        Дозвольте собі відпочинок у спокої та гармонії серед захоплюючого
        гірського пейзажу, де кожна відпустка - це незабутня подорож до
        природи.
      </p> */}
      <p className={styles.description}>
        Дозвольте собі відпочинок у спокої та гармонії серед захоплюючого
        гірського пейзажу.
      </p>
      <Link
        className={styles.heroArrow}
        href="#about"
        onClick={handleScroll}
        title="посилання на секцію про нас"
      >
        <svg className={styles.heroArrowSvg}>
          <use href="sprite.svg#icon-chevron-down" />
        </svg>
      </Link>
    </section>
  );
};

export default Hero;
