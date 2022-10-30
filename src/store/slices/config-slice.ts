import { createSlice } from '@reduxjs/toolkit';
import { LOCALIZATION } from '../../constants/storage';

const initialState = {
  locale: localStorage.getItem(LOCALIZATION) ?? 'ko',
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setLocale(state, action) {
      localStorage.setItem(LOCALIZATION, action.payload);
      return {
        ...state,
        locale: action.payload,
      };
    },
    setUserProfile(state, action) {
      return {
        ...state,
        locale: localStorage.getItem(LOCALIZATION) ?? 'ko',
        user: action.payload,
      };
    },
    signOut() {
      return {
        ...initialState,
        user: {},
      };
    },
  },
});

export const { setLocale, setUserProfile, signOut } = configSlice.actions;
