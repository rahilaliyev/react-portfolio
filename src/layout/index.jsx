import React from 'react';

import './style.module.css';

import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
