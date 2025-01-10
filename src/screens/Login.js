import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Login</h1>
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
