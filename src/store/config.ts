import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { errorSlice, configSlice } from './slices';

const logger = createLogger();

const rootReducer = combineReducers({
  error: errorSlice.reducer,
  config: configSlice.reducer,
});

const initialState = {};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
  enhancers: defaultEnhancers => [...defaultEnhancers],
});

export type RootState = ReturnType<typeof rootReducer>;
