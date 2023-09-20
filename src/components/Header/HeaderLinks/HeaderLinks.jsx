"use client";

import React from "react";
import styles from "./HeaderLinks.module.scss";
import Link from "next/link";
import { handleScroll } from "@/helpers/handleScroll";
import { headerLinks } from "@/data/headerLinks";
import { usePathname } from "next/navigation";

const HeaderLinks = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <ul className={styles.navLinks}>
      {headerLinks.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={item.id}>
            <Link
              href={item.href}
              onClick={handleScroll}
              className={isActive ? styles.activeLink : " "}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderLinks;
