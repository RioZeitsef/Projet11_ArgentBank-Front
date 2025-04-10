import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';
import authReducer from './slice/authSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // Reducer RTK Query
    auth: authReducer, // REducer d'authentification
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Middleware RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
