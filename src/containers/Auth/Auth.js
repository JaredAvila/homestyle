import React from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <h1>Auth Page</h1>
      <Link to="/home">Login</Link>
      <Link to="/">Back</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Auth;
