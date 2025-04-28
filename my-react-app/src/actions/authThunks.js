import { PURGE } from 'redux-persist';
import axiosInstance from '../services/axiosInstance';
import { loginRequest, loginSuccess, loginFailure, logout } from '../slice/authSlice';

// Action asynchrone de login
export const login = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  
  try {
    const response = await axiosInstance.post('/user/login', credentials);
   
    if (response.data.status === 200) {
     
      const userResponse = await axiosInstance.get('/user/profile', {}, {
        headers: {
          Authorization: `Bearer ${response.data.body.token}`,
        },
      });
      const firstName = userResponse.data.body.firstName;
      const lastName = userResponse.data.body.lastName;
      const userName = userResponse.data.body.userName;
      // Utilisation de l'action du slice
      dispatch(loginSuccess({
        token: response.data.body.token,
        user: { 
          userName: userName,
          firstName: firstName,
          lastName: lastName, 
        },
        isAuthenticated: true,
      }));

    } else {
      dispatch(loginFailure('Échec de la connexion'));
    }
  } catch (error) {
    console.error('Erreur de connexion:', error);
    dispatch(loginFailure(error.response?.data?.message || 'Une erreur est survenue'));
  }
}

// Action de déconnexion
export const logoutUser = () => (dispatch) => {
  dispatch(logout());

  dispatch({
    type: PURGE,
    key: 'root',
    result: () => null
  });
};