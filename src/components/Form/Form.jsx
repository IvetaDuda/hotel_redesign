import React from 'react';
import styles from './Form.module.scss';

const Form = () => {
  return (
    <form className={styles.form}>
      <h3 className={styles.formTitle}>Звязатись з нами</h3>
      <input type="text" className={styles.formInput} placeholder="Name" />
      <input type="tel" className={styles.formInput} placeholder="Phone" />
      <input
        type="email"
        className={styles.formInput}
        placeholder="example@email.com"
      />
      <textarea
        className={styles.formInputTextarea}
        cols="30"
        rows="2"
        placeholder="Your message"
      ></textarea>
      <button type="submit" className={styles.formButton}>
        Відправити
      </button>
    </form>
  );
};

export default Form;
