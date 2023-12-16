'use client';

import React from 'react';
import styles from './HeaderLinks.module.scss';
import Link from 'next/link';
import { handleScroll } from '@/helpers/handleScroll';
import { headerLinks } from '@/data/headerLinks';
import { usePathname } from 'next/navigation';

const HeaderLinks = ({ costumStyles, costumStylesLink, costumStylesArrow }) => {
  const pathname = usePathname();

  return (
    <ul className={styles.navLinks + ' ' + costumStyles}>
      {headerLinks.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={item.id}>
            <Link
              href={item.href}
              onClick={handleScroll}
              className={
                isActive
                  ? styles.activeLink
                  : ' ' + styles.textLinkAnimation + ' ' + costumStylesArrow
              }
            >
              {/* <p className={styles.linkTitle}>{item.title}</p> */}
              <p className={costumStylesLink}>{item.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderLinks;
