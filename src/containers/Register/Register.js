import React, { useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import * as styles from "./Register.module.scss";
import Form from "../../components/Form/Form";

const Register = (props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(
      `Name: ${fName} ${lName}, email: ${email}, password has been saved. ${password}`
    );
    props.history.push("/register/add_child");
  };

  const onFNameChangeHandler = (e) => {
    setFName(e.target.value);
  };
  const onLNameChangeHandler = (e) => {
    setLName(e.target.value);
  };
  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const onPassword2ChangeHandler = (e) => {
    setPassword2(e.target.value);
  };

  const registerForm = [
    {
      label: "First Name",
      labelConfig: {
        htmlFor: "fName",
      },
      inputConfig: {
        placeholder: "James",
        type: "text",
        name: "fName",
        value: fName,
        onChange: onFNameChangeHandler,
      },
    },
    {
      label: "Last Name",
      labelConfig: {
        htmlFor: "lName",
      },
      inputConfig: {
        placeholder: "Bond",
        type: "text",
        name: "lName",
        value: lName,
        onChange: onLNameChangeHandler,
      },
    },
    {
      label: "Email",
      labelConfig: {
        htmlFor: "email",
      },
      inputConfig: {
        placeholder: "You@exapmle.com",
        type: "email",
        name: "email",
        autoComplete: "user-name",
        value: email,
        onChange: onEmailChangeHandler,
      },
    },
    {
      label: "Password",
      labelConfig: {
        htmlFor: "password",
      },
      inputConfig: {
        placeholder: "Enter a password",
        type: "password",
        name: "password",
        autoComplete: "new-password",
        value: password,
        onChange: onPasswordChangeHandler,
      },
    },
    {
      label: "Confirm Password",
      labelConfig: {
        htmlFor: "password2",
      },
      inputConfig: {
        placeholder: "Confirm your password",
        type: "password",
        name: "fName",
        autoComplete: "new-password",
        value: password2,
        onChange: onPassword2ChangeHandler,
      },
    },
    {
      label: false,
      inputConfig: {
        value: "Continue",
        type: "submit",
      },
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}></div>
      <div className={styles.formContainer}>
        <h5 className={styles.title}>Account Info</h5>
        <div className={styles.spacer}></div>
        <Form inputList={registerForm} onSubmit={onSubmitHandler} />
        <p>
          <Link to="/">Already have an account?</Link>
        </p>
      </div>
    </div>
  );
};

export default withRouter(Register);
