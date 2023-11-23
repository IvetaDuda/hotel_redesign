import HeaderLinks from '../HeaderLinks/HeaderLinks';
import styles from './HeaderMobile.module.scss';

const HeaderMobile = () => {
  return (
    <div className={styles.header}>
      <HeaderLinks
        costumStyles={styles.headerNav}
        costumStylesLink={styles.headerNavLink}
      />
      <div className={styles.contacts}>
        <a href="tel:+380966058605" className={styles.contactLink}>
          +38 (096) 605 86 05
        </a>
        <a
          href="mailto:inbox.webevery@gmail.com"
          className={styles.contactLink}
        >
          inbox.webevery@gmail.com
        </a>
      </div>
    </div>
  );
};

export default HeaderMobile;
