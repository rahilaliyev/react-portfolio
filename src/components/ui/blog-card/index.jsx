import React from 'react';

import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';

export const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.blog_card}>
      <div className={styles.card_img}>
        <img src={blog?.imageLink} alt={blog?.title} />
      </div>{' '}
      <div className={styles.blog_card_content}>
        <h2 className={styles.blog_card_title}>{blog?.title}</h2>
        <p className={styles.blog_card_description}>{blog?.content?.[0]?.text}</p>
        <button className={styles.read_more_btn} onClick={() => navigate(`/blog/${blog?.id}`)}>
          Read More
        </button>
      </div>
    </div>
  );
};
