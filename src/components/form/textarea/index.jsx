import React from 'react';

import styles from './style.module.css';
export const Textarea = ({ name, rows = 5, placeholder, register, error }) => {
  return (
    <div className={styles.form_group}>
      <textarea {...register(name)} rows={rows} placeholder={placeholder}></textarea>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
