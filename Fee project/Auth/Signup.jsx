// src/Auth/SignUp.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Signup.css";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUp = (event) => {
    event.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Sign up successful! You can now log in.");
    navigate("/login");
  };

  return (
    <div className="container2">
      <h2 className="headingoflogin" style={{ color: "White",position: "relative",
    right: "1rem" }}>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label htmlFor="signupUsername">Username:</label>
        <input
          type="text"
          id="signupUsername"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="signupPassword">Password:</label>
        <input
          type="password"
          id="signupPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <div className="login-link">
        Already have an account?{" "}
        <a href="#" onClick={() => navigate("/login")}>
          Log in
        </a>
      </div>
    </div>
  );
};

export default SignUp;
