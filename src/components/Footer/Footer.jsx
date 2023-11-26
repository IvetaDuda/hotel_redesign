import Contacts from '@/sections/Contacts/Contacts';
import React from 'react';
import Form from '../Form/Form';
import HeaderLinks from '../Header/HeaderLinks/HeaderLinks';
import TelEmail from '../TelEmail/TelEmail';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contacts">
      {/* <div className={styles.content}> */}
      <HeaderLinks
        costumStyles={styles.links}
        costumStylesLink={styles.linkTitle}
      />
      {/* <TelEmail /> */}
      {/* </div> */}
      <a
        className={styles.footerWebevery}
        href="https://webevery.dev/"
        target="_blank"
        rel="noopener noreferrer "
      >
        webevery.dev
      </a>
    </footer>
  );
};

export default Footer;
