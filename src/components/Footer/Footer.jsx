import Contacts from '@/sections/Contacts/Contacts';
import React from 'react';
import Form from '../../sections/Form/Form';
import HeaderLinks from '../Header/HeaderLinks/HeaderLinks';
import SocialLinks from '../SocialLinks/SocialLinks';
import TelEmail from '../ContactsLink/ContactsLink';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <SocialLinks costumeStyles={styles.sicialLinks} />
      <HeaderLinks
        costumStyles={styles.links}
        costumStylesLink={styles.linkTitle}
        costumStylesArrow={styles.stylesArrow}
      />
      <a
        className={styles.footerWebevery}
        href="https://webevery.dev/"
        target="_blank"
        rel="noopener noreferrer "
      >
        webevery.dev
      </a>

      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Усі права захищені.
      </p>
    </footer>
  );
};

export default Footer;
