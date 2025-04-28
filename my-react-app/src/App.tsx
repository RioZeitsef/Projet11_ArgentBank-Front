import React, { useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from "./store";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Layout from "./components/Layout";
import User from "./Pages/User";

const PrivateRoutes = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Chargement...</div>} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/user" element={<User />} />
              </Route>  
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;