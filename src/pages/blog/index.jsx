import React from 'react';

import styles from './style.module.css';
import { useSelector } from 'react-redux';
import { BlogCard } from 'src/components';

export const Blog = () => {
  const data = useSelector(state => state.blog);
  return (
    <main>
      <section className={styles.blog}>
        <div className="container">
          <div className={styles.title_box}>
            <h3 className={styles.title}>Blogs</h3>
            <div className={styles.line_mf}></div>
          </div>
          <div className={styles.blog_data}>
            {data?.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
