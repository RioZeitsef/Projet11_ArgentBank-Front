import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';
import authReducer from './reducers/authReducers';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  //.concat(api.miiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
