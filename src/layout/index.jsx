import React from 'react';

import './style.module.css';

import { Outlet } from 'react-router-dom';
import { Header } from 'src/components';
import { Footer } from 'src/components/ui/footer';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
