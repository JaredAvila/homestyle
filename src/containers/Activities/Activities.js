import React from "react";
import { Link } from "react-router-dom";

const Activities = () => {
  return (
    <div>
      <h1>Activities Page</h1>
      <Link to="activities/activity">Circle Time</Link>
    </div>
  );
};

export default Activities;
