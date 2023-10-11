import React from 'react';

import styles from '../style.module.css';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProjectCard } from 'src/components';

export const Projects = () => {
  const data = useSelector(state => state.projects);
  return (
    <section className={styles.projects}>
      <div className="container">
        <div className={styles.title_box}>
          <h3 className={styles.title}>Projects</h3>
          <div className={styles.line_mf}></div>
        </div>
        <div className={styles.project_data}>
          {data?.slice(0, 3)?.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className={styles.see_more}>
          <Link to="/projects">See all projects</Link>
        </div>
      </div>
    </section>
  );
};
