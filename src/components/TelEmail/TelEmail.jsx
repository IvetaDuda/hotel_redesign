import React from 'react';
import styles from './TelEmail.module.scss';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';

const TelEmail = ({ className }) => {
  return (
    <ul className={styles.contactsWrapper + ' ' + `${className}`}>
      <li className={styles.contact}>
        <AiFillMail />
        <a
          href="tel:+380966058605"
          className={styles.link + ' ' + 'textLinkAnimation'}
        >
          +38 (096) 605 86 05
        </a>
      </li>
      <li className={styles.contact}>
        <AiFillPhone />
        <a
          href="mailto:inbox.webevery@gmail.com"
          className={styles.link + ' ' + 'textLinkAnimation'}
        >
          inbox.webevery@gmail.com
        </a>
      </li>
    </ul>
  );
};

export default TelEmail;
