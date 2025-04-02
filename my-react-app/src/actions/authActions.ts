// actions/authActions.js
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
});

// Action créateur pour simuler une connexion (mock)
export const login = (credentials) => {
  return (dispatch) => {
    dispatch(loginRequest());
    
    // Simuler une requête API avec une promesse
    return new Promise((resolve) => {
      setTimeout(() => {
        // Données mockées pour tester
        const mockUser = {
          id: 1,
          username: credentials.username,
          email: `${credentials.username}`,
          token: 'mock-jwt-token-123456'
        };
        
        dispatch(loginSuccess(mockUser));
        resolve(mockUser);
      }, 1000); // Délai simulé d'une seconde
    });
  };
};
