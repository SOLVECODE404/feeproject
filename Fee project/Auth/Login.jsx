// src/Auth/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedIn", username);
      setMessage("Login successful!");
      setTimeout(() => {
        navigate("/");
      }, 500);
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="container2">
      <h2 className="headingoflogin">Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="buttonoflogin">
          <button type="button" onClick={() => navigate("/")}>
            Home
          </button>
          <button type="button" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
          <button type="submit">Login</button>
        </div>
      </form>
      {message && (
        <div
          style={{
            color: message === "Login successful!" ? "green" : "red",
            position: "relative",
            right: "1rem",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Login;
