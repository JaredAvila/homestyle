import React from "react";
import { withRouter } from "react-router";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import * as styles from "./BottomNav.module.scss";

const BottomNav = (props) => {
  return (
    <BottomNavigation
      value="some value goes here eventually"
      onChange={(event, newValue) => {
        switch (newValue) {
          case 0:
            return props.history.push("/home");
          case 1:
            return props.history.push("/activities");
          case 2:
            return props.history.push("/account");
          default:
            return props.history.push("/");
        }
      }}
      showLabels
      className={styles.bottomNav}
    >
      <BottomNavigationAction
        className={styles.icon}
        label="Home"
        icon={<HomeIcon fontSize="large" />}
      />
      <BottomNavigationAction
        className={styles.icon}
        label="Actvities"
        icon={<DirectionsRunIcon fontSize="large" />}
      />
      <BottomNavigationAction
        className={styles.icon}
        label="Account"
        icon={<AccountCircleIcon fontSize="large" />}
      />
    </BottomNavigation>
  );
};

export default withRouter(BottomNav);
