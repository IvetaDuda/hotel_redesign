import React from 'react';
import styles from './Header.module.scss';
// import TelEmail from '../TelEmail/TelEmail';
import HeaderLinks from './HeaderLinks/HeaderLinks';
import Logo from './Logo/Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <HeaderLinks />
      {/* <TelEmail className={styles.headerContacts} /> */}
    </header>
  );
};

export default Header;
