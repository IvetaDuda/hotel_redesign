import styles from './SocialLinks.module.scss';
import { v4 } from 'uuid';

const socialLinks = [
  {
    id: 1,
    title: 'instagram',
    url: '#icon-instagram',
  },
  {
    id: 2,
    title: 'telegram',
    url: '#icon-telegram',
  },
  {
    id: 3,
    title: 'facebook',
    url: '#icon-facebook',
  },
];

const SocialLinks = ({ costumeStyles }) => {
  return (
    <ul className={styles.socialList + ' ' + costumeStyles}>
      {socialLinks.map(({ id, title, url }) => (
        <li key={id} className={styles.linkContainer}>
          <a href="#" className={styles.linkItem}>
            <svg className={styles.linkSvg}>
              <use href={`sprite.svg${url}`} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
