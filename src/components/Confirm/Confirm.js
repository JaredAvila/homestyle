import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import * as styles from "./Confirm.module.scss";
import { TempUser } from "../../models/User";
import tempChildren from "../../models/Child";

import Button from "../Button/Button";

const Confirm = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("created new user ", TempUser);
    history.push("/home");
  };

  let history = useHistory();

  return (
    <div className={styles.confirm}>
      <p className={styles.title}>Please verify your information</p>
      <Card>
        <CardContent>
          <p className={styles.infoText}>
            Name: {TempUser.fName} {TempUser.lName}
          </p>
          <p className={styles.infoText}>Email: {TempUser.email}</p>
          <div className={styles.childrenContainer}>
            <p className={styles.childrenTitle}>Children</p>
            <div className={styles.children}>
              {tempChildren.map((child, index) => {
                return (
                  <div key={Math.random()} className={styles.childContainer}>
                    <Avatar
                      alt={child.name}
                      src={child.img}
                      className={styles.childIcon}
                    />
                    <p>{child.name}</p>
                    <p>Age: {child.age}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
        <CardActions>
          <div className={styles.buttonContainer}>
            <Button click={onSubmitHandler} color="lightBlueIcon">
              Create Account
              <AddCircleOutlineIcon style={{ fontSize: 40 }} />
            </Button>
            {/* <div className={styles.spacer}></div> */}
            <Button
              click={() => {
                history.push("/register");
              }}
              color="darkPeachIcon"
            >
              Start Over <SettingsBackupRestoreIcon style={{ fontSize: 40 }} />
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default Confirm;
