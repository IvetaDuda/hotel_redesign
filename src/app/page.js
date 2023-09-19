import About from "@/sections/About/About";

import Hero from "@/sections/Hero/Hero";
import styles from "./page.module.scss";
import Image from "next/image";
import BottomSection from "@/sections/BottomSection/BottomSection";

export default function Home() {
  return (
    <>
      <div className={styles.heroWrapper}>
        <div className={styles.imgContainer}>
          <Image src="/HeroFigmaS.webp" fill={true} alt="nature" />
        </div>

        <Hero />
      </div>
      <About />
      <BottomSection />
    </>
  );
}
