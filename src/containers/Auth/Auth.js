import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/htg_logo-no-text.png";
import * as styles from "./Auth.module.scss";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

const Auth = (props) => {
  const loginForm = [
    {
      label: "Email",
      labelConfig: {
        htmlFor: "email",
      },
      inputConfig: {
        placeholder: "You@exapmle.com",
        type: "email",
        name: "email",
        autoComplete: "username",
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
        autoComplete: "current-password",
      },
    },
    {
      label: false,
      color: "darkPeach",
      inputConfig: {
        value: "Log In",
        type: "submit",
      },
    },
  ];

  const onSubmitHandler = () => {
    props.history.push("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h1 className={styles.title}>Homestyle Gymnastics</h1>
        <img className={styles.logo} src={Logo} alt="Homestyle Gymnastics" />
      </div>
      <div className={styles.formContainer}>
        <Form inputList={loginForm} onSubmit={onSubmitHandler} />
        <p>
          <a href="/">Forgot username/password?</a>
        </p>
      </div>
      <p className={styles.register}>
        Don't have an account?{" "}
        <Link className={styles.regBtn} to="/register">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default withRouter(Auth);
