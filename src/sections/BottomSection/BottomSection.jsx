import Footer from '@/components/Footer/Footer';
import React from 'react';
import Contacts from '../Contacts/Contacts';
import styles from './BottomSection.module.scss';

const BottomSection = () => {
  return (
    <div className={styles.wrapper}>
      <Contacts />
      {/* <Footer /> */}
    </div>
  );
};

export default BottomSection;
