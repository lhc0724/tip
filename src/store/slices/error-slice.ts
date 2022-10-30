import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: {
    message: '',
  },
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action) {
      return {
        ...state,
        error: action.payload,
      };
    },
    clearError: state => {
      return {
        ...state,
        error: initialState.error,
      };
    },
  },
});

export const { setError, clearError } = errorSlice.actions;
