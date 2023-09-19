import About from "@/sections/About/About";
import Contacts from "@/sections/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import Hero from "@/sections/Hero/Hero";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      {/* <div className={styles.wrapper}> */}
      <Hero />
      {/* </div> */}
      <About />
      <div className={styles.wrapper}>
        {/* <About /> */}
        <Contacts />
        <Footer />
      </div>
    </>
  );
}
