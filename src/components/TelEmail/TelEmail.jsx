import React from 'react';
import styles from './TelEmail.module.scss';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';

const TelEmail = ({ className }) => {
  return (
    <ul className={styles.contactsWrapper + ' ' + `${className}`}>
      <li className={styles.contact}>
        <a href="tel:+380966058605" className={styles.contactLink}>
          <svg className={styles.svg + ' ' + styles.svgPhone}>
            <use href="sprite.svg#phone" />
          </svg>
          <p className={styles.link + ' ' + styles.textLinkAnimation}>
            +38 (096) 605 86 05
          </p>
        </a>
      </li>
      <li className={styles.contact}>
        <a
          href="mailto:inbox.webevery@gmail.com"
          className={styles.contactLink}
        >
          <svg className={styles.svg + ' ' + styles.svgEmail}>
            <use href="sprite.svg#email" />
          </svg>
          <p className={styles.link + ' ' + styles.textLinkAnimation}>
            inbox.webevery@gmail.com
          </p>
        </a>
      </li>
    </ul>
  );
};

export default TelEmail;
