import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import notiReducer from '../features/noti/notiSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    noti: notiReducer,
  },
});
