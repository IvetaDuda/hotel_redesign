import { AiFillMail, AiFillPhone } from 'react-icons/ai';
import styles from './ContactLink.module.scss';

const ContactLink = () => {
  return (
    <ul className={styles.contactContainer}>
      <li>
        <svg className={styles.svg + ' ' + styles.svgEmail}>
          <use href="sprite.svg#email" />
        </svg>
      </li>
      <li>
        <svg className={styles.svg + ' ' + styles.svgPhone}>
          <use href="sprite.svg#phone" />
        </svg>
      </li>
    </ul>
  );
};

export default ContactLink;
