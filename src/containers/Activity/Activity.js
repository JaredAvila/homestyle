import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Activity = () => {
  const activity = useSelector((state) => state.activities.currentActivity);
  if (!activity) {
    return <Redirect to="/home" />;
  }
  return (
    <div>
      <h1>{activity.title}</h1>
      <Link to="complete">Complete</Link>
    </div>
  );
};

export default Activity;
