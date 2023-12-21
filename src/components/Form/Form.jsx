import React from 'react';
import styles from './Form.module.scss';

const Form = () => {
  return (
    <section id="form" className={styles.container}>
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
            Ваше ім&#39;я
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
            Номер телефону
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
            Ваша пошта
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
            Ваше повідомлення
          </label>
        </div>
        <button type="submit" className={styles.formButton}>
          Відправити
        </button>
      </form>
    </section>
  );
};

export default Form;
