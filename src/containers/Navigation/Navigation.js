import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/htg_logo.png";
import Sidedrawer from "../../components/Sidedrawer/Sidedrawer";
import BottomNav from "../../components/BottomNav/BottomNav";
import MenuIcon from "@material-ui/icons/Menu";

import * as styles from "./Navigation.module.scss";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawerHandler = () => {
    setIsOpen((currentState) => (currentState ? false : true));
  };

  return (
    <div className={styles.container}>
      <MenuIcon className={styles.menu} onClick={toggleDrawerHandler} />
      <Link to="/home" className={styles.logo}>
        <img alt="Homestyle Gymnastics" src={Logo} />
      </Link>
      <Sidedrawer isOpen={isOpen} toggleDrawer={toggleDrawerHandler} />
      <BottomNav />
    </div>
  );
};

export default Navigation;
