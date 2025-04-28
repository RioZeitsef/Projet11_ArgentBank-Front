import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; // Utilise sessionStorage au lieu de localStorage
import { api } from './services/api';
import authReducer from './slice/authSlice';

// Configuration de la persistance
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Seul le reducer auth sera persisté
};

// Combinaison des reducers
const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
});

// Application de la persistance au reducer principal
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Création du store avec le reducer persistant
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(api.middleware),
});

// Création du persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;