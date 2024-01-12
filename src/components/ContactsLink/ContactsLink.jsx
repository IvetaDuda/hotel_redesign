import React from 'react';
import styles from './ContactsLink.module.scss';
import SocialLinks from '../SocialLinks/SocialLinks';

const ContactsLink = ({ className }) => {
  return (
    <ul className={styles.contactsWrapper + ' ' + `${className}`}>
      <li className={styles.contact}>
        <h3 className={styles.subtitle}>Адреса:</h3>
        <p className={styles.contactLink}>
          Закарпатська область, Піп Іван Мармароський
        </p>
      </li>
      <li className={styles.contact}>
        <h3 className={styles.subtitle}>Контактний телефон:</h3>
        <a href="tel:+380966058605" className={styles.contactLink}>
          <p className={styles.link + ' ' + styles.textLinkAnimation}>
            +38 (096) 605 86 05
          </p>
        </a>
      </li>
      <li className={styles.contact}>
        <h3 className={styles.subtitle}>Електронна пошта:</h3>
        <a
          href="mailto:inbox.webevery@gmail.com"
          className={styles.contactLink}
        >
          <p className={styles.link + ' ' + styles.textLinkAnimation}>
            inbox.webevery@gmail.com
          </p>
        </a>
      </li>
      <li>
        <SocialLinks />
      </li>
    </ul>
  );
};

export default ContactsLink;
