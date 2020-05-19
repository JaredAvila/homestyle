import React from "react";
import * as styles from "./NavList.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

const NavList = (props) => {
  return (
    <div className={styles.list} onClick={props.toggleDrawer}>
      {props.navLinks.map((link) => {
        if (link.active) {
          return (
            <Link
              className={clsx(styles.listItem, styles.active)}
              to={link.url}
            >
              {link.title}
            </Link>
          );
        } else {
          return (
            <Link className={styles.listItem} to={link.url}>
              {link.title}
            </Link>
          );
        }
      })}
      {/* <Link className={clsx(styles.listItem, styles.active)} to="/home">
        Dashboard
      </Link>
      <Link className={styles.listItem} to="/activities">
        Activities
      </Link>
      <Link className={styles.listItem} to="/account">
        Account
      </Link>
      <Link className={styles.listItem} to="/">
        Sign out
      </Link> */}
    </div>
  );
};

export default NavList;
