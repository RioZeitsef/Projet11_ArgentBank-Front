import { createSlice } from '@reduxjs/toolkit';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/authActions';

const initialState = {
  user: null,
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: (builder) => {
    builder
      // Login Request
      .addCase(LOGIN_REQUEST, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Login Success
      .addCase(LOGIN_SUCCESS, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.error = null;
      })
      // Login Failure
      .addCase(LOGIN_FAILURE, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.token = null;
        state.error = action.payload;
      })
      // Logout
      .addCase(LOGOUT, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.token = null;
        state.error = null;
        localStorage.removeItem('token');
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer; 