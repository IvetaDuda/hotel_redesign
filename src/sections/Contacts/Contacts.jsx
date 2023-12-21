import React from 'react';

import styles from './Contacts.module.scss';
import Form from '@/components/Form/Form';
import TelEmail from '@/components/TelEmail/TelEmail';
const Contacts = () => {
  return (
    <section id="contacts" className={styles.container}>
      <h2 className={styles.title}>Контакти</h2>
      <p className={styles.text}>
        Звяжіться з нами для надання більш детальної інформації
      </p>

      <div className={styles.containerContact}>
        <TelEmail className={styles.contactText} />
        <div className={styles.contactsMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10694.59546157629!2d24.317530462985935!3d47.92383126877456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4736fa37d754c46b%3A0x7f68fab9f152bedb!2z0J_RltC_INCG0LLQsNC9INCc0LDRgNC80LDRgNC-0YHRjNC60LjQuQ!5e0!3m2!1suk!2sua!4v1702741505458!5m2!1suk!2sua"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
