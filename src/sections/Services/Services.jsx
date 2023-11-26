import { offers } from '@/data/offers';
import Image from 'next/image';
import styles from './Services.module.scss';

const Services = () => {
  return (
    <section className={styles.container} id="services">
      <h2 className={styles.servicesTitle}>Наші послуги</h2>
      <ul className={styles.servicesContainer}>
        {offers.map(({ id, img, title, text }) => (
          <li className={styles.servicesItem} key={id}>
            {/* <div className={styles.imgContainer}> */}
            <Image src={img} fill={true} alt="img" className={styles.img} />
            {/* </div> */}
            <div className={styles.servicesContent}>
              <h3 className={styles.servicesSubitle}>{title}</h3>
              <p className={styles.servicesText}>{text}</p>
              <button type="button" className={styles.servicesBtn}>
                Детальніше
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
