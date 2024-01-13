import Hero from '@/sections/Hero/Hero';
import dynamic from 'next/dynamic';
// import styles from './page.module.scss';

const DynamicHero = dynamic(() => import('@/sections/Hero/Hero'));
const DynamicAboutUs = dynamic(() => import('@/sections/AboutUs/AboutUs'));
const DynamicContacts = dynamic(() => import('@/sections/Contacts/Contacts'));
const DynamicServices = dynamic(() => import('@/sections/Services/Services'));
const DynamicForm = dynamic(() => import('@/sections/Form/FormHook'));

export default function Home() {
  return (
    <>
      <DynamicHero />
      <DynamicAboutUs />
      <DynamicServices />
      <DynamicForm />
      <DynamicContacts />
    </>
  );
}
