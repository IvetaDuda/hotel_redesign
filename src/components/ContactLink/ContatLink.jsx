import { AiFillMail, AiFillPhone } from 'react-icons/ai';
import styles from './ContactLink.module.scss';

const ContactLink = () => {
  return (
    <ul className={styles.contactContainer}>
      <li className={styles.contactItem}>
        <svg className={styles.svg + ' ' + styles.svgEmail}>
          <use href="sprite.svg#email" />
        </svg>
        <a
          href="tel:+380966058605"
          className={styles.link + ' ' + 'textLinkAnimation'}
        >
          +38 (096) 605 86 05
        </a>
      </li>
      <li className={styles.contactItem}>
        <svg className={styles.svg + ' ' + styles.svgPhone}>
          <use href="sprite.svg#phone" />
        </svg>
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

export default ContactLink;
