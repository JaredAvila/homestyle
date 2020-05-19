import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Logo from "../../assets/images/htg_logo.png";
import Sidedrawer from "../../components/Sidedrawer/Sidedrawer";
import BottomNav from "../../components/BottomNav/BottomNav";
import MenuIcon from "@material-ui/icons/Menu";

import * as styles from "./Navigation.module.scss";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navLinks, setNavLinks] = useState([
    { title: "Dashboard", url: "/home", active: false },
    { title: "Activities", url: "/activities", active: true },
    { title: "Account", url: "/account", active: false },
    { title: "Logout", url: "/", active: false },
  ]);

  useEffect(() => {
    navLinks.forEach((link) => {
      if (link.url === props.location.pathname) {
        link.active = true;
      } else {
        link.active = false;
      }
    });
    setNavLinks(navLinks);
  });

  const updateNavLinksHandler = () => {
    if (navLinks) {
      const updatedLinks = navLinks.forEach((link) => {
        console.log(link);
        if (link.url === props.location.pathname) {
          link.active = true;
        } else {
          link.active = false;
        }
      });
      setNavLinks(updatedLinks);
    }
  };

  const toggleDrawerHandler = () => {
    setIsOpen((currentState) => (currentState ? false : true));
  };

  return (
    <div className={styles.container}>
      <MenuIcon className={styles.menu} onClick={toggleDrawerHandler} />
      <Link to="/home" className={styles.logo}>
        <img alt="Homestyle Gymnastics" src={Logo} />
      </Link>
      <Sidedrawer
        navLinks={navLinks}
        isOpen={isOpen}
        toggleDrawer={toggleDrawerHandler}
      />
      <BottomNav />
    </div>
  );
};

export default withRouter(Navigation);
