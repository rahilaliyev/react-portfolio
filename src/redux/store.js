import blogReducer from './reducers/blogReducer';
import contactFormReducer from './reducers/contactFormReducer';
import projectsReducer from './reducers/projectsReducer';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    contactForm: contactFormReducer,
    blog: blogReducer,
  },
});
