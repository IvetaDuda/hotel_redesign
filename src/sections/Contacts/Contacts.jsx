import React from 'react';

import styles from './Contacts.module.scss';
import Form from '@/components/Form/Form';
import TelEmail from '@/components/TelEmail/TelEmail';
const Contacts = () => {
  return (
    <section id="contacts" className={styles.container}>
      <Form />
      <div>
        <div className={styles.contactsMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10645.623955888715!2d24.48969076321208!3d48.160256103335335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4736fd3965b8a627%3A0xf7a31f87d1e4af55!2z0JPQvtCy0LXRgNC70LA!5e0!3m2!1suk!2sua!4v1701025236740!5m2!1suk!2sua"
            width="500"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <TelEmail className={styles.contactText} />
      </div>
    </section>
  );
};

export default Contacts;
