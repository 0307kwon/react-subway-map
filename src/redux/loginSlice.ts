import {
  removeSessionStorageItem,
  setSessionStorageItem,
  getSessionStorageItem,
} from './../storage/sessionStorage';
import { createSlice } from '@reduxjs/toolkit';
import { SESSION_STORAGE_KEY } from '../constants/storage';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogin: getSessionStorageItem(SESSION_STORAGE_KEY.ACCESS_TOKEN) !== null,
  },
  reducers: {
    login: (state, action) => {
      setSessionStorageItem(SESSION_STORAGE_KEY.ACCESS_TOKEN, action.payload);
      state.isLogin = true;
    },
    logout: (state) => {
      removeSessionStorageItem(SESSION_STORAGE_KEY.ACCESS_TOKEN);
      state.isLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
