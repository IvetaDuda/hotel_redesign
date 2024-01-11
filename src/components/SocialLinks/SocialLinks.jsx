import styles from './SocialLinks.module.scss';
import { v4 } from 'uuid';

const socialLinks = [
  {
    id: 1,
    title: 'instagram',
    url: '#icon-instagram',
    path: 'https://www.instagram.com/webevery.dev/',
  },
  {
    id: 2,
    title: 'telegram',
    url: '#icon-telegram',
    path: 'https://t.me/Webevery',
  },
  {
    id: 3,
    title: 'facebook',
    url: '#icon-facebook',
    path: 'https://www.facebook.com/profile.php?id=100092267193984',
  },
];

const SocialLinks = ({ costumeStyles }) => {
  return (
    <ul className={styles.socialList + ' ' + costumeStyles}>
      {socialLinks.map(({ id, title, url, path }) => (
        <li key={id} className={styles.linkContainer}>
          <a
            href={path}
            className={styles.linkItem}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
          >
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
