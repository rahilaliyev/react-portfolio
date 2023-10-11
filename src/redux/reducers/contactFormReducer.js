import { createSlice } from '@reduxjs/toolkit';

const contactFormReducer = createSlice({
  name: 'contact-form',
  initialState: [],
  reducers: {
    addForm: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addForm, toggleTodo } = contactFormReducer.actions;

export default contactFormReducer.reducer;
