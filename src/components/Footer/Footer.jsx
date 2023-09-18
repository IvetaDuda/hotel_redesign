import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://webevery.dev/"
        target="_blank"
        rel="noopener noreferrer "
      >
        webevery.dev
      </a>
    </footer>
  );
};

export default Footer;
