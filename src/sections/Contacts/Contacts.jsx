import React from "react";
// import { AiFillPhone, AiFillMail } from "react-icons/ai";

import styles from "./Contacts.module.scss";
import Form from "@/components/Form/Form";
import TelEmail from "@/components/TelEmail/TelEmail";
const Contacts = () => {
  return (
    <section id="contacts" className={styles.contacts}>
      {/* <div className={styles.contactsWrapper}>
        <div className={styles.contact}>
          <AiFillMail />
          <a href="tel:+380966058605"> +38 (096) 605 86 05</a>
        </div>
        <div className={styles.contact}>
          <AiFillPhone />
          <a href="mailto:inbox.webevery@gmail.com">inbox.webevery@gmail.com</a>
        </div>
      </div> */}
      <TelEmail />
      <Form />
    </section>
  );
};

export default Contacts;
