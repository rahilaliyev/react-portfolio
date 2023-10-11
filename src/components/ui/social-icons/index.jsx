import React from 'react';

import styles from './styles.module.css';

export const SocialIcons = ({ link, icon }) => {
  return (
    <a href={link} className={styles.anchor} target="_blank" rel="noreferrer">
      <span>
        <img src={icon} alt="icon" />
      </span>
    </a>
  );
};
