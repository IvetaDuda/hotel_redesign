'use client';

import React, { useEffect, useState } from 'react';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import styles from './Header.module.scss';
import HeaderLinks from './HeaderLinks/HeaderLinks';
import Logo from './Logo/Logo';

const Header = () => {
  // const [isWideScreen, setIsWideScreen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsWideScreen(window.innerWidth > 768);
  //   };
  //   window.addEventListener('resize', handleResize);
  //   handleResize();
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <header className={styles.header}>
      {/* {isWideScreen ? ( */}
      <div className={styles.headerContainer}>
        <Logo />
        <HeaderLinks costumStylesLink={styles.linkTitle} />
      </div>
      {/* ) : (
        <HeaderMobile />
      )} */}
    </header>
  );
};

export default Header;
