import React from "react";
import styles from "./Header.module.scss";
import { headerLinks } from "../../data/headerLinks";
import Link from "next/link";
import TelEmail from "../TelEmail/TelEmail";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        MP
      </a>
      <ul className={styles.navLinks}>
        {headerLinks.map((item) => {
          return (
            <li key={item.id}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <TelEmail className={styles.headerContacts} />
    </header>
  );
};

export default Header;
