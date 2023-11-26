import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.aboutTitle}>Про нас</h2>
      <div className={styles.aboutContainer}>
        <p className={styles.aboutText}>
          В нашому готелі ви зможете насолодитися гірськими екскурсіями, лижним
          відпочинком та багатьма іншими активностями, які надихнуть вас.
        </p>
        <p className={styles.aboutText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          officiis ullam dicta, consequatur voluptatem facilis tempore minus
          cupiditate quaerat excepturi!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
