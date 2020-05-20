import React, { Fragment } from "react";
import * as styles from "./Sidedrawer.module.scss";

import NavList from "../NavList/NavList";
import Logo from "../../assets/images/htg_logo.png";

const Sidedrawer = (props) => {
  let menuWidth = 0;
  let overlayWidth = 0;
  let overlayOpacity = 0;
  if (props.isOpen) {
    menuWidth = "270px";
    overlayWidth = "100vw";
    overlayOpacity = 0.5;
  }

  return (
    <Fragment>
      <div
        className={styles.overlay}
        style={{ opacity: overlayOpacity, width: overlayWidth }}
        onClick={props.toggleDrawer}
      />
      <div className={styles.container} style={{ width: menuWidth }}>
        <div className={styles.title}>
          <img src={Logo} alt="Homestyle Gymnastics" />
        </div>
        <NavList navLinks={props.navLinks} toggleDrawer={props.toggleDrawer} />
      </div>
    </Fragment>
  );
};

export default Sidedrawer;
