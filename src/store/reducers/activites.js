import * as actionTypes from "../actions/actionTypes";

const initialState = {
  activities: [
    { title: "Circle Time", color: "pink", url: "/circle-time" },
    { title: "Warm-up Game", color: "pink", url: "/circle-time" },
    { title: "Stretching", color: "pink", url: "/circle-time" },
    { title: "Group Challenge", color: "pink", url: "/circle-time" },
    { title: "Tumbling Together", color: "pink", url: "/circle-time" },
    { title: "Free Choice Time", color: "pink", url: "/circle-time" },
    { title: "Activity/Game", color: "pink", url: "/circle-time" },
    { title: "End Meet", color: "pink", url: "/circle-time" },
  ],
  currentActivity: null,
};

const setNewCurrentActiviy = (state, action) => {
  const newCurr = state.activities.find((activity) => {
    return activity.title === action.title;
  });
  return { ...state, currentActivity: newCurr };
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ACTIVITIES:
      return state.activities;
    case actionTypes.SET_CURRENT_ACTIVITY:
      return setNewCurrentActiviy(state, action);
    default:
      return state;
  }
};

export default activityReducer;
