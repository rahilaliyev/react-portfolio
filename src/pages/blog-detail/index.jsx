import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './style.module.css';

export const BlogDetail = () => {
  const { id } = useParams();
  const data = useSelector(state => state.blog.find(el => el.id === Number(id)));

  return (
    <section>
      <div className="container">
        <h1>{data?.title}</h1>
        <div className={styles.img}>
          <img src={data?.imageLink} alt={data?.title} />
        </div>
        {data?.content?.map((text, key) => (
          <div key={key}>
            <h3>{text.header}</h3>
            <p>{text.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
