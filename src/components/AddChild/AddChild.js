import React from "react";
import { Link } from "react-router-dom";

const AddChild = () => {
  return (
    <div>
      <h1>Add Child Page</h1>
      <Link to="/register/confirm">Add</Link>
    </div>
  );
};

export default AddChild;
