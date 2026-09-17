import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Auth.css';
import { useAuth } from "../context/AuthContext";

const Register = () => {
    const {register,setLoading} = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name : null ,
        email : null ,
        password : null ,
        password_confirmation : null,
        agreeTerms : false
    });
    const handleChanges = (e) => {
        setFormData({
            ...formData , [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
          await register(formData);
          navigate('/login')
        }catch(error){
            console.error("MESSAGE:", error.message);
        }finally{
          setLoading(false)
        }
    }
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-image">
          <div className="auth-overlay">
            <h1>Start Your Journey</h1>
            <p>
              Create your account and discover properties that match your
              lifestyle.
            </p>
          </div>
        </div>

        <div className="auth-form-container">
          <div className="auth-form">
            <div className="auth-logo">
              <span>Real</span>Estate
            </div>

            <h2>Create Account</h2>
            <p className="auth-subtitle">Join us and find your next home.</p>

            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => handleChanges(e)}
                  placeholder="Enter your full name"
                />
              </div>

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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => handleChanges(e)}
                  placeholder="Create a password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password_confirmation">Confirm password</label>

                <input
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  onChange={(e) => handleChanges(e)}
                  placeholder="Confirm your password"
                />
              </div>

              <div className="terms">
                <label>
                  <input type="checkbox"  onChange={(e) => setFormData({...formData , agreeTerms : e.target.checked})} />
                  <span>I agree to the terms and conditions</span>
                </label>
              </div>

              <button type="submit" className="auth-button">
                Create Account
              </button>
            </form>

            <div className="auth-divider">
              <span>or</span>
            </div>

            <p className="auth-switch">
              Already have an account?
              <Link to="/login"> Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
