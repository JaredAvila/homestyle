import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div>
      <h1>Account Page</h1>
      <Link to="/account/edit">Edit</Link>
    </div>
  );
};

export default Account;
