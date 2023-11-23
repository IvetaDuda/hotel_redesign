import React from 'react';
import styles from './Form.module.scss';

const Form = () => {
  return (
    <form className={styles.form}>
      <h3 className={styles.formTitle}>Зв&#39;язатися з нами</h3>
      <div className={styles.inputGroup}>
        <input
          type="text"
          className={styles.formInput}
          id="userName"
          placeholder=" "
        />
        <label htmlFor="userName" className={styles.formLabel}>
          Ім&#39;я
        </label>
      </div>
      <div className={styles.inputGroup}>
        <input
          type="tel"
          className={styles.formInput}
          id="tel"
          placeholder=" "
        />
        <label htmlFor="tel" className={styles.formLabel}>
          Телефон
        </label>
      </div>
      <div className={styles.inputGroup}>
        <input
          type="email"
          className={styles.formInput}
          id="email"
          placeholder=" "
        />
        <label htmlFor="email" className={styles.formLabel}>
          Пошта
        </label>
      </div>
      <div className={styles.inputGroup}>
        <textarea
          className={styles.formInputTextarea + ' ' + styles.formInput}
          cols="30"
          rows="2"
          id="message"
          placeholder=" "
        />
        <label htmlFor="message" className={styles.formLabel}>
          Повідомлення
        </label>
      </div>
      <button type="submit" className={styles.formButton}>
        Відправити
      </button>
    </form>
  );
};

export default Form;
