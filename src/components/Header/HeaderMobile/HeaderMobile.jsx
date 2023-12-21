import SocialLinks from '@/components/SocialLinks/SocialLinks';
import { SiteContext } from '@/context/SiteContext';
import { useContext } from 'react';
import HeaderLinks from '../HeaderLinks/HeaderLinks';
import styles from './HeaderMobile.module.scss';

const HeaderMobile = () => {
  const { burgerMenu, setBurgerMenu } = useContext(SiteContext);
  const burgerMenuChangeOpen = burgerMenu
    ? styles.headerMobileOpen + ' ' + styles.headerMobile
    : styles.headerMobileClose + ' ' + styles.headerMobile;
  return (
    <div className={burgerMenuChangeOpen}>
      <HeaderLinks
        costumStyles={styles.headerNav}
        costumStylesLink={styles.headerNavLink}
        setBurgerMenu={setBurgerMenu}
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
      <SocialLinks />
    </div>
  );
};

export default HeaderMobile;
