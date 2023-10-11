import React from 'react';

import styles from './style.module.css';

import { Link } from 'react-router-dom';

export const ProjectCard = ({ project }) => {
  return (
    <Link to={project?.link} target="_blank" className={styles.project_card}>
      <div className={styles.project_img}>
        <img src={project?.image} alt={project?.name} />
      </div>
      <h5 className={styles.project_card_header}>{project?.name}</h5>
      <p className={styles.project_card_desc}>{project?.description}</p>{' '}
      <div>
        {project?.tags?.map((tag, key) => (
          <span className={tag?.color} key={key}>
            #{tag?.name}{' '}
          </span>
        ))}
      </div>{' '}
    </Link>
  );
};
