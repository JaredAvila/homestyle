import React from "react";
import { Link } from "react-router-dom";

const Completed = () => {
  return (
    <div>
      <h1>Completed Page</h1>
      <Link to="/activities">Done</Link>
    </div>
  );
};

export default Completed;
