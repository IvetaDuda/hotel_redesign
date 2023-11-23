import { offers } from '@/data/offers';
import Image from 'next/image';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.aboutTitle}>Наші послуги</h2>
      <ul className={styles.aboutContainer}>
        {offers.map(({ id, img, title, text }) => (
          <li className={styles.aboutItem} key={id}>
            {/* <div className={styles.imgContainer}> */}
            <Image src={img} fill={true} alt="img" className={styles.img} />
            {/* </div> */}
            <div className={styles.aboutContent}>
              <h3 className={styles.aboutSubitle}>{title}</h3>
              <p className={styles.aboutText}>{text}</p>
              <button type="button" className={styles.aboutBtn}>
                Детальніше
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutUs;
