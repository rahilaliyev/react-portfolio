import React from 'react';

import styles from './style.module.css';

export const Input = ({ type = 'text', name, placeholder }) => {
  return (
    <div className={styles.form_group}>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};
