import Hero from '@/sections/Hero/Hero';
import dynamic from 'next/dynamic';
// import styles from './page.module.scss';

const DynamicAboutUs = dynamic(() => import('@/sections/AboutUs/AboutUs'));
const DynamicContacts = dynamic(() => import('@/sections/Contacts/Contacts'));
const DynamicServices = dynamic(() => import('@/sections/Services/Services'));
const DynamicForm = dynamic(() => import('@/sections/Form/Form'));

export default function Home() {
  return (
    <>
      <Hero />
      <DynamicAboutUs />
      <DynamicServices />
      <DynamicForm />
      <DynamicContacts />
    </>
  );
}
