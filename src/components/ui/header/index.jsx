import React from 'react';
import Logo from 'src/assets/images/logo.png';
import styles from './style.module.css';

import { Link, NavLink } from 'react-router-dom';
import { NAV_LINK } from 'src/contants/nav-link';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <Link to="/">
            <img
              src="https://jimdo-storage.freetls.fastly.net/image/219610428/e16eb0fb-7538-47af-ab59-2decade34c8e.png?quality=80,90&auto=webp&disable=upscale&width=320&height=120&trim=0,0,0,0 320w, https://jimdo-storage.freetls.fastly.net/image/219610428/e16eb0fb-7538-47af-ab59-2decade34c8e.png?quality=80,90&auto=webp&disable=upscale&width=160&height=60&trim=0,0,0,0 160w"
              alt="Logo"
            />{' '}
          </Link>
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
