import * as actionTypes from "./actionTypes";

export const fetchActivities = () => {
  return {
    type: actionTypes.FETCH_ACTIVITIES,
  };
};

export const setCurrentActivity = (title) => {
  return {
    type: actionTypes.SET_CURRENT_ACTIVITY,
    title,
  };
};
