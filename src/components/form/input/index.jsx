import React from 'react';

import styles from './style.module.css';

export const Input = ({ type = 'text', name, register, placeholder, error }) => {
  return (
    <div className={styles.form_group}>
      <input type={type} {...register(name)} placeholder={placeholder} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
