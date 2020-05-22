import React from "react";
import * as styles from "./Activity.module.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_CURRENT_ACTIVITY } from "../../store/actions/actionTypes";

const Activity = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const activityClickedHandler = () => {
    dispatch({ type: SET_CURRENT_ACTIVITY, title: props.title });
    history.push("/activities/activity");
  };

  return (
    <div className={styles.activity} onClick={activityClickedHandler}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Activity;
