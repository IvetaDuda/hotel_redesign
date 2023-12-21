'use client';

import React, { useContext } from 'react';
import styles from './HeaderLinks.module.scss';
import Link from 'next/link';
import { handleScroll } from '@/helpers/handleScroll';
import { headerLinks } from '@/data/headerLinks';
import { usePathname } from 'next/navigation';
import { SiteContext } from '@/context/SiteContext';

const HeaderLinks = ({ costumStyles, costumStylesLink, costumStylesArrow }) => {
  const pathname = usePathname();
  const { setBurgerMenu } = useContext(SiteContext);

  const clickLink = () => {
    handleScroll;
    setBurgerMenu(false);
  };

  return (
    <ul className={styles.navLinks + ' ' + costumStyles}>
      {headerLinks.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={item.id}>
            <Link
              href={item.href}
              onClick={clickLink}
              className={
                isActive
                  ? styles.activeLink
                  : ' ' + styles.textLinkAnimation + ' ' + costumStylesArrow
              }
            >
              <p className={costumStylesLink}>{item.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderLinks;
