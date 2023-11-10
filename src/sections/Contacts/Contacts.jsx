import React from 'react';
// import { AiFillPhone, AiFillMail } from "react-icons/ai";

import styles from './Contacts.module.scss';
import Form from '@/components/Form/Form';
import TelEmail from '@/components/TelEmail/TelEmail';
const Contacts = () => {
  return (
    <section id="contacts" className={styles.contacts}>
      {/* <TelEmail /> */}
      <Form />
    </section>
  );
};

export default Contacts;
