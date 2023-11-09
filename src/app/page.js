import About from '@/sections/About/About';

import Hero from '@/sections/Hero/Hero';
import styles from './page.module.scss';
import Image from 'next/image';
import BottomSection from '@/sections/BottomSection/BottomSection';
import TelEmail from '@/components/TelEmail/TelEmail';
import ContactLink from '@/components/ContactLink/ContatLink';

export default function Home() {
  return (
    // <>
    <div className={styles.heroWrapper}>
      {/* <div className={styles.imgContainer}>
          <Image
            src="/jonathan-ansel-moy-de-vitry-Fvb8EH50PxQ-unsplash.jpg"
            fill={true}
            alt="nature"
          />
        </div> */}

      <Hero />
      {/* </div> */}
      <ContactLink />
      <About />
      <BottomSection />
    </div>
    // </>
  );
}
