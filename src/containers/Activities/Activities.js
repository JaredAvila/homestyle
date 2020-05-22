import React from "react";
import Activity from "../../components/Activity/Activity";

import { useSelector } from "react-redux";

const Activities = () => {
  const activities = useSelector((state) => state.activities.activities);
  return (
    <div>
      <h1>Activities Page</h1>
      {activities.map((activity) => {
        return (
          <Activity
            key={activity.title}
            title={activity.title}
            url={activity.url}
          />
        );
      })}
    </div>
  );
};

export default Activities;
