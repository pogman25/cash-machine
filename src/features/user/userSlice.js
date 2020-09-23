import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
import { showError } from '../noti/notiSlice';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: { id: -1, name: '', avatar: '', card: '', amount: -1, pin: '' },
    isFetching: false,
  },
  reducers: {
    getUsersStart: state => {
      state.isFetching = true;
    },
    getUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.profile = action.payload;
    },
    [showError]: state => {
      state.isFetching = false;
    },
  },
});

export const { getUsersStart, getUsersSuccess } = userSlice.actions;

export const getUser = ({ pin, card }) => async dispatch => {
  dispatch(getUsersStart());
  try {
    const { status, data } = await Axios.get('http://localhost:3004/clients', {
      params: { pin, card },
    });

    if (status === 200 && data.length > 0) {
      const [user] = data;
      dispatch(getUsersSuccess(user));
    } else {
      dispatch(showError('No matches found'));
    }
  } catch (err) {
    dispatch(showError('Internal server error'));
  }
};

export const selectUser = state => state.user.profile;

export default userSlice.reducer;
