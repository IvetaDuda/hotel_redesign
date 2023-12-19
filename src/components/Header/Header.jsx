'use client';

import React, { useState } from 'react';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import styles from './Header.module.scss';
import HeaderLinks from './HeaderLinks/HeaderLinks';
import Logo from './Logo/Logo';

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const openModal = () => {
    setBurgerMenu((prevState) => !prevState);

    // setTimeout(() => {
    //   setModalBackdrop(true);
    // }, 100);
  };

  const burgerMenuChange = burgerMenu
    ? styles.burgerMenuOpen
    : styles.burgerMenu;

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        <HeaderLinks costumStylesLink={styles.linkTitle} />
      </div>
      <button className={burgerMenuChange} onClick={openModal}>
        <span className={styles.burgerMenuBtnAfter}></span>
      </button>
      {burgerMenu && <HeaderMobile />}
    </header>
  );
};

export default Header;
