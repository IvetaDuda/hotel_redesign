import { Caveat } from "next/font/google";
import React from "react";
import styles from "./About.module.scss";

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  // display: "swap",
});

const About = () => {
  return (
    <section className={styles.about}>
      <p className={`${caveat.className} ${styles.description}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut vero
        iure magni fugiat voluptas quibusdam eligendi. Debitis perspiciatis
        harum nesciunt, ratione nostrum ad qui doloribus voluptas est
        perferendis impedit inventore rerum tempora repellendus tempore
        consequuntur deleniti tenetur assumenda non praesentium doloremque
        reiciendis ab fugiat! Perferendis neque sit quidem soluta!
      </p>
    </section>
  );
};

export default About;
