/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
import { showError } from '../noti/notiSlice';

const emptyUser = { id: -1, name: '', avatar: '', card: '', amount: -1, pin: '' };

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: emptyUser,
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
    resetProfile: state => {
      state.profile = emptyUser;
    },
    getCashSuccess: (state, action) => {
      state.profile.amount -= action.payload;
    },
  },
});

export const { getUsersStart, getUsersSuccess, resetProfile } = userSlice.actions;

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

export const getCashRequest = amount => async (dispatch, getState) => {
  const { profile } = getState().user;

  try {
    const { status, data } = await Axios.put(`http://localhost:3004/clients/${profile.id}`, {
      ...profile,
      amount: profile.amount - amount,
    });
    if (status === 200) {
      dispatch(getUsersSuccess(data));
    } else {
      dispatch(showError("Somthing happens, I don't know"));
    }
  } catch (e) {
    dispatch(showError('Internal server error or somthing else'));
  }
};

export const selectUser = state => state.user.profile;
export const selectIsFetching = state => state.user.isFetching;

export default userSlice.reducer;
