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
  };

  const burgerMenuChange = burgerMenu
    ? styles.burgerMenuOpen
    : styles.burgerMenu;

  const burgerMenuChangeOpen = burgerMenu
    ? styles.burgerMenuContainerOpen
    : styles.burgerMenuContainer;
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        <HeaderLinks costumStylesLink={styles.linkTitle} />
      </div>
      <button className={burgerMenuChange} onClick={openModal}>
        <span className={styles.burgerMenuBtnAfter}></span>
      </button>
      <div className={burgerMenuChangeOpen}></div>
      {burgerMenu && (
        <HeaderMobile burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      )}
    </header>
  );
};

export default Header;
