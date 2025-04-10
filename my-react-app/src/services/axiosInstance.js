import axios from 'axios';

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

// Intercepteur pour gérer les erreurs globales
axiosInstance.interceptors.response.use(
  (response) => response,
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