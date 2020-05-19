import React from "react";
import { Link } from "react-router-dom";

const EditAccount = () => {
  return (
    <div>
      <h1>Edit Account Page</h1>
      <Link to="/account">Save</Link>
      <Link to="/account">Cancel</Link>
    </div>
  );
};

export default EditAccount;
