import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import * as styles from "./BottomNav.module.scss";

const BottomNav = () => {
  return (
    <BottomNavigation
      value="some value goes here eventually"
      onChange={(event, newValue) => {
        console.log("good for you");
      }}
      showLabels
      className={styles.bottomNav}
    >
      <BottomNavigationAction
        className={styles.icon}
        label="Recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        className={styles.icon}
        label="Favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        className={styles.icon}
        label="Nearby"
        icon={<LocationOnIcon />}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
