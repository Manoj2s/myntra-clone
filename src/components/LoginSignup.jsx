import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(""); // Clear error on form toggle
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Handle login
      const userData = JSON.parse(localStorage.getItem(email));
      if (userData && userData.password === password) {
        alert("Login successful!");
        // Handle successful login (e.g., redirect to dashboard)
      } else {
        setError("Invalid email or password.");
      }
    } else {
      // Handle sign-up
      if (localStorage.getItem(email)) {
        setError("User already exists.");
      } else {
        const userData = { name, email, password };
        localStorage.setItem(email, JSON.stringify(userData));
        alert("Sign-up successful!");
        // Optionally switch to login form after sign-up
        setIsLogin(true);
      }
    }
  };

  return (
    <div className="loginSignupContainer">
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form className="loginSignupForm" onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="formGroup">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="formGroup">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submitButton">
          {isLogin ? "Login" : "Sign Up"}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
      <button className="toggleButton" onClick={toggleForm}>
        {isLogin ? "Create an account" : "Already have an account?"}
      </button>
    </div>
  );
};

export default LoginSignup;
