import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/htg_logo-no-text.png";
import * as styles from "./Auth.module.scss";
import Form from "../../components/Form/Form";

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
      },
    },
    {
      label: false,
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
        {/* <form onSubmit={onSubmitHandler} className={styles.form}>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="You@example.com" name="email" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          <input className={styles.button} type="submit" value="Sign In" />
          
        </form> */}
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
