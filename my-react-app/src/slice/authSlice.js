import { createSlice } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';
import axiosInstance from '../services/axiosInstance';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    token: null,
    loading: false,
    error: null
  },
 
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.error = null;

      if (action.payload.token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
      }
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = action.payload;
      
      delete axiosInstance.defaults.headers.common['Authorization'];
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      state.error = null;
      delete axiosInstance.defaults.headers.common['Authorization'];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, (action) => {
      // Vérifier si l'action concerne notre slice
      if (action.payload && action.payload.auth) {
        // Récupérer le token du payload
        const token = action.payload.auth.token;
        
        // Si un token est présent dans les données réhydratées
        if (token) {
          // Reconfigurer axios avec le token
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
      }
      // Pas besoin de return, Redux Toolkit s'occupera de fusionner les états
    });
  }
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;