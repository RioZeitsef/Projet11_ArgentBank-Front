import axios from 'axios';

// Types d'actions
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

// Action creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

// Action principale de login
export const login = (credentials) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', credentials);
    
    if (response.data.status === 200) {
      // Stockage du token dans le localStorage
      localStorage.setItem('token', response.data.body.token);
      
      // Dispatch de l'action de succès avec les données utilisateur
      dispatch(loginSuccess({
        token: response.data.body.token,
        isAuthenticated: true
      }));
    } else {
      dispatch(loginFailure('Échec de la connexion'));
    }
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.message || 'Une erreur est survenue'));
  }
}; 