// LoginSignup.js
import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="loginSignupContainer">
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form className="loginSignupForm">
        {isLogin ? (
          <>
            <div className="formGroup">
              <label>Email:</label>
              <input type="email" required />
            </div>
            <div className="formGroup">
              <label>Password:</label>
              <input type="password" required />
            </div>
          </>
        ) : (
          <>
            <div className="formGroup">
              <label>Name:</label>
              <input type="text" required />
            </div>
            <div className="formGroup">
              <label>Email:</label>
              <input type="email" required />
            </div>
            <div className="formGroup">
              <label>Password:</label>
              <input type="password" required />
            </div>
          </>
        )}
        <button type="submit" className="submitButton">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <button className="toggleButton" onClick={toggleForm}>
        {isLogin ? "Create an account" : "Already have an account?"}
      </button>
    </div>
  );
};

export default LoginSignup;
