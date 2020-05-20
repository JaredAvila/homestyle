import React, { useState } from "react";
import { Link } from "react-router-dom";

import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";

import * as styles from "./Confirm.module.scss";
import { TempUser } from "../../models/User";
import tempChildren from "../../models/Child";

import Form from "../Form/Form";

const Confirm = (props) => {
  const [fName, setFName] = useState(TempUser.fName);
  const [lName, setLName] = useState(TempUser.lName);
  const [email, setEmail] = useState(TempUser.email);
  const [children, setChildren] = useState(tempChildren);

  const userInfo = [
    {
      label: "First Name",
      labelConfig: {
        htmlFor: "fName",
      },
      inputConfig: {
        value: fName,
        onChange: (e) => {
          setFName(e.target.value);
        },
      },
    },
    {
      label: "Last Name",
      labelConfig: {
        htmlFor: "lName",
      },
      inputConfig: {
        value: lName,
        onChange: (e) => {
          setLName(e.target.value);
        },
      },
    },
    {
      label: "Email",
      labelConfig: {
        htmlFor: "email",
      },
      inputConfig: {
        value: email,
        onChange: (e) => {
          setEmail(e.target.value);
        },
      },
    },
  ];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("saved info ", TempUser);
    props.history.push("/home");
  };

  return (
    <div className={styles.confirm}>
      <p className={styles.title}>Please verify your information</p>
      <div className={styles.formContainer}>
        <Form inputList={userInfo} />
      </div>
      <div className={styles.childrenContainer}>
        <p className={styles.childrenTitle}>Children</p>
        <div className={styles.children}>
          {children.map((child, index) => {
            return (
              <div className={styles.childContainer}>
                <p className={styles.childTitle}>Child {index + 1}</p>
                <p>
                  <span>Name:</span> {child.name}
                </p>
                <p>
                  <span>Age:</span> {child.age}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <p onClick={onSubmitHandler} className={styles.button}>
          Create Account
        </p>
        <Link className={styles.buttonCancel} to="/register">
          <SettingsBackupRestoreIcon /> Start Over
        </Link>
      </div>
    </div>
  );
};

export default Confirm;
