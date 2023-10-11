import React from 'react';

import styles from './style.module.css';

import { Link, NavLink } from 'react-router-dom';
import { NAV_LINK } from 'src/contants/nav-link';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <Link to="/"> RAHIL</Link>
        </div>
        <nav>
          <ul>
            {NAV_LINK.map((list, key) => (
              <li key={key}>
                <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to={list.link}>
                  {list.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
