import React, { Fragment } from "react";
import * as styles from "./Sidedrawer.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

import Logo from "../../assets/images/htg_logo.png";

const Sidedrawer = (props) => {
  let menuWidth = 0;
  let overlayWidth = 0;
  let overlayOpacity = 0;
  console.log(props.isOpen);
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
        <div className={styles.list}>
          <Link className={clsx(styles.listItem, styles.active)} to="/home">
            Dashboard
          </Link>
          <Link className={styles.listItem} to="/account">
            Account
          </Link>
          <Link className={styles.listItem} to="/">
            Sign out
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidedrawer;
