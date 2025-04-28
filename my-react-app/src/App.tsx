import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import type { AppDispatch } from "./store";
import store from "./store";
import { checkAuthentication } from "./slice/authSlice";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Layout from "./components/Layout";
import User from "./Pages/User";

// Composant qui vérifie l'authentification
const AuthCheck: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch: AppDispatch = useDispatch();
  
  useEffect(() => {
    // Vérifier l'authentification au chargement de l'application
    dispatch(checkAuthentication());
  }, [dispatch]);
  
  return <>{children}</>;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AuthCheck>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/user" element={<User />} />
            </Route>
          </Routes>
        </AuthCheck>
      </Router>
    </Provider>
  );
}

export default App;