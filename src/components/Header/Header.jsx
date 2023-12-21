'use client';

import React, { useContext, useEffect, useState } from 'react';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import styles from './Header.module.scss';
import HeaderLinks from './HeaderLinks/HeaderLinks';
import Logo from './Logo/Logo';
import { SiteContext } from '@/context/SiteContext';

const Header = () => {
  const { burgerMenu, setBurgerMenu, openModal } = useContext(SiteContext);
  // const [burgerMenu, setBurgerMenu] = useState(false);

  // const openModal = () => {
  //   setBurgerMenu((prevState) => !prevState);
  // };

  useEffect(() => {
    if (burgerMenu) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [burgerMenu]);

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
      {burgerMenu && <HeaderMobile />}
    </header>
  );
};

export default Header;
