/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const notiSlice = createSlice({
  name: 'noti',
  initialState: {
    success: '',
    error: '',
  },
  reducers: {
    showError: (state, action) => {
      state.error = action.payload;
    },
    showSuccess: (state, action) => {
      state.success = action.payload;
    },
    hideNoti: (state, action) => {
      state[action.payload] = '';
    },
  },
});

export const { showError, showSuccess, hideNoti } = notiSlice.actions;

export const getError = state => state.noti.error;
export const getSuccess = state => state.noti.success;

export default notiSlice.reducer;
