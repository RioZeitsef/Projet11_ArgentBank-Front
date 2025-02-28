import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout";
import Survey from "./Pages/Survey";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<Survey />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
