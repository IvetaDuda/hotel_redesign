"use client";

import { handleScroll } from "@/helpers/handleScroll";
import Link from "next/link";
import React from "react";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link href="#hero" className={styles.logo} onClick={handleScroll}>
      MP
    </Link>
  );
};

export default Logo;
