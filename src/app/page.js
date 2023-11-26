// import About from '@/sections/About/About';

import Hero from '@/sections/Hero/Hero';
import styles from './page.module.scss';
import ContactLink from '@/components/ContactLink/ContatLink';
import AboutUs from '@/sections/AboutUs/AboutUs';
import Contacts from '@/sections/Contacts/Contacts';
import Services from '@/sections/Services/Services';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ContactLink /> */}
      <AboutUs />
      <Services />
      <Contacts />
    </>
  );
}
