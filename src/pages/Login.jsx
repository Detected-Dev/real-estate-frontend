import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import './Auth.css';
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate =useNavigate();
  const {login,setLoading} = useAuth();
   const [formData, setFormData] = useState({
          email : null ,
          password : null ,
          RememberMe : false
      });
      const handleChanges = (e) => {
          setFormData({
              ...formData , [e.target.name] : e.target.value
          })
      }
      const handleSubmit = async(e) => {
          e.preventDefault()
          try{
            await login(formData);
            navigate('/');
        }catch(error){
            console.error("MESSAGE:", error.message);
        }finally{
          setLoading(false);
        }

      }
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-image">
          <div className="auth-overlay">
            <h1>Find Your Perfect Home</h1>
            <p>
              Discover beautiful properties and find a place that feels like
              home.
            </p>
          </div>
        </div>

        <div className="auth-form-container">
          <div className="auth-form">
            <div className="auth-logo">
              <span>Real</span>Estate
            </div>

            <h2>Welcome Back</h2>
            <p className="auth-subtitle">Login to continue your journey.</p>

            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  onChange={(e) => handleChanges(e)}
                  placeholder="Enter your email" />
              </div>

              <div className="form-group">
                <div className="password-label">
                  <label htmlFor="password">Password</label>
                  <Link to="/forgot-password">Forgot password?</Link>
                </div>
                
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => handleChanges(e)}
                  placeholder="Enter your password"
                />
              </div>

              <div className="remember">
                <label>
                  <input type="checkbox" name="RememberMe" onChange={(e) => setFormData({...formData , RememberMe : e.target.checked})}/>
                  <span>Remember me</span>
                </label>
              </div>

              <button type="submit" className="auth-button">
                Login
              </button>
            </form>

            <div className="auth-divider">
              <span>or</span>
            </div>

            <p className="auth-switch">
              Don't have an account?
              <Link to="/register"> Create account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
