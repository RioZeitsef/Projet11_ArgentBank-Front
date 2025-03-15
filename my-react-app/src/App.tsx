import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Layout from "./components/Layout";
import User from "./Pages/User";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/user" element={<User />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
