import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.aboutContainer}>
        <li className={styles.aboutItem}>
          <div className={styles.aboutContent}>
            <h3 className={styles.aboutTitle}>Котеджі</h3>
            <p className={styles.aboutText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              necessitatibus a vero odit quod minima atque nemo porro rerum
              culpa dolores asperiores quasi saepe, aliquam suscipit,
              consequatur, quisquam veniam ratione!
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default AboutUs;
