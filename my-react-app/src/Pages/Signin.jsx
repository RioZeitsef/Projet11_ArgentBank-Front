import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Styles from "../css/Pages.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { login } from '../actions/authThunks';

const Signin = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(state => state.auth);

  // Effet pour gérer la navigation après une connexion réussie
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/user');
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };
  

  return (
    <main className={Styles["bg-dark"]}>
      <section className={Styles["sign-in-content"]}>
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>

        {error && (
          <div className={Styles["error-message"]}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className={Styles["input-wrapper"]}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={Styles["input-wrapper"]}>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className={Styles["input-remember"]}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">
              Remember me
            </label>
          </div>
          <button type="submit" className={Styles["sign-in-button"]}>
            {loading ? 'Connexion en cours...' : 'Sign In'}
          </button>
        </form>
      </section>
    </main>
  );
}

export default Signin;
