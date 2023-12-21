import Hero from '@/sections/Hero/Hero';
import AboutUs from '@/sections/AboutUs/AboutUs';
import Contacts from '@/sections/Contacts/Contacts';
import Services from '@/sections/Services/Services';
import Form from '@/sections/Form/Form';
// import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Form />
      <Contacts />
    </>
  );
}
