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
              key={link.title}
              className={clsx(styles.listItem, styles.active)}
              to={link.url}
            >
              {link.title}
            </Link>
          );
        } else {
          return (
            <Link key={link.title} className={styles.listItem} to={link.url}>
              {link.title}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default NavList;
