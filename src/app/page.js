import About from "@/components/About/About";
import Contacts from "@/components/Contacts/Contacts";
import Hero from "@/components/Hero/Hero";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Hero />
      </div>

      <div className={styles.wrapper}>
        <About />
        <Contacts />
      </div>
    </>
  );
}
