import About from "@/components/About/About";
import Contacts from "@/components/Contacts/Contacts";
import Hero from "@/components/Hero/Hero";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Hero />
        {/* <About /> */}
      </div>

      <div className={styles.wrapper}>
        <Hero />
        <About />
      </div>
      {/* <Contacts /> */}
    </>
  );
}
