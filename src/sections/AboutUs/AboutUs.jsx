import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.aboutTitle}>Про нас</h2>
      <div className={styles.aboutContainer}>
        <p className={styles.aboutText}>
          В нашому готелі ви зможете,
          <br></br>насолодитися гірськими екскурсіями, прогулянкою на конях,
          гірськими стежками та багатьма іншими активностями, які надихнуть вас.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
