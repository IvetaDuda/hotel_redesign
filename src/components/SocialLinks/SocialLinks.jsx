import { socialLinks } from '@/data/socialLinks';
import styles from './SocialLinks.module.scss';

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
