import React from "react";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <h1>MAGIC PLACE</h1>
      <p className={styles.description}>
        Дозвольте собі відпочинок у спокої та гармонії серед захоплюючого
        гірського пейзажу, де кожна відпустка - це незабутня подорожжю до
        природи. <br /> В нашому готелі ви зможете насолодитися гірськими
        екскурсіями, лижним відпочинком та багатьма іншими активностями, які
        надихнуть вас.
      </p>
    </section>
  );
};

export default Hero;
