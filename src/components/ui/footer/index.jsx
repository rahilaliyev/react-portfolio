import React from 'react';

import styles from './style.module.css';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p className={styles.copyright}>
          © Copyright <strong>DevFolio</strong>. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
