import About from "@/sections/About/About";
import Contacts from "@/sections/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import Hero from "@/sections/Hero/Hero";
import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.imgContainer}>
        <Image src="/HeroFigmaS.webp" fill={true} />
      </div>

      <Hero />
      <About />
      <div className={styles.wrapper}>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}

{
  /* <div className={styles.imgContainer2}>
<Image src="/lake.jpeg" fill={true} />
</div> */
}
