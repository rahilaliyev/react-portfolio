import { createSlice } from '@reduxjs/toolkit';
import { PROJECT_DATA } from 'src/contants/project-data';

const projectReducer = createSlice({
  name: 'projects',
  initialState: PROJECT_DATA,
  reducers: {},
});

export default projectReducer.reducer;
