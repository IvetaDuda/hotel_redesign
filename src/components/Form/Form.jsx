import React from "react";
import styles from "./Form.module.scss";

const Form = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Name" />
      <input type="tel" placeholder="Phone" />
      <input type="email" placeholder="example@email.com" />
      <textarea cols="30" rows="2" placeholder="Your message"></textarea>
    </form>
  );
};

export default Form;
