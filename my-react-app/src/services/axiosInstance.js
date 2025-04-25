import axios from 'axios';
import { loginSuccess } from '../slice/authSlice';
import store from '../store';

const API_BASE_URL = 'http://localhost:3001/api/v1';

// Création d'une instance Axios
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token d'authentification
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour gérer les réponses
axiosInstance.interceptors.response.use(
  async (response) => {
    // Vérifiez si la réponse provient de la requête de connexion
    if (response.config.url.includes('/user/login') && response.status === 200) {
      const token = response.data.body.token;

      // Stockez le token dans le localStorage
      localStorage.setItem('token', token);

      // Ajoutez le token aux headers pour les requêtes suivantes
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Optionnel : Effectuez une requête pour récupérer les données utilisateur
      try {
        const userResponse = await axiosInstance.get('/user/profile');
        const userData = userResponse.data.body;

        store.dispatch(loginSuccess({
          user: userData,
          token: token,
        }));

        // Vous pouvez stocker les données utilisateur dans Redux ou ailleurs
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
      }
    }

    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Gestion des erreurs 401 (non autorisé)
      console.error('Non autorisé, redirection vers la page de connexion');
      // Vous pouvez ajouter une redirection ici si nécessaire
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;