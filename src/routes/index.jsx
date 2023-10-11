import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from 'src/layout';
import { About, Blog, Contact, Home, Projects } from 'src/pages';
import { BlogDetail } from 'src/pages/blog-detail';

export const Pages = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:id" element={<BlogDetail />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
);
