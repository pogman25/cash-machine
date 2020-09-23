import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: { id: -1, name: '', avatar: '', card: '', amount: -1, pin: '' },
    isFetching: false,
    error: '',
  },
  reducers: {
    getUsersStart: state => {
      state.isFetching = true;
      state.error = '';
    },
    getUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.profile = action.payload;
    },
    getUserError: (state, action) => {
      state.isFetching = true;
      state.error = action.payload;
    },
  },
});

export const { getUsersStart, getUsersSuccess, getUserError } = userSlice.actions;

export const getUser = ({ pin, card }) => async dispatch => {
  dispatch(getUsersStart());
  try {
    const res = Axios.get('http://localhost:3004/clients', { params: { pin, card } });
    console.log(res);
  } catch (err) {
    getUserError(err);
  }
};

export const selectUser = state => state.user.profile;

export default userSlice.reducer;
