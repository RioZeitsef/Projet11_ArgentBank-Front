import axios from 'axios';
import { loginSuccess } from '../slice/authSlice';
import store from '../store';

const API_BASE_URL = 'http://localhost:3001/api/v1';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.response.use(
  async (response) => {
    if (response.config.url.includes('/user/login') && response.status === 200) {
      const token = response.data.body.token;
      
      // Configurer le header d'autorisation pour les futures requêtes
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      try {
        // Récupérer les informations utilisateur
        const userResponse = await axiosInstance.get('/user/profile');
        
        // Mettre à jour le store Redux
        store.dispatch(loginSuccess({
          user: userResponse.data.body,
          token
        }));
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur:', error);
      }
    }
    
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;