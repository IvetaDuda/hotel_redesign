import { AiFillMail, AiFillPhone } from 'react-icons/ai';
import styles from './ContactLink.module.scss';

const ContactLink = () => {
  return (
    <ul className={styles.contactContainer}>
      <li>
        <a href="tel:+380966058605" className={styles.contactLink}>
          <p className={styles.link}>
            {/* <p className={styles.link + ' ' + 'textLinkAnimation'}> */}
            +38 (096) 605 86 05
          </p>
          <div className={styles.contactItem}>
            <svg className={styles.svg + ' ' + styles.svgPhone}>
              <use href="sprite.svg#phone" />
            </svg>
          </div>
        </a>
      </li>
      <li>
        <a
          href="mailto:inbox.webevery@gmail.com"
          className={styles.contactLink}
        >
          <p className={styles.link}>
            {/* <p className={styles.link + ' ' + 'textLinkAnimation'}> */}
            inbox.webevery@gmail.com
          </p>
          <div className={styles.contactItem}>
            <svg className={styles.svg + ' ' + styles.svgEmail}>
              <use href="sprite.svg#email" />
            </svg>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default ContactLink;
