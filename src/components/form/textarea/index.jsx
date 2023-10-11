import React from 'react';

import styles from './style.module.css';
export const Textarea = ({ name, rows = 5, placeholder }) => {
  return (
    <div className={styles.form_group}>
      <textarea name={name} rows={rows} placeholder={placeholder}></textarea>
    </div>
  );
};
