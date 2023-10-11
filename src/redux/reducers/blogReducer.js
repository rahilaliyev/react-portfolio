import { createSlice } from '@reduxjs/toolkit';
import { BLOG_DATA } from 'src/contants/blog-data';

const blogReducer = createSlice({
  name: 'projects',
  initialState: BLOG_DATA,
  reducers: {},
});

export default blogReducer.reducer;
