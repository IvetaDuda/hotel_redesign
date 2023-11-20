import React from 'react';

import styles from './Contacts.module.scss';
import Form from '@/components/Form/Form';
import TelEmail from '@/components/TelEmail/TelEmail';
const Contacts = () => {
  return (
    <section id="contacts" className={styles.container}>
      <Form />
    </section>
  );
};

export default Contacts;
